import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { createClient } from "@supabase/supabase-js";

/**
 * Why this route exists alongside /api/razorpay/verify:
 *
 * The /verify route only fires if the student's browser stays open and
 * completes the round trip. If they close the tab right after paying,
 * or their connection drops, /verify never runs — they've paid, but
 * your database doesn't know it.
 *
 * Razorpay calls THIS route directly from their servers whenever a
 * payment succeeds, independent of the student's browser. Set it up
 * once in Razorpay Dashboard -> Settings -> Webhooks, and you'll never
 * have a "I paid but can't access the course" support ticket again.
 *
 * Setup: Dashboard -> Settings -> Webhooks -> Add webhook
 *   URL: https://yourdomain.com/api/razorpay/webhook
 *   Active events: payment.captured
 *   Set a webhook secret, put it in RAZORPAY_WEBHOOK_SECRET below.
 */

export async function POST(req: NextRequest) {
  const body = await req.text();
  const signature = req.headers.get("x-razorpay-signature")!;

  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_WEBHOOK_SECRET!)
    .update(body)
    .digest("hex");

  if (expectedSignature !== signature) {
    return NextResponse.json({ error: "Invalid webhook signature" }, { status: 400 });
  }

  const event = JSON.parse(body);

  if (event.event === "payment.captured") {
    const payment = event.payload.payment.entity;

    // notes carry courseCode + userId — set these when creating the order
    // (see create-order/route.ts: add `notes: { courseCode, userId }`)
    const courseCode = payment.notes?.courseCode;
    const userId = payment.notes?.userId;

    if (courseCode && userId) {
      const supabaseAdmin = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.SUPABASE_SERVICE_ROLE_KEY!
      );

      // upsert so this is safe to run even if /verify already inserted
      // the same purchase — no duplicate rows, no crash on the unique constraint
      await supabaseAdmin
        .from("purchases")
        .upsert(
          {
            user_id: userId,
            course_code: courseCode,
            razorpay_payment_id: payment.id,
            amount_paid: payment.amount,
          },
          { onConflict: "user_id,course_code" }
        );
    }
  }

  return NextResponse.json({ received: true });
}

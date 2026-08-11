import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { createClient } from "@supabase/supabase-js";

export async function POST(req: NextRequest) {
  // Service-role key — server-only, bypasses RLS so this route can write
  // purchase records. Never expose this key in browser code. Instantiated
  // here (not at module load) so the app still builds before real keys
  // are added to .env.local.
  const supabaseAdmin = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );

  const {
    razorpay_order_id,
    razorpay_payment_id,
    razorpay_signature,
    userId,
    courseCode,
    amountPaid,
  } = await req.json();

  // Verify the payment actually came from Razorpay and wasn't tampered with.
  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET!)
    .update(`${razorpay_order_id}|${razorpay_payment_id}`)
    .digest("hex");

  if (expectedSignature !== razorpay_signature) {
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  // Signature is valid — now record the purchase. The unique constraint
  // on (user_id, course_code) means this can never double-grant access.
  const { error } = await supabaseAdmin.from("purchases").insert({
    user_id: userId,
    course_code: courseCode,
    razorpay_payment_id,
    amount_paid: amountPaid,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}

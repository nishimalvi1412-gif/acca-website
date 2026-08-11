import { NextRequest, NextResponse } from "next/server";
import Razorpay from "razorpay";

// Course fees in paise (₹1 = 100 paise). Keep this as the single source
// of truth for prices — never trust a price sent from the browser.
const COURSE_FEES: Record<string, number> = {
  FA: 300000, // ₹3,000
  MA: 300000,
  BT: 250000,
  TX: 400000,
  FR: 450000,
  FM: 450000,
  AA: 400000,
  ATX: 550000,
  SBL: 550000,
  SBR: 550000,
};

export async function POST(req: NextRequest) {
  // Instantiated inside the handler (not at module load) so the app still
  // builds before you've added real keys to .env.local.
  const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID!,
    key_secret: process.env.RAZORPAY_KEY_SECRET!,
  });

  const { courseCode, userId } = await req.json();

  if (!userId) {
    return NextResponse.json({ error: "Must be logged in to purchase" }, { status: 401 });
  }

  const amount = COURSE_FEES[courseCode];
  if (!amount) {
    return NextResponse.json({ error: "Unknown course code" }, { status: 400 });
  }

  const order = await razorpay.orders.create({
    amount,
    currency: "INR",
    receipt: `receipt_${courseCode}_${Date.now()}`,
    // These notes travel with the payment to Razorpay's servers, so the
    // webhook can identify who bought what even if the browser never
    // makes it back to /verify.
    notes: { courseCode, userId },
  });

  return NextResponse.json(order);
}

import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { stripe } from "../../../lib/stripe";

export async function POST(request: NextRequest) {
  try {
    console.log("Request received. Method:", request.method);

    const body = await request.text();
    console.log("Raw request body:", body);

    const { sessionId } = JSON.parse(body);
    console.log("Session ID received:", sessionId);

    const session = await stripe.checkout.sessions.retrieve(sessionId);
    console.log("Session retrieved from Stripe:", session);

    if (session.payment_status === "paid") {
      console.log("Payment status is 'paid'.");
    }

    return NextResponse.json({ session });
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error in POST /api/check-session:", error.message);
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    console.error("Unknown error occurred:", error);
    return NextResponse.json(
      { error: "An unknown error occurred." },
      { status: 500 }
    );
  }
}

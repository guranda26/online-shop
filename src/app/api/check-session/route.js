import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(request) {
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
      // Update your database to mark the user as subscribed
      // await updateUserSubscriptionStatus(session.client_reference_id, 'active');
    }

    return NextResponse.json({ session });
  } catch (error) {
    console.error("Error in POST /api/check-session:", error);
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}

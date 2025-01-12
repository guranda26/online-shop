import { NextRequest, NextResponse } from "next/server";
import { stripe } from "../../../lib/stripe";

export async function POST(request: NextRequest) {
  const { priceId, planName } = await request.json();

  try {
    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      payment_method_types: ["card"],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      success_url: `${request.headers.get(
        "origin"
      )}/success?session_id={CHECKOUT_SESSION_ID}&plan_name=${encodeURIComponent(
        planName
      )}`,
      cancel_url: `${request.headers.get(
        "origin"
      )}/subscriptions-cancel?session_id={CHECKOUT_SESSION_ID}&plan_name=${encodeURIComponent(
        planName
      )}`,
    });

    return NextResponse.json({ sessionId: session.id });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Error creating checkout session" },
      { status: 500 }
    );
  }
}

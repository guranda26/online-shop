"use server";

import { stripe } from "../../../lib/stripe"; // Ensure `stripe` is configured
import { headers } from "next/headers";

export default async function handler(req: Request) {
  if (req.method === "POST") {
    try {
      const origin = headers().get("origin") as string;

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        mode: "subscription",
        line_items: [
          {
            price: "price_XXXXXXXXXX", // Replace with your Stripe price ID
            quantity: 1,
          },
        ],
        success_url: `${origin}/profile?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${origin}/pricing`,
      });

      return new Response(JSON.stringify({ url: session.url }), {
        status: 200,
      });
    } catch (error) {
      console.error(error);
      return new Response("Internal Server Error", { status: 500 });
    }
  } else {
    return new Response("Method Not Allowed", { status: 405 });
  }
}

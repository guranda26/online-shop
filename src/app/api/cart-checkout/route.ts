// /pages/api/cart-checkout.js OR within your API routes setup given your project's configuration

import { NextApiRequest, NextApiResponse } from "next";
import { stripe } from "../../../lib/stripe";

// Function to handle POST method.
export async function POST(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { lineItems } = req.body;

    if (!lineItems || !Array.isArray(lineItems) || lineItems.length === 0) {
      return res
        .status(400)
        .json({ error: "Invalid or empty line items provided" });
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/order-success`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/checkout-cancel`,
    });

    return res.status(200).json({ url: session.url });
  } catch (error) {
    console.error("Error in POST /api/cart-checkout", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

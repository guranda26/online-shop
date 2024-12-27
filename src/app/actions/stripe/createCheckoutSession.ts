import { NextApiRequest, NextApiResponse } from "next";
import { stripe } from "../../../lib/stripe";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).end("Method Not Allowed");
  }

  try {
    const { productName, productPrice, productDescription, productImage } =
      req.body;

    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: productName,
              description: productDescription,
              images: productImage,
            },
            unit_amount: Math.round(productPrice * 100),
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/order-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/checkout-cancel`,
    });

    return res.status(200).json({ url: session.url });
  } catch (error) {
    console.error("Error creating Stripe Checkout Session:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

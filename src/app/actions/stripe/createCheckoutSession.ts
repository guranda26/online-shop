import getStripe from "../../../utils/get-stripe";
import type { Stripe } from "stripe";
import { stripe } from "../../../lib/stripe";

export const createCheckoutSession = async (
  data: FormData,
  subscriptionId?: string
) => {
  const amount = Number(data.get("customDonation"));
  // const stripe = await getStripe();

  const session = await stripe.checkout.sessions.create({
    line_items: subscriptionId
      ? [
          {
            price: subscriptionId,
            quantity: 1,
          },
        ]
      : [
          {
            price_data: {
              currency: "usd",
              product_data: {
                name: "Subscription Plan",
              },
              unit_amount: amount * 100,
            },
            quantity: 1,
          },
        ],
    mode: subscriptionId ? "subscription" : "payment",
    success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success`,
    cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/pricing`,
  });

  return { client_secret: session?.client_secret, url: session?.url };
};

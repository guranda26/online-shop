import { NextResponse } from "next/server";
// import Stripe from "stripe";
import { stripe } from "../../../lib/stripe";

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function GET() {
  try {
    const prices = await stripe.prices.list({
      expand: ["data.product"],
      active: true,
      type: "recurring",
    });

    interface Plan {
      id: string;
      name: string | null;
      description?: string;
      price: number | null;
      interval?: string;
      price_id: string;
    }

    const plans: Plan[] = prices.data.map((price) => {
      const product = price?.product;

      return {
        id: price.id,
        name: product?.name || null,
        description: product?.description || null,
        price: price.unit_amount,
        interval: price.recurring?.interval,
        price_id: price.id,
      };
    });

    console.log("Plans", plans);

    return NextResponse.json(plans);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Error fetching subscription plans" },
      { status: 500 }
    );
  }
}

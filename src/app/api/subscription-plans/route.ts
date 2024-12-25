import { NextResponse } from "next/server";
import { stripe } from "../../../lib/stripe";

export async function GET() {
  try {
    const prices = await stripe.prices.list({
      expand: ["data.product"],
      active: true,
      type: "recurring",
    });

    interface Product {
      name?: string | null;
      description?: string | null;
      images: string[] | null;
    }

    interface Plan {
      id: string;
      name: string | null;
      description?: string | null;
      price: number | null;
      interval?: string;
      price_id: string;
    }

    const plans: Plan[] = prices.data.map((price) => {
      const product = price?.product as Product;
      return {
        id: price.id,
        name: product?.name ?? null,
        description: product?.description ?? null,
        price: price.unit_amount,
        interval: price.recurring?.interval,
        price_id: price.id,
        images: product?.images ?? null,
      };
    });

    console.log("plans", plans);

    return NextResponse.json(plans);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Error fetching subscription plans" },
      { status: 500 }
    );
  }
}

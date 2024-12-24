import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {
  apiVersion: "2024-12-18.acacia",
});

export async function POST(req: Request) {
  try {
    const { name, description, price, photo } = await req.json();

    if (!name || !description || !price || !photo) {
      throw new Error("Name, description, price, and photo URL are required");
    }

    const product = await stripe.products.create({
      name,
      description,
      images: [photo],
    });

    console.log("Book created:", product);

    const priceObj = await stripe.prices.create({
      unit_amount: price * 100,
      currency: "usd",
      product: product.id,
    });

    console.log("Price created:", priceObj);

    return NextResponse.json({ product, price: priceObj });
  } catch (error) {
    console.error("Error creating book or price:", error);

    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
}

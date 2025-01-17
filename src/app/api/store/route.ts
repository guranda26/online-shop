import { NextResponse } from "next/server";
// import Stripe from "stripe";
import { supabase } from "../../../lib/supabase";

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {
//   apiVersion: "2024-12-18.acacia",
// });

export async function GET() {
  try {
    const { data, error } = await supabase.from("products").select("*");

    if (error) {
      throw new Error(error.message);
    }

    return NextResponse.json({
      message: "Products fetched successfully!",
      products: data,
    });
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const response = await req.json();

    console.log("response", response);

    const { name, description, category, price, image_link } = response;

    if (!name || !description || !image_link) {
      throw new Error("Name, description, and photo URL are required");
    }

    // Create the product on Stripe
    // const product = await stripe.products.create({
    //   name,
    //   description,
    //   images: [image_link],
    // });

    // const priceObj = await stripe.prices.create({
    //   unit_amount: price * 100,
    //   currency: "usd",
    //   product: product.id,
    // });

    const generatedId = Date.now();

    const { error } = await supabase.from("products").insert([
      {
        id: generatedId,
        image_link,
        name,
        description,
        price,
        category,
      },
    ]);

    if (error) {
      throw new Error(error.message);
    }

    const { data: updatedProducts, error: fetchError } = await supabase
      .from("products")
      .select("*");

    if (fetchError) {
      throw new Error(fetchError.message);
    }

    return NextResponse.json({
      message: "Product created successfully!",
      products: updatedProducts,
    });
  } catch (error) {
    console.error("Error creating product or price:", error);
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
}

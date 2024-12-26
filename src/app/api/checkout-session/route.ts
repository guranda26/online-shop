import { NextRequest, NextResponse } from "next/server";
import { stripe } from "../../../lib/stripe";

export async function POST(request: NextRequest) {
  try {
    const {
      productId,
      productName,
      productPrice,
      productDescription,
      productImage,
    } = await request.json();

    console.log("productImage", productImage);

    if (!productId || !productName || !productPrice) {
      return NextResponse.json(
        {
          error:
            "Missing required fields: productId, productName, productPrice",
        },
        { status: 400 }
      );
    }

    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: productName,
              description: productDescription || "No description available",
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

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Error creating Stripe Checkout session:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

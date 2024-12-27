"use server";

import { createClient } from "@/src/utils/supabase/server";
import Stripe from "stripe";

interface AddToCartProps {
  productId: number;
  productName: string;
  productPrice: any;
}

const AddToCart = ({
  productId,
  productName,
  productPrice,
}: AddToCartProps) => {
  async function AddProduct(formData: FormData) {
    "use server";

    const supabase = await createClient();
    const user = await supabase.auth.getUser();

    if (!user.data.user) {
      throw new Error("User is not authenticated");
    }

    if (!productPrice || isNaN(productPrice)) {
      throw new Error("Invalid product price");
    }

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

    const stripeProduct = await stripe.products.create({
      name: productName,
      metadata: { productId },
    });

    const stripePrice = await stripe.prices.create({
      product: stripeProduct.id,
      unit_amount: Math.round(productPrice * 100),
      currency: "usd",
    });

    const { data, error } = await supabase.from("cart").insert({
      product_id: productId,
      user_id: user.data.user.id,
      stripe_product_id: stripeProduct.id,
      stripe_price_id: stripePrice.id,
    });

    if (error) {
      console.error("Error inserting into cart:", error);
      throw new Error("Failed to add product to cart");
    }

    console.log("Product added to cart:", data);
  }

  return (
    <form action={AddProduct}>
      <button
        className="py-2 px-3 bg-teal-600 hover:bg-teal-800 transition-colors hover:scale-105 rounded-md text-white w-[110px]"
        type="submit"
      >
        Add to Cart
      </button>
    </form>
  );
};

export default AddToCart;

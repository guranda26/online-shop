"use server";

import { createClient } from "@/src/utils/supabase/server";
import Stripe from "stripe";
import React from "react";

interface AddToCartProps {
  productId: number;
  productName: string;
  productPrice: string | number;
}

const AddToCart = ({
  productId,
  productName,
  productPrice,
}: AddToCartProps) => {
  async function AddProduct() {
    "use server";

    const supabase = await createClient();
    const user = await supabase.auth.getUser();

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

    const stripeProduct = await stripe.products.create({
      name: productName,
    });

    const stripePrice = await stripe.prices.create({
      product: stripeProduct.id,
      unit_amount: Math.round((productPrice as number) * 100),
      currency: "usd",
    });

    const { data: existingCartItem, error: fetchError } = await supabase
      .from("cart")
      .select("*")
      .eq("product_id", productId)
      .eq("user_id", user.data.user?.id)
      .single();

    if (fetchError && fetchError.code !== "PGRST116") {
      console.error("Error fetching cart item:", fetchError);
    } else if (existingCartItem) {
      const { error: updateError } = await supabase
        .from("cart")
        .update({ quantity: existingCartItem.quantity + 1 })
        .eq("product_id", productId)
        .eq("user_id", user.data.user?.id);

      if (updateError) {
        console.error("Error updating quantity:", updateError);
      }
    } else {
      const { error: insertError } = await supabase.from("cart").insert({
        product_id: productId,
        user_id: user.data.user?.id,
        stripe_product_id: stripeProduct.id,
        stripe_price_id: stripePrice.id,
        quantity: 1,
      });

      if (insertError) {
        console.error("Error inserting new item:", insertError);
      }
    }

    console.log(user.data.user?.id);
  }

  return (
    <form action={AddProduct}>
      <button
        className="py-2 px-3 bg-teal-600 hover:bg-teal-800 transition-colors hover:scale-105 rounded-md text-white w-[110px]"
        type="submit"
        data-cy="add-to-cart-btn"
      >
        Add to Cart
      </button>
    </form>
  );
};

export default AddToCart;

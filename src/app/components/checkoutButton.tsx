"use client";

import React from "react";

interface Product {
  name: string;
  price: number;
  image_link?: string; // Optional if images are available
}

interface CartItem {
  stripe_price_id: string;
  quantity: number;
  stripe_product_id: string;
  products: Product;
}

interface CheckoutButtonProps {
  cart: CartItem[];
}

const CheckoutButton: React.FC<CheckoutButtonProps> = ({ cart }) => {
  // Transform the cart items to Stripe-compatible line items
  const transformCartToLineItems = () =>
    // console.log("Current cart items:", cart);
    cart.map((item) => {
      if (!item.products.name || !item.products.price) {
        console.error("Invalid item data: ", item);
      }

      return {
        price_data: {
          currency: "usd",
          product_data: {
            name: item.products.name,
            images: item.products.image_link ? [item.products.image_link] : [],
          },
          unit_amount: Math.round(item.products.price * 100), // Convert price to cents
        },
        quantity: 1,
      };
    });

  const handleCheckout = async () => {
    const lineItems = transformCartToLineItems();

    const invalidItems = lineItems.filter(
      (item) =>
        !item.quantity || !item.price_data || !item.price_data.unit_amount
    );
    if (invalidItems.length > 0) {
      console.log("Invalid line items:", invalidItems);
      alert("One or more items are incomplete. Please review your cart.");
      return;
    }

    console.log("Valid Line Items to Send:", JSON.stringify(lineItems));

    const res = await fetch("/api/cart-checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ lineItems }),
    });

    if (!res.ok) {
      throw new Error("Failed to create Stripe Checkout session.");
    }

    const { url } = await res.json();

    if (url) {
      window.location.href = url;
    } else {
      console.error("No URL returned from API.");
    }
    window.location.href = url;
  };

  return (
    <button
      onClick={handleCheckout}
      className="p-3 md:p-4 bg-lime-600 rounded-lg hover:bg-lime-400 transition-colors text-white"
    >
      Checkout
    </button>
  );
};

export default CheckoutButton;

"use client";

import { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { useRouter } from "next/navigation";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

export default function Pricing() {
  const [plans, setPlans] = useState([]);
  const router = useRouter();

  useEffect(() => {
    // Fetch subscription plans from your API
    fetch("/api/subscription-plans")
      .then((res) => res.json())
      .then((data) => setPlans(data))
      .catch((error) =>
        console.error("Error fetching subscription plans:", error)
      );
  }, []);

  const handleSubscribe = async (priceId: string) => {
    try {
      const stripe = await stripePromise;
      if (!stripe) {
        throw new Error("Stripe has not been initialized");
      }

      const { sessionId } = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ priceId }),
      }).then((res) => res.json());

      const result = await stripe.redirectToCheckout({ sessionId });

      if (result.error) {
        console.error(result.error.message);
      }
    } catch (error) {
      console.error("Subscription error:", error);
    }
  };

  const handleBasicSubscribe = () => {
    router.push("/posts");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          Pricing Plans
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Choose a plan that fits your needs and start using our product today.
        </p>
      </header>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div className="border border-gray-300 rounded-lg shadow-lg p-6 bg-white dark:bg-gray-800">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
            Blogs
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Access limited features such as viewing blogs and more.
          </p>
          <p className="text-lg font-medium text-gray-900 dark:text-white mt-4">
            Free Plan
          </p>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            My Blogs: The market buzzed with life. The mountain loomed in the
            distance...
          </p>
          <button
            onClick={handleBasicSubscribe}
            className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg w-full font-semibold hover:bg-blue-700 transition"
          >
            Subscribe Free
          </button>
        </div>
        {plans.map((plan: any) => (
          <div
            key={plan.id}
            className="border border-gray-300 rounded-lg shadow-lg p-6 bg-white dark:bg-gray-800"
          >
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
              {plan.name}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              {plan.description}
            </p>
            <p className="text-lg font-medium text-gray-900 dark:text-white mt-4">
              ${plan.price / 100} / {plan.interval}
            </p>
            <button
              onClick={() => handleSubscribe(plan.price_id)}
              className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg w-full font-semibold hover:bg-blue-700 transition"
            >
              Subscribe Pro
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

"use client";

import { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { useRouter } from "next/navigation";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

interface Plan {
  id: string;
  name: string | null;
  description?: string | null;
  price: number;
  interval?: string;
  price_id: string;
}

const fetchActiveSubscription = async () => {
  try {
    const response = await fetch("/api/get-active-subscription");
    if (!response.ok) {
      throw new Error(
        `Failed to fetch active subscription: ${response.statusText}`
      );
    }
    const data = await response.json();
    return data.subscriptionId;
  } catch (error) {
    console.error("Error fetching active subscription:", error);
    return null;
  }
};

export default function Pricing() {
  const [plans, setPlans] = useState<Plan[]>([]);
  const [activeSubscription, setActiveSubscription] = useState<string | null>(
    null
  );
  const router = useRouter();

  useEffect(() => {
    fetch("/api/subscription-plans")
      .then((res) => res.json())
      .then((data) => setPlans(data))
      .catch((error) =>
        console.error("Error fetching subscription plans:", error)
      );
  }, []);

  useEffect(() => {
    const getSubscription = async () => {
      const subscriptionId = await fetchActiveSubscription();
      setActiveSubscription(subscriptionId);
    };

    getSubscription();
  }, []);

  const handleSubscribe = async (priceId: string) => {
    if (activeSubscription === priceId) {
      return;
    } else {
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
    }
  };

  const handleBasicSubscribe = () => {
    router.push("/posts");
  };

  const handleCancelSubscription = async (subscriptionId: string) => {
    try {
      const response = await fetch("/api/cancel-subscription", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ subscriptionId }),
      });

      if (!response.ok) {
        const result = await response.json();
        console.error(result.error || "Failed to cancel subscription");
        return;
      }

      const result = await response.json();
      console.log(result.message);
      setActiveSubscription(null);
    } catch (error) {
      console.error("Error canceling subscription:", error);
    }
  };

  return (
    <div className="mx-auto px-4 py-8 bg-background text-textColor">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white">
          Pricing Plans
        </h1>
        <p className="text-gray-500 dark:text-gray-300 mt-3 text-lg">
          Choose a plan that fits your needs and start using our product today.
        </p>
      </div>
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto">
        <div className="flex flex-col justify-between border border-gray-300 rounded-xl shadow-md p-8 bg-[#955251] hover:shadow-xl transition-shadow duration-300 dark:bg-gray-900">
          <div>
            <h2 className="text-3xl font-semibold text-gray-300 dark:text-gray-100 mb-5">
              Basic Plan
            </h2>
            <p className="text-gray-300 dark:text-gray-300">
              Access limited features such as viewing blogs and more.
            </p>
            <p className="text-lg font-medium text-gray-300 dark:text-gray-100 mt-6 mb-3">
              Free Plan
            </p>
            <p className="text-gray-300 dark:text-gray-300 mb-6">
              Explore public content that caught the world's attention.
            </p>
          </div>
          <button
            onClick={handleBasicSubscribe}
            className="mt-auto bg-cyan-500 text-white px-6 py-3 rounded-lg w-full font-medium hover:bg-blue-700 transition-colors"
          >
            Subscribe Free
          </button>
        </div>

        {plans.map((plan) => (
          <div
            key={plan.id}
            className="flex flex-col justify-between border border-gray-300 rounded-xl shadow-md p-8 bg-[#955251] hover:shadow-xl transition-shadow duration-300 dark:bg-gray-900"
          >
            <div>
              <h2 className="text-3xl font-semibold text-gray-300 dark:text-gray-100 mb-5">
                {plan.name}
              </h2>
              <p className="text-gray-300 dark:text-gray-300 mt-2 mb-6">
                {plan.description}
              </p>
              <p className="text-lg font-medium text-gray-400 dark:text-gray-100 mb-6">
                ${plan.price / 100} / {plan.interval}
              </p>
            </div>
            {activeSubscription === plan.id ? (
              <button
                onClick={() => handleCancelSubscription(plan.id)}
                className="mt-auto bg-red-600 text-white px-6 py-3 rounded-lg w-full font-medium hover:bg-red-700 transition-colors"
              >
                Cancel Subscription
              </button>
            ) : (
              <button
                onClick={() => handleSubscribe(plan.price_id)}
                className="mt-auto bg-cyan-500 text-white px-6 py-3 rounded-lg w-full font-medium hover:bg-blue-700 transition-colors"
              >
                Subscribe Pro
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

import React from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

type PricingCardProps = {
  user: any;
  handleCheckout: (priceId: string) => Promise<void>;
  isYearly: boolean;
  title: string;
  monthlyPrice: number;
  yearlyPrice: number;
  description: string;
  features: string[];
  priceIdMonthly: string;
  priceIdYearly: string;
  actionLabel: string;
};

const PricingCard = ({
  user,
  handleCheckout,
  isYearly,
  title,
  monthlyPrice,
  yearlyPrice,
  description,
  features,
  priceIdMonthly,
  priceIdYearly,
  actionLabel,
}: PricingCardProps) => {
  const router = useRouter();

  return (
    <div className="w-full max-w-sm p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <div className="mb-4">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400">{description}</p>
        <p className="mt-2 text-lg font-semibold">
          ${isYearly ? yearlyPrice : monthlyPrice} /{" "}
          {isYearly ? "year" : "month"}
        </p>
      </div>
      <ul className="mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center space-x-2">
            <span className="w-4 h-4 bg-green-500 rounded-full" />
            <span className="text-gray-600 dark:text-gray-400">{feature}</span>
          </li>
        ))}
      </ul>
      <button
        onClick={() => {
          if (user?.id) {
            handleCheckout(isYearly ? priceIdYearly : priceIdMonthly);
          } else {
            toast("Please login or sign up to purchase", {
              description: "You must be logged in to make a purchase",
              action: {
                label: "Sign Up",
                onClick: () => router.push("/sign-up"),
              },
            });
          }
        }}
        className="w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700"
      >
        {actionLabel}
      </button>
    </div>
  );
};

export default PricingCard;

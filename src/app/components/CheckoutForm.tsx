"use client";

import React, { useState } from "react";
import type Stripe from "stripe";

import CustomDonationInput from "../components/CustomDonationInput";
import StripeTestCards from "../components/StripeTestCards";

import { formatAmountForDisplay } from "../../utils/stripe-helpers";
import * as config from "@/config";
import { createCheckoutSession } from "../actions/stripe";
import getStripe from "../../utils/get-stripe";
import {
  EmbeddedCheckout,
  EmbeddedCheckoutProvider,
} from "@stripe/react-stripe-js";

interface CheckoutFormProps {
  uiMode: Stripe.Checkout.SessionCreateParams.UiMode;
  subscriptionId?: string;
}

export default function CheckoutForm(props: CheckoutFormProps): JSX.Element {
  const [loading] = useState<boolean>(false);
  const [input, setInput] = useState<{ customAmount: number }>({
    customAmount: Math.round(config.MAX_AMOUNT / config.AMOUNT_STEP),
  });
  const [clientSecret, setClientSecret] = useState<string | null>(null);

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ): void =>
    setInput({
      ...input,
      [e.currentTarget.name]: e.currentTarget.value,
    });

  const formAction = async (data: FormData): Promise<void> => {
    const uiMode = data.get(
      "uiMode"
    ) as Stripe.Checkout.SessionCreateParams.UiMode;
    const { client_secret, url } = await createCheckoutSession(
      data,
      props.subscriptionId
    );

    if (uiMode === "embedded") return setClientSecret(client_secret);

    window.location.assign(url as string);
  };

  return (
    <>
      <form action={formAction}>
        <input type="hidden" name="uiMode" value={props.uiMode} />
        <CustomDonationInput
          className="checkout-style"
          name="customAmount"
          min={config.MIN_AMOUNT}
          max={config.MAX_AMOUNT}
          step={config.AMOUNT_STEP}
          currency={config.CURRENCY}
          onChange={handleInputChange}
          value={input.customAmount}
        />
        <StripeTestCards />
        <button
          className="checkout-style-background"
          type="submit"
          disabled={loading}
        >
          Subscribe{" "}
          {formatAmountForDisplay(input.customAmount, config.CURRENCY)}
        </button>
      </form>
      {clientSecret ? (
        <EmbeddedCheckoutProvider
          stripe={getStripe()}
          options={{ clientSecret }}
        >
          <EmbeddedCheckout />
        </EmbeddedCheckoutProvider>
      ) : null}
    </>
  );
}

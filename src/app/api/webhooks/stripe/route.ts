import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { stripe } from "../../../../lib/stripe";

const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

type StripeEvent = Stripe.Event;
type StripeSubscription = Stripe.Subscription;
type StripeInvoice = Stripe.Invoice;

export async function POST(request: NextRequest) {
  const body = await request.text();
  const sig = request.headers.get("stripe-signature");

  if (!sig) {
    return NextResponse.json(
      { error: "Missing Stripe signature." },
      { status: 400 }
    );
  }

  let event: StripeEvent;

  try {
    event = stripe.webhooks.constructEvent(body, sig, endpointSecret as string);
  } catch (err) {
    console.error("Error verifying webhook signature:", err);
    return NextResponse.json(
      { error: `Webhook Error: ${err}` },
      { status: 400 }
    );
  }

  switch (event.type) {
    case "customer.subscription.updated":
      await handleSubscriptionUpdated(event.data.object as StripeSubscription);
      break;
    case "customer.subscription.deleted":
      await handleSubscriptionDeleted(event.data.object as StripeSubscription);
      break;
    case "invoice.payment_succeeded":
      await handleInvoicePaid(event.data.object as StripeInvoice);
      break;
    default:
      console.log(`Unhandled event type: ${event.type}`);
  }

  return NextResponse.json({ received: true });
}

async function handleSubscriptionUpdated(subscription: StripeSubscription) {
  console.log("Subscription updated:", subscription.id);
  console.log("Customer ID:", subscription.customer);
}

async function handleSubscriptionDeleted(subscription: StripeSubscription) {
  console.log("Subscription deleted:", subscription.id);
  console.log("Customer ID:", subscription.customer);
}

async function handleInvoicePaid(invoice: StripeInvoice) {
  console.log("Invoice paid:", invoice.id);
  console.log("Customer ID:", invoice.customer);
}

export const config = {
  api: {
    bodyParser: false,
  },
};

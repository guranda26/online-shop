import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-12-18.acacia",
});

export async function GET(req: Request) {
  try {
    console.log("req", req);
    const userId = (req as any).userId;

    const subscriptions = await stripe.subscriptions.list({
      customer: userId,
      status: "active",
      limit: 1,
    });

    console.log(
      "Active subscriptions:",
      JSON.stringify(subscriptions, null, 2)
    );

    if (subscriptions.data.length > 0) {
      return new Response(
        JSON.stringify({ subscriptionId: subscriptions.data[0].id }),
        {
          status: 200,
          headers: { "Content-Type": "application/json" },
        }
      );
    } else {
      return new Response(JSON.stringify({ subscriptionId: null }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }
  } catch (error) {
    console.error("Error fetching active subscription:", error);
    return new Response(
      JSON.stringify({ error: "Failed to fetch active subscription" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}

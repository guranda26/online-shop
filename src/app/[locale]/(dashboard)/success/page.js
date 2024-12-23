"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function SuccessPage() {
  const [status, setStatus] = useState("loading");
  const [customerEmail, setCustomerEmail] = useState("");
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");

  useEffect(() => {
    if (sessionId) {
      fetchSessionStatus();
    } else {
      console.error("No session ID provided in URL.");
      setStatus("failed");
    }
  }, [sessionId]);

  async function fetchSessionStatus() {
    try {
      const response = await fetch(`/api/check-session`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ sessionId }),
      });

      console.log("Raw response:", response);

      if (!response.ok) {
        throw new Error("Failed to fetch session details.");
      }

      const { session } = await response.json();
      console.log("Parsed session:", session);

      if (session.payment_status) {
        setStatus(session.payment_status);
        setCustomerEmail(
          session.customer_details?.email || "No email provided"
        );
      } else {
        throw new Error("Missing required session details.");
      }
    } catch (error) {
      console.error("Error fetching session:", error);
      setStatus("failed");
    }
  }

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Failed to process subscription. Please try again.</div>;
  }

  if (status === "unknown") {
    return (
      <div>Unable to retrieve subscription status. Please contact support.</div>
    );
  }

  return (
    <div>
      <h1>Subscription Successful!</h1>
      <p>
        Thank you for your subscription. A confirmation email has been sent to{" "}
        {customerEmail}.
      </p>
    </div>
  );
}

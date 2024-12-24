"use client";

import { useState } from "react";

export default function Account() {
  const [isLoading, setIsLoading] = useState(false);

  const handleManageSubscription = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/create-portal-session", {
        method: "POST",
      });
      const { url } = await response.json();
      window.location.href = url;
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h1>Account</h1>
      <button onClick={handleManageSubscription} disabled={isLoading}>
        {isLoading ? "Loading..." : "Manage Subscription"}
      </button>
    </div>
  );
}

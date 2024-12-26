"use client";

import { useState } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useAuth0 } from "@auth0/auth0-react";

export function useAuth() {
  const { user, error: authError, isLoading } = useUser();
  const [error, setError] = useState<string | null>(null);
  const { loginWithRedirect } = useAuth0();

  const checkAuth = async () => {
    try {
      await loginWithRedirect();
    } catch (err) {
      setError("Login failed. Please try again.");
    }
  };

  return { checkAuth, loading: isLoading, error: error || authError, user };
}

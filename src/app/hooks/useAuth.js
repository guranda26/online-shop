"use client";

import { useState } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";

export function useAuth() {
  const { loginWithRedirect, user, error: authError, isLoading } = useUser();
  const [error, setError] = useState(null);
  // const [loading, setLoading] = useState(false);

  const checkAuth = async () => {
    // setLoading(true);
    // setError(null);

    try {
      await loginWithRedirect();
      // const res = await fetch("https://dummyjson.com/auth/login", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({
      //     username,
      //     password,
      //     expiresInMins: 60 * 24 * 7,
      //   }),
      // });

      // if (!res.ok) {
      //   throw new Error("Invalid username or password. Please try again.");
      // }

      // const data = await res.json();

      // // If login is successful, store authentication status and navigate to home
      // localStorage.setItem("isAuth", JSON.stringify(true));
      // localStorage.setItem("accessToken", data.accessToken);
      // return true;
    } catch (err) {
      setError("Login failed. Please try again.");
    }
  };

  return { checkAuth, loading: isLoading, error: error || authError, user };
}

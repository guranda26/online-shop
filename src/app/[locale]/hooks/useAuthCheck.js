"use client";

import { useEffect, useState } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useRouter } from "next/navigation";

export function useAuthCheck() {
  const { user, isLoading } = useUser();

  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isLoading) {
      if (!user) {
        router.push("/api/auth/login");
      } else {
        setLoading(false);
      }
    }
  }, [user, isLoading, router]);

  return loading;
}

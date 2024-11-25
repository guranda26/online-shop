"use client";

import { useEffect } from "react";
import { useAuthRedirect } from "../../hooks/useAuthRedirect";
import { useAuth } from "../../hooks/useAuth";
import LoadingSpinner from "../../components/Loader";

export default function LoginPage() {
  const loadingRedirect = useAuthRedirect();
  const { checkAuth, loading } = useAuth();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (loadingRedirect || loading) {
    return <LoadingSpinner />;
  }

  return null;
}

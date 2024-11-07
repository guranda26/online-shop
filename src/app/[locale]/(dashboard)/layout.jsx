"use client";

import "../../../index.css";
import { useAuthCheck } from "../../hooks/useAuthCheck.js";
import LoadingSpinner from "../../components/Loader.jsx";
import Header from "../../components/Header.jsx";
import Footer from "../../components/Footer.jsx";

export default function DashboardLayout({ children }) {
  const isLoading = useAuthCheck();

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <Header />
      <main className="main">{children}</main>
      <Footer />
    </>
  );
}

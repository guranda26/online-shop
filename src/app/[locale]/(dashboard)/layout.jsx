"use client";

import "../../../index.css";
import { useAuthCheck } from "../../hooks/useAuthCheck";
import LoadingSpinner from "../../components/Loader";
import initTranslations from "../../i18n";
import TranslationsProvider from "../../components/TranslationsProvider";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useState, useEffect } from "react";

export default function DashboardLayout({ children, params }) {
  const locale = params?.locale || "en";
  const [resources, setResources] = useState(null);
  const isLoading = useAuthCheck();

  useEffect(() => {
    const fetchTranslations = async () => {
      const { resources } = await initTranslations(locale, [
        "home",
        "header",
        "common",
        "about-us",
      ]);
      setResources(resources);
    };

    fetchTranslations();
  }, [locale]);

  if (isLoading || !resources) {
    return <LoadingSpinner />;
  }

  return (
    <TranslationsProvider
      resources={resources}
      locale={locale}
      namespaces={["home", "common", "header", "about-us"]}
    >
      <Header />
      <main className="main">{children}</main>
      <Footer />
    </TranslationsProvider>
  );
}

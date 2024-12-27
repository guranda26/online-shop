"use client";

import "../../../index.css";
import LoadingSpinner from "../../components/Loader";
import initTranslations from "../../i18n";
import TranslationsProvider from "../../components/TranslationsProvider";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import React, { useState, useEffect } from "react";
import { Locale } from "../layout";
import { useRouter } from "next/navigation";
import { createClient } from "../../../utils/supabase/client";

export default function DashboardLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: Locale }>;
}) {
  const router = useRouter();
  const [locale, setLocale] = useState<Locale | string>("en");
  const [resources, setResources] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const supabase = createClient();

    const checkUser = async () => {
      const { data, error } = await supabase.auth.getUser();
      if (error || !data?.user) {
        router.push("/sign-in");
      } else {
        setIsLoading(false);
      }
    };

    checkUser();
  }, [router]);

  useEffect(() => {
    const fetchParamsAndTranslations = async () => {
      const resolvedParams = await params;
      setLocale(resolvedParams.locale);

      const { resources } = await initTranslations(resolvedParams.locale, [
        "home",
        "header",
        "common",
        "about-us",
      ]);
      setResources(resources);
    };

    fetchParamsAndTranslations();
  }, [params]);

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

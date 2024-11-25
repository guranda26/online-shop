"use client";

import { I18nextProvider } from "react-i18next";
import initTranslations from "../i18n";
import { createInstance } from "i18next";
import React from "react";

interface TranslationsProviderProps {
  children: React.ReactNode;
  locale: string;
  namespaces: string[];
  resources: Record<string, any>;
}

export default function TranslationsProvider({
  children,
  locale,
  namespaces,
  resources,
}: TranslationsProviderProps) {
  const i18n = createInstance();

  initTranslations(locale, namespaces, i18n, resources);

  console.log(
    typeof locale,
    "namespaces",
    namespaces,
    "i18n",
    i18n,
    "resources",
    resources
  );

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}

import { UserProvider } from "@auth0/nextjs-auth0/client";
import Providers from "../components/providers";
import initTranslations from "../i18n";
import TranslationsProvider from "../components/TranslationsProvider";
import "../../index.css";
import "../../styles/Header.css";
import { dir } from "i18next";
import i18nConfig from "../../i18nConfig";
import React from "react";

export const metadata = {
  title: "eCommerce app",
  description: "Web site created with Next.js.",
};

export enum Locale {
  en = "EN",
  ka = "KA",
  es = "ES",
}

export function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: Locale };
}) {
  const locale = params?.locale || "en";
  const { resources } = await initTranslations(locale, ["home"]);

  return (
    <html lang={locale} dir={dir(locale)} suppressHydrationWarning>
      <UserProvider>
        <body>
          <TranslationsProvider
            resources={resources}
            locale={locale}
            namespaces={["home", "common", "header", "about-us"]}
          >
            <Providers>
              <div className="flex-col">{children}</div>
            </Providers>
          </TranslationsProvider>
        </body>
      </UserProvider>
    </html>
  );
}

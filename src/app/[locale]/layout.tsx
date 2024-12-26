import { UserProvider } from "@auth0/nextjs-auth0/client";
import Providers from "../components/providers";
import initTranslations from "../i18n";
import TranslationsProvider from "../components/TranslationsProvider";
import "../../index.css";
import "../../styles/Header.css";
import { dir } from "i18next";
import i18nConfig from "../../i18nConfig";
import React from "react";
import Link from "next/link";

export const metadata = {
  title: {
    default: "eCommerce app",
    template: "%s | Next.js + TypeScript Example",
  },
  twitter: {
    card: "summary_large_image",
    description:
      "Full-stack TypeScript application created using Next.js, react-stripe-js, and stripe-node.",
    images: [
      {
        url: "https://nextjs-typescript-react-stripe-js.vercel.app/social_card.png",
      },
    ],
    site: "@StripeDev",
    title: "TypeScript Next.js Stripe Example",
  },
};

export enum Locale {
  en = "EN",
  ka = "KA",
  es = "ES",
}

type LocaleParams = {
  locale: Locale;
  [key: string]: string | number | undefined;
};

export function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<LocaleParams>;
}) {
  const resolvedParams = await params;
  const { locale } = resolvedParams;

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

import { UserProvider } from "@auth0/nextjs-auth0/client";
import Providers from "../components/providers";
import initTranslations from "../i18n";
import TranslationsProvider from "../components/TranslationsProvider";
import "../../index.css";
import "../../styles/Header.css";

export const metadata = {
  title: "eCommerce app",
  description: "Web site created with Next.js.",
};

export default async function RootLayout({ children, params }) {
  const locale = params?.locale || "en";
  const { resources } = await initTranslations(locale, ["home"]);

  return (
    <html lang={locale} suppressHydrationWarning>
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

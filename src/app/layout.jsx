import "../index.css";
import "../styles/Header.css";
import Providers from "./components/providers";

export const metadata = {
  title: "eCommerce app",
  description: "Web site created with Next.js.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <div className="flex-col">{children}</div>
        </Providers>
      </body>
    </html>
  );
}

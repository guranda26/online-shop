import "../index.css";
import Footer from "./components/Footer";
import Header from "./components/Header";

export const metadata = {
  title: "eCommerce app",
  description: "Web site created with Next.js.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

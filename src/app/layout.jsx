import "../index.css";
import "../styles/Header.css";

export const metadata = {
  title: "eCommerce app",
  description: "Web site created with Next.js.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="flex-col">{children}</div>
      </body>
    </html>
  );
}

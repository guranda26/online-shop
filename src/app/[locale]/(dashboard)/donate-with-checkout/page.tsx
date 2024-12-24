import { Metadata } from "next";
import CheckoutForm from "../../../components/CheckoutForm";

export const metadata: Metadata = {
  title: "Subscribe with hosted Checkout | Next.js + TypeScript Example",
};

export default function DonatePage(): JSX.Element {
  return (
    <div className="page-container">
      <h1>Subscribe with hosted Checkout</h1>
      <p>Subscribe to our service 💖</p>
      <CheckoutForm uiMode="hosted" />
    </div>
  );
}

import type { Metadata } from "next";
import "./index.css";
import checkoutImg from "../../../../../public/assets/checkout-one-time-payments.svg";

import Link from "next/link";

export const metadata: Metadata = {
  title: "Home | Next.js + TypeScript Example",
};

export default function ProductPage(): JSX.Element {
  return (
    <ul className="card-list">
      <li>
        <Link
          href="/donate-with-embedded-checkout"
          className="card checkout-style-background"
        >
          <h2 className="bottom">Donate with embedded Checkout</h2>
          {/* <img src={checkoutImg} /> */}
        </Link>
      </li>
      <li>
        <Link
          href="/donate-with-checkout"
          className="card checkout-style-background"
        >
          <h2 className="bottom">Donate with hosted Checkout</h2>
          {/* <img src="/checkout-one-time-payments.svg" /> */}
        </Link>
      </li>
      <li>
        <Link
          href="/donate-with-elements"
          className="card elements-style-background"
        >
          <h2 className="bottom">Donate with Elements</h2>
          {/* <img src="/elements-card-payment.svg" /> */}
        </Link>
      </li>
    </ul>
  );
}

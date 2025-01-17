import { ClientOnly } from "./client";
import React from "react";

export function generateStaticParams() {
  return [{ slug: [""] }, { slug: ["home"] }, { slug: ["about"] }];
}

export default function Page() {
  return <ClientOnly />;
}

import { ClientOnly } from "./client";
import React from "react";

export function generateStaticParams() {
  return [{ slug: [""] }, { slug: ["home"] }];
}

export default function Page() {
  return <ClientOnly />;
}

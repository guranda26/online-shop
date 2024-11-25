import { ClientOnly } from "./client";

export function generateStaticParams() {
  return [
    { slug: [""] },
    { slug: ["home"] },
    { slug: ["products"] },
    { slug: ["profile"] },
  ];
}

export default function Page() {
  return <ClientOnly />;
}

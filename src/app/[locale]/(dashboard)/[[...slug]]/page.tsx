import { ClientOnly } from "./client";

export function generateStaticParams() {
  return [
    { slug: [""] },
    { slug: ["home"] },
    { slug: ["products"] },
    { slug: ["profile"] },
    { slug: ["blogs"] },
    { slug: ["blogs/post/[...slug]"] },
  ];
}

export default function Page() {
  return <ClientOnly />;
}

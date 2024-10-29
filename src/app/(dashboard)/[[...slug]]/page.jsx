import { ClientOnly } from "./client";

export function generateStaticParams() {
  return [
    { slug: [""] },
    { slug: ["home"] },
    { slug: ["about"] },
    { slug: ["products"] },
    { slug: ["profile"] },
    { slug: ["blogs"] },
    { slug: ["blogs/post/[...slug]"] },
    { slug: ["assignment-3"] },
  ];
}

export default function Page() {
  return <ClientOnly />;
}

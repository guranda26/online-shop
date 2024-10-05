import { ClientOnly } from "./client";

export function generateStaticParams() {
  return [
    { slug: [""] },
    { slug: ["home"] },
    { slug: ["about"] },
    { slug: ["products"] },
    { slug: ["profile"] },
    { slug: ["blogs"] },
    { slug: ["/blogs/post/1"] },
    { slug: ["blogs", "post-2"] },
    { slug: ["blogs", "post-3"] },
    { slug: ["assignment-3"] },
  ];
}

export default function Page() {
  return <ClientOnly />;
}

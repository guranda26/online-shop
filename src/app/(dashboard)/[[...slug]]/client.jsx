"use client";

import dynamic from "next/dynamic";
import MainContent from "../../components/MainContent";

// const App = dynamic(() => import("../../../App"), { ssr: false });

export function ClientOnly() {
  return <MainContent />;
}

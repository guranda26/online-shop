"use client";

import { useRouter } from "next/navigation";

import React from "react";

const RediretToProductBtn = () => {
  const router = useRouter();
  function returnToTheProductPage() {
    router.push("/products");
  }

  return (
    <button
      onClick={returnToTheProductPage}
      className="p-4 bg-teal-600 rounded-lg hover:bg-teal-400 transition-colors text-white"
    >
      Continue Shopping
    </button>
  );
};

export default RediretToProductBtn;

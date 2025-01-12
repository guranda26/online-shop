"use client";

import React, { useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dπist/ReactToastify.css";

export default function OrderSuccess() {
  const searchParams = useSearchParams();
  const productName = decodeURIComponent(
    searchParams.get("product_name") || ""
  );

  const router = useRouter();

  const PushRoute = () => {
    router.push("/products");
  };

  useEffect(() => {
    toast.error("Payment canselled !", {
      position: "bottom-right",
    });
    setTimeout(() => {
      PushRoute();
    }, 5000);
  }, []);

  return (
    <div className=" h-screen  px-6 flex items-center justify-center bg-green-100">
      <div className="flex items-center justify-center bg-green-400">
        <div className="p-6 flex flex-col bg-white   rounded shadow-md ">
          <h1 className="text-3xl font-bold text-red-600">Payment canceled</h1>
          <p className="mt-4 text-gray-700">
            Your payment for {productName} has been canceled.
            <br />
          </p>

          <button
            type="button"
            className=" mt-4 bg-red-400 text-white  px-4 py-3 rounded-lg  font-medium hover:bg-blue-700 transition-colors"
            onClick={() => PushRoute()}
          >
            Return to products
          </button>
        </div>

        <ToastContainer />
      </div>
    </div>
  );
}

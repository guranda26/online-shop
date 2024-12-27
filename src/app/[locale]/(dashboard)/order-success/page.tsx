"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import LoadingSpinner from "../../../components/Loader";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function OrderSuccess() {
  const [status, setStatus] = useState("loading");
  const [customerEmail, setCustomerEmail] = useState("");
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const productName = decodeURIComponent(
    searchParams.get("product_name") || ""
  );
  const productPrice = decodeURIComponent(
    searchParams.get("product_price") || ""
  );

  const router = useRouter();

  const PushRoute = () => {
    router.push("/products");
  };

  useEffect(() => {
    if (sessionId) {
      fetchSessionStatus();
    } else {
      console.error("No session ID provided in URL.");
      setStatus("failed");
    }
  }, [sessionId]);

  async function fetchSessionStatus() {
    try {
      const response = await fetch(`/api/check-session`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ sessionId }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch session details.");
      }

      const { session } = await response.json();

      if (session.payment_status) {
        setStatus(session.payment_status);

        setCustomerEmail(
          session.customer_details?.email || "No email provided"
        );
        if (session.payment_status === "paid") {
          toast.success("Payment Successful !", {
            position: "bottom-right",
          });
          setTimeout(() => {
            router.push("/products");
          }, 5000);
        }
      } else {
        throw new Error("Missing required session details.");
      }
    } catch (error) {
      console.error("Error fetching session:", error);
      setStatus("failed");
    }
  }

  if (status === "loading") {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="text-lg font-semibold text-gray-700">
          <LoadingSpinner />
        </div>
      </div>
    );
  }

  if (status === "failed") {
    return (
      <div className="flex items-center justify-center h-screen bg-red-100">
        <div className="p-6 bg-white rounded shadow-md">
          <h1 className="text-2xl font-bold text-red-600">
            Something went wrong
          </h1>
          <p className="mt-4 text-gray-600">
            Your operation has failed. Please try again.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className=" h-screen  px-6 flex items-center justify-center bg-green-200">
      <div className="flex items-center justify-center bg-green-400">
        <div className="p-6 flex flex-col bg-white   rounded shadow-md ">
          <h1 className="text-3xl font-bold text-green-600">
            Payment Successful!
          </h1>
          <p className="mt-4 text-gray-700">
            The payment was processed successfully.
            <br />
          </p>
          {productName && (
            <p className="mt-4 text-gray-700">
              Your purchased product:
              <span className="font-semibold text-blue-600 hover:underline">
                {productName}
              </span>{" "}
            </p>
          )}
          {productPrice && (
            <p className="mt-4 text-gray-700">
              for{" "}
              <span className="font-semibold text-blue-600 hover:underline">
                ${productPrice}
              </span>{" "}
              has been confirmed.
            </p>
          )}
          <button
            type="button"
            className=" mt-4 bg-cyan-500 text-white  px-4 py-3 rounded-lg  font-medium hover:bg-blue-700 transition-colors"
            onClick={() => PushRoute()}
          >
            Go Back
          </button>
        </div>

        <ToastContainer />
      </div>
    </div>
  );
}

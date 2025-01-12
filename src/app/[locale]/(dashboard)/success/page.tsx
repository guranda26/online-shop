"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import LoadingSpinner from "../../../components/Loader";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SuccessPage() {
  const [status, setStatus] = useState("loading");
  const [, setCustomerEmail] = useState("");
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");

  const planName = searchParams.get("plan_name");

  const router = useRouter();

  const PushRoute = () => {
    router.push("/pricing");
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

      console.log("Raw response:", response);

      if (!response.ok) {
        throw new Error("Failed to fetch session details.");
      }

      const { session } = await response.json();
      console.log("Parsed session:", session);

      if (session.payment_status) {
        setStatus(session.payment_status);

        setCustomerEmail(
          session.customer_details?.email || "No email provided"
        );
        if (session.payment_status === "paid") {
          toast.success("Payment Successfully !", {
            position: "bottom-right",
          });

          setTimeout(() => {
            PushRoute();
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
            Subscription Failed
          </h1>
          <p className="mt-4 text-gray-600">
            Failed to process subscription. Please try again.
          </p>
        </div>
      </div>
    );
  }

  if (status === "unknown") {
    return (
      <div className="flex items-center justify-center h-screen bg-yellow-100">
        <div className="p-6 bg-white rounded shadow-md">
          <h1 className="text-2xl font-bold text-yellow-600">
            Unknown Subscription Status
          </h1>
          <p className="mt-4 text-gray-600">
            Unable to retrieve subscription status. Please contact support.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex px-6 items-center justify-center h-screen bg-green-100">
      <div className="flex  items-center justify-center  bg-green-400 ">
        <div className="p-6 flex flex-col bg-white items-center rounded shadow-md text-center">
          <h1 className="text-3xl font-bold text-green-600">
            Payment Successful!
          </h1>

          <p className="mt-4 text-gray-700">
            The payment was processed succesfully
            <br /> your subscription plan
            <span className="font-semibold text-blue-600 hover:underline ml-1">
              {planName}
            </span>{" "}
            has been confirmed.
          </p>
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

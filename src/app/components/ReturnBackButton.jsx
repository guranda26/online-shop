import React from "react";
import { useRouter } from "next/navigation";

const ReturnBackButton = () => {
  const router = useRouter();
  const returnBack = () => {
    router.back();
  };
  return (
    <button className="goBackButton" onClick={returnBack}>
      Go Back
    </button>
  );
};

export default ReturnBackButton;

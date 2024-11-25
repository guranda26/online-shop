"use client";
import React from "react";
import DangerousComponent from "../../components/DangerousComponent";

export default function TestErrorPage() {
  return (
    <>
      <h1>Test Error Handling</h1>
      <DangerousComponent />
    </>
  );
}

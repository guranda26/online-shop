import AddProductForm from "../../../components/AddProductForm";
import React from "react";

export default function Store() {
  return (
    <div>
      <h1 className="text-center mt-10 text-4xl font-bold text-violet-300">
        Welcome to the Store!
      </h1>
      <AddProductForm />
    </div>
  );
}

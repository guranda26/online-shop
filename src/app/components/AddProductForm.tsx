"use client";

import { useState } from "react";
import "../../styles/AddProduct.css";
import { z } from "zod";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const formSchema = z.object({
  name: z
    .string()
    .min(3, "Name must be at least 3 characters")
    .regex(/^[a-zA-Z\s]+$/, "Name must only contain alphabetic characters"),
  description: z.string().min(5, "Description must be at least 5 characters"),
  price: z.string().regex(/^\d+(\.\d{1,2})?$/, "Price must be a valid number"),
  photo: z.string().url("Photo must be a valid URL"),
});

type FormData = z.infer<typeof formSchema>;

export default function AddProductForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    description: "",
    price: "",
    photo: "",
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>(
    {}
  );
  const [, setStatus] = useState<string>("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setErrors((prevErrors) => ({ ...prevErrors, [name]: undefined }));
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Submitting...");

    const validation = formSchema.safeParse(formData);

    if (!validation.success) {
      const zodErrors = validation.error.errors.reduce(
        (acc, error) => ({
          ...acc,
          [error.path[0]]: error.message,
        }),
        {} as Partial<Record<keyof FormData, string>>
      );
      setErrors(zodErrors);
      setStatus("");
      return;
    }

    setErrors({});
    try {
      const response = await fetch("/api/store", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          description: formData.description,
          price: parseFloat(formData.price),
          photo: formData.photo,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to create product");
      }

      await response.json();
      toast.success("Product created successfully!", {
        position: "top-center",
      });
      setFormData({ name: "", description: "", price: "", photo: "" });
    } catch (error) {
      console.error("Error creating product:", error);
      toast.error("Product failed to create, please try again !", {
        position: "top-center",
      });
    }
  };

  return (
    <div className="form-container p-6 bg-gray-100 rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4">Add New Product</h2>

      <div className="form-section">
        <form onSubmit={handleSubmit}>
          <div className="form-row grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Product Name"
                value={formData.name}
                onChange={handleChange}
                required
                className={`w-full p-2 border rounded ${
                  errors.name
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-blue-500"
                }`}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            <div>
              <input
                type="number"
                name="price"
                placeholder="Price (in USD)"
                value={formData.price}
                onChange={handleChange}
                required
                className={`w-full p-2 border rounded ${
                  errors.price
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-blue-500"
                }`}
              />
              {errors.price && (
                <p className="text-red-500 text-sm mt-1">{errors.price}</p>
              )}
            </div>
          </div>

          <div className="mt-4">
            <textarea
              name="description"
              placeholder="Product Description"
              value={formData.description}
              onChange={handleChange}
              required
              className={`w-full p-2 border rounded ${
                errors.description
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:ring-blue-500"
              }`}
            ></textarea>
            {errors.description && (
              <p className="text-red-500 text-sm mt-1">{errors.description}</p>
            )}
          </div>

          <div className="mt-4 mb-2">
            <input
              type="text"
              name="photo"
              placeholder="Photo URL"
              value={formData.photo}
              onChange={handleChange}
              required
              className={`w-full p-2 border rounded ${
                errors.photo
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:ring-blue-500"
              }`}
            />
            {errors.photo && (
              <p className="text-red-500 text-sm mt-1">{errors.photo}</p>
            )}
          </div>

          <button
            type="submit"
            className="mt-6 w-full bg-blue-500 text-white py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Add Product
          </button>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
}

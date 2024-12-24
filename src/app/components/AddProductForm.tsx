"use client";

import { useState } from "react";
import "../../styles/AddProduct.css";

interface FormData {
  name: string;
  description: string;
  price: string;
  photo: string;
}

export default function AddProductForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    description: "",
    price: "",
    photo: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

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

      setFormData({ name: "", description: "", price: "", photo: "" });
    } catch (error) {
      console.error("Error creating product:", error);
    }
  };

  return (
    <div className="form-container">
      <h2>Add New Product</h2>

      <div className="form-section">
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <input
              type="text"
              name="name"
              placeholder="Product Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="number"
              name="price"
              placeholder="Price (in USD)"
              value={formData.price}
              onChange={handleChange}
              required
            />
          </div>

          <textarea
            name="description"
            placeholder="Product Description"
            value={formData.description}
            onChange={handleChange}
            required
          ></textarea>

          <input
            type="text"
            name="photo"
            placeholder="Photo URL"
            value={formData.photo}
            onChange={handleChange}
            required
          />

          <button type="submit">Add Product</button>
        </form>
      </div>
    </div>
  );
}

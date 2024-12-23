// "use client";

// import React, { useState, useEffect } from "react";
// import Link from "next/link";
// import { fetchProducts } from "../../../components/FetchProducts";
// import SearchInput from "../../../components/SearchInput";
// import { handleDelete } from "../../../modules/handleDelete";
// import { addProduct } from "../../../modules/addProduct";
// import { editProduct } from "../../../modules/editProduct";
// import { Product } from "@/src/app/interfaces/products";
// import { useSearchParams } from "next/navigation";
// import "../../../../styles/SearchInput.css";
// import "./index.css";

// const placeholderImage =
//   "../../../../../public/assets/product-placeholder.webp";

// const ProductPage: React.FC = () => {
//   const searchParams = useSearchParams();
//   const search = searchParams.get("search") || "";
//   const sortBy = searchParams.get("sortBy") || "";
//   const order = searchParams.get("order") || "";

//   const [products, setProducts] = useState<Product[]>([]);
//   const [error, setError] = useState<string | null>(null);
//   const [editingProduct, setEditingProduct] = useState<Product | null>(null);
//   const [newProduct, setNewProduct] = useState({
//     name: "",
//     description: "",
//     price: "",
//     image: "",
//   });

//   useEffect(() => {
//     const loadProducts = async () => {
//       try {
//         const fetchedProducts = await fetchProducts(search, sortBy, order);
//         setProducts(fetchedProducts);
//       } catch (err) {
//         console.error(err);
//         setError("Error loading products");
//       }
//     };
//     loadProducts();
//   }, [search, sortBy, order]);

//   const validateNewProduct = () => {
//     const { name, description, price, image } = newProduct;
//     return name && description && price && image;
//   };

//   const onDelete = (id: number) => {
//     handleDelete(products, "products", id, setProducts);
//   };

//   const onEdit = (product: Product) => {
//     setNewProduct(product);
//     setEditingProduct(product);
//   };

//   const handleSubmit = () => {
//     if (!validateNewProduct()) {
//       alert("Please fill in all fields");
//       return;
//     }

//     if (editingProduct) {
//       editProduct(products, setProducts, { ...editingProduct, ...newProduct });
//       setEditingProduct(null);
//     } else {
//       addProduct(products, setProducts, newProduct, setNewProduct);
//     }
//     setNewProduct({ name: "", description: "", price: "", image: "" });
//   };

//   if (error) {
//     return <div className="error-message">Error: {error}</div>;
//   }

//   return (
//     <section className="products-section bg-background text-textColor">
//       <h1>All Products</h1>
//       <div className="search-sort__wrapper">
//         <SearchInput searchPath="products" supportsPriceSort={true} />
//       </div>
//       <div className="search-container">
//         <div className="search-input-wrapper">
//           {["Title", "Description", "Price", "Image URL"].map(
//             (placeholder, index) => (
//               <input
//                 key={index}
//                 type={placeholder === "Price" ? "number" : "text"}
//                 placeholder={placeholder}
//                 value={
//                   placeholder === "Title"
//                     ? newProduct.name
//                     : placeholder === "Description"
//                       ? newProduct.description
//                       : placeholder === "Price"
//                         ? newProduct.price
//                         : newProduct.image
//                 }
//                 onChange={(e) =>
//                   setNewProduct({
//                     ...newProduct,
//                     [placeholder.toLowerCase()]: e.target.value,
//                   })
//                 }
//                 className="search-input"
//               />
//             )
//           )}
//           <button onClick={handleSubmit} className="search-btn">
//             {editingProduct ? "Save Changes" : "Add Product"}
//           </button>
//         </div>
//       </div>

//       <div className="product-list_wrapper">
//         {products.map(
//           ({ id, image_link, name, description, price, category, image }) => (
//             <div key={id} className="products product-list">
//               <Link href={`products/${id}`}>
//                 <div className="product-info">
//                   <h2 className="text-blue-800 text-center font-bold text-2xl mt-3">
//                     {name}
//                   </h2>
//                   <div className="image-container">
//                     <img
//                       src={image_link || placeholderImage}
//                       alt={name}
//                       className="product-img"
//                     />
//                   </div>
//                   <p>{description}</p>
//                   <p className="text-['#7e1d1d'] font-semibold italic">
//                     Category: {category}
//                   </p>
//                   <p className="price">Price: ${price}</p>
//                 </div>
//               </Link>
//               <div className="flex gap-2 text-center justify-center font-semibold mt-4">
//                 <button className="py-2 px-3 bg-blue-600 rounded-md text-white w-[110px]">
//                   Add to cart
//                 </button>
//                 <button
//                   className="py-2 px-3 bg-red-600 rounded-md text-white w-[110px]"
//                   onClick={() => onDelete(id)}
//                 >
//                   Delete
//                 </button>
//                 <button
//                   className="py-2 px-3 bg-blue-400 rounded-md text-white w-[110px]"
//                   onClick={() =>
//                     onEdit({
//                       id,
//                       name,
//                       description,
//                       price,
//                       image,
//                     })
//                   }
//                 >
//                   Edit
//                 </button>
//               </div>
//             </div>
//           )
//         )}
//       </div>
//     </section>
//   );
// };

// export default ProductPage;

import React from "react";
import Link from "next/link";
import AddToCart from "@/src/app/components/AddToCart";
import useProducts from "@/src/app/hooks/useProducts";
import BuyProductButton from "@/src/app/components/BuyProductButton";
import "./index.css";

const placeholderImage = "/assets/product-placeholder.webp";

const ProductPage: React.FC = async () => {
  const products = await useProducts();

  return (
    <section className="products-section bg-background text-textColor">
      <h1>All Products</h1>

      <div className="product-list_wrapper">
        {products.map(
          ({ id, image_link, name, description, price, category }) => (
            <div key={id} className="products">
              <div className="product-list" data-cy="product-item">
                <Link href={`products/${id}`}>
                  <div className="product-info flex flex-col items-center">
                    <h2
                      className="text-blue-800 text-center font-bold text-xl md:text-2xl mt-3"
                      data-cy="new-product-name"
                    >
                      {name}
                    </h2>
                    <div className="image-container">
                      <img
                        src={image_link || placeholderImage}
                        alt={name}
                        className="product-img max-w-150px sm:max-w-300px"
                      />
                    </div>
                    <p>{description}</p>
                    <p className="text-['#7e1d1d'] font-semibold italic">
                      Category: {category}
                    </p>
                    <p className="price">Price: ${price}</p>
                  </div>
                </Link>
                <div className="flex sm:flex-col gap-3">
                  <AddToCart
                    productId={id}
                    productName={name}
                    productPrice={price}
                  />
                  <BuyProductButton
                    productId={id}
                    productName={name}
                    productDescription={description}
                    productPrice={price}
                    productImage={image_link}
                  />
                </div>

                <div className="flex gap-2 text-center justify-center font-semibold mt-4"></div>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default ProductPage;

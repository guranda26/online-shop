import Link from "next/link";
import "./index.css";
import AddToCart from "@/src/app/components/AddToCart";
import useProducts from "@/src/app/hooks/useProducts";

const placeholderImage = "/assets/product-placeholder.webp";

const ProductPage = async () => {
  const products = await useProducts();

  return (
    <section className="products-section bg-background text-textColor">
      <h1>All Products</h1>

      <div className="product-list_wrapper">
        {products.map(
          ({ id, image_link, name, description, price, category }) => (
            <div key={id} className="products product-list">
              <Link href={`products/${id}`}>
                <div className="product-info">
                  <h2 className="text-blue-800 text-center font-bold text-2xl mt-3">
                    {name}
                  </h2>
                  <div className="image-container">
                    <img
                      src={image_link || placeholderImage}
                      alt={name}
                      className="product-img"
                    />
                  </div>
                  <p>{description}</p>
                  <p className="text-['#7e1d1d'] font-semibold italic">
                    Category: {category}
                  </p>
                  <p className="price">Price: ${price}</p>
                </div>
              </Link>
              <AddToCart productId={id} productName={name} productPrice={price}/>
              <div className="flex gap-2 text-center justify-center font-semibold mt-4"></div>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default ProductPage;

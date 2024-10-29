import Link from "next/link";
import "./index.css";
import NotFoundPage from "../../not-found";
import { fetchProducts } from "../../components/FetchProducts";
import SearchInput from "../../components/SearchInput";

const ProductPage = async ({ searchParams }) => {
  const { search, sortBy = "", order = "" } = searchParams;

  let products;
  try {
    products = await fetchProducts(search, sortBy, order);
  } catch (error) {
    console.error(error);
    return <NotFoundPage />;
  }

  if (!products) {
    return <NotFoundPage />;
  }

  return (
    <section className="products-section">
      <h1>All Products</h1>
      <div className="search-sort__wrapper">
        <SearchInput searchPath="products" supportsPriceSort="true" />
      </div>
      <div className="product-list_wrapper">
        {products.map((product) => (
          <div key={product.id} className="products">
            <Link href={`products/${product.id}`} className="product-list">
              <div className="image-container">
                <img src={product.images[0]} alt="" className="product-img" />
              </div>
              <div className="product-info">
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <p className="price">Price: ${product.price}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductPage;

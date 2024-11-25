import NotFoundPage from "../../../not-found";
import ReturnBackButton from "../../../../components/ReturnBackButton";
import { Params } from "../../../../interfaces/params";
import "../../../../../index.css";

const ProductPage = async ({ params }: { params: Params }) => {
  const { id } = params;

  const response = await fetch(`https://dummyjson.com/products/${id}`);

  if (!response.ok) {
    return <NotFoundPage />;
  }

  const product = await response.json();

  if (!product || !product.id) {
    return <NotFoundPage />;
  }
  return (
    <section className="products-section product">
      <h1>Product</h1>
      <div key={product.id} className="products">
        <div className="product-list">
          <div className="image-container">
            <img src={product.images[0]} alt="" className="product-img" />
          </div>
          <div className="product-info">
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p className="price">Price: ${product.price}</p>
          </div>
        </div>
        <div className="return-back">
          <ReturnBackButton />
        </div>
      </div>
    </section>
  );
};
export default ProductPage;

import "../index.css";
import ReturnBackButton from "../../components/ReturnBackButton";
import ProductDetails from "../../components/ProductDetails";

const PostsPage = ({ params }) => {
  const { id } = params;

  return (
    <section className="products-section product">
      <h1>Product</h1>
      <ProductDetails id={id} />
      <div className="return-back">
        <ReturnBackButton />
      </div>
    </section>
  );
};

export default PostsPage;

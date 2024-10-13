import PostsDetails from "../../components/PostsDetails";
import ReturnBackButton from "../../components/ReturnBackButton";
import "../index.css";

const PostsPage = ({ params }) => {
  const { id } = params;

  return (
    <section className="post-item">
      <div className="posts new-post">
        <PostsDetails id={id} />
        <div className="return-back">
          <ReturnBackButton />
        </div>
      </div>
    </section>
  );
};

export default PostsPage;

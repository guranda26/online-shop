import PostList from "../components/PostList";
import "./index.css";

const PostsPage = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Posts</h1>
      <PostList />
    </div>
  );
};

export default PostsPage;

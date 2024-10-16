import Link from "next/link";
import { FaEye } from "react-icons/fa6";
import { AiFillDislike, AiFillLike } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";
import NotFoundPage from "../not-found";
import { fetchPosts } from "../components/FetchPosts";
import "./index.css";

const PostsPage = async ({ searchParams }) => {
  const { search } = searchParams;

  console.log(searchParams);
  const posts = await fetchPosts(search);

  return (
    <div className="product-list_wrapper">
      {posts?.map((post) => (
        <div key={post.id} className="posts">
          <Link href={`posts/${post.id}`} className="post-list">
            <div className="post-content">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
              <div className="post-tags">
                {post.tags.map((tag) => (
                  <span key={tag} className="post-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="post-reactions">
              <span className="reactions">
                <AiFillLike /> Likes:{" "}
                <span className="post-reaction">{post.reactions.likes}</span>
              </span>
              <span className="reactions">
                <AiFillDislike /> Dislikes:{" "}
                <span className="post-reaction">{post.reactions.dislikes}</span>
              </span>
              <span className="reactions">
                <FaEye /> Views:{" "}
                <span className="post-reaction">{post.views}</span>
              </span>
              <span>
                <FaRegUser /> USER:{" "}
                <span className="post-reaction">{post.userId}</span>
              </span>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};
export default PostsPage;

"use client";
import Link from "next/link";
import { FaEye } from "react-icons/fa6";
import { AiFillDislike, AiFillLike } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";
import LoadingSpinner from "../../components/Loader";
import { useFetchItems } from "../../hooks/useFetchItems";
import "../index.css";

const PostsPage = ({ params }) => {
  const { id } = params;
  const url = `https://dummyjson.com/posts/${id}`;
  const { items: post, loading, error } = useFetchItems(url, null);
  console.log("post", post);

  if (loading) return <LoadingSpinner />;
  if (error) return <p>Error: {error.message}</p>;

  if (!post) return <p>No post found</p>;

  return (
    <section className="post-item">
      <div key={post.id} className="posts new-post">
        <div className="post-content post-content_item">
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <div className="post-tags">
            {post.tags.map((tag) => (
              <span key={tag} className="post-tag tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="post-reactions post-reactions">
          <span className="reactions reaction">
            <AiFillLike /> Likes:{" "}
            <span className="post-reaction">{post.reactions.likes}</span>
          </span>
          <span className="reactions">
            <AiFillDislike /> Dislikes:{" "}
            <span className="post-reaction">{post.reactions.dislikes}</span>
          </span>
          <span className="reactions">
            <FaEye /> Views: <span className="post-reaction">{post.views}</span>
          </span>
          <span>
            <FaRegUser /> USER:{" "}
            <span className="post-reaction">{post.userId}</span>
          </span>
        </div>
      </div>
    </section>
  );
};
export default PostsPage;

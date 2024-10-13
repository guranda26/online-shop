"use client";

import LoadingSpinner from "./Loader";
import NotFoundPage from "../not-found";
import { useFetchItems } from "../hooks/useFetchItems";
import { AiFillDislike, AiFillLike } from "react-icons/ai";
import { FaEye } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";

const PostsDetails = ({ id }) => {
  const url = `https://dummyjson.com/posts/${id}`;
  const { items: post, loading, error } = useFetchItems(url, null);

  if (loading) return <LoadingSpinner />;
  if (!post || error) return <NotFoundPage />;

  return (
    <div key={post.id} className="post-content post-content_item">
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <div className="post-tags">
        {post.tags.map((tag) => (
          <span key={tag} className="post-tag tag">
            {tag}
          </span>
        ))}
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
  );
};

export default PostsDetails;

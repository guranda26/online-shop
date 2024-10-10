"use client";
import Link from "next/link";
import { useFetchItems } from "../hooks/useFetchItems";
import { FaEye } from "react-icons/fa6";
import { AiFillDislike, AiFillLike } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";

import "./index.css";

const PostsPage = () => {
  const url = "https://dummyjson.com/posts";
  const { items: posts, loading, error } = useFetchItems(url, "posts");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="product-list_wrapper">
      {posts.map((post) => (
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

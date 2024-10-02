import React from "react";
import { postsData } from "../utils/postsData";
import { Link } from "react-router-dom";
import "../styles/BlogItems.css";

const posts = postsData();

const BlogItems = () => {
  return (
    <section className="blog-page">
      <h1 className="blog-title">Our Blogs</h1>
      <ul>
        {posts.map((post) => {
          return (
            <li key={post.id} className="blog-items">
              <Link to={`posts/${post.id}`}>{post.title}</Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default BlogItems;

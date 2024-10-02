import React from "react";
import { postsData } from "../utils/postsData";
import { Link, useParams } from "react-router-dom";
import "../styles/BlogItem.css";

const posts = postsData();

const BlogItem = () => {
  const { id } = useParams();
  const post = posts.find((post) => post.id === parseInt(id));
  if (!post) return <h2>No post found on this route.</h2>;

  return (
    <section className="blog-item-page">
      <h2 className="blog-item-title">{post.title}</h2>
      <p className="blog-item-content">{post.content}</p>
      <Link className="return-link" to="/blogs">
        Return back
      </Link>
    </section>
  );
};

export default BlogItem;

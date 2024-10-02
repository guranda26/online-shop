import React from "react";
import { postsData } from "../utils/postsData";
import { Link, useParams } from "react-router-dom";

const posts = postsData();

const BlogItem = () => {
  const { id } = useParams();
  const post = posts.find((post) => post.id === parseInt(id));
  if (!post) return <h2>No post found on this route.</h2>;

  return (
    <section>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <Link to={"/blogs"}>Return back</Link>
    </section>
  );
};

export default BlogItem;

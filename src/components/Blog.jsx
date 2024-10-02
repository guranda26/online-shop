import React from "react";
import { postsData } from "../utils/postsData";

const posts = postsData();

const Blog = () => {
  return (
    <section>
      <h1>Our Blog</h1>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
          </div>
        );
      })}
    </section>
  );
};

export default Blog;

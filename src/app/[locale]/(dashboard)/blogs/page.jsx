"use client";

import React from "react";
import Link from "next/link";
import "../../../styles/BlogItems.css";
import { postsData } from "../../../../utils/postsData";

const posts = postsData();

const BlogItems = () => {
  return (
    <section className="blog-page">
      <h1 className="blog-title">Our Blogs</h1>
      <ul>
        {posts.map((post) => {
          return (
            <li key={post.id} className="blog-item">
              <Link href={`blogs/post/${post.id}`} className="blog-Link">
                {post.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default BlogItems;

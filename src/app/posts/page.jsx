"use client";
import Link from "next/link";
import { useFetchItems } from "../hooks/useFetchItems";

const Page = () => {
  const url = "https://dummyjson.com/posts";
  const { items: posts, loading, error } = useFetchItems(url, "posts");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="product-list_wrapper">
      {posts.map((post) => (
        <div key={post.id} className="posts">
          <Link href={`posts/${post.id}`} className="post-list">
            <div className="image-container">
              <img
                src={post.thumbnail}
                alt={post.name}
                className="product-img"
              />
            </div>
            <div className="post-content">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
              <p>Price: ${post.tags}</p>
            </div>
            <div className="post-reactions">
              <span>Likes: {post.reactions.likes}</span>
              <span>Comments: {post.reactions.dislikes}</span>
              <span>{post.views}</span>
              <span>{post.userIr}</span>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Page;

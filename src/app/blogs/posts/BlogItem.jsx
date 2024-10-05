import React from "react";
import { postsData } from "../utils/postsData";
import { Link } from "next/link";
import { useRouter } from "next/router";
import "../../styles/BlogItem.css";

const posts = postsData();

const BlogItem = () => {
  const router = useRouter();
  const { id } = router.query;
  if (!id) return <h2>Loading...</h2>;

  const post = posts.find((post) => post.id === parseInt(id));

  if (!post) return <h2>No post found on this route.</h2>;

  return (
    <section className="blog-item-page">
      <h2 className="blog-item-title">{post.title}</h2>
      <img src={post.imageUrl} alt={post.title} className="blog-item-image" />
      <p className="blog-item-content">{post.content}</p>

      <h3 className="specs-title">Specifications:</h3>
      <ul className="specs-list">
        {Object.entries(post.specs).map(([key, value]) => (
          <li key={key} className="specs-item">
            <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong>{" "}
            {value}
          </li>
        ))}
      </ul>

      <h3 className="reviews-title">User Reviews:</h3>
      <ul className="reviews-list">
        {post.reviews.map((review, index) => (
          <li key={index} className="review-item">
            <strong>{review.user}:</strong> {review.comment} (Rating:{" "}
            {review.rating}/5)
          </li>
        ))}
      </ul>

      <Link className="return-link" href="/blogs">
        Return back
      </Link>
    </section>
  );
};

export default BlogItem;

import React from "react";
import { FaEye } from "react-icons/fa6";
import { AiFillDislike, AiFillLike } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";
import ReturnBackButton from "../../../../components/ReturnBackButton";
import NotFoundPage from "../../../not-found";
import { PostDetails } from "../../../../types/PostDetails";
import { Params } from "../../../../interfaces/params";
import "../index.css";

const PostsPage = async ({ params }: { params: Params }) => {
  const { id } = params;

  const response = await fetch(`http://localhost:3000/api/posts/${id}`);

  if (!response.ok) {
    return <NotFoundPage />;
  }

  const post: PostDetails = await response.json();

  if (!post || !post.id) {
    return <NotFoundPage />;
  }

  const currentLocale = (await params) || "en";

  const { locale } = currentLocale;
  console.log("locale", locale);

  const titleKey = `title_${locale}` as keyof PostDetails;
  const bodyKey = `body_${locale}` as keyof PostDetails;

  return (
    <section className="post-item">
      <div key={post.id} className="posts new-post">
        <div className="post-content post-content_item">
          <h2>{post[titleKey]}</h2>
          <p>{post[bodyKey]}</p>
          <div className="post-tags">
            <span key={post.tags_0} className="post-tag tag">
              {`${post.tags_0}`}
            </span>
            <span key={post.tags_1} className="post-tag tag">
              {`${post.tags_1}`}
            </span>
            <span key={post.tags_2} className="post-tag tag">
              {`${post.tags_2}`}
            </span>
          </div>
        </div>
        <div className="post-reactions post-reactions">
          <span className="reactions reaction">
            <AiFillLike /> Likes:{" "}
            <span className="post-reaction text-red-500">
              {post.reactions_likes}
            </span>
          </span>
          <span className="reactions">
            <AiFillDislike /> Dislikes:{" "}
            <span className="post-reaction">{post.reactions_dislikes}</span>
          </span>
          <span className="reactions">
            <FaEye /> Views: <span className="post-reaction">{post.views}</span>
          </span>
          <span>
            <FaRegUser /> USER: <span className="post-reaction">{post.id}</span>
          </span>
        </div>
        <div className="return-back">
          <ReturnBackButton fallbackRoute="/posts" />
        </div>
      </div>
    </section>
  );
};

export default PostsPage;

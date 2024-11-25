import { FaEye } from "react-icons/fa6";
import { AiFillDislike, AiFillLike } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";
import ReturnBackButton from "../../../../components/ReturnBackButton";
import NotFoundPage from "../../../not-found";
import "../index.css";
import { Post } from "../page";

export interface Params {
  id: number;
}

interface tag {
  id: number;
  name: string;
}
type PostDetails = Post & {
  tags: [];
  reactions: {
    likes: string;
    dislikes: string;
  };
  views: string;
};

const PostsPage = async ({ params }: { params: Params }) => {
  const { id } = params;

  const response = await fetch(`https://dummyjson.com/posts/${id}`);

  if (!response.ok) {
    return <NotFoundPage />;
  }

  const post: PostDetails = await response.json();

  if (!post || !post.id) {
    return <NotFoundPage />;
  }

  return (
    <section className="post-item">
      <div key={post.id} className="posts new-post">
        <div className="post-content post-content_item">
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <div className="post-tags">
            {post.tags.map((tag) => (
              <span key={tag} className="post-tag tag">
                {tag}
              </span>
            ))}
          </div>
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
            <FaRegUser /> USER: <span className="post-reaction">{post.id}</span>
          </span>
        </div>
        <div className="return-back">
          <ReturnBackButton />
        </div>
      </div>
    </section>
  );
};

export default PostsPage;

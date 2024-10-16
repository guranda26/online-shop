import Link from "next/link";
import { FaEye } from "react-icons/fa6";
import { AiFillDislike, AiFillLike } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";
import NotFoundPage from "../not-found";
import { fetchPosts } from "../components/FetchPosts";
import "./index.css";
import SearchInput from "../components/SearchInput";

const PostsPage = async ({ searchParams }) => {
  const { search } = searchParams;

  console.log(searchParams);

  let posts;
  try {
    posts = await fetchPosts(search);
  } catch (error) {
    console.error("Error fetching posts:", error);
    return <NotFoundPage />;
  }

  if (!posts) {
    return <NotFoundPage />;
  }

  // const handleSearch = async (searchTerm) => {
  //   try {
  //     posts = await fetchPosts(searchTerm);
  //   } catch (error) {
  //     console.error("Error fetching posts:", error);
  //     return <NotFoundPage />;
  //     r;
  //   }
  // };

  return (
    <section className="posts-section">
      <SearchInput searchPath="posts" className="search" />
      <div className="product-list_wrapper">
        {posts?.map((post) => (
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
                  <span className="post-reaction">
                    {post.reactions.dislikes}
                  </span>
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
    </section>
  );
};
export default PostsPage;

import { Post } from "../interfaces/posts";
import { SetPosts } from "../types/PostDetails";

export const editPost = (
  posts: Post[],
  setPosts: SetPosts,
  updatedPost: Partial<Post>
) => {
  const updatedPosts = posts.map((post) =>
    post.id === updatedPost.id ? { ...post, ...updatedPost } : post
  );
  setPosts(updatedPosts);
};

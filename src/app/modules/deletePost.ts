import { Post } from "../interfaces/posts";
import { SetPosts } from "../types/PostDetails";

export const deletePost = (
  posts: Post[],
  key: string,
  id: number,
  setPosts: SetPosts
) => {
  const updatedPosts = posts.filter((post) => post.id !== id);
  setPosts(updatedPosts);
};

import { Post } from "../interfaces/posts";
import { SetPosts } from "../types/PostDetails";

export const deletePost = (posts: Post[], setPosts: SetPosts, id: number) => {
  const updatedPosts = posts.filter((post) => post.id !== id);
  setPosts(updatedPosts);
};

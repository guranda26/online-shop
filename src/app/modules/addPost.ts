import { Post } from "../interfaces/posts";
import { NewPost, SetPosts } from "../types/PostDetails";

export const addPost = (
  posts: Post[],
  setPosts: SetPosts,
  newPost: NewPost,
  resetForm: () => void
) => {
  const newPostWithId = { ...newPost, id: Date.now() };
  setPosts([newPostWithId, ...posts]);
  resetForm();
};

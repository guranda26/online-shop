export const addPost = (posts, setPosts, newPost, resetForm) => {
  const newPostWithId = { ...newPost, id: Date.now() };
  setPosts([newPostWithId, ...posts]);
  resetForm();
};

export const deletePost = (posts, setPosts, id) => {
  const updatedPosts = posts.filter((post) => post.id !== id);
  setPosts(updatedPosts);
};

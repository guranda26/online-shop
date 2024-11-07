export const editPost = (posts, setPosts, updatedPost) => {
  const updatedPosts = posts.map((post) =>
    post.id === updatedPost.id ? { ...post, ...updatedPost } : post
  );
  setPosts(updatedPosts);
};

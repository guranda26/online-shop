import NotFoundPage from "../not-found";

export async function fetchPosts(search) {
  const url = `https://dummyjson.com/posts/search?q=${search || ""}`;
  const response = await fetch(url);
  if (!response.ok) NotFoundPage;
  console.log("url", url);

  const data = await response.json();
  if (!data.posts) {
    throw new Error("No posts found");
  }
  return data.posts;
}

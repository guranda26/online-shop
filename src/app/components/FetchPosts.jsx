export async function fetchPosts(search) {
  const url = `https://dummyjson.com/posts/search?q=${search || ""}`;
  const response = await fetch(url);
  console.log("url", url);

  const data = await response.json();
  return data.posts;
}

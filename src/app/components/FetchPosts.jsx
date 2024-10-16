import NotFoundPage from "../not-found";

export async function fetchPosts(search = "", sortBy = "title", order = "asc") {
  let url = `https://dummyjson.com/posts?search=${search}`;

  if (sortBy && order) {
    url += `&sortBy=${sortBy}&order=${order}`;
  }
  const response = await fetch(url);
  if (!response.ok) NotFoundPage;
  console.log("url", url);

  const data = await response.json();
  if (!data.posts) {
    throw new Error("No posts found");
  }
  return data.posts;
}

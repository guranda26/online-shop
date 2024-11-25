export interface Post {
  id: number;
  title: string;
  body: string;
}

interface SearchParams {
  search: string;
  sortBy: string;
  order: string;
}

export interface PostsPageType {
  searchParams: SearchParams;
}

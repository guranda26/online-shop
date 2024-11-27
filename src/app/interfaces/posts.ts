export interface Post {
  id: number;
  title_en?: string;
  title_ka?: string;
  title_es?: string;
  title: string;
  body: string;
  reactions_likes?: number;
  reactions_dislikes?: number;
}

interface SearchParams {
  search: string;
  sortBy: string;
  order: string;
}

export interface PostsAndProductPageType {
  searchParams: SearchParams;
}

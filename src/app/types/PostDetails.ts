import { Post } from "../interfaces/posts";

export type PostDetails = Post & {
  tags_0: string;
  tags_1: string;
  tags_2: string;
  reactions_likes: number;
  reactions_dislikes: number;
  views: string;
};

export type SetPosts = {
  (posts: Post[]): void;
};

export type NewPost = Omit<Post, "id">;

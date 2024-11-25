import { Post } from "../interfaces/posts";

export type PostDetails = Post & {
  tags: [];
  reactions: {
    likes: string;
    dislikes: string;
  };
  views: string;
};

export type SetPosts = {
  (posts: Post[]): void;
};

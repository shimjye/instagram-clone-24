// /types/index.ts
export interface Post {
    id: string;
    userId: string;
    username: string;
    imageUrl: string;
    likes: number;
    comments: Comment[];
  }
  
  export interface Comment {
    id: string;
    postId: string;
    username: string;
    content: string;
  }
  
  export interface User {
    id: string;
    username: string;
    avatarUrl: string;
  }
  
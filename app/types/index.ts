// /types/index.ts
export interface Post {
    id: number;
    userId: string;
    username: string;
    imageUrl: string;
    likes: number;
    comments: Comment[];
  }
  
  export interface Comment {
    id: number;
    postId: string;
    username: string;
    content: string;
  }
  
  export interface User {
    id: number;
    username: string;
    avatarUrl: string;
  }
  
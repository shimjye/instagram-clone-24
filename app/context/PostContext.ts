// app/contexts/PostContext.tsx
import { createContext, useState, ReactNode } from 'react';
import { posts } from '../../lib/data';
import { Post } from '../types';

interface PostContextType {
  posts: Post[];
  addLike: (postId: string) => void;
}

export const PostContext = createContext<PostContextType | null>(null);

export const PostProvider = ({ children }: { children: ReactNode }) => {
  const [postList, setPostList] = useState(posts);

  const addLike = (postId: string) => {
    setPostList(prevPosts =>
      prevPosts.map(post =>
        post.id === postId ? { ...post, likes: post.likes + 1 } : post
      )
    );
  };

  return (
    <PostContext.Provider value={{ posts: postList, addLike }}>
      {children}
    </PostContext.Provider>
  );
};
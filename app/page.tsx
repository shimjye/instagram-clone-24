'use client';

import React from 'react';
import Navbar from '../components/Navbar';
import PostCard from '../components/PostCard';
import StoryList from '../components/StoryList';

const HomePage: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto p-4">
      <StoryList />
      <div className="space-y-4">
        {[1, 2, 3].map((postId) => (
          <PostCard key={postId} postId={postId} />
        ))}
      </div>
      <Navbar />
    </div>
  );
};

export default HomePage;
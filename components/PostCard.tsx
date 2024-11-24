import React from 'react';

interface PostCardProps {
  user: { username: string; profilePic: string };
  image: string;
  likes: number;
  comments: number;
}

const PostCard: React.FC<PostCardProps> = ({ user, image, likes, comments }) => {
  return (
    <div className="rounded-md shadow-lg bg-white">
      <div className="flex items-center p-4">
        <img src={user.profilePic} alt="profile" className="w-10 h-10 rounded-full" />
        <span className="ml-2 font-semibold">{user.username}</span>
      </div>
      <img src={image} alt="post" className="w-full" />
      <div className="flex items-center justify-between px-4 py-2">
        <div className="flex space-x-2">
          <span className="icon">❤️</span>
          <span className="icon">💬</span>
          <span className="icon">🔗</span>
        </div>
        <span>{likes} likes</span>
      </div>
      <div className="px-4 py-2 text-gray-600">{comments} comments</div>
    </div>
  );
};

export default PostCard;
import React from 'react';

interface PostCardProps {
  id: number;
}

const PostCard: React.FC<PostCardProps> = ({ id }) => {
  return (
    <div className="border rounded-lg p-4">
      <img
        src={`https://via.placeholder.com/150`}
        alt="Post"
        className="w-full h-60 object-cover rounded-lg"
      />
      <div className="flex items-center space-x-4 mt-4">
        <button><i className="fa fa-heart text-red-500"></i></button>
        <button><i className="fa fa-comment"></i></button>
        <button><i className="fa fa-share"></i></button>
      </div>
      <p className="mt-2 text-gray-600">This is a sample post description...</p>
    </div>
  );
};

export default PostCard;
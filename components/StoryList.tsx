import React from 'react';

const StoryList: React.FC = () => {
  return (
    <div className="flex space-x-4 overflow-x-auto p-2">
      {[...Array(10)].map((_, i) => (
        <div key={i} className="flex flex-col items-center">
          <img
            src={`https://via.placeholder.com/150`}
            alt="Story"
            className="w-16 h-16 rounded-full border-2 border-red-500"
          />
          <p className="text-xs">User {i + 1}</p>
        </div>
      ))}
    </div>
  );
};

export default StoryList;
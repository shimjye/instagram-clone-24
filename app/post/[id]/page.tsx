import React from 'react';
import { useRouter } from 'next/router';

const PostPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className="bg-gray-50 min-h-screen flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-md p-4 w-full max-w-md">
        <img src="/path/to/image.jpg" alt="Post Image" className="w-full h-auto rounded-md" />
        <div className="flex items-center justify-between mt-4">
          <p className="font-bold">user123</p>
          <button className="text-blue-500">Follow</button>
        </div>
        <p className="mt-2">This is a sample post description.</p>
        <div className="mt-4">
          <p className="text-gray-600">Comments</p>
          <div className="flex space-x-2 mt-2">
            <p className="font-bold">commenter1</p>
            <p>This is a sample comment.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostPage;
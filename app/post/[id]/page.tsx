import React from 'react';
import { useRouter } from 'next/router';
import Navbar from '../../../components/Navbar';

const PostPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className="max-w-3xl mx-auto p-4">
      <img
        src={`https://via.placeholder.com/150`}
        alt="Post"
        className="w-full h-96 object-cover rounded-lg"
      />
      <div className="flex items-center space-x-4 mt-4">
        <button><i className="fa fa-heart text-red-500"></i></button>
        <button><i className="fa fa-comment"></i></button>
        <button><i className="fa fa-share"></i></button>
      </div>
      <p className="mt-2 text-gray-600">Post description here...</p>
      <Navbar />
    </div>
  );
};

export default PostPage;
import React from 'react';
import { useRouter } from 'next/router';
import Navbar from '../../../components/Navbar';

const ProfilePage: React.FC = () => {
  const router = useRouter();
  const { username } = router.query;

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="p-4">
        <div className="flex items-center space-x-4">
          <img
            src="/path/to/profile-pic.jpg"
            alt="Profile Picture"
            className="w-20 h-20 rounded-full"
          />
          <div>
            <h1 className="text-xl font-bold">{username}</h1>
            <p>Posts: 34 | Followers: 1200 | Following: 180</p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2 mt-4">
          <img src="/path/to/image1.jpg" alt="Post 1" className="w-full h-full object-cover" />
          <img src="/path/to/image2.jpg" alt="Post 2" className="w-full h-full object-cover" />
          <img src="/path/to/image3.jpg" alt="Post 3" className="w-full h-full object-cover" />
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default ProfilePage;
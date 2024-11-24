import React from 'react';
import { useRouter } from 'next/router';
import Navbar from '../../../components/Navbar';

const ProfilePage: React.FC = () => {
  const router = useRouter();
  const { username } = router.query;

  return (
    <div className="max-w-3xl mx-auto p-4">
      <div className="flex items-center space-x-4">
        <img
          src="https://via.placeholder.com/150"
          alt="Profile"
          className="w-24 h-24 rounded-full"
        />
        <div>
          <h2 className="text-xl font-semibold">{username}</h2>
          <p>Posts: 20 | Followers: 120 | Following: 80</p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2 mt-4">
        {[...Array(9)].map((_, i) => (
          <img
            key={i}
            src={`https://via.placeholder.com/150`}
            alt="Post"
            className="w-full h-full object-cover"
          />
        ))}
      </div>
      <Navbar />
    </div>
  );
};

export default ProfilePage;
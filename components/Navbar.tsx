import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg py-2 flex justify-around items-center">
      <Link href="/">
        <i className="fa fa-home text-2xl"></i>
      </Link>
      <Link href="/explore">
        <i className="fa fa-search text-2xl"></i>
      </Link>
      <Link href="/notifications">
        <i className="fa fa-bell text-2xl"></i>
      </Link>
      <Link href="/profile/username">
        <i className="fa fa-user text-2xl"></i>
      </Link>
    </nav>
  );
};

export default Navbar;
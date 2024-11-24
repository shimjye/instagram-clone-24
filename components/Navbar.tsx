import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed bottom-0 w-full flex justify-around bg-white py-2 border-t">
      <span className="icon">🏠</span>
      <span className="icon">🔍</span>
      <span className="icon">🎥</span>
      <span className="icon">🛒</span>
      <span className="icon">👤</span>
    </nav>
  );
};

export default Navbar;
import React from 'react';

const Header = () => {
  return (
    <header className="flex items-center justify-between px-4 py-2 border-b">
      <div className="text-xl font-bold">Instagram</div>
      <input
        type="text"
        placeholder="Search"
        className="hidden sm:block px-2 py-1 border rounded-md"
      />
      <div className="flex space-x-4">
        <span className="icon">🔔</span>
        <span className="icon">💌</span>
        <span className="icon">👤</span>
      </div>
    </header>
  );
};

export default Header;
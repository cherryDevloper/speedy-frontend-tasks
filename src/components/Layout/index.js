import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="bg-gray-100 min-h-screen ">
      <div className="container mx-auto px-4 py-8">{children}</div>
    </div>
  );
};

export default Layout;

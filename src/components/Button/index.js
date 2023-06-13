import React from 'react';

const Button = ({ onClick, className, children }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 bg-blue-500 text-white font-medium rounded-md ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;

import React from 'react';

const Button = ({ onClick, className, children, type }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 mr-2 ${
        type === 'warning'
          ? 'bg-red-400'
          : type === 'success'
          ? 'bg-green-400'
          : 'bg-orange-400'
      } text-white font-medium rounded-md ${className} `}
    >
      {children}
    </button>
  );
};

export default Button;

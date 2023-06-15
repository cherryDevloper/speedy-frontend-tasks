import React from 'react';

const Button = ({ onClick, className, children, type, icon }) => {
  return (
    <button
      onClick={onClick}
      className={`p-2  mr-2 flex items-center justify-center min-w-[5rem] ${
        type === 'warning'
          ? 'bg-red-400'
          : type === 'success'
          ? 'bg-green-400'
          : 'bg-orange-400'
      } text-white font-medium rounded-md ${className && className} `}
    >
      {children} {icon && icon}
    </button>
  );
};

export default Button;

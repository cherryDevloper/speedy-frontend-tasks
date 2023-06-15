import React from 'react';

const Tag = ({ tag, onRemove, color }) => {
  console.log('color', color);
  return (
    <div
      className={`bg-${color} flex items-center py-1 px-2 rounded mr-2 mb-2 border bg-opacity-10 border-${color}  `}
    >
      <span className={`text-${color} text-xs font-bold`}>{tag}</span>
      {onRemove && (
        <span
          className={`ml-2 cursor-pointer `}
          onClick={onRemove}
        >
          &times;
        </span>
      )}
    </div>
  );
};

export default Tag;

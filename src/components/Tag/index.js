import React from 'react';

const Tag = ({ tag, onRemove }) => {
  return (
    <div className="bg-gray-200 text-gray-800 py-1 px-2 rounded mr-2 mb-2">
      {tag}
      {onRemove && (
        <span
          className="ml-2 cursor-pointer"
          onClick={onRemove}
        >
          &times;
        </span>
      )}
    </div>
  );
};

export default Tag;

import React, { useState } from 'react';
import Button from '../Button';
import Tag from '../Tag';

const AddTopic = ({ onAddTopic, setIsAdding }) => {
  const [newTopic, setNewTopic] = useState('');
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState('');

  const handleAddTopic = () => {
    if (newTopic.trim() !== '') {
      onAddTopic({ topic: newTopic, tags: tags });
      setNewTopic('');
      setTags([]);
      setNewTag('');
      setIsAdding(false);
    }
  };

  const handleAddTag = () => {
    if (newTag.trim() !== '') {
      setTags([...tags, newTag]);
      setNewTag('');
    }
  };

  const handleRemoveTag = (index) => {
    const updatedTags = [...tags];
    updatedTags.splice(index, 1);
    setTags(updatedTags);
  };

  return (
    <div className="flex justify-between  mb-3">
      <div className="flex flex-col w-full">
        <div className="mb-4 w-full">
          <input
            type="text"
            placeholder="Enter a new topic"
            value={newTopic}
            onChange={(e) => setNewTopic(e.target.value)}
            className="border border-gray-400 rounded py-2 px-4 mr-2 w-full"
          />
        </div>
        <div className="mb-4 w-full">
          <input
            type="text"
            placeholder="Enter tags (up to 5)"
            value={newTag}
            onChange={(e) => setNewTag(e.target.value)}
            className="border border-gray-400 rounded py-2 px-4 mr-2"
          />
          <button
            onClick={handleAddTag}
            disabled={tags.length >= 5 || newTag.trim() === ''}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
          >
            Add Tag
          </button>
        </div>
        <div className="flex flex-wrap mb-4">
          {tags.map((tag, index) => (
            <Tag
              key={index}
              tag={tag}
              onRemove={() => handleRemoveTag(index)}
            />
          ))}
        </div>
      </div>
      <div className="flex items-end mb-2 w-full justify-end">
        <Button onClick={() => setIsAdding(false)}>Cancel</Button>
        <Button
          type={'success'}
          onClick={handleAddTopic}
          className=" hover:bg-green-600 text-white py-2 px-4 ml-2 rounded transition duration-300"
        >
          Add Topic
        </Button>
      </div>
    </div>
  );
};

export default AddTopic;

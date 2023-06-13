import React from 'react';
import Tag from '../Tag';
import Button from '../Button';
import { useNavigate } from 'react-router-dom';

const TopicListItem = ({ topic }) => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between mt-4 bg-gray-100 rounded p-4 border border-gray-300 transition">
      <div className="">
        <h3 className="text-lg font-bold">{topic.topic}</h3>
        {topic.tags.length > 0 && (
          <div className="flex flex-wrap mt-2">
            {topic.tags.map((tag, tagIndex) => (
              <Tag
                tag={tag}
                key={tagIndex}
              />
            ))}
          </div>
        )}
      </div>
      <div className="">
        <Button onClick={() => navigate('/article-writer-page')}>Write</Button>
      </div>
    </div>
  );
};

export default TopicListItem;

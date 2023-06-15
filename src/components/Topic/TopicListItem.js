import React from 'react';
import Tag from '../Tag';
import Button from '../Button';
import { useNavigate } from 'react-router-dom';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
const TopicListItem = ({ topic, removeTopic }) => {
  const navigate = useNavigate();
  const getRandomColor = () => {
    const colors = ['red-500', 'blue-500', 'green-500', 'yellow-500'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  return (
    <div className="flex justify-between  bg-white border-orange-100 border  p-4   transition ">
      <div className="">
        <h3 className="text-lg font-bold text-gray-600 mb-4">{topic.topic}</h3>
        {topic.tags.length > 0 && (
          <div className="flex flex-wrap mt-2">
            {topic.tags.map((tag, tagIndex) => (
              <Tag
                tag={tag}
                key={tagIndex}
                color={getRandomColor()}
              />
            ))}
          </div>
        )}
      </div>
      <div className=" ">
        {removeTopic && (
          <Button
            onClick={() => removeTopic(topic)}
            type={'warning'}
          >
            remove topic
          </Button>
        )}
        <Button
          onClick={() => navigate('/article-writer-page')}
          icon={<ChevronRightIcon className="w-4" />}
        >
          Write
        </Button>
      </div>
    </div>
  );
};

export default TopicListItem;

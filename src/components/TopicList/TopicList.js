import React from 'react';
import Tag from '../Tag';

const TopicList = ({ topics }) => {
  return (
    <div>
      {topics.map((topic, index) => (
        <div
          key={index}
          className="mt-4 bg-gray-100 rounded p-4 border border-gray-300 transition"
        >
          <h3 className="text-lg font-bold">{topic.topic}</h3>
          {topic.tags.length > 0 && (
            <div className="flex flex-wrap mt-2">
              {topic.tags.map((tag, tagIndex) => (
                // <div
                //   key={tagIndex}
                //   className="bg-gray-200 text-gray-800 py-1 px-2 rounded mr-2 mb-2"
                // >
                //   {tag}
                // </div>
                <Tag
                  tag={tag}
                  key={tagIndex}
                />
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default TopicList;

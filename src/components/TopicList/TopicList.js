import React from 'react';
import TopicListItem from './TopicListItem';

const TopicList = ({ topics }) => {
  return (
    <div>
      {topics.map((topic, index) => (
        <TopicListItem
          topic={topic}
          key={index}
        />
      ))}
    </div>
  );
};

export default TopicList;

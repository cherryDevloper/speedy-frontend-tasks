import React from 'react';
import TopicListItem from './TopicListItem';
import { recommendedTopics } from '../../constant/recommendedTopics';

const TopicList = ({ topics, removeTopic }) => {
  const renderTopicList = (topicList, title, removeTopic) => {
    return (
      <>
        <div className="bg-stone-100 rounded-md p-2">
          <h3 className="p-2 text-gray-700">{title}</h3>
        </div>
        {topicList.map((topic, index) => (
          <TopicListItem
            topic={topic}
            key={index}
            removeTopic={removeTopic}
          />
        ))}
      </>
    );
  };

  return (
    <div>
      <div className="w-full border border-gray-100 rounded-md p-2">
        {topics.length > 0 &&
          renderTopicList(topics, 'Your Topics', removeTopic)}

        {renderTopicList(recommendedTopics, 'Recommended Topics')}
      </div>
    </div>
  );
};

export default TopicList;

import React, { useState } from 'react';
import TopicList from '../../components/Topic/TopicList';
import AddTopic from '../../components/Topic/AddTopic';
import Button from '../../components/Button';

const Topics = ({ recommendedTopics }) => {
  const [topics, setTopics] = useState([]);
  const [isAdding, setIsAdding] = useState(false);

  const removeTopic = (topic) => {
    const filterTopic = topics.filter((e) => e !== topic);
    setTopics(filterTopic);
  };
  const handleAddTopic = (newTopic) => {
    setTopics([...topics, newTopic]);
  };
  return (
    <div className="bg-white p-4   rounded-md w-full">
      {isAdding ? (
        <AddTopic
          onAddTopic={handleAddTopic}
          setIsAdding={setIsAdding}
        />
      ) : (
        <div className="flex justify-end mb-2">
          <Button
            onClick={() => setIsAdding(true)}
            type={'success'}
          >
            Add Topic
          </Button>
        </div>
      )}
      <TopicList
        topics={topics}
        removeTopic={removeTopic}
        recommendedTopics={recommendedTopics}
      />
    </div>
  );
};

export default Topics;

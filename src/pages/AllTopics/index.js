import React, { useState } from 'react';
import TopicList from '../../components/TopicList/TopicList';
import AddTopic from '../../components/TopicList/AddTopic';
import Button from '../../components/Button';
import { allTopics } from '../../constant/recommendedTopics';
const AllTopics = () => {
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
        <div className="flex justify-end">
          <Button onClick={() => setIsAdding(true)}>Add Topic</Button>
        </div>
      )}
      <TopicList
        topics={topics}
        recommendedTopics={allTopics}
        removeTopic={removeTopic}
      />
    </div>
  );
};

export default AllTopics;

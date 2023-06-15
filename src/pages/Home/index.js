import React, { useState } from 'react';
import TopicList from '../../components/TopicList/TopicList';
import AddTopic from '../../components/TopicList/AddTopic';
import Button from '../../components/Button';

const Home = () => {
  const [topics, setTopics] = useState([]);
  const [isAdding, setIsAdding] = useState(false);
  const handleAddTopic = (newTopic) => {
    setTopics([...topics, newTopic]);
  };
  const removeTopic = (topic) => {
    const filterTopic = topics.filter((e) => e !== topic);
    setTopics(filterTopic);
  };
  return (
    <div
      className="bg-white
     p-4 flex flex-col rounded-md"
    >
      {isAdding ? (
        <AddTopic
          onAddTopic={handleAddTopic}
          setIsAdding={setIsAdding}
        />
      ) : (
        <div className="w-[40wh] flex justify-end">
          <Button onClick={() => setIsAdding(true)}>Add Topic</Button>
        </div>
      )}

      <TopicList
        topics={topics}
        removeTopic={removeTopic}
      />
    </div>
  );
};

export default Home;

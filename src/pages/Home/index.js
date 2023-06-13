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
  return (
    <div>
      {isAdding ? (
        <AddTopic
          onAddTopic={handleAddTopic}
          setIsAdding={setIsAdding}
        />
      ) : (
        <Button onClick={() => setIsAdding(true)}>Add Topic</Button>
      )}

      <TopicList topics={topics} />
    </div>
  );
};

export default Home;

import React, { useState } from 'react';
import TopicList from '../../components/TopicList/TopicList';
import AddTopic from '../../components/TopicList/AddTopic';
import Button from '../../components/Button';
import Navigation from '../../components/Navbar';
import Navbar from '../../components/Navbar';

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
        <div className="">
          <div className=" flex justify-end">
            <Navbar />
            <Button onClick={() => setIsAdding(true)}>Add Topic</Button>
          </div>
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

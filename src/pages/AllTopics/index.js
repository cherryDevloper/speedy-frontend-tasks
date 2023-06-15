import React from 'react';
import { allTopics } from '../../constant/recommendedTopics';
import Topics from '../../components/Topic';

const AllTopics = () => {
  return <Topics recommendedTopics={allTopics} />;
};

export default AllTopics;

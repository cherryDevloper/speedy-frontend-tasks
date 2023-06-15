import React from 'react';

import { technologyTopics } from '../../constant/recommendedTopics';
import Topics from '../../components/Topic';

const TechTopics = () => {
  return <Topics recommendedTopics={technologyTopics} />;
};

export default TechTopics;

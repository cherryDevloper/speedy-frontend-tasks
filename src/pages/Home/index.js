import React, { useState } from 'react';

import TabBar from '../../components/TabBar';

const Home = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  return (
    <div className="bg-white p-4 rounded-md w-full">
      <TabBar
        activeTab={activeCategory}
        setActiveTab={setActiveCategory}
      />
    </div>
  );
};

export default Home;

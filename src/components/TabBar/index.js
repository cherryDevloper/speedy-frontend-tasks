import React from 'react';
import AllTopics from '../../pages/AllTopics';
import TechTopics from '../../pages/Technology';

const TabBar = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 0, name: 'All' },
    { id: 1, name: 'Technology' },
    { id: 2, name: 'Science' },
    { id: 3, name: 'Art' },
    { id: 4, name: 'Sports' },
  ];

  const TabContent = ({ tabName }) => {
    switch (tabName) {
      case 'All':
        return <AllTopics />;
      case 'Technology':
        return <TechTopics />;
      case 'Science':
        return <div>Content for Science tab</div>;
      case 'Art':
        return <div>Content for Art tab</div>;
      case 'Sports':
        return <div>Content for Sports tab</div>;
      default:
        return null;
    }
  };

  return (
    <div>
      <nav className="flex items-center justify-start bg-gray-100 p-4 w-full">
        <ul className="flex space-x-4">
          {tabs.map((tab) => (
            <li key={tab.id}>
              <button
                type="button"
                className={`text-gray-800 font-medium hover:text-gray-600 transition duration-300 ${
                  activeTab === tab.name ? 'border-b-2 border-orange-400' : ''
                }`}
                onClick={() => setActiveTab(tab.name)}
              >
                {tab.name}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <div className="mt-4 w-full">
        <TabContent tabName={activeTab} />
      </div>
    </div>
  );
};

export default TabBar;

import React, { useState } from 'react';

const Jobtabs = () => {
  const [activeTab, setActiveTab] = useState(1);

  const tabs = [
    { id: 1, title: 'All Jobs', content: 'Content for Tab 1' },
    { id: 2, title: 'Applied', content: 'Content for Tab 2' },
    { id: 3, title: 'Interviews', content: 'Content for Tab 3' },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border-none">
      <div className="flex border-none   space-x-8 ">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`py-2 px-4 text-sm font-medium border-none ${activeTab === tab.id ? ' underline text-blue-500' : 'text-gray-600 hover:text-blue-500'}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="mt-4">
        {tabs.find(tab => tab.id === activeTab)?.content}
      </div>
    </div>
  );
};

export default Jobtabs;

import React, { useState } from "react";

const TabFilter = () => {
  const [activeTab, setActiveTab] = useState("Semua");

  const tabs = ["Semua", "Indonesia", "Korea", "Jepang", "China", "Thailand"];

  return (
    <div className="overflow-x-auto scrollbar-hide">
      <div className="flex gap-5 p-5">
        {tabs.map((tab) => (
          <div key={tab} className={`py-2 px-5 rounded-xl text-base ${activeTab === tab ? "bg-lime-600 font-bold text-white" : "text-lime-700"}`} onClick={() => setActiveTab(tab)}>
            <p>{tab}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabFilter;

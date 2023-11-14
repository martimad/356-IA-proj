import React from "react";
//import Card from "./card";

const Content = ({ content, activeTab }) => {
  const tabData = content[activeTab];

  const renderItem = (item) => (
    <div key={item.title} className="item">
      <h2>{item.title}</h2>
      {item.items && item.items.map((subitem) => renderItem(subitem))}
    </div>
  );

  return (
    <div className="content">
      {tabData.items.map((item) => renderItem(item))}
    </div>
  );
};

export default Content;

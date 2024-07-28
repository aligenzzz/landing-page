import React from "react";
import "./ContentBlock.styles.scss";

const ContentBlock = ({ title, contentData }) => {
  return (
    <div className="content-block">
      <h2 className="title">{title}</h2>
      <div className="content">
        {contentData.map((item, index) => (
          <div key={index} className="item">
            <p className="item-title">{item.title}</p>
            <p className="item-text">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentBlock;

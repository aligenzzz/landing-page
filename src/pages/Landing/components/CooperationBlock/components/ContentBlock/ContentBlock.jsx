import React from "react";
import "./ContentBlock.styles.scss";

const ContentBlock = ({ title, contentData }) => {
  return (
    <div className="content-block">
      <h2 className="title" data-aos="fade-right">
        {title}
      </h2>
      <div className="content" data-aos="fade-up">
        {contentData.map((item, index) => (
          <div key={index} className="item">
            <p className="item-title" data-aos="fade-up">
              {item.title}
            </p>
            <p className="item-text" data-aos="fade-up">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentBlock;

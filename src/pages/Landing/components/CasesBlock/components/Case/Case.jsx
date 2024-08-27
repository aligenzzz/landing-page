import React from "react";
import "./Case.styles.scss";

const Case = ({ caseData }) => {
  return (
    <div className="case">
      <img src={caseData.image} alt={caseData.name} className="image" />
      <div className="details">
        <p className="name">{caseData.name}</p>

        <div className="mobile-block">
          <img
            src={caseData.image}
            alt={caseData.name}
            className="image mobile-image"
          />
          <p className="description">{caseData.description}</p>
        </div>

        <div className="table">
          <div className="column">
            <p className="header">Категория</p>
            <p className="value">{caseData.category}</p>
          </div>
          <div className="line-divider"></div>
          <div className="column">
            <p className="header">Тема</p>
            <p className="value">{caseData.theme}</p>
          </div>
          <div className="line-divider"></div>
          <div className="column">
            <p className="header">Концепт</p>
            <p className="value">{caseData.concept}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Case;

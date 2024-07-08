import React from "react";
import "./Case.styles.scss";
import { ReactComponent as StarIcon } from "@assets/icons/star.svg";

const Case = ({ caseData }) => {
  return (
    <div className="case">
      <img src={caseData.image} alt={caseData.name} className="image" />
      <div className="details">
        <p className="name">{caseData.name}</p>
        <p className="description">{caseData.description}</p>
        <div className="table">
          <div className="column">
            <p className="header">Рейтинг</p>
            <div className="rating">
              <p className="value">{caseData.rating}</p>
              <StarIcon className="star" />
            </div>
          </div>
          <div className="line-divider"></div>
          <div className="column">
            <p className="header">Возраст</p>
            <p className="value">{caseData.age}</p>
          </div>
          <div className="line-divider"></div>
          <div className="column">
            <p className="header">Категория</p>
            <p className="value">{caseData.category}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Case;

import React from "react";
import "./MainBlock.styles.scss";
import ApplicationButton from "@components/shared/ApplicationButton";
import PhoneImage from "@assets/images/phone.png";

const MainBlock = () => {
  return (
    <div className="main-block">
      <h1 className="title">
        Вот где начинаются ваши свершения
        <img src={PhoneImage} alt="Phone" className="phone-image" />
        <ApplicationButton />
      </h1>
    </div>
  );
};

export default MainBlock;

import React from "react";
import "./MainBlock.styles.scss";
import ApplicationButton from "@components/shared/ApplicationButton";
import PhoneImage from "@assets/images/phone.png";

const MainBlock = () => {
  return (
    <div className="main-block">
      <div className="main-content">
        <h1>Разработка мобильных приложений</h1>
        <p>
          Мы создаем приложения, которые помогают бизнесу развиваться,
          зарабатывать больше и увеличивать точки контакта с пользователями.
        </p>
        <ApplicationButton />

        <img src={PhoneImage} alt="Phone" className="phone-image" />
      </div>
    </div>
  );
};

export default MainBlock;

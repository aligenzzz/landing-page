import React from "react";
import "./MainBlock.styles.scss";
import RoundedButton from "@components/shared/RoundedButton";
import PhoneImage from "@assets/images/phone.png";
import { useScroll } from "@store/ScrollContext";

const MainBlock = () => {
  const targetRef = useScroll();

  const handleScroll = () => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="main-block">
      <div className="main-content">
        <h1 data-aos="fade-up">Разработка мобильных приложений</h1>
        <p data-aos="fade-right">
          Мы создаем приложения, которые помогают бизнесу развиваться,
          зарабатывать больше и увеличивать точки контакта с пользователями.
        </p>
        <RoundedButton text="Оформить заявку" onClick={handleScroll} />

        <div className="phone-wrapper">
          <div className="phone">
            <img src={PhoneImage} alt="Phone" className="phone-image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBlock;

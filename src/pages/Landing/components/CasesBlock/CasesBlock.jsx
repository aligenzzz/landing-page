import React, { useState } from "react";
import "./CasesBlock.styles.scss";
import { ReactComponent as ArrowIcon } from "@assets/icons/next_arrow.svg";
import { Case } from "./components";
import HuntPriceImage from "@assets/images/cases/hunt_price.png";
import MiLogisticImage from "@assets/images/cases/mi_logistic.png";
import BabyHelperImage from "@assets/images/cases/baby_helper.png";
import FoodTechImage from "@assets/images/cases/food_tech.png";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import { useSwipeable } from "react-swipeable";

const cases = [
  {
    name: "BabyHelper",
    description:
      "Реализация фронтенд части мобильного приложения, связанного со вскармливанием ребенка, контролем за весом, фиксирование динамики роста, получением консультаций, а также интеграцией ИИ чата с консультацией.",
    image: BabyHelperImage,
    category: "Приложения",
    theme: "Здоровье",
    concept: "MVP",
    gradient: "#ff7d6a",
  },
  {
    name: "FoodTech",
    description:
      "Реализация приложения по доставке морепродуктов под ключ: регистрация/авторизация, каталог товаров, описание товаров, личный кабинет, платежная система.",
    image: FoodTechImage,
    category: "Приложения",
    theme: "Фудтех",
    concept: "eComm",
    gradient: "#0a7f90",
  },
  {
    name: "HuntPrice",
    description:
      "Приложение-агрегатор, которое объединяет автомобильные ресурсы России, предоставляет достоверные отчеты и помогает пользователям принимать информированные решения о покупке автомобилей.",
    image: HuntPriceImage,
    category: "Приложения",
    theme: "Авто",
    concept: "MVP",
    gradient: "#f49521",
  },
  {
    name: "MiLogistic",
    description:
      "Реализация функций регистрации (авторизации), разработка функционала карт, системы бронирования и личного кабинета, проработка логики ролей (водитель, администратор, пользователь).",
    image: MiLogisticImage,
    category: "Приложения",
    theme: "Логистика",
    concept: "-",
    gradient: "#aed582",
  },
];

const CasesBlock = () => {
  const [activeCase, setActiveCase] = useState(0);

  const handleNext = () => {
    setActiveCase((prev) => (prev + 1) % cases.length);
  };

  const handleCaseSelect = (index) => {
    setActiveCase(index);
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNext,
  });

  return (
    <div className="cases-block" data-aos="fade-right" id="cases">
      <div className="vertical-nav">
        {cases.map((_, index) => (
          <div
            key={index + 1}
            className={`nav-item ${activeCase === index ? "active" : ""}`}
            onClick={() => handleCaseSelect(index)}
          >
            {`0${index + 1}`}
          </div>
        ))}
      </div>
      <div
        className="content"
        style={{ "--gradient-color": cases[activeCase].gradient }}
      >
        <div className="case-item">
          <h2 className="title">Кейсы</h2>
          <div className="case-container" {...swipeHandlers}>
            <SwitchTransition>
              <CSSTransition key={activeCase} timeout={600} classNames="case">
                <Case caseData={cases[activeCase]} />
              </CSSTransition>
            </SwitchTransition>
            <ArrowIcon className="arrow scaled" onClick={handleNext} />
          </div>
        </div>
        <div className="case-footer">
          <div className="status-line">
            {cases.map((_, index) => (
              <div
                key={index + 1}
                className={`line ${activeCase === index ? "active" : ""}`}
              ></div>
            ))}
          </div>

          <div className="circles">
            {cases.map((_, index) => (
              <div
                key={index + 1}
                className={`circle ${activeCase === index ? "active" : ""}`}
                onClick={() => handleCaseSelect(index)}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CasesBlock;

import React, { useState } from "react";
import "./MethodologyBlock.styles.scss";
import { ReactComponent as StarIcon } from "@assets/icons/star.svg";
import { useBlockScrolling } from "@hook/scrolling";
import RoundedButton from "@components/shared/RoundedButton";
import { ScrumModal, WaterfallModal } from "./components";

const MethodologyBlock = () => {
  const [showWaterfallModal, setShowWaterfallModal] = useState(false);
  const openWaterfallModal = () => setShowWaterfallModal(true);
  const closeWaterfallModal = () => setShowWaterfallModal(false);

  const [showScrumModal, setShowScrumModal] = useState(false);
  const openScrumModal = () => setShowScrumModal(true);
  const closeScrumModal = () => setShowScrumModal(false);

  useBlockScrolling(showWaterfallModal);
  useBlockScrolling(showScrumModal);

  return (
    <div className="methodology-block" id="methodology-block">
      <h2 className="title" data-aos="fade-right">
        Работаем по подходящей для Вас методологии
      </h2>
      <div className="content" data-aos="fade-up">
        <div className="column">
          <p className="name">WATERFALL</p>
          <div className="list">
            <div className="item">
              <StarIcon />
              <span>полное ТЗ</span>
            </div>
            <div className="item">
              <StarIcon />
              <span>запуск от 3 мес</span>
            </div>
            <div className="item">
              <StarIcon />
              <span>фиксированная цена</span>
            </div>
          </div>
          <RoundedButton text="Подробнее" onClick={openWaterfallModal} />
        </div>
        <div className="column">
          <div className="name">SCRUM</div>
          <div className="list">
            <div className="item">
              <StarIcon />
              <span>дорожная карта</span>
            </div>
            <div className="item">
              <StarIcon />
              <span>оплата по факту затраченных часов</span>
            </div>
            <div className="item">
              <StarIcon />
              <span>гибкая цена +/-</span>
            </div>
          </div>
          <RoundedButton text="Подробнее" onClick={openScrumModal} />
        </div>
      </div>

      <WaterfallModal
        showModal={showWaterfallModal}
        closeModal={closeWaterfallModal}
      />
      <ScrumModal showModal={showScrumModal} closeModal={closeScrumModal} />
    </div>
  );
};

export default MethodologyBlock;

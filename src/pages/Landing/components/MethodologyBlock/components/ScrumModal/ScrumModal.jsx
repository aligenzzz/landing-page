import React from "react";
import Modal from "../Modal";
import "./ScrumModal.styles.scss";
import { ReactComponent as ArrowRectangleIcon } from "@assets/icons/arrow-rectangle.svg";

const ScrumModal = ({ showModal, closeModal }) => {
  return (
    <Modal
      title="SCRUM"
      text="Данный способ более гибкий и ориентирован на достижение результата. С вами определяем стратегию развития проекта, в короткие сроки запускаем его с минимальными достаточными функциями, а затем совершенствуем доработками согласно пользовательскому отклику по уже действующим функциям."
      content={
        <div className="scrum-content">
          <div className="sprint-container">
            {(() => {
              const sprints = [];
              for (let i = 1; i <= 3; i++) {
                sprints.push(
                  <div className="sprint" key={i}>
                    <div className="title">Спринт {i}</div>
                    <div className="words-block">
                      <div className="word">Планирование</div>
                      <div className="word">Оценка</div>
                      <div className="word">Исполнение</div>
                      <div className="word">Тестирование</div>
                    </div>
                  </div>,
                );
              }
              return sprints;
            })()}
          </div>
          <div className="horizontal-line"></div>
          <div className="arrow-container">
            {(() => {
              const arrows = [];
              for (let i = 0; i < 3; i++) {
                arrows.push(
                  <div className="arrow-wrapper" key={i}>
                    <div className="arrow-title">Запуск</div>
                    <ArrowRectangleIcon className="arrow" />
                  </div>,
                );
              }
              return arrows;
            })()}
          </div>
        </div>
      }
      showModal={showModal}
      closeModal={closeModal}
    />
  );
};

export default ScrumModal;

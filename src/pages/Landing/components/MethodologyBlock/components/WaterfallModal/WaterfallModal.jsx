import React from "react";
import Modal from "../Modal";
import "./WaterfallModal.styles.scss";

const WaterfallModal = ({ showModal, closeModal }) => {
  return (
    <Modal
      title="WATERFALL"
      text="Традиционный способ ведения проектов. Он подойдет вам, если есть конкретный бюджет и сроки на реали&shy;зацию проекта. Мы с вами сразу планируем этапы, рас&shy;пределяем работы, фиксируем сроки и результаты."
      content={
        <div className="waterfall-content">
          <div className="horizontal-line"></div>
          <div className="line-container">
            {(() => {
              const lines = [];
              for (let i = 0; i < 6; i++) {
                lines.push(<div className="line" key={i} />);
              }
              return lines;
            })()}
          </div>
          <div className="circle-container">
            <div className="circle-wrapper">
              <div className="circle-title">Старт</div>
              <div className="circle">1</div>
              <div className="circle-text">Входящие требования</div>
            </div>
            <div className="circle-wrapper">
              <div className="circle-title">Анализ</div>
              <div className="circle">2</div>
              <div className="circle-text">Разработка ТЗ</div>
            </div>
            <div className="circle-wrapper">
              <div className="circle-title">Дизайн</div>
              <div className="circle">3</div>
              <div className="circle-text">
                Прототипирование и визуальный дизайн
              </div>
            </div>
            <div className="circle-wrapper">
              <div className="circle-title">Разработка</div>
              <div className="circle">4</div>
              <div className="circle-text">Верстка и бэкенд</div>
            </div>
            <div className="circle-wrapper">
              <div className="circle-title">Тестирование</div>
              <div className="circle">5</div>
              <div className="circle-text">Верстка и бэкенд</div>
            </div>
            <div className="circle-wrapper">
              <div className="circle-title">Запуск</div>
              <div className="circle">6</div>
              <div className="circle-text"></div>
            </div>
          </div>
        </div>
      }
      showModal={showModal}
      closeModal={closeModal}
    />
  );
};

export default WaterfallModal;

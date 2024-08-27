import React, { useState, useEffect } from "react";
import "./ConnectionBlock.styles.scss";
import RoundedButton from "@components/shared/RoundedButton";
import { ReactComponent as CloseIcon } from "@assets/icons/close.svg";
import { useBlockScrolling } from "@hook/scrolling";

const ConnectionBlock = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useBlockScrolling(isModalOpen);

  return (
    <div className="connection-block">
      <h1 className="title" data-aos="fade-right">
        Давайте поговорим о нашем продукте
      </h1>
      <button className="outlined-button" onClick={() => setIsModalOpen(true)}>
        Связаться с нами
      </button>

      {isModalOpen && (
        <div className="overlay">
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-title">Заявка на обратный звонок</div>
            <div className="form">
              <input placeholder="Ваше имя" />
              <input placeholder="Телефон или email" />
              <p className="subtext">
                Нажимая на кнопку «Отправить», вы даете свое согласие на
                обработку персональных данных в соответствии с целями указанными
                в{" "}
                <a href="/landing-page">
                  Политике обработки персональных данных
                </a>
              </p>
              <RoundedButton text="Отправить" className="outlined-button" />
            </div>
            <CloseIcon
              className="close-button scaled"
              onClick={() => setIsModalOpen(false)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ConnectionBlock;

import React from "react";
import { ReactComponent as TelegramIcon } from "@assets/icons/telegram.svg";
import { ReactComponent as LinkedinIcon } from "@assets/icons/linkedin.svg";
import { ReactComponent as MessageIcon } from "@assets/icons/message.svg";
import "./FloatingButton.styles.scss";

const FloatingButton = () => {
  return (
    <div className="floating-button">
      <button className="main-button">Отправьте нам сообщение</button>
      <div className="dropdown-menu">
        <button className="dropdown-item">
          <TelegramIcon />
          Сообщение в Telegram
        </button>
        <button className="dropdown-item">
          <LinkedinIcon />
          Сообщение в Linkedin
        </button>
        <button className="dropdown-item">
          <MessageIcon />
          Написать сообщение
        </button>
      </div>
    </div>
  );
};

export default FloatingButton;

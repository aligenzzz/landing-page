import React from "react";
import { ReactComponent as TelegramIcon } from "@assets/icons/telegram.svg";
import { ReactComponent as LinkedinIcon } from "@assets/icons/linkedin.svg";
import "./FloatingButton.styles.scss";

const FloatingButton = () => {
  return (
    <div className="floating-button">
      <button className="main-button">Отправьте нам сообщение</button>
      <div className="dropdown-wrapper">
        <div className="dropdown-menu">
          <button className="dropdown-item scaled">
            <TelegramIcon />
            Сообщение в Telegram
          </button>
          <button className="dropdown-item scaled">
            <LinkedinIcon />
            Сообщение в Linkedin
          </button>
        </div>
      </div>
    </div>
  );
};

export default FloatingButton;

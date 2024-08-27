import React from "react";
import { ReactComponent as TelegramIcon } from "@assets/icons/telegram.svg";
import { ReactComponent as WhatsappIcon } from "@assets/icons/whatsapp.svg";
import { ReactComponent as ViberIcon } from "@assets/icons/viber.svg";
import { ReactComponent as EmailIcon } from "@assets/icons/email.svg";
import "./FloatingButton.styles.scss";

const FloatingButton = () => {
  return (
    <div className="floating-button">
      <button className="main-button">Отправьте нам сообщение</button>
      <div className="dropdown-wrapper">
        <div className="dropdown-menu">
          <a
            href="https://t.me/veon_tech"
            className="dropdown-item scaled"
            target="_blank"
            rel="noopener noreferrer"
            title="Telegram"
          >
            <TelegramIcon />
            Сообщение в Telegram
          </a>
          <a
            href="https://wa.me/375293134627"
            className="dropdown-item scaled"
            target="_blank"
            rel="noopener noreferrer"
            title="WhatsApp"
          >
            <WhatsappIcon />
            Сообщение в WhatsApp
          </a>
          <a
            href="viber://chat?number=375293134627"
            className="dropdown-item scaled"
            target="_blank"
            rel="noopener noreferrer"
            title="Viber"
          >
            <ViberIcon />
            Сообщение в Viber
          </a>
          <a
            href="mailto:clients@veon-tech.ru"
            className="dropdown-item scaled"
            target="_blank"
            rel="noopener noreferrer"
            title="Email"
          >
            <EmailIcon />
            Сообщение на почту
          </a>
        </div>
      </div>
    </div>
  );
};

export default FloatingButton;

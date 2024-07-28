import React from "react";
import { ReactComponent as TelegramIcon } from "@assets/icons/telegram.svg";
import { ReactComponent as InstagramIcon } from "@assets/icons/instagram.svg";
import { ReactComponent as WhatsappIcon } from "@assets/icons/whatsapp.svg";
import { ReactComponent as LinkedinIcon } from "@assets/icons/linkedin.svg";
import { ReactComponent as ViberIcon } from "@assets/icons/viber.svg";
import "./Footer.styles.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="logo">RIZOFT</div>
        <div className="social-icons">
          <a
            href="https://telegram.org"
            target="_blank"
            rel="noopener noreferrer"
            title="Telegram"
          >
            <TelegramIcon className="icon" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            title="Instagram"
          >
            <InstagramIcon className="icon" />
          </a>
          <a
            href="https://www.whatsapp.com/"
            target="_blank"
            rel="noopener noreferrer"
            title="WhatsApp"
          >
            <WhatsappIcon className="icon" />
          </a>
          <a
            href="https://linkedln.ru/"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
          >
            <LinkedinIcon className="icon" />
          </a>
          <a
            href="https://viber.com"
            target="_blank"
            rel="noopener noreferrer"
            title="Viber"
          >
            <ViberIcon className="icon" />
          </a>
        </div>
      </div>

      <div className="footer-divider" />
      <div className="footer-bottom">
        <p>
          Copyright &copy; <span>&nbsp;&nbsp;RIZOFT</span>
        </p>
        <p>All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;

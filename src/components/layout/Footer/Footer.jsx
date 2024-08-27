import React from "react";
import { ReactComponent as TelegramIcon } from "@assets/icons/telegram.svg";
import { ReactComponent as InstagramIcon } from "@assets/icons/instagram.svg";
import { ReactComponent as LinkedinIcon } from "@assets/icons/linkedin.svg";
import { ReactComponent as EmailIcon } from "@assets/icons/email.svg";
import "./Footer.styles.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="logo">RIZOFT</div>
        <div className="social-icons">
          <a
            href="https://t.me/veon_tech"
            target="_blank"
            rel="noopener noreferrer"
            title="Telegram"
          >
            <TelegramIcon className="icon scaled" />
          </a>
          <a
            href="https://www.instagram.com/veontech.ru?igsh=Z21lMmc5aXJsdnhu"
            target="_blank"
            rel="noopener noreferrer"
            title="Instagram"
          >
            <InstagramIcon className="icon scaled" />
          </a>
          <a
            href="https://www.linkedin.com/company/veon-tech/"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
          >
            <LinkedinIcon className="icon scaled" />
          </a>
          <a
            href="mailto:clients@veon-tech.ru"
            target="_blank"
            rel="noopener noreferrer"
            title="Email"
          >
            <EmailIcon className="icon scaled" />
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

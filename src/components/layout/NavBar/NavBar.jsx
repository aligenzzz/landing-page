import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./NavBar.styles.scss";
import { scrollToBlock } from "@utils/scrolling";
import RoundedButton from "@components/shared/RoundedButton";
import { ReactComponent as MenuOpenIcon } from "@assets/icons/menu_open.svg";
import { ReactComponent as MenuCloseIcon } from "@assets/icons/menu_close.svg";
import { useBlockScrolling } from "@hook/scrolling";

const menuItems = [
  { label: "О нас", id: "about-us" },
  { label: "Кейсы", id: "cases" },
  { label: "Наши клиенты", id: "clients" },
  { label: "Отзывы", id: "reviews" },
];

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleClick = () => {
    window.location.href = "https://forms.gle/yn6QgxyYp8TXwG4Z6";
  };

  useBlockScrolling(isMobileMenuOpen);

  const handleLink = (id) => {
    scrollToBlock(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="navbar">
      <div className="navbar-base"></div>
      <nav>
        <Link onClick={() => handleLink("main-block")} className="logo scaled">
          RIZOFT
        </Link>

        <div className="menu">
          {menuItems.map((item, index) => (
            <Link
              onClick={() => handleLink(item.id)}
              className="item scaled"
              key={index}
            >
              {item.label}
            </Link>
          ))}

          <a className="item phone scaled" href="tel:+375293134627">
            +375 29 313-46-27
          </a>
        </div>

        <RoundedButton text="Заполнить бриф" onClick={handleClick} />

        <div
          className="menu-toggle scaled"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <MenuCloseIcon /> : <MenuOpenIcon />}
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="mobile-menu">
          {menuItems.map((item, index) => (
            <Link
              onClick={() => handleLink(item.id)}
              className="item scaled"
              key={index}
            >
              {item.label}
            </Link>
          ))}
          <RoundedButton text="Заполнить бриф" onClick={handleClick} />
        </div>
      )}
    </div>
  );
};

export default NavBar;

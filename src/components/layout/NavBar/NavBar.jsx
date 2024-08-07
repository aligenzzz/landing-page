import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.styles.scss";
import { LANDING_ROUTE } from "@utils/constants";
import RoundedButton from "@components/shared/RoundedButton";
import { ReactComponent as MenuOpenIcon } from "@assets/icons/menu_open.svg";
import { ReactComponent as MenuCloseIcon } from "@assets/icons/menu_close.svg";

const menuItems = [
  { label: "О нас", route: LANDING_ROUTE },
  { label: "Кейсы", route: LANDING_ROUTE },
  { label: "Наши клиенты", route: LANDING_ROUTE },
  { label: "Отзывы", route: LANDING_ROUTE },
];

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div>
      <div className="navbar-base"></div>
      <nav className="navbar">
        <Link to={LANDING_ROUTE} className="logo scaled">
          RIZOFT
        </Link>

        <div className="menu">
          {menuItems.map((item, index) => (
            <Link to={item.route} className="item scaled" key={index}>
              {item.label}
            </Link>
          ))}

          <a className="item phone scaled" href="tel:+375293134627">
            +375 29 313-46-27
          </a>
        </div>

        <RoundedButton text="Заполнить бриф" />

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
            <Link to={item.route} className="item scaled" key={index}>
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default NavBar;

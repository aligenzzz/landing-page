import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.styles.scss";
import { LANDING_ROUTE } from "@utils/constants";
import ApplicationButton from "@components/shared/ApplicationButton";
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
      <nav className="navbar">
        <Link to={LANDING_ROUTE} className="logo">
          RIZOFT
        </Link>

        <div className="menu">
          {menuItems.map((item, index) => (
            <Link to={item.route} className="item" key={index}>
              {item.label}
            </Link>
          ))}

          <a className="item phone" href="tel:+375293134627">
            +375 29 313-46-27
          </a>
        </div>

        <ApplicationButton text="Заполнить бриф" />

        <div
          className="menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <MenuCloseIcon /> : <MenuOpenIcon />}
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="mobile-menu">
          {menuItems.map((item, index) => (
            <Link to={item.route} className="item" key={index}>
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default NavBar;

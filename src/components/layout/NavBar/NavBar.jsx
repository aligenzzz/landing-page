import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.styles.scss";
import { LANDING_ROUTE } from "@utils/constants";
import ApplicationButton from "@components/shared/ApplicationButton";

const menuItems = [
  { label: "О нас", route: LANDING_ROUTE },
  { label: "Кейсы", route: LANDING_ROUTE },
  { label: "Наши клиенты", route: LANDING_ROUTE },
  { label: "Отзывы", route: LANDING_ROUTE },
];

const NavBar = () => {
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
      </nav>
    </div>
  );
};

export default NavBar;

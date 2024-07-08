import React from "react";
import "./ApplicationButton.styles.scss";
import { ReactComponent as ArrowIcon } from "@assets/icons/open_arrow.svg";

const ApplicationButton = ({ text }) => {
  return (
    <button className="application-button" onClick={() => {}}>
      {text || "Оформить заявку"}
      <ArrowIcon className="arrow-icon" />
    </button>
  );
};

export default ApplicationButton;

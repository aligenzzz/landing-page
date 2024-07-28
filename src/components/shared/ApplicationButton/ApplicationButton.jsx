import React from "react";
import "./ApplicationButton.styles.scss";

const ApplicationButton = ({ text }) => {
  return (
    <button className="application-button" onClick={() => {}}>
      {text || "Оформить заявку"}
    </button>
  );
};

export default ApplicationButton;

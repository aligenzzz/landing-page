import React from "react";
import "./RoundedButton.styles.scss";

const RoundedButton = ({ text, onClick, style }) => {
  return (
    <button
      className="rounded-button"
      onClick={onClick}
      style={style ? { ...style } : {}}
    >
      {text}
    </button>
  );
};

export default RoundedButton;

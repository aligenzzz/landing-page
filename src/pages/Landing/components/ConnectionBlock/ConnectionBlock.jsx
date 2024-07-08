import React from "react";
import "./ConnectionBlock.styles.scss";
import ApplicationButton from "@components/shared/ApplicationButton";

const ConnectionBlock = () => {
  return (
    <div className="connection-block">
      <h1 className="title">Давайте поговорим о нашем продукте</h1>
      <ApplicationButton text="Связаться с нами" />
    </div>
  );
};

export default ConnectionBlock;

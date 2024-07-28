import React from "react";
import "./Landing.styles.scss";
import {
  MainBlock,
  DescriptionBlock,
  CasesBlock,
  FormBlock,
  StepsBlock,
  CooperationBlock,
  AdvantagesBlock,
  ClientsBlock,
  ReviewsBlock,
  ConnectionBlock,
} from "./components";

const Landing = () => {
  return (
    <>
      <MainBlock />
      <DescriptionBlock />
      <CasesBlock />
      <FormBlock />
      <StepsBlock />
      <CooperationBlock />
      <AdvantagesBlock />
      <ClientsBlock />
      <ReviewsBlock />
      <ConnectionBlock />
    </>
  );
};

export default Landing;

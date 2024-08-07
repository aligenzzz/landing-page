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
import { ScrollProvider } from "@store/ScrollContext";

const Landing = () => {
  return (
    <ScrollProvider>
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
    </ScrollProvider>
  );
};

export default Landing;

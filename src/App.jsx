import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "@components/navigation";
import { NavBar, Footer } from "@components/layout";
import "./App.styles.css";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter />
      <Footer />
    </BrowserRouter>
  );
};

export default App;

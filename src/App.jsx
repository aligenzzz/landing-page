import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "@components/navigation";
import { NavBar, Footer, FloatingButton } from "@components/layout";
import "./App.styles.css";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter />
      <Footer />
      <FloatingButton />
    </BrowserRouter>
  );
};

export default App;

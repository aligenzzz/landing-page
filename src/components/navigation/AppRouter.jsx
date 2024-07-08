import React from "react";
import { Routes, Route } from "react-router-dom";
import { publicRoutes } from "@root/routes";
import NotFoundPage from "./NotFoundPage";

const AppRouter = () => {
  return (
    <Routes>
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRouter;

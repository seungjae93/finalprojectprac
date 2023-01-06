import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "../Header";

import MainMap from "../pages/MainMap";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainMap />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

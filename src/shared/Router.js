import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "../Header";

import MainMap from "../pages/MainMap";
import Review from "../pages/Review";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainMap />} />
        <Route path="/review" element={<Review />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

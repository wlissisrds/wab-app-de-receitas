import React from "react";

import Home from "./Home";
import Cuisine from "./Cuisine";
// import { Container } from './styles';
import { Route, Routes, BrowserRouter } from "react-router-dom";

function Pages() {
  return (
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cuisine/:type" element={<Cuisine />}></Route>
      </Routes>
  );
}

export default Pages;

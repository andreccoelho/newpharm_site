
import React from "react";
import { createRoot } from "react-dom/client";

import Home from "./pages/Home";
import { HashRouter, Route, Routes } from "react-router-dom";
import { auth } from "./config/Firebase";

const container = document.getElementById("root");
const root = createRoot(container);


root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);

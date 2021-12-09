import React from "react";
import { Routes, Route, useMatch } from "react-router-dom";
import "./App.scss";
import Header from "./component/header/header";
import Home from "./component/home/home";
import Technology from "./component/technology/technology";
import Destinataion from "./component/destination/destination";
import Crew from "./component/crew/crew";

function App() {
  return (
    <main
      className={`page ${useMatch("/") ? "page-home" : ""} ${
        useMatch("/technology") ? "page-technology" : ""
      } ${useMatch("/destination") ? "page-destination" : ""} ${
        useMatch("/crew") ? "page-crew" : ""
      }`}
    >
      <Header />
      <Routes>
        {/* <Route>s renders the first one that matches the current URL. */}
        <Route path="/" element={<Home />}></Route>
        <Route path="technology" element={<Technology />}></Route>
        <Route path="destination" element={<Destinataion />}></Route>
        <Route path="crew" element={<Crew />}></Route>
      </Routes>
    </main>
  );
}

export default App;

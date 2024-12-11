import { BrowserRouter } from "react-router-dom";
import React from "react";
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Works,
  BrainyBees,
  NavbarBack,
} from "./components";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <div className="relative z-0 bg-primary">
              <Navbar />
              <Hero />
              <About />
              <Experience />
              <Works />
              <Contact />
            </div>
          }
        />
        <Route
          path="/BrainyBees"
          element={
            <div className="relative z-0 bg-primary">
              <NavbarBack />
              <BrainyBees />
              <Contact />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

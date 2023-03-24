import React from "react";

import { Navbar } from "./components";
import { About, Footer, Skills, Work, Header } from "./container/index";
import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Footer />
    </div>
  );
};

export default App;

import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login/*" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;

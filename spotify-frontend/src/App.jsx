import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "remixicon/fonts/remixicon.css";
import Login from "./components/login";
import Registerform from "./components/register";
import Userdashboard from "./components/userdashboard";
import { Routes, Route } from "react-router-dom";
import Homebar from "./components/home";
import Artistsection from "./components/artist-section";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/R" element={<Registerform />} />
        <Route path="/u" element={<Userdashboard />} />
        <Route path="/h" element={<Homebar />} />
        <Route path="/a" element={<Artistsection />} />
      </Routes>
    </>
  );
}

export default App;

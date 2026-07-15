import { useState } from 'react'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";

import NaviBar from "./components/NaviBar";
import HomePage from "./components/HomePage";
import AddAttendee from "./components/AddAttendee";
import ViewAttendee from "./components/ViewAttendee";
import AddTicket from "./components/AddTicket";
import ViewTicket from "./components/ViewTicket";
import AddLounge from "./components/AddLounge";
import ViewLongue from "./components/ViewLongue";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <NaviBar />

      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/add" element={<AddAttendee />} />
        <Route path="/view" element={<ViewAttendee />} />
        <Route path="/add_ticket" element={<AddTicket />} />
        <Route path="/view_ticket" element={<ViewTicket />} />
        <Route path="/add_lounge" element={<AddLounge />} />
        <Route path="/view_lounge" element={<ViewLongue />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
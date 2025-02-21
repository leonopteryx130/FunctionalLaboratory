import React from 'react';
import { Routes, Route, Link } from "react-router-dom";

import Home from './pages/Home';
import ReactionTest from './pages/ReactionTest';
import style from './App.scss'

function App() {
  return (
    <div>
      <div>
        back to Home
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ReactionTest" element={<ReactionTest />} />
      </Routes>
    </div>
  );
}

export default App;
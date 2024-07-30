// src/App.js

import React from 'react';
import Home from './Home';
import { BrowserRouter, Route ,Routes } from 'react-router-dom';
// import './App.css';
import Card from './Card';
function App() {
  return (
    <div >
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home />}/>
      <Route path="/product/:id" element={<Card />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom';
import './App.css';
import Home from './Component/Home';
import Add from './Component/Add';
import Edit from './Component/Edit';
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {


  return (
    <div style={{ maxzidth: "30rem", margin: "4rem auto" }}>
      <h1  >
        sihamdev is the best one
        <Router>
          <h1>Nav</h1>
          <Routes>
            <Route exact path='/' element={Home} />
            <Route path='/add' element={Add} />
            <Route path='/edit/:id' element={Edit} />
          </Routes>

        </Router>
        <Home />
        <Add />
        <Edit />

      </h1>
    </div>
  );
}

export default App;

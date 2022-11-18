import React from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import  Medication  from './Page/Medication';
import History from './Page/History';
import Contact from './Page/Contact';
import Home from './Page/Home';

import { Navbar } from './Navbar/Navbar';
import { Card } from './Cardlist/Card';


import './App.css';
import '../src/Page/Page.css';

function App() {
  return (
      <div>
        <Navbar />
        <BrowserRouter>
        <nav>
        <div className="container">
          <div className="card">
          <div className="card-body link-body">
          <Link className="link btn btn-info" to="/home">Home</Link>
          <Link className="link btn btn-info"  to="/medication">Medication</Link>
          <Link className="link btn btn-info" to="/history">History</Link>
          <Link className="link btn btn-info" to="/contact">Contact</Link>
          </div>
          </div>
          </div>
          </nav>
        <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/medications" element={<Medication />} />
        <Route path="/history" element={<History />} />
        <Route path='/contact' element={<Contact />} />
        </Routes>       
        </BrowserRouter>
       
      </div>
  );
}

export default App;

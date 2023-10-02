import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Accomodation from './pages/Accomodation';
import Error404 from './pages/Error404';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/accomodation/:accomodationId' element={<Accomodation />}></Route>
        <Route path='*' element={<Error404 />}></Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
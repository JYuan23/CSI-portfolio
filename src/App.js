import './App.css';
import { Routes, Route, NavLink } from 'react-router-dom';
import Home from './Home';
import Insight from './Insight';
import React, { Component }  from 'react';
import constructionBG from "./construction.jpg"

function App() {
  return (
    <div className="content" >

      <div className="barContainer">
        <div className='bot-row'>
          <NavLink id="name" className = "" >John Yuan</NavLink>
          <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link' }>Home</NavLink>
          <NavLink to="/planning" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link' }>Planning</NavLink>
          <NavLink to="/personas" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link' }>Personas</NavLink>
          <NavLink to="/insights" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link' }>Insight Statements</NavLink>
          <NavLink to="/reflection" className={({ isActive }) => isActive ? 'reflection-link nav-link active' : 'reflection-link nav-link' }> Reflection </NavLink>
        </div>
      </div>
      <Routes>
        <Route path='/insights' element={<Insight text="test"/>}></Route>
        <Route exact path='/insights/1' element={<Insight text="First Insight" />}></Route>
        <Route exact path='/insights/2' element={<Insight text="second Insight" />}></Route>
        <Route exact path='/personas' element={<div>Personas</div>}></Route>
        <Route exact path='/'     element={<Home />}></Route>
      </Routes>

    </div>
  );
}

export default App;

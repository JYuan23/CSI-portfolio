import './App.css';
import { Routes, Route, NavLink } from 'react-router-dom';
import Home from './Home';
import Insight from './Insight';
import Personas from './Personas';
import Reflection from './Reflection';

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
        <Route path='/insights' element={<Insight text="Welcome to Insights!"/>}></Route>
        <Route exact path='/insights/1' element={<Insight text="Engineers interviewed frequently mentioned issues in organization, such as managing multiple projects at once, organizing meetings and communications with clients and researching key information such as zoning and construction laws. Different restrictions and obstacles are faced by each engineer based on the focus of their job." />}></Route>
        <Route exact path='/insights/2' element={<Insight text="Most workers in this field stated they view their clients as out of touch or uninformed on important details of their projects, leading to tension and distrust in the process of building. We think that easing this process could be done through better communication between both parties and more accessible information on pricing, timelines and the overall construction process." />}></Route>
        <Route exact path='/insights/3' element={<Insight text="Civil engineering is often viewed as a typical engineering job when it often is more “dynamic” than most purely technical office jobs. New engineers often enter the field not aware of other skills required. Engineers, in smaller companies especially, have to develop team work skills and communication methods quickly to be successful in communicating with subcontractors and making client connections in the field." />}></Route>
        <Route exact path='/personas' element={<Personas/>}></Route>
        <Route path='/personas/:id' element={<Personas/>}></Route>
        <Route path='/reflection' element={<Reflection/>}></Route>
        <Route exact path='/'     element={<Home />}></Route>
      </Routes>

    </div>
  );
}

export default App;

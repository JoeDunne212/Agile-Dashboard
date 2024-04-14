import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';
import Help from './pages/Help.jsx';
import * as d3 from "d3"
import './App.css';
import './components/NavBar/navbar'
import BugTypeBarGraph from './components/BugTypeBarGraph/BugTypeBarGraph';
import Home from './components/Home/Home';
import Navbar from './components/NavBar/navbar';
import Footer from './components/footer.tsx';
import Hero from './components/Hero/Hero.jsx';
import Teams from './pages/Teams.jsx';
import TeamDashboard from './components/TeamDashBoard.jsx';

// const data = fetch('./test-data-pseudo/example_jira_data.json')
// .then(res => res).then(data => console.log(data));


function App() {
  const teams = [
    {id: 'A', component: <TeamDashboard name={'A'}/> },
    {id: 'B', component: <TeamDashboard name={'B'}/> },
    {id: 'C', component: <TeamDashboard name={'C'}/> },
    {id: 'D', component: <TeamDashboard name={'D'}/> },
    {id: 'E', component: <TeamDashboard name={'E'}/> },
    {id: 'F', component: <TeamDashboard name={'F'}/> }
  ]
  
  return (
        <Routes>
            <Route exact path="" element={<Hero />} />
            <Route exact path="/help" element={<Help />} />
            <Route exact path="/teams" element={<Teams teams={teams}/>} />
            {teams.map((team) => {
                 return  <Route exact path={`/teams/Team${team.id}`} element={team.component} />
            })}
        </Routes>
  );
}

export default App;

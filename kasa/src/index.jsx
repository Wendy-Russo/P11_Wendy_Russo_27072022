import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import logements from "./data/logements.json"

import './index.scss';
import Home from './pages/Home/Home';
import Proprety from './pages/Proprety/Proprety';
import PageError404 from "./pages/Error404/PageError404.jsx";
import APropos from "./pages/APropos/APropos"


const root = ReactDOM.createRoot(document.getElementById('root'));

const URL = window.location.href.split("/");
const URLID = URL[URL.length-1];

let propretyRoute = <Route path="/Proprety/:PROPRETYID" element={<Proprety/>}/>

if(logements[URLID] === undefined){

  propretyRoute = <Route path="/Proprety/:PROPRETYID" element={<PageError404/>}/>
}

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/A-Propos" element={<APropos/>}/>
        {propretyRoute}
        <Route element={<PageError404/>}/>
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

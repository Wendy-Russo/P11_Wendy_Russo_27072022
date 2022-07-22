import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import logements from "./data/logements.json"
import Home from './pages/Home/Home';
import Proprety from './pages/Proprety/Proprety';
import PageError404 from "./pages/Error404/PageError404.jsx";
import APropos from "./pages/APropos/APropos"
import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));

const URL = window.location.href.split("/");
const URLID = URL[URL.length-1];

console.log(URLID)

let propretyRoute = <Route path="/Proprety/:PROPRETYID" element={<Proprety/>}/>

if(logements[URLID] === undefined && URL.includes("proprety")){
  propretyRoute = <Route path="/Proprety/:PROPRETYID" element={<PageError404/>}/>
}

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="*" element={<PageError404/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/A-Propos" element={<APropos/>}/>
        {propretyRoute}
        <Route element={<PageError404/>}/>
      </Routes>
    </Router>
  </React.StrictMode>
);

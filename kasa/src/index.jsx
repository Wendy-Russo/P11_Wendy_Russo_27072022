import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";
import Proprety from "./pages/Proprety";


ReactDOM.render(
    <React.StrictMode>
        <Router path="/">
            <Home />
        </Router>
        <Router path="/proprety">
            <Proprety />
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
)
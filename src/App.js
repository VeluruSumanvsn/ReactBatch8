import React from "react";
import Home from './Components/Home';
import './App.css';
import Dashboard from './Components/Dashboard'
import Header from "./Components/Header";
import { Navbar } from "./Components/Navbar";

const App = () =>{
  return(
    <div>
        {/* <Header />
        <Home /> */}
        <Dashboard />
        <Navbar />
    </div>
   
  )
}
export default App

import React from "react";
import Home from './Components/Home';
import './App.css';
import Dashboard from './Components/Dashboard'
import Header from "./Components/Header";

const App = () =>{
  return(
    <div>
        <Header />
        <Home />
        <Dashboard />
    </div>
   
  )
}
export default App

import React from "react";
import Home from './Components/Home';
import './App.css';
import Dashboard from './Components/Dashboard'
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { Navbar } from "./Components/Navbar";

const App = () =>{
  return(
    <div>
        <Home />
        <Header />
        <Dashboard />
        <Footer />
        <Navbar />
    </div>
   
  )
}
export default App

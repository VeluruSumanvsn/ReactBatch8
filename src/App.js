import React from "react";
import Homepage from './Components/Home';
import './App.css';
import Dashboard from './Components/Dashboard'
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { Navbar } from "./Components/Navbar";
import Second from "./Components/Second"
import First from "./Components/First";
const App = () =>{
  return(
    <div>
        <Homepage />
        <Header />
        <Dashboard />
        <First />
        <Second />
        <Footer />
        <Navbar />
    </div>
  );
}
export default App

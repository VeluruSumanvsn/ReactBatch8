import React,{createContext, useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './Components/Home';
import './App.css';
import Dashboard from './Components/Dashboard'
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Navbar  from "./Components/Navbar";
import AboutUS from "./Components/AboutUS"
import ContactUS from "./Components/ContactUS";
import Guest from "./Components/Guest";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Text from "./Components/Text";
import Icon from "./Components/Icon";
import RwebLogin from "./Components/RWeb";

export const store = createContext();
const App = () =>{
  const [data, setData] = useState(123456);
  return(
    <div>
      <store.Provider value={[data, setData]}>
      <BrowserRouter>
          <Routes>
            <Route path="/dashboard" element={ <Dashboard />} />
            <Route path="/contact-us" element={ <ContactUS />} />
            <Route path="/about-us" element={ <AboutUS />} />
            <Route path="/footer" element={ <Footer />} />
            <Route path="/navbar" element={ <Navbar />} />
            <Route path="/login" element={ <Login />} />
            <Route path="/" element={ <Homepage />} />
            <Route path="/guest" element={ <Guest />} />
            <Route path="/header" element={ <Header />} />
            <Route path="/register" element={ <Register />} />
            <Route path="/text" element={ <Text />} />
            <Route path="/icon" element={ <Icon />} />
            <Route path="/r" element={ <RwebLogin />} />
          </Routes>
        </BrowserRouter>
      </store.Provider>
        
    </div>
  );
}
export default App


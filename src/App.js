import React from "react"
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import {BrowserRouter as Router, Route, Swtich} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Header />
      <Home /> 
      <About /> 
      <Contact /> 
      <Footer />
    </div>
  );
}

export default App;

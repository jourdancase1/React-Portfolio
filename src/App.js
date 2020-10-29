import React from "react"
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Project from "./components/Project";
import {BrowserRouter as Router, Route, Swtich} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Header />
      <Project /> 
      <Footer />
    </div>
  );
}

export default App;

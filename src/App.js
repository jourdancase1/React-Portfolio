import React from "react"
import './App.css';
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
          <Switch>
            <Route path = "/" exact component={Home}/> 
            <Route path = "/home" component={Home}/> 
            <Route path = "/about" component={About}/> 
            <Route path= "/contact" component={Contact}/> 
          </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;

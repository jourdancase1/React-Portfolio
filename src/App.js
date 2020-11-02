import React from "react"
import './App.css';
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Projects from "./components/pages/Projects";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Home from "./components/pages/Home"


function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
          <Switch>
            <Route path = "/" exact component={Home}/> 
            <Route path = "/about" component={About}/> 
            <Route path= "/contact" component={Contact}/> 
            <Route path = "/projects" component={Projects}/>
          </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;

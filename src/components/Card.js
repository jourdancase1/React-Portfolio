import React from 'react';
// import { Link } from "react-router-dom";
import CardItem from "./CardItem"
import "./card.css"


function Card() {
    return(
      <div className="cards" >
          <h1>Check out my portfolio!</h1>
          <div className="cards__container">
              <div className="cards__wrapper">
                  <ul className="cards__items">
                      <CardItem 
                      src="/images/budgettracker.png"
                      text="Budget Tracker"
                      url="https://obscure-sea-21560.herokuapp.com/"
                      />
                      <CardItem 
                      src="/images/fitnesstracker.png"
                      text="Fitness Tracker"
                      url="https://calm-hollows-35671.herokuapp.com/"
                      />
                      <CardItem 
                      src="/images/directory.png"
                      text="Employee Directory"
                      url="https://jourdancase1.github.io/Employee-Directory/"
                      />
                  </ul>
              </div>
          </div>
      </div>
    )
}

export default Card;
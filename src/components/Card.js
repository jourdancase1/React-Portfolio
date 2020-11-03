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
                      label="javascript"
                      path=""
                      />
                      <CardItem 
                      src="/images/fitnesstracker.png"
                      text="Fitness Tracker"
                      label="Javascript"
                      path=""
                      />
                      <CardItem 
                      src="/images/directory.png"
                      text="Employee Directory"
                      label="Javascript"
                      path=""
                      />
                  </ul>
              </div>
          </div>
      </div>
    )
}

export default Card;
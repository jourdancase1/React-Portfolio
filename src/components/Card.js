import React from 'react';
// import { Link } from "react-router-dom";
import CardItem from "./CardItem"
import "./card.css"
import Links from "./Links"

function Card() {
    return(
      <div className="cards">
          <h1>Check out my portfolio!</h1>
          <div className="cards__container">
              <div className="cards__wrapper">
                  <ul className="cards__items">
                      <CardItem 
                      src="image of project"
                      text="name of project"
                      label="Project"
                      path="/https://jourdancase1.github.io/Employee-Directory/"
                      />
                      <CardItem 
                    //   src="image of project"
                    //   text="name of project"
                    //   label="Project"
                    //   path="/link to project"
                      />
                      <CardItem 
                    //   src="image of project"
                    //   text="name of project"
                    //   label="Project"
                    //   path="/link to project"
                      />
                  </ul>
              </div>
          </div>
      </div>
    )
}

export default Card;
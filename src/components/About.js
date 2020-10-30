import React from "react";
import { Link } from "react-router-dom";
import "./about.css"

function About() {
   return (
    <div>
        <h1>About Me:</h1>
        <div className="about">
            <p >I'm a web developer currently studying at KU Coding Bootcamp. I have experience with JavaScript and am comfortable using packages like Node and Express. I attended Kansas State University and received my bachelors degree in Kinesiology. Professionally, I spent the last 5 years in the service industry as the GM of a bar and night club. I developed a wide array a of skills and decided it was time for a new challenge. I'm fairly new to developlment, but am learning as I go and I enjoy it more and more each day. Please check out some of my work.</p>
            <Link to="/home">
                <p>Home</p>
            </Link>
        </div>
    </div>
   )
}

export default About;
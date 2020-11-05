import React from "react";
import "./hero.css"
// import "../App.css"

function Hero(){
    return (
        <div className="hero-container">
            <video src="/videos/video-2.mp4" autoPlay loop muted/>
            {/* <img src="/images/kc.jpg" alt=""/> */}
            <h1>JOURDAN CASE</h1>
            <h4>Create something awesome.</h4>
        </div>
    )
}

export default Hero;
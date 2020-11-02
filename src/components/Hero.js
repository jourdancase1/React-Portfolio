import React from "react";
import "./hero.css"
import "../App.css"

function Hero(){
    return (
        <div className="hero-container">
            <video src="/videos/video-2.mp4" autoPlay loop muted/>
            <h1>Jourdan Case</h1>
        </div>
    )
}

export default Hero;
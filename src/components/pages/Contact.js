import React from "react";
import "./contact.css"
import Links from "./Links"
import { Container } from "react-bootstrap";


function Contact() {
    return (
    <div className="hero-container2">
        {/* <video src="/videos/video-2.mp4" autoPlay loop muted/> */}
       <h1 className="heroh1">Contact Me</h1>
       <Container className="box">
            <Links />
       </Container>
    </div>
)
}
export default Contact;
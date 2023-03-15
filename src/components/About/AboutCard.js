import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Nessa Kodo </span>
            and I am based in <span className="purple"> Denver, Colorado.</span>
            <br />
            <br />
            Apart from coding, here are a few activities I also love!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> &nbsp; Producing Music
            </li>
            <li className="about-activity">
              <ImPointRight /> &nbsp; Practicing Flow Arts
            </li>
            <li className="about-activity"> 
              <ImPointRight /> &nbsp; Travelling
            </li>
          </ul>
          <br />
          <p style={{ color: "rgb(155 126 172)" }}>
            "Let your passion for creation and curiosity for innovation guide you on the path to greatness."{" "}
          </p>
          <footer className="blockquote-footer">Nessa Kodo</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

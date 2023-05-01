import React from "react";
import "./InfoPage.css";

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function InfoPage() {
  return (
    <div id="info-paper">
      <div id="info-pattern">
        <div id="info-content">
          <div className="container">
            <h3>Technologies Used:</h3>
            <ul>
              <li>React</li>
              <br />
              <li>Redux</li>
              <br />
              <li>Node.js</li>
              <br />
              <li>PostgreSQL</li>
              <br />
              <li>CSS</li>
              <br />
              <li>GSAP</li>
            </ul>
            <br></br>
            <h3>Special Thanks To:</h3>
            <ul>
              <li>My partner, Derek</li>
              <br />
              <li>Family and Friends</li>
              <br />
              <li>
                Our Amazing Instructors:
                <br />
                Emma, Key, and Kris
              </li>
              <br />
              <li>Aquamarine Cohort</li>
            </ul>
            <br />
            <br />
            <h3>www.linkedin.com/in/siv-earley</h3>

            <h3>Thank you!</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoPage;

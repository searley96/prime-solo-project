import React from "react";
import "./AboutPage.css";

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div id="about-paper">
      <div id="about-pattern">
        <div id="about-content">
          <div className="about-container">
            <div>
              <h1 id="about">About M.A.S.H. 2: Future Fortunes</h1>
              <p>
                Imagine if you will... the year 2000. The world was abuzz with
                excitement and optimism about what the new millennium would
                bring. We had survived the much-feared Y2K bug and witnessed the
                arrival of the first crew at the International Space Station.
                DVD players and TiVo were the newest cutting-edge technology.
                Low-rise jeans dominated the fashion scene, while Britney and
                NSYNC ruled the music charts.
              </p>
              <br></br>

              <p>
                It was a simpler time, a time when we could unplug and spend
                hours playing games with our friends, such as the beloved
                fortune-telling game, M.A.S.H. M.A.S.H., or Mansion, Apartment, Shack,
                House, was popular among children and teenagers, and it holds a
                special place in the hearts of those who played it.
              </p>
              <br></br>

              <p>
                For my project, I created a digital adaptation of this childhood
                game. “M.A.S.H. 2: Future Fortunes” provides a creative and
                imaginative experience that invites users to envision exciting,
                silly, or outrageous possibilities for their futures. The app
                gives users an opportunity to relive childhood memories, enjoy
                some nostalgia, and have some lighthearted fun.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;

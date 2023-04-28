import { gsap } from "gsap";
import "./SpiralPage.css";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";

function RandomSpiral() {
  const history = useHistory();

  const spiral = require("../../images/spiral.png");

  function spiralSpin() {
    gsap.to("#spiral-img", { rotation: "+=360", repeat: 10 });
    setTimeout(() => {
      // Move to the next page after 5 seconds
      history.push("/random");
    }, 3000);
  }
  useEffect(() => {
    spiralSpin();
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, []);

  return (
    <div id="spiral-paper">
      <div id="pattern">
        <div id="content">
          <h1>Your fortune is loading...</h1>
          <img id="spiral-img" src={spiral} width="100%" height="100%" />
          {/* {spiralSpin()} */}
        </div>
      </div>
    </div>
  );
}

export default RandomSpiral;


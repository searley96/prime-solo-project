import { gsap } from "gsap";
// import { PixiPlugin } from "gsap/PixiPlugin.js";
// import { MotionPathPlugin } from "gsap/MotionPathPlugin.js";
import "./SpiralPage.css";
import { TimelineMax } from "gsap/gsap-core";
import { TweenMax} from "gsap/gsap-core";



function Spiral() {

    const spiral = require('../../images/spiral.png')

    function spiralSpin() {
        gsap.to("#spiral-img", {rotation: '+=360', repeat:20})

        // .play();
    }

   

  return (
    <div id="spiral-paper">
      <div id="pattern">
        <div id="content">
          <h1>Your fortune is loading...</h1>
          <img id="spiral-img" src={spiral} width='100%' height='100%'/>
          {spiralSpin()}
         
        </div>
      </div>
    </div>
  );
}

export default Spiral;

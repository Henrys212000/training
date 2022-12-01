console.log("hello git");
import React from "react";
import Goll from "./Goll";
import Playr from "./Player";

function Boll() {
return (
<div>
  <h1 className="heading">Beautiful Golf Players on the Planet!</h1>

  <Goll 
   ne = {Playr[0].ne}
 	br = {Playr[0].br}
 	mn = {Playr[0].mn}
 	ph = {Playr[0].ph}
 />

 <Goll 
    ne = {Playr[1].ne}
    br = {Playr[1].br}
    mn = {Playr[1].mn}   
    ph = {Playr[1].ph}
 />

<Goll 
    ne = {Playr[2].ne}
    br = {Playr[2].br}
    mn = {Playr[2].mn}
    ph = {Playr[2].ph}
 />

<Goll 
    ne = {Playr[3].ne} 
    br = {Playr[3].br}
    mn = {Playr[3].mn}
    ph = {Playr[3].ph}
 />

<Goll 
    ne = {Playr[4].ne}
    br = {Playr[4].br}
    mn = {Playr[4].mn}
    ph = {Playr[4].ph}
 />
  </div>
  );
}

export default Boll;

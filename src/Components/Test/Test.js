import React from 'react'
import ROUND from "../Images/round-removebg-preview.png";
import EMERALD from "../Images/emerald-removebg-preview.png";
import HEART from "../Images/heart-removebg-preview.png";
import MARQUISE from "../Images/Marquise-removebg-preview.png";
import OVAL from "../Images/oval-removebg-preview.png";
import PEAR from "../Images/Pear-removebg-preview.png";
import PRINCESS from "../Images/Princess-removebg-preview.png";
import RADIANT from "../Images/Radiant-removebg-preview.png";
import CUSHION from "../Images/cushionremovebg.png";
import ASSCHER from "../Images/ECusion-removebg-preview.png";

const shapesList = [
    { name: "ROUND", imgUrl: ROUND },
    { name: "PRINCESS", imgUrl: PRINCESS },
    { name: "OVAL", imgUrl: OVAL },
    { name: "EMERALD", imgUrl: EMERALD},
    { name: "PEAR", imgUrl: PEAR},
    { name: "HEART", imgUrl: HEART},
    { name: "MARQUISE", imgUrl: MARQUISE},
    { name: "CUSHION", imgUrl: CUSHION },
    { name: "ASSCHER", imgUrl: ASSCHER },
    { name: "RADIANT", imgUrl: RADIANT },
  ];

function Test() {
  return (
    <div>

     {shapesList.map((shape) => (
          <button>
            <img src={shape.imgUrl} alt={shape.name}/>
            {shape.name}
          </button>
        ))}

    </div>
  )
}

export default Test



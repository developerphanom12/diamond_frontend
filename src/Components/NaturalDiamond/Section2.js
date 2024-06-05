import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Section3 from "./Section3";
import Section4 from "./Section4";
import { useDispatch } from "react-redux";
import { setDiamondIds } from "../../redux/users/action";
import ROUND from "../Images/round.png";
import EMERALD from "../Images/emerald.png";
import HEART from "../Images/heart.png";
import MARQUISE from "../Images/Marquise.png";
import OVAL from "../Images/oval.png";
import PEAR from "../Images/Pear.png";
import PRINCESS from "../Images/Princess.png";
import RADIANT from "../Images/Radiant.png";
import CUSHION from "../Images/Cushion.png";
import ECUSHION from "../Images/ECusion.png";

const shapesList = [
  { name: "ROUND", imgUrl: ROUND },
  { name: "EMERALD", imgUrl: EMERALD },
  { name: "HEART", imgUrl: HEART },
  { name: "MARQUISE", imgUrl: MARQUISE },
  { name: "OVAL", imgUrl: OVAL },
  { name: "PEAR", imgUrl: PEAR },
  { name: "PRINCESS", imgUrl: PRINCESS },
  { name: "RADIANT", imgUrl: RADIANT },
  { name: "CUSHION", imgUrl: CUSHION },
  { name: "E.CUSHION", imgUrl: ECUSHION },
];
export default function Section2() {
  const [selectedButton, setSelectedButton] = useState(1);
  const [selectedShapes, setSelectedShapes] = useState([]);
  const [value, setValue] = useState([]);

  const dispatch = useDispatch();
  let sliderRef = useRef(null);

  const handleButtonClick = (buttonIndex) => {
    setSelectedButton(buttonIndex);
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(buttonIndex - 1);
    }
  };

  useEffect(() => {
    const diamondApi = async () => {
      try {
        const shapesParam = selectedShapes.join(",");
        const resp = await axios.get(
          `http://localhost:3200/api/rings/nivodafilter?shapes=${shapesParam}`
        );
        if (resp?.status === 200) {
          setValue(resp?.data?.items);
          console.log("diaaa", resp?.data?.items);
          const diamondIds = resp.data.items.map((item) => item);
          dispatch(setDiamondIds(diamondIds));
          console.log("diamondids", diamondIds);
        }
      } catch (err) {
        console.error("err", err);
      }
    };

    diamondApi();
  }, [selectedShapes, dispatch]);

  const handleShapeClick = (shapeName) => {
    setSelectedShapes((prevShapes) =>
      prevShapes.includes(shapeName)
        ? prevShapes.filter((s) => s !== shapeName)
        : [...prevShapes, shapeName]
    );
  };

  return (
    <Root>
      <div className="ring_types mt-4">
        {shapesList.map((shape) => (
          <button
            key={shape.name}
            className={selectedShapes.includes(shape.name) ? "selected" : ""}
            onClick={() => handleShapeClick(shape.name)}
          >
            {shape.name}
            <img src={shape.imgUrl} alt={shape.name} />
          </button>
        ))}
      </div>
      <Section3 />
      <Section4 value={value} />
    </Root>
  );
}
const Root = styled.section`
  img {
    width: 52px;
    height: 52px;
  }
  .ring_types {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    button {
      width: 8%;
      border: 2px solid transparent;
      background: #fff;
      display: flex;
      flex-direction: column;
      justify-content: center;
      border-radius: 10px;
      align-items: center;
      padding: 12px 0;

      &.selected {
        border: 2px solid black;
        border-radius: 10px;
      }

      &:hover {
        background-color: rgba(247, 247, 247);
      }

       
    }
  }
`;

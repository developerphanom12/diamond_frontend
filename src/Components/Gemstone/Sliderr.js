import React, { useRef, useState } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import Svgsvg from "../../globalSvg/Svgsvg";
import Svgsvg2 from "../../globalSvg/Svgsvg2";
import Svgsvg3 from "../../globalSvg/Svgsvg3";

export default function Sliderr() {
  const [selectedButton, setSelectedButton] = useState(1); // Initialize with 1

  const handleButtonClick = (buttonIndex) => {
    setSelectedButton(buttonIndex);
    sliderRef.slickGoTo(buttonIndex - 1);
  };

  let sliderRef = useRef(null);

   
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };
  return (
    <Root>
      <Slider
        ref={(slider) => {
          sliderRef = slider;
        }}
        {...settings}
      >
        <div key={1}>
          <button
            className={selectedButton === 1 ? "selected" : ""}
            onClick={() => handleButtonClick(1)}
            style={{ width: "100%", margin: "10px" }}
          >
            <Svgsvg />
          </button>
        </div>
        <div key={2}>
          <button
            className={selectedButton === 2 ? "selected" : ""}
            onClick={() => handleButtonClick(2)}
            style={{ width: "100%", margin: "10px" }}
          >
            <Svgsvg2 />
          </button>
        </div>
        <div key={3}>
          <button
            className={selectedButton === 3 ? "selected" : ""}
            onClick={() => handleButtonClick(3)}
            style={{ width: "100%", margin: "10px" }}
          >
            <Svgsvg3 />
          </button>
        </div>
      </Slider>
    </Root>
  );
}
const Root = styled.section`
  padding-left: 50px;
  .slick-list,
  .slick-slider,
  .slick-track {
    width: 150px;
  }

  .slick-next:before,
  .slick-prev:before {
    font-size: 20px;
    line-height: 1;
    opacity: 0.75;
    color: hsl(332.31deg 1.29% 66.5%) ;
    position: relative;
    /* left: 30px; */
    z-index: 11111;
  }
  button {
    border: 2px solid transparent;
    flex: 1;
    padding: 15px 0;
    font-size: 14px;
    color:white;
    border-radius: 5px;
  }
  button {
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    padding: 12px 0;
    &:hover {
      background-color: rgba(247, 247, 247);
    }

    &.selected {
      border: 1px solid black !important;
      background-color: #fff;
      border-radius: 10px;
    }
  }
`;

import styled from "styled-components";
import React, { useRef, useState } from "react";
import Slider from "react-slick";
import ring from "./Images/ring.png";

export default function Section2() {
  const [selectedButton, setSelectedButton] = useState(1);

  const handleButtonClick = (buttonIndex) => {
    setSelectedButton(buttonIndex);
    sliderRef.slickGoTo(buttonIndex - 1);
  };

  let sliderRef = useRef(null);

 

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Root>
      <div className="main_div">
        <div className="image_div">
          <div className="slider-container">
            <Slider
              ref={(slider) => {
                sliderRef = slider;
              }}
              {...settings}
            >
              <div key={1}>
                <img src={ring} alt="text" />
              </div>
              <div key={2}>
                <img src={ring} alt="text" />
              </div>
            </Slider>
            <div
              style={{
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <button
                className="button"
                onClick={() => handleButtonClick(1)}
                style={{
                  borderColor: selectedButton === 1 ? "blue" : "transparent",
                }}
              >
                <span>Setting</span>
              </button>

              <button
                className="button"
                onClick={() => handleButtonClick(2)}
                style={{
                  borderColor: selectedButton === 2 ? "blue" : "transparent",
                }}
              >
                <span>Stone</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Root>
  );
}

const Root = styled.section`
  padding: 30px 30px;

  .main_div {
    display: flex;
    flex-wrap: wrap;

    .image_div {
      border: 1px solid #d3d3d3;
      width: 50%;
      height: 613px;
      border-radius: 20px;

      .slick-slide img {
        display: block;
        width: 100%;
        border-radius: 20px;
      }
      button.button {
        width: 50%;
        padding: 13px 0px;
        background-color: white;
        border: none;
        border-top: 1px solid #d3d3d3;
        border-radius: 0 0 20px 20px;

        svg {
          width: 18px;
          margin-right: 5px;
        }
        span {
          font-size: 13px;
        }
      }
      .slick-list,
      .slick-slider,
      .slick-track {
        height: 560px;
      }
    }


  }
`;



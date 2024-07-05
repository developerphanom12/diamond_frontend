import React, { useRef, useState } from "react";
import Slider from "react-slick";
import styled from "styled-components";

export default function Sliderr({ collections, onCollectionChange }) {
  const [selectedButton, setSelectedButton] = useState(1); // Initialize with 1

  const handleButtonClick = (buttonIndex, collectionId) => {
    setSelectedButton(buttonIndex);
    sliderRef.current.slickGoTo(buttonIndex - 1);
    onCollectionChange(collectionId);
  };

  let sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <Root>
      <Slider ref={sliderRef} {...settings}>
        {collections.map((collection, index) => (
          <div key={index + 1}>
            <button
              className={selectedButton === index + 1 ? "selected" : ""}
              onClick={() => handleButtonClick(index + 1, collection.id)}
              style={{ width: "84px" }}
            >
              <span style={{ display: "none" }}>{collection.id}</span>

              {collection.svg}
            </button>
            <div
              style={{
                fontSize: "13px",
                fontWeight: "600",
                textAlign: "center",
                padding: "5px",
              }}
            >
              {collection.title}
            </div>
          </div>
        ))}
      </Slider>
    </Root>
  );
}
const Root = styled.section`
  .slick-list,
  .slick-slider,
  .slick-track {
    width: 255px;
  }

  .slick-next:before,
  .slick-prev:before {
    font-size: 20px;
    line-height: 1;
    opacity: 0.75;
    color: hsl(332.31deg 1.29% 66.5%);
    position: relative;
    z-index: 11111;
  }
  button {
    border: 2px solid transparent;
    flex: 1;
    padding: 15px 0;
    font-size: 14px;
    color: #fff;
    border-radius: 5px;
  }
  button {
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    padding: 0;
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

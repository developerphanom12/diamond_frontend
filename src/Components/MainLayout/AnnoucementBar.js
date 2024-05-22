import React from "react";
import Slider from "react-slick";
import styled from "styled-components";

export default function AnnouncementBar() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    waitForAnimate: false
  };
  return (
    <Root>
      <Slider {...settings}>
        <div>
          <h6>30 Days free returns</h6>
        </div>
        <div>
          <h6>Free shipping worldwide</h6>
        </div>
        <div>
          <h6>Lifetime warranty</h6>
        </div>
      </Slider>
    </Root>
  );
}

const Root = styled.section`
  background-color: black;
  color: #fff;
  font-weight: 600;
  padding: 10px 0px;
  h6 {
    text-align: center;
    margin: 0;
    font-size: 16px;
    font-family: "proximaNova", "sans-serif";
    opacity: 0;
    animation: rotateIn 0.5s forwards, vibrate 2s infinite; 
    text-transform: uppercase;
  }

  .slick-slide {
    overflow: hidden; // Hide overflow
  }

  @keyframes rotateIn {
    from {
      transform: rotateY(-270deg) !important; // Start with rotation
      opacity: 0; // Start with opacity 0
    }
    to {
      transform: rotateY(0) !important; // End with no rotation
      opacity: 1; // End with opacity 1
    }
  }

  @keyframes vibrate {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(-2px);
    }
    50% {
      transform: translateX(2px);
    }
    75% {
      transform: translateX(-2px);
    }
    100% {
      transform: translateX(0);
    }
  }
`;

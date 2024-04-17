import React, { Component } from "react";
import Slider from "react-slick";
import ring from "../Images/ring.png"
import ww from "../Images/ww.webp"
// import b from "../Images/b.jpg"
// import c from "../Images/c.webp"
import styled from "styled-components";


function LazyLoad() {
  const settings = {
    // dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2
  };
  return (
    <Root>
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img src={ring} alt="img"/>
        </div>
        <div>
          <img src={ww} alt="img"/>
        </div>

      </Slider>
    </div>
    </Root>
  );
}

export default LazyLoad;
const Root = styled.section`
.slick-slide img {
    width: 100%;
}
.slick-next {
    right: 0px! important;
}
.slick-prev {
    left:0px! important;
    z-index:1;
}

`;

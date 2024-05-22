import React from "react";
import Slider from "react-slick";
import styled from "styled-components";

function LazyLoad({ images }) {
  const settings = {
    // dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2,
  };
  return (
    <Root>
      <div className="slider-container">
        <Slider {...settings}>
          <div>
            <img src={images} alt="img" />
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
    right: 0px !important;
  }
  .slick-prev {
    left: 0px !important;
    z-index: 1;
  }
`;

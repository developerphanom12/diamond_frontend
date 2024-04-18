import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import s1 from "../Images/sliderimg1.svg";
import s2 from "../Images/sliderimg2.svg";
import s3 from "../Images/sliderimg3.svg";
import s4 from "../Images/sliderimg4.svg";

export default function Section2() {
  // Duplicate the image array to create a loop effect
  const images = [s1, s2, s3, s4, s2, s1, s4, s1, s2, s3, s4, s2, s1, s4];

  var settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 5,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 200,
  };
  return (
    <Root>
      <Slider {...settings}>
        {/* Map through the images array and render each image */}
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`img${index}`} />
          </div>
        ))}
      </Slider>
    </Root>
  );
}

const Root = styled.section`
  background-color: #f7f7f7;
  font-weight: 600;
  padding: 20px  0px;

  .slick-slide {
    overflow: hidden; // Hide overflow
  }

  img {
    width: 200px;
    height: auto;
    padding: 20px;
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
`;

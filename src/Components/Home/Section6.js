import React, { useRef } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import shape9 from "../Images/shape-round.webp";
import shape8 from "../Images/shape-radiant.webp";
import shape7 from "../Images/shape-princess.webp";
import shape6 from "../Images/shape-pear.webp";
import shape5 from "../Images/shape-oval.webp";
import shape4 from "../Images/shape-marquise.webp";
import shape3 from "../Images/shape-heart.webp";
import shape2 from "../Images/shape-emerald.webp";
import shape1 from "../Images/shape-cushion.webp";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function Section6() {
  const images = [
    shape9,
    shape8,
    shape7,
    shape6,
    shape5,
    shape4,
    shape3,
    shape2,
    shape1,
  ];
  const h2 = [
    "round",
    "radiant",
    "princess",
    "pear",
    "oval",
    "marquise",
    "heart",
    "emerald",
    "cushion",
  ];
  const text = [
    "The classic shape with the 58 facet Sparkler",
    "Organic beauty, inspired by the world around us",
    "Capturing fire and brilliance in a square",
    "Slim, teardrop shaped brilliance",
    "The timeless elongated shape that flatters the finger",
    "Long, narrow sparkle buster",
    "A romantic statement of your love - FOREVER",
    "Long, clean lines create the Hall of Mirrors",
    "Cozy rounded corners with large brilliant facets",
  ];

  const imageSliderRef = useRef(null);
  const textSliderRef = useRef(null);

  const goToNextSlide = () => {
    if (imageSliderRef.current && textSliderRef.current) {
      imageSliderRef.current.slickNext();
      textSliderRef.current.slickNext();
    }
  };

  const goToPrevSlide = () => {
    if (imageSliderRef.current && textSliderRef.current) {
      imageSliderRef.current.slickPrev();
      textSliderRef.current.slickPrev();
    }
  };

  const settings = {
    className: "center",
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "10px",
  };

  const settings2 = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Root>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3"></div>
          <div className="col-lg-6">
            <h1>SHOP BY SHAPE</h1>
            <p>
              Explore our curated selection, categorized by diamond shape, to
              find your perfect expression of elegance.
            </p>
          </div>
          <div className="col-lg-3"></div>
        </div>
      </div>
      <div className="container-fluid sliderrr">
        <div className="row">
          <div className="col-lg-1 col-md-1 col-1"></div>
          <div className="col-lg-10 col-md-10 col-10">
            <Slider ref={imageSliderRef} {...settings}>
              {images.map((image, index) => (
                <div
                  key={index}
                  style={{ objectFit: "contain", outline: "none" }}
                  className={index % 3 === 2 ? "focus" : ""}
                >
                  <img src={image} alt={`img${index}`} />
                </div>
              ))}
            </Slider>
          </div>
          <div className="col-lg-1 col-md-1 col-1"></div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-2 col-2 pre">
            <button onClick={goToPrevSlide}>
              <IoIosArrowBack />
            </button>
          </div>
          <div className="col-lg-4 col-md-8 col-8 col4">
            <Slider ref={textSliderRef} {...settings2}>
              {h2.map((style, index) => (
                <div key={index} style={{ textAlign: "center" }}>
                  <div>
                    <h4>{style}</h4>
                    <p>{text[index]}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          <div className="col-lg-4 col-md-2 col-2 next">
            <button onClick={goToNextSlide}>
              <IoIosArrowForward />
            </button>
          </div>
        </div>
      </div>
    </Root>
  );
}

const Root = styled.section`
  color: #000;
  background-image: linear-gradient(180deg, #f7f7f7, #fff, #fff, #f7f7f7);
  padding: 96px 0px 0px;
  h1,
  h4 {
    text-align: center;
    font-weight: 400;
    width: 100%;
    text-transform: capitalize;
  }
  p {
    text-align: center;
    line-height: 1.8;
    margin: 20px 40px 0px;
  }
  outline: none;
  .sliderrr {
    padding: 10px 0 40px;

    img {
      width: 100%;
      outline: none;
    }
  }

  .focus {
    outline: none;
  }
  .col-lg-4.col4 {
    padding: 10px 20px;
  }
  .col-lg-4.col4.slick-list {
    text-align: center;
    p {
      width: 100%;
    }
  }
  .col-lg-4.pre {
    text-align: end;
  }
  .col-lg-4.pre,
  .col-lg-4.next {
    margin-top: 30px;
    button {
      background-color: #fff;
      border: none;
      svg {
        font-size: 25px;
      }
    }
  }
`;

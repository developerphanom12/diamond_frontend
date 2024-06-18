import React, { useRef } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import s1 from "../Images/rr1.webp";
import s2 from "../Images/rr2.webp";
import s3 from "../Images/rr3.webp";
import s4 from "../Images/rr4.webp";
import s5 from "../Images/rr5.webp";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function Section4() {
  const images = [s3, s4, s5, s1, s4, s5, s2, s3, s4, s5, s1, s4, s1, s2];
  const h2 = [
    "Halo",
    "Nature",
    "Side Stones",
    "Vintage",
    "Nature",
    "Side Stones",
    "Hidden Halo",
    "Halo",
    "Nature",
    "Side Stones",
    "Vintage",
    "Nature",
    "Vintage",
    "Hidden Halo",
  ];
  const text = [
    "Brilliant allure with a surrounding embrace",
    "Organic beauty, inspired by the world around us",
    "Exquisite accents framing a central masterpiece",
    "Nostalgic charm meets modern sophistication",
    "Organic beauty, inspired by the world around us",
    "Exquisite accents framing a central masterpiece",
    "Intriguing brilliance from a concealed halo",
    "Brilliant allure with a surrounding embrace",
    "Organic beauty, inspired by the world around us",
    "Exquisite accents framing a central masterpiece",
    "Nostalgic charm meets modern sophistication",
    "Organic beauty, inspired by the world around us",
    "Nostalgic charm meets modern sophistication",
    "Intriguing brilliance from a concealed halo",
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
            <h1>SHOP BY STYLE</h1>
            <p>
              Discover diverse engagement ring styles, each embodying a distinct
              symbol of love and devotion
            </p>
          </div>
          <div className="col-lg-3"></div>
        </div>
      </div>
      <div className="container-fluid sliderrr">
        <div className="row" style={{ flexWrap: "nowrap" }}>
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
          <div className="col-lg-4  col-md-2 col-2 pre">
            <button onClick={goToPrevSlide}>
              <IoIosArrowBack />
            </button>
          </div>
          <div className="col-lg-4 col-md-8 col-8">
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
          <div className="col-lg-4  col-md-2 col-2 next">
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
  }
  p {
    text-align: center;
    line-height: 1.8;
    margin:20px 40px 0px;
  }
  outline: none;
  .sliderrr {
    padding: 10px 0 80px;


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
  @media (max-width: 567px) {
    padding-top:30px;
    h1{
      font-size: 20px;
    }

     h1,  h4 {
      font-size: 20px;

}
.sliderrr {
    padding: 10px 0 30px;
}
  }
`;

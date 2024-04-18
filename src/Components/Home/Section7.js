import React, { useRef } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import ring from "../Images/ring.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function Section7() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const sliderRef = useRef(null);

  const goToNextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const goToPrevSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };
  return (
    <Root>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 pt-4">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h2>Best Sellers</h2>{" "}
              <div>
                <button onClick={goToPrevSlide}>
                  {" "}
                  <IoIosArrowBack />
                </button>
                <button onClick={goToNextSlide}>
                  {" "}
                  <IoIosArrowForward />
                </button>
              </div>
            </div>
            <Slider ref={sliderRef} {...settings}>
              <div
                style={{ textAlign: "center", width: "280px", height: "191px" }}
              >
                <div className="d_flex">
                  <img
                    src={ring}
                    alt="img"
                    style={{
                      width: "100%",
                      border: "1px solid #ededed",
                      borderRadius: "15px",
                    }}
                  />
                  <div className="mainn">
                    <div className="d-flex flex-column">
                      <h5 className="prd_name">The Riley</h5>
                      <p className="prd_price">$450</p>
                    </div>
                    <div className="d-flex">
                      <span className="white_color"></span>
                      <span className="golden_color"></span>
                      <span className="red_color"></span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                style={{ textAlign: "center", width: "280px", height: "191px" }}
              >
                <div className="d_flex">
                  <img
                    src={ring}
                    alt="img"
                    style={{
                      width: "100%",
                      border: "1px solid #ededed",
                      borderRadius: "15px",
                    }}
                  />
                  <div className="mainn">
                    <div className="d-flex flex-column">
                      <h5 className="prd_name">The Riley</h5>
                      <p className="prd_price">$450</p>
                    </div>
                    <div className="d-flex">
                      <span className="white_color"></span>
                      <span className="golden_color"></span>
                      <span className="red_color"></span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                style={{ textAlign: "center", width: "280px", height: "191px" }}
              >
                <div className="d_flex">
                  <img
                    src={ring}
                    alt="img"
                    style={{
                      width: "100%",
                      border: "1px solid #ededed",
                      borderRadius: "15px",
                    }}
                  />
                  <div className="mainn">
                    <div className="d-flex flex-column">
                      <h5 className="prd_name">The Riley</h5>
                      <p className="prd_price">$450</p>
                    </div>
                    <div className="d-flex">
                      <span className="white_color"></span>
                      <span className="golden_color"></span>
                      <span className="red_color"></span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                style={{ textAlign: "center", width: "280px", height: "191px" }}
              >
                <div className="d_flex">
                  <img
                    src={ring}
                    alt="img"
                    style={{
                      width: "100%",
                      border: "1px solid #ededed",
                      borderRadius: "15px",
                    }}
                  />
                  <div className="mainn">
                    <div className="d-flex flex-column">
                      <h5 className="prd_name">The Riley</h5>
                      <p className="prd_price">$450</p>
                    </div>
                    <div className="d-flex">
                      <span className="white_color"></span>
                      <span className="golden_color"></span>
                      <span className="red_color"></span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                style={{ textAlign: "center", width: "280px", height: "191px" }}
              >
                <div className="d_flex">
                  <img
                    src={ring}
                    alt="img"
                    style={{
                      width: "100%",
                      border: "1px solid #ededed",
                      borderRadius: "15px",
                    }}
                  />
                  <div className="mainn">
                    <div className="d-flex flex-column">
                      <h5 className="prd_name">The Riley</h5>
                      <p className="prd_price">$450</p>
                    </div>
                    <div className="d-flex">
                      <span className="white_color"></span>
                      <span className="golden_color"></span>
                      <span className="red_color"></span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                style={{ textAlign: "center", width: "280px", height: "191px" }}
              >
                <div className="d_flex">
                  <img
                    src={ring}
                    alt="img"
                    style={{
                      width: "100%",
                      border: "1px solid #ededed",
                      borderRadius: "15px",
                    }}
                  />
                  <div className="mainn">
                    <div className="d-flex flex-column">
                      <h5 className="prd_name">The Riley</h5>
                      <p className="prd_price">$450</p>
                    </div>
                    <div className="d-flex">
                      <span className="white_color"></span>
                      <span className="golden_color"></span>
                      <span className="red_color"></span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                style={{ textAlign: "center", width: "280px", height: "191px" }}
              >
                <div className="d_flex">
                  <img
                    src={ring}
                    alt="img"
                    style={{
                      width: "100%",
                      border: "1px solid #ededed",
                      borderRadius: "15px",
                    }}
                  />
                  <div className="mainn">
                    <div className="d-flex flex-column">
                      <h5 className="prd_name">The Riley</h5>
                      <p className="prd_price">$450</p>
                    </div>
                    <div className="d-flex">
                      <span className="white_color"></span>
                      <span className="golden_color"></span>
                      <span className="red_color"></span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                style={{ textAlign: "center", width: "280px", height: "191px" }}
              >
                <div className="d_flex">
                  <img
                    src={ring}
                    alt="img"
                    style={{
                      width: "100%",
                      border: "1px solid #ededed",
                      borderRadius: "15px",
                    }}
                  />
                  <div className="mainn">
                    <div className="d-flex flex-column">
                      <h5 className="prd_name">The Riley</h5>
                      <p className="prd_price">$450</p>
                    </div>
                    <div className="d-flex">
                      <span className="white_color"></span>
                      <span className="golden_color"></span>
                      <span className="red_color"></span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                style={{ textAlign: "center", width: "280px", height: "191px" }}
              >
                <div className="d_flex">
                  <img
                    src={ring}
                    alt="img"
                    style={{
                      width: "100%",
                      border: "1px solid #ededed",
                      borderRadius: "15px",
                    }}
                  />
                  <div className="mainn">
                    <div className="d-flex flex-column">
                      <h5 className="prd_name">The Riley</h5>
                      <p className="prd_price">$450</p>
                    </div>
                    <div className="d-flex">
                      <span className="white_color"></span>
                      <span className="golden_color"></span>
                      <span className="red_color"></span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                style={{ textAlign: "center", width: "280px", height: "191px" }}
              >
                <div className="d_flex">
                  <img
                    src={ring}
                    alt="img"
                    style={{
                      width: "100%",
                      border: "1px solid #ededed",
                      borderRadius: "15px",
                    }}
                  />
                  <div className="mainn">
                    <div className="d-flex flex-column">
                      <h5 className="prd_name">The Riley</h5>
                      <p className="prd_price">$450</p>
                    </div>
                    <div className="d-flex">
                      <span className="white_color"></span>
                      <span className="golden_color"></span>
                      <span className="red_color"></span>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
            <div style={{ width: "100%",textAlign:"center",marginBottom:"20px"}}>
              <button className="btn">View More</button>
            </div>
          </div>
        </div>
      </div>
    </Root>
  );
}
const Root = styled.section`
  margin: 20px 0px;
  .btn {
    margin-top: 10px;
    font-size: 18px;
    padding: 18px 34px;
    border-radius: 50px;
    line-height: 1.25;
    background-color: #000;
    color: #fff;
    border: 1px solid #000;
    &:hover {
      border: 1px solid #ededed;
      color: #000;
      background-color: #ededed;
      transition-duration: 0.5s;
    }
  }
  .d_flex {
    margin: 10px !important;
  }
  h2 {
    padding: 20px 0px;
    text-transform: uppercase;
  }
  button {
    background-color: #fff;
    border: none;
    svg {
      font-size: 40px;
    }
  }
  img {
    height: 190px;
    object-fit: contain;
  }
  .mainn {
    display: flex;
    /* flex-direction: column; */
    justify-content: space-between;
    padding: 10px;
    margin-top: 20px;
  }
  .prd_name {
    font-size: 14px;
  }
  .prd_price {
    font-size: 14px;
  }
  .white_color,
  .golden_color,
  .red_color {
    height: 18px;
    width: 18px;
    text-align: center;
    border-radius: 50px;
    margin-left: 10px;
  }

  .white_color {
    background-color: #ebebeb;
  }

  .golden_color {
    background-color: #ffdfb0;
  }

  .red_color {
    background-color: #f1a9a9;
  }

  .d_flexx {
    display: flex;
  }
`;

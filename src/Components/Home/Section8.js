import React, { useRef, useState } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import ringg1 from "../Images/jewelryblog.jpg";
import ringg3 from "../Images/jewelryblog1.jpg";
import ringg2 from "../Images/jewelryblog2.jpg";
import ringg4 from "../Images/jewelryblog3.jpg";
import ringg5 from "../Images/jewelryblog4.jpg";
import ringg6 from "../Images/jewelryblog5.jpg";
import ringg7 from "../Images/jewelryblog6.jpg";
import ringg8 from "../Images/jewelryblog7.jpg";
import ringg9 from "../Images/jewelryblogg.jpg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function Section8() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [updateCount, setUpdateCount] = useState(0);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    afterChange: () => setUpdateCount(updateCount + 1),
    beforeChange: (current, next) => setSlideIndex(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
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
          <div className="col-lg-12 pt-4" style={{ textAlign: "center" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h2>The Jewelry Blog</h2>{" "}
              <div style={{ padding: "20px 0px" }}>
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
              <div className="col-lg-3 col7">
                <div className="content_div">
                  <h3>
                    Customize Your Commitment: Personalized Add-Ons for <br />{" "}
                    Engagement Rings
                  </h3>
                  <div style={{ color: "#fff" }}>
                    Read More <IoIosArrowForward />
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col8">
                <div className="content_div">
                  <h3>
                    Customize Your Commitment: Personalized Add-Ons for <br />{" "}
                    Engagement Rings
                  </h3>
                  <div style={{ color: "#fff" }}>
                    Read More <IoIosArrowForward />
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col9">
                <div className="content_div">
                  <h3>
                    Customize Your Commitment: Personalized Add-Ons for <br />{" "}
                    Engagement Rings
                  </h3>
                  <div style={{ color: "#fff" }}>
                    Read More <IoIosArrowForward />
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col1">
                <div className="content_div">
                  <h3>Engagement ring</h3>
                  <div style={{ color: "#fff" }}>
                    Read More <IoIosArrowForward />
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col2">
                <div className="content_div">
                  <h3>Wedding bands</h3>
                  <div style={{ color: "#fff" }}>
                    Read More <IoIosArrowForward />
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col3">
                <div className="content_div">
                  <h3>fine jewelry</h3>
                  <div style={{ color: "#fff" }}>
                    Read More <IoIosArrowForward />
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col5">
                <div className="content_div">
                  <h3>
                    Ring Royalty: Exquisite $10K <br />
                    Engagement Rings
                  </h3>
                  <div style={{ color: "#fff" }}>
                    Read More <IoIosArrowForward />
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col4">
                <div className="content_div">
                  <h3>eternity rings</h3>
                  <div style={{ color: "#fff" }}>
                    Read More <IoIosArrowForward />
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col6">
                <div className="content_div">
                  <h3>
                    The Ultimate Guide to 'Love is Blind'
                    <br /> Engagement Rings
                  </h3>
                  <div style={{ color: "#fff" }}>
                    Read More <IoIosArrowForward />
                  </div>
                </div>
              </div>
            </Slider>
            <input
              style={{ color: "#000 !important" }}
              onChange={(e) => sliderRef.slickGoTo(e.target.value)}
              value={slideIndex}
              type="range"
              min={0}
              max={4}
            />
             
          </div>
        </div>
      </div>
    </Root>
  );
}
const Root = styled.section`
  margin: 20px 0px;
  .col-lg-3.col1 {
    background-image: url(${ringg1});
  }
  .col-lg-3.col2 {
    background-image: url(${ringg2});
  }
  .col-lg-3.col3 {
    background-image: url(${ringg3});
  }
  .col-lg-3.col4 {
    background-image: url(${ringg4});
  }
  .col-lg-3.col5 {
    background-image: url(${ringg5});
  }
  .col-lg-3.col6 {
    background-image: url(${ringg6});
  }
  .col-lg-3.col7 {
    background-image: url(${ringg7});
  }
  .col-lg-3.col9 {
    background-image: url(${ringg9});
  }
  .col-lg-3.col8 {
    background-image: url(${ringg8});
  }
  h2 {
    padding: 20px 0px;
    text-transform: uppercase;
    font-family:"Playfair Display","Proxima Nova","ui-sans-serif"!important;
  }
  .col-lg-3.col4,
  .col-lg-3.col3,
  .col-lg-3.col2,
  .col-lg-3.col1,
  .col-lg-3.col5, .col-lg-3.col6 , .col-lg-3.col7 , .col-lg-3.col8 , .col-lg-3.col9  {
    width: 90% !important;
    height: 340px;
    background-size: 100% 100%;
    object-fit: contain;
    border-radius: 20px;
  }
  .col-lg-3 {
    width: 24%;
    margin: 0px 6px;
    .content_div {
      padding:20px;
      height:100%;
      display:flex;
      flex-direction:column;
      justify-content:end;
      align-items:start;
      background-color: #000000;
      opacity: 0.5;
      border-radius: 20px;

    }
    h3 {
      line-height: 1.25;
      font-weight: 400;
      font-size: 24px;
      color: #fff;
      text-align: left;
    }
    &:hover {
      svg {
        animation: vibrate 2s infinite;
      }
    }
  }
  button {
    background-color: #fff;
    border: none;
    svg {
      font-size: 30px;
    }
  }
  input[type="range"] {
    width: 100%;
    color: #000 !important;
    margin: 20px 0px;
    padding: 5px;
    display: none;
  }

  .btn {
    margin-top: 40px;
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
  @media (max-width: 567px) {
    h2 {
    font-size: 20px;
}
  }
`;

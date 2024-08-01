import React, { useRef, useState } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import ringg1 from "../Images/couples1.jpg";
import ringg3 from "../Images/couples2.jpg";
import ringg2 from "../Images/couples3.jpg";
import ringg4 from "../Images/couples4.jpg";
import ringg5 from "../Images/couples5.jpg";
import ringg6 from "../Images/couples6.jpg";
import ringg7 from "../Images/couples7.jpg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function Section9() {
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
          <div className="col-lg-12 pt-4 pb-5" style={{ textAlign: "center" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h2>Our Couples</h2>{" "}
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
              <div className="col-lg-3 col5">
                <div className="content_div">
                  <h3>Shea & Josh Schmidt</h3>
                  <p>
                    Our day was so special filled with family and so much love!
                    My fiancé Josh told me we were going to...
                  </p>
                  <div style={{ color: "#fff" }}>
                    Read More
                    <IoIosArrowForward />
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col7">
                <div className="content_div">
                  <h3>Shea & Josh Schmidt</h3>
                  <p>
                    Our day was so special filled with family and so much love!
                    My fiancé Josh told me we were going to...
                  </p>
                  <div style={{ color: "#fff" }}>
                    Read More
                    <IoIosArrowForward />
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col6">
                <div className="content_div">
                  <h3>Shea & Josh Schmidt</h3>
                  <p>
                    Our day was so special filled with family and so much love!
                    My fiancé Josh told me we were going to...
                  </p>
                  <div style={{ color: "#fff" }}>
                    Read More
                    <IoIosArrowForward />
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col1">
                <div className="content_div">
                  <h3>Sarah & Jalen Bailey</h3>
                  <p>
                    Jay and I met on a hinge, and within a day we had our first
                    date at a coffee shop. One of our favorites...
                  </p>
                  <div style={{ color: "#fff" }}>
                    Read More
                    <IoIosArrowForward />
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col2">
                <div className="content_div">
                  <h3>Grace Anne & Chad Byrd</h3>
                  <p>
                    We had talked about getting engaged for a while and Chad
                    wanted to surprise me. He knew...
                  </p>
                  <div style={{ color: "#fff" }}>
                    Read More
                    <IoIosArrowForward />
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col3">
                <div className="content_div">
                  <h3>Kiley & Robbie Reynolds</h3>
                  <p>
                    About 3 years ago, my mom and sister told me they worked
                    with a guy who would be a perfect...
                  </p>
                  <div style={{ color: "#fff" }}>
                    Read More
                    <IoIosArrowForward />
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col4">
                <div className="content_div">
                  <h3>Baylee & Colin Trach</h3>
                  <p>
                    We met at a New Year’s Eve party in 2017 and started dating
                    5 months later, after talking to each other...
                  </p>
                  <div style={{ color: "#fff" }}>
                    Read More
                    <IoIosArrowForward />
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
  margin: 20px 0px 0px;
  background-color: black;
  color: #fff;
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
  h2 {
    padding: 20px 0px;
    text-transform: uppercase;
  }
  .col-lg-3.col4,
  .col-lg-3.col3,
  .col-lg-3.col2,
  .col-lg-3.col1,
  .col-lg-3.col5,
  .col-lg-3.col6,
  .col-lg-3.col7 {
    width: 90% !important;
    height: 380px;
    background-size: 100% 100%;
    object-fit: contain;
    border-radius: 20px;
  }
  .col-lg-3 {
    width: 24%;
    margin: 0px 6px;
    .content_div {
      padding: 20px;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: end;
      text-align: left;
      background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0) -0.86%,
        rgba(0, 0, 0, 0.45) 32.38%,
        rgba(0, 0, 0, 0.67) 98.99%,
        rgba(0, 0, 0, 0.67) 124.87%
      );
    }
    h3 {
      line-height: 1.25;
      font-weight: 400;
      font-size: 24px;
      color: #fff;
    }
    &:hover {
      svg {
        animation: vibrate 2s infinite;
      }
    }
  }
  button {
    background-color: #000;
    border: none;
    svg {
      font-size: 30px;
      color: #fff;
    }
  }
  input[type="range"] {
    width: 100%;
    color: #000 !important;
    margin: 20px 0px;
    padding: 5px;
    display: none;
  }
  .slick-prev:before,
  .slick-next:before {
    color: #212529;
  }

  @media (max-width: 567px) {
    h2 {
      font-size: 20px;
    }
  }
`;

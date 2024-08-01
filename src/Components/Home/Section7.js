import React, { useRef } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import ring1 from "../Images/bestseller1.jpg";
import ring2 from "../Images/bestseller2.jpg";
import ring3 from "../Images/bestseller3.jpg";
import ring4 from "../Images/bestseller4.jpg";
import ring7 from "../Images/bestseller3.jpg";
import ring8 from "../Images/bestseller4.jpg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const products = [
  {
    id: 1,
    name: "The Pave Eleanor Set With A 2 Carat Elongated Cushion Lab Diamond",
    price: "$3800",
    imgSrc: ring1,
    colors: ["white_color", "golden_color", "red_color"],
  },
  {
    id: 2,
    name: "The Eleanor Set With A 2 Carat Round Lab Diamond",
    price: "$3000",
    imgSrc: ring2,
    colors: ["blue_color", "green_color", "yellow_color"],
  },
  {
    id: 3,
    name: "The Razor Kamellie Set With A 2 Carat Round Lab Diamond",
    price: "$3250",
    imgSrc: ring3,
    colors: ["white_color", "golden_color", "red_color"],
  },
  {
    id: 4,
    name: "The Pave Lily Set With A 2 Carat Cushion Lab Diamond",
    price: "$4150",
    imgSrc: ring4,
    colors: ["blue_color", "green_color", "yellow_color"],
  },
  {
    id: 5,
    name: "The Pave Eleanor Set With A 2 Carat Elongated Cushion Lab Diamond",
    price: "$3800",
    imgSrc: ring1,
    colors: ["white_color", "golden_color", "red_color"],
  },
  {
    id: 6,
    name: "The Razor Kamellie Set With A 2 Carat Round Lab Diamond",
    price: "$3250",
    imgSrc: ring7,
    colors: ["white_color", "golden_color", "red_color"],
  },
  {
    id: 7,
    name: "The Eleanor Set With A 2 Carat Round Lab Diamond",
    price: "$3000",
    imgSrc: ring2,
    colors: ["blue_color", "green_color", "yellow_color"],
  },
  {
    id: 8,
    name: "The Pave Lily Set With A 2 Carat Cushion Lab Diamond",
    price: "$4150",
    imgSrc: ring8,
    colors: ["blue_color", "green_color", "yellow_color"],
  },
  {
    id: 9,
    name: "The Razor Kamellie Set With A 2 Carat Round Lab Diamond",
    price: "$3250",
    imgSrc: ring3,
    colors: ["white_color", "golden_color", "red_color"],
  },
];

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
              <h2>OUR Best Sellers</h2>
              <div style={{ padding: "20px 0" }}>
                <button onClick={goToPrevSlide}>
                  <IoIosArrowBack />
                </button>
                <button onClick={goToNextSlide}>
                  <IoIosArrowForward />
                </button>
              </div>
            </div>
            <Slider ref={sliderRef} {...settings}>
              {products.map((product) => (
                <div
                  key={product.id}
                  style={{
                    textAlign: "center",
                    width: "280px",
                    height: "191px",
                  }}
                >
                  <div className="d_flex">
                    <img
                      src={product.imgSrc}
                      alt={product.name}
                      style={{
                        width: "100%",
                        border: "1px solid #ededed",
                        borderRadius: "15px",
                      }}
                    />
                    <div className="mainn">
                      <div className="d-flex flex-column">
                        <h5 className="prd_name">{product.name}</h5>
                        <p className="prd_price">{product.price}</p>
                      </div>
                      <div className="d-flex">
                        {product.colors.map((color, index) => (
                          <span key={index} className={color}></span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
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
      font-size: 30px;
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

  @media (max-width: 567px) {
    h2 {
      font-size: 20px;
    }
  }
`;

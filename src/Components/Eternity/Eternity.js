import React, { useState } from "react";
import styled from "styled-components";
import bgg from "../../Images/etern.webp";
import { RxCross1 } from "react-icons/rx";
import WhiteGold14 from "../../Images/fourone.png";
import YellowGold14 from "../../Images/fourtwo.png";
import RoseGold14 from "../../Images/fourthree.png";
import WhiteGold18 from "../../Images/eightone.png";
import YellowGold18 from "../../Images/eighttwo.png";
import RoseGold18 from "../../Images/eightthree.png";
import Platinum from "../../Images/pt.png";
import { IoIosArrowDown } from "react-icons/io";
import ROUND from "../../Images/round-removebg-preview.png";
import EMERALD from "../../Images/emerald-removebg-preview.png";
import HEART from "../../Images/heart-removebg-preview.png";
import MARQUISE from "../../Images/Marquise-removebg-preview.png";
import OVAL from "../../Images/oval-removebg-preview.png";
import PEAR from "../../Images/Pear-removebg-preview.png";
import PRINCESS from "../../Images/Princess-removebg-preview.png";
import RADIANT from "../../Images/Radiant-removebg-preview.png";
import CUSHION from "../../Images/cushionremovebg.png";
import ASSCHER from "../../Images/ECusion-removebg-preview.png";
import "react-modern-drawer/dist/index.css";
import Drawer from "react-modern-drawer";
import ww from "../../Images/a.jpg";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";


const metals = [
  { id: 1, label: "White Gold", imgUrl: WhiteGold14 },
  { id: 2, label: "Yellow Gold", imgUrl: YellowGold14 },
  { id: 3, label: "Rose Gold", imgUrl: RoseGold14 },
  { id: 4, label: "White Gold.", imgUrl: WhiteGold18 },
  { id: 5, label: "Yellow Gold.", imgUrl: YellowGold18 },
  { id: 6, label: "Rose Gold.", imgUrl: RoseGold18 },
  { id: 7, label: "Platinum", imgUrl: Platinum },
];
const shapes = [
  { id: 1, type: "ROUND", imgUrl: ROUND },
  { id: 2, type: "PRINCESS", imgUrl: PRINCESS },
  { id: 3, type: "OVAL", imgUrl: OVAL },
  { id: 4, type: "EMERALD", imgUrl: EMERALD },
  { id: 5, type: "PEAR", imgUrl: PEAR },
  { id: 6, type: "HEART", imgUrl: HEART },
  { id: 7, type: "MARQUISE", imgUrl: MARQUISE },
  { id: 8, type: "CUSHION", imgUrl: CUSHION },
  { id: 9, type: "ASSCHER", imgUrl: ASSCHER },
  { id: 10, type: "RADIANT", imgUrl: RADIANT },
];
export const Eternity = () => {
  const [show, setShow] = useState(false);
  const [shape, setShape] = useState(false);
  const [selectedDropButton, setSelectedDropButton] = useState(1);
  const [selectedOption, setSelectedOption] = useState(1);
  const [isOpen, setIsOpen] = React.useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [modal, setModal] = useState(false);
  

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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

  const handleButtonDropClick = (buttonIndex) => {
    setSelectedDropButton(buttonIndex);
  };
  function toggleShowName() {
    setShow((prevState) => !prevState);
  }

  function toggleShapeName() {
    setShape((prevState) => !prevState);
  }

  const handleButtonOption = (buttonIndex) => {
    setSelectedOption(buttonIndex);
  };

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  
  const navigate = useNavigate();

//   const handleAddDiamondClick = (productIds) => {
//     setSelectedProductId(productIds);
//     setModal(true);
//     dispatch(setProductIds(productIds));
//   };

  const drawerContent = (
    <>
      <div className="ring_types"></div>
      <StyledSection>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="select_div">
                <div className="select_opt">
                  <div className="head_icon" onClick={toggleShowName}>
                    <h3>Select Metal</h3>
                    <IoIosArrowDown />
                  </div>
                  {show && (
                    <div className="select_metal">
                      <div className="first_row">
                        <div className="d-flex align-items-center">
                          <h5>Metal : {selectedDropButton}</h5>
                        </div>
                        <RxCross1
                          className="icon"
                          onClick={() => setShow(false)}
                        />
                      </div>

                      <div className="btn_row">
                        {metals.map((metal) => (
                          <button
                            key={metal.label}
                            className={
                              selectedDropButton === metal.label
                                ? "selected"
                                : ""
                            }
                            onClick={() => handleButtonDropClick(metal.label)}
                          >
                            <img
                              style={{ width: "50px", height: "50px" }}
                              src={metal.imgUrl}
                              alt={metal.label}
                            />
                            <h5>{metal.label}</h5>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="head_icon" onClick={toggleShapeName}>
                    <h3>Select Shape</h3>
                    <IoIosArrowDown />
                  </div>

                  {shape && (
                    <div className="select_shape">
                      <div className="first_row">
                        <div className="d-flex align-items-center">
                          <h5>Shape : {selectedOption}</h5>
                        </div>
                        <RxCross1
                          className="icon"
                          onClick={() => setShape(false)}
                        />
                      </div>

                      <div className="btn_row">
                        {shapes.map((shape) => (
                          <button
                            key={shape.type}
                            className={
                              selectedOption === shape.type ? "selected" : ""
                            }
                            onClick={() => handleButtonOption(shape.type)}
                          >
                            <img
                              style={{ width: "50px", height: "50px" }}
                              src={shape.imgUrl}
                              alt={shape.type}
                            />
                            <h5>{shape.type}</h5>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                <select>
                  <option value="low-high">Pricing (low-to-high)</option>
                  <option value="high-low">Pricing (high-to-low)</option>
                  <option value="best-selling">Best Selling</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </StyledSection>
    </>
  );

  return (
    <Root>
      <div className="bg_img"></div>
      <div
        className={`drawer-content ${
          isOpen && screenWidth <= 567 ? "open" : ""
        }`}
      >
        {screenWidth > 567 ? (
          drawerContent
        ) : (
          <Drawer
            open={isOpen}
            onClose={toggleDrawer}
            direction="bottom"
            className="bla"
          >
            {drawerContent}
          </Drawer>
        )}
      </div>
      <div className="main_div">
        {/* {products && */}
        {/* products.slice(0, visibleProducts).map((i, index) => { */}
        {/* return ( */}
        <div className="subdiv">
          <div className="slider-container">
            <Slider {...settings}>
              <div>
                <img src={ww} alt="img" />
              </div>

              <div>
                <img src={ww} alt="img" />
              </div>
            </Slider>
          </div>

          <div className="hov_content">
            <div className="d-flex   flex-column">
              <div className="d-flex flex justify-content-between">
                <h5 className="prd_name">1ct Round Shared Prong Eternity</h5>
                <div className="d-flex">
                  <span className="white_color"></span>
                  <span className="golden_color"></span>
                  <span className="red_color"></span>
                </div>
              </div>
              <>
                <p className="prd_price pt-1 pb-1">$1,650</p>
              </>
            </div>

            <div className="btn_div">
              <button
                className="info_btn" onClick={() =>{navigate("/eternitydetails");
                }
            }
                
              >
                More Info
              </button>

              <button
                className="add_btn"
              >
                Add to Cart
              </button>
            </div>

            <div className="note">
              <p className="note">
                Pay in 12 interest-free installments of $<span>Learn more</span>
              </p>
            </div>
          </div>
        </div>
        {/* );
          })} */}
      </div>
    </Root>
  );
};

const Root = styled.section`

  .bg_img {
    background-image: url(${bgg});
    background-size: 100% 100%;
    object-fit: contain;
    height: 400px;
  }

  .main_div {
    display: flex;
    flex-wrap: wrap;
    position: relative;
    gap: 4px;
    padding: 0 20px;
    .subdiv {
      width:24vw;
      height:58vh; /* slider changes */
      border:3px solid #f7f7f7;
      border-radius:20px;
      padding:5px;
      overflow:hidden;
      position:relative;
      margin-bottom:20px;
      padding:15px;
 
      /* slider changes */
      .slick-track {
        /* height:220px; */
        /* height: 88%; */
      }
       /* slider changes */
       .slick-prev {
        left: -2px;
        z-index: 111;
      }

      .slick-next {
        right: -2px;
        z-index: 111;
      }

      /* slider changes */
      .slick-prev:before,
      .slick-next:before {
        background: rgb(185 179 179);
        border-radius: 50px;
      }

      img {
        width: 100%;
        height: 88%;
        /*height: 220px;  slider changes */
        object-fit: cover;
      }

      &:hover {
        border: 3px solid black;
        overflow: unset;
        /* transform: scale(1.1); */
        /* z-index: 1; */
        padding: 15px;
      }
      .hov_content {
        display: flex;
        flex-wrap: wrap;
        margin-top: 20px;
        .flex-column {
          display: flex;
          width: 100%;
        }
      }

      &:hover .hov_content {
        width: 24vw;
        z-index: 1;
        position: absolute;
        background-color: white;
        border: 3px solid black;
        padding: 0 20px 0;
        left: -3px;
        overflow: hidden;
        border-top: none;
        border-radius: 0 0 20px 20px;
      }

      .prd_name {
        font-size:14px;
        margin-bottom:0;
      }
      .prd_price {
        font-size: 13px;
        width: 100%;
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
        background-color: #efcbcb;
      }

      .btn_div {
        display: flex;
        justify-content: space-between;
        padding: 0;
        width: 100%;
        gap: 10px;
        .info_btn {
          flex: 1;
          padding: 12px 21px;
          border-radius: 25px;
          font-size: 13px;
          background-color: #fff;
          border: 2px solid black;
        }
        .add_btn {
          /* flex: 1; */
          background-color: black;
          border: 2px solid black;
          color: white;
          padding: 5px 17px;
          border-radius: 25px;
          font-size: 13px;
          flex: 1;
        }
      }

      .note {
        display: flex;
        justify-content: center;
        width: 100%;
        p {
          font-size: 10px;
          margin-top: 20px;
          text-align: center;
          margin-top: 8px;
        }
        span {
          text-decoration: underline;
          cursor: pointer;
        }
      }
    }
  }

  @media (max-width: 567px) {
    padding: 0px 10px;

    .main_div {
      gap: 15px;
      margin-top: 0;
      .subdiv {
        width:45vw;
        height:218px;
        &:hover .hov_content{
          width:45vw;
          padding:0px 10px;
        }

        .prd_name {
          font-size: 12px;
          margin-bottom: 9px;
        }
        .prd_price {
          font-size: 11px;
          margin-bottom: 10px;
        }
        .white_color,
        .golden_color,
        .red_color {
          height: 10px;
          width: 10px;
        }
        .btn_div .info_btn,
        .btn_div .add_btn {
          flex: 1;
          font-size: 11px;
          padding: 3px 10px;
          border-radius: 15px;
        }
      }
    }
  }

  @media (min-width: 567px) and (max-width: 992px) {
    padding: 0px 10px;

    .main_div {
      padding: 0 20px;
      gap: 15px;
      .subdiv {
        width: 45vw;
        height: 410px;
        &:hover .hov_content {
          width: 45vw;
          padding: 0px 10px;
        }
        .prd_name {
          font-size: 12px;
          margin-bottom: 9px;
        }
        .prd_price {
          font-size: 11px;
          margin-bottom: 10px;
        }
        .white_color,
        .golden_color,
        .red_color {
          height: 10px;
          width: 10px;
        }
        .btn_div .info_btn,
        .btn_div .add_btn {
          flex:1;
          font-size:11px;
          padding:10px 10px;
          border-radius:15px;
        }
      }
    }

    .main_div .subdiv img {
      width: 100%;
      height: 92%;
    }
  }

`;

const StyledSection = styled.section`
  padding: 20px;
  @media (max-width: 567px) {
    padding: 0px;
  }
  .select_div {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    @media (max-width: 567px) {
      margin-top: 10px;
      gap: 30px;
    }
    .select_opt {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;

      .head_icon {
        position: relative;
        cursor: pointer;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: rgba(247, 247, 247);
        border-radius: 0.375rem;
        padding: 10px 10px;
        border: 1px solid transparent;
        width: 150px;
        position: relative;
        h3 {
          font-size: 14px;
        }
      }

      .select_metal,
      .select_shape {
        position: absolute;
        left: 15%;
        bottom: -40%;
        border: 1px solid #fff;
        box-shadow: 1px 3px 25px 1px #cbced0;
        width: 41%;
        border-radius: 10px;
        background-color: #fff;
        padding: 20px;
        z-index: 1;

        .first_row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          h5 {
            font-size: 15px;
            font-weight: 700;
            padding-top: 8px;
          }
          span {
            color: rgba(102, 102, 102);
            font-size: 15px;
            font-weight: 600;
            margin-left: 5px;
          }
          .icon {
            cursor: pointer;
          }
        }

        .btn_row {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 15px;
          button {
            border-radius: 10px;
            padding: 8px;
            background-color: #fff;
            border: 1px solid rgba(221, 211, 211);
            width: 87px;
            cursor: pointer;
            &.selected {
              border: 2px solid black;
            }
            &:hover {
              background-color: rgba(245, 245, 245);
            }
            svg {
              height: 50px;
              cursor: pointer;
            }

            h5 {
              color: rgb(46 44 44);
              font-size: 11px;
              margin: 0;
            }
            span {
              font-size: 11px;
            }
          }
        }
        @media (max-width: 567px) {
          left: 7%;
          bottom: 2%;
          border: 1px solid #fff;
          width: 85%;
          padding: 10px;
          .btn_row button {
            width: 84px;
          }
        }
        @media (max-width: 1000px) {
          width: 90%;
          left: 3%;
          bottom: 6%;
        }
      }
    }

    select {
      background-color: rgba(247, 247, 247);
      border-radius: 0.375rem;
      font-size: 14px;
      padding: 10px 10px;
      border: 1px solid transparent;
      cursor: pointer;
    }
  }
`;

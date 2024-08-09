import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Section4 from "./Section4";
import "react-modern-drawer/dist/index.css";
import Drawer from "react-modern-drawer";
import { useDispatch, useSelector } from "react-redux";
import { IoFilterOutline } from "react-icons/io5";
import { setSelectedShape, setUniqueData } from "../../../redux/users/action";
import ROUND from "../../../Images/round-removebg-preview.png";
import EMERALD from "../../../Images/emerald-removebg-preview.png";
import HEART from "../../../Images/heart-removebg-preview.png";
import MARQUISE from "../../../Images/Marquise-removebg-preview.png";
import OVAL from "../../../Images/oval-removebg-preview.png";
import PEAR from "../../../Images/Pear-removebg-preview.png";
import PRINCESS from "../../../Images/Princess-removebg-preview.png";
import RADIANT from "../../../Images/Radiant-removebg-preview.png";
import CUSHION from "../../../Images/cushionremovebg.png";
import ECUSHION from "../../../Images/ECusion-removebg-preview.png";
import ASSCHER from "../../../Images/ECusion-removebg-preview.png";
import { useNavigate } from "react-router-dom";
import WhiteGold14 from "../../../Images/fourone.png";
import YellowGold14 from "../../../Images/fourtwo.png";
import RoseGold14 from "../../../Images/fourthree.png";
import WhiteGold18 from "../../../Images/eightone.png";
import YellowGold18 from "../../../Images/eighttwo.png";
import RoseGold18 from "../../../Images/eightthree.png";
import Platinum from "../../../Images/pt.png";
import { EXCHANGE_URLS } from "../../URLS";
import { useLoading } from "../../LoadingContext";
import { IoIosArrowDown } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";

const shapesList = [
  { name: "ROUND", imgUrl: ROUND },
  { name: "EMERALD", imgUrl: EMERALD },
  { name: "HEART", imgUrl: HEART },
  { name: "MARQUISE", imgUrl: MARQUISE },
  { name: "OVAL", imgUrl: OVAL },
  { name: "PEAR", imgUrl: PEAR },
  { name: "PRINCESS", imgUrl: PRINCESS },
  { name: "RADIANT", imgUrl: RADIANT },
  { name: "CUSHION", imgUrl: CUSHION },
  { name: "E.CUSHION", imgUrl: ECUSHION },
];

const shapes = [
  { id: 1, type: "1" },
  { id: 2, type: "1.5" },
  { id: 3, type: "2" },
  { id: 4, type: "2.5" },
  { id: 5, type: "3" },
];

const metals = [
  { id: 1, label: "White Gold", imgUrl: WhiteGold14 },
  { id: 2, label: "Yellow Gold", imgUrl: YellowGold14 },
  { id: 3, label: "Rose Gold", imgUrl: RoseGold14 },
  { id: 4, label: "White Gold.", imgUrl: WhiteGold18 },
  { id: 5, label: "Yellow Gold.", imgUrl: YellowGold18 },
  { id: 6, label: "Rose Gold.", imgUrl: RoseGold18 },
  { id: 7, label: "Platinum", imgUrl: Platinum },
];

export default function Section2() {
  const selectedShape = useSelector((state) => state.users.selectedShape);
  const [selectedShapes, setSelectedShapes] = useState(["ROUND"]); // Default to ROUND
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const [shape, setShape] = useState(false);
  const [selectedOption, setSelectedOption] = useState();
  const [selectedDropButton, setSelectedDropButton] = useState();

  const { setLoading } = useLoading();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fetchDiamondData = async (shape) => {
    setLoading(true);
    try {
      const response = await axios.get(`${EXCHANGE_URLS}/tagdata?tag=${shape}`);
      if (response.status === 200) {
        setData(response.data.data);
        dispatch(setUniqueData(response.data.data));
        console.log("response", response.data.data);
      }
    } catch (error) {
      console.error("Error fetching collections:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const shape =
      selectedShape ||
      (selectedShapes.length > 0 ? selectedShapes[0] : "ROUND");
    fetchDiamondData(shape);
  }, [selectedShape, selectedShapes, dispatch, setLoading]);

  const handleShapeClick = (shapeName) => {
    setSelectedShapes([shapeName]);
    dispatch(setSelectedShape(shapeName));
    navigate("/uniquering", { state: { selectedShape: shapeName } });
  };

  const [isOpen, setIsOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function toggleShowName() {
    setShow((prevState) => !prevState);
  }

  const handleButtonDropClick = (buttonIndex) => {
    setSelectedDropButton(buttonIndex);
  };

  const handleButtonOption = (buttonIndex) => {
    setSelectedOption(buttonIndex);
  };

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  function toggleShapeName() {
    setShape((prevState) => !prevState);
  }

  const drawerContent = (
    <>
      <div className="ring_types mt-4">
        {shapesList.map((shape) => (
          <button
            key={shape.name}
            className={`btn_shapes ${
              (selectedShape || selectedShapes).includes(shape.name)
                ? "selected"
                : ""
            }`}
            onClick={() => handleShapeClick(shape.name)}
          >
            <img src={shape.imgUrl} alt={shape.name} />
            {shape.name}
          </button>
        ))}
      </div>
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
                    <h3>Select Carat Weight</h3>
                    <IoIosArrowDown />
                  </div>

                  {shape && (
                    <div className="select_shape">
                      <div className="first_row">
                        <div className="d-flex align-items-center">
                          <h5>Carat Weight : {selectedOption}</h5>
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
                            {/* <img
                              style={{ width: "50px", height: "50px",  }}
                              src={shape.imgUrl}
                              alt={shape.type}
                            /> */}
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
      <button className="drawer-toggle-button" onClick={toggleDrawer}>
        <IoFilterOutline /> Filter
      </button>
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

      <Section4 data={data} />
    </Root>
  );
}

const Root = styled.section`
  padding: 0 0 20px;
  .column {
    border: 1px solid rgba(247, 247, 247);
    background-color: rgba(247, 247, 247);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 15px;
    border-radius: 10px;
    h2 {
      font-size: 40px;
      font-weight: 400;
      margin-right: 10px;
    }
    span {
      color: rgba(128, 128, 128);
      font-size: 13px;
      font-weight: 600;
    }
    h6 {
      color: rgba(0, 0, 0);
      font-size: 18px;
      text-transform: uppercase;
    }
    img,
    svg {
      vertical-align: middle;
      width: 35px;
      height: 35px;
    }
    a {
      color: rgba(128, 128, 128);
      text-decoration: underline;
      &:hover {
        text-decoration: underline;
      }
    }
  }

  .heading {
    padding: 10px 24px;
    h2 {
      color: rgba(0, 0, 0);
      font-size: 28px;
      margin-bottom: 10px;
    }
    p {
      font-size: 18px;
      font-weight: 500;
      line-height: 1.75rem;
    }
  }

  .ring_types {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    button {
      width: 93px !important;
      border: 2px solid transparent;
      background: #fff;
      display: flex;
      flex-direction: column;
      justify-content: center;
      border-radius: 10px;
      align-items: center;
      padding: 12px 0;
      font-size: 12px;
      line-height: 25px;
      font-weight: 550;
      &.selected {
        border: 2px solid black;
        border-radius: 10px;
      }

      &:hover {
        background-color: rgba(247, 247, 247);
      }

      img,
      svg {
        height: 50px;
        width: 62px;
      }
    }
  }

  .drawer-content {
    padding: 0px 20px 10px;
    width: 100%;
  }
  .drawer-toggle-button {
    font-weight: 500;
    padding: 5px 10px;
    border: 1px solid #d1d1d1;
    border-radius: 4px;
    font-size: 14px;
    background-color: transparent;
  }
  @media (min-width: 568px) {
    .drawer-toggle-button {
      display: none;
    }
    .drawer-content {
      display: block;
    }
  }
  .EZDrawer__container {
    overflow-y: scroll !important;
    height: 450px !important;
    border-top-right-radius: 25px !important;
    border-top-left-radius: 25px !important;
    padding-bottom: 40px;
  }
  @media (max-width: 567px) {
    .drawer-toggle-button {
      display: block;
      margin-left: 20px;
    }
    .drawer-content {
      .ring_types {
        justify-content: left;
        gap: 4px;
        margin: 0px 10px;
        width: 100%;

        .btn_shapes {
          width: 85px !important;
          border: 1px solid #d1d1d1;
          background-color: rgba(247, 247, 247);
          padding: 12px 42px;
        }
      }
    }

    .ring_types button img,
    .ring_types button svg {
      height: 40px;
      width: 40px;
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
      justify-content: space-around;
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
        width: 190px;
        position: relative;
        h3 {
          font-size: 14px;
        }
        @media (max-width: 567px) {
     width:155px
    }
      }

      .select_metal {
        position: absolute;
        left: 3%; /*tags*/
        bottom: -20%;
        border: 1px solid #fff;
        box-shadow: 1px 3px 25px 1px #cbced0;
        width: 32%;
        border-radius: 10px;
        background-color: #fff;
        padding: 20px;
        z-index: 11111;

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
          bottom: 15%;
          border: 1px solid #fff;
          width: 85%;
          padding: 10px;
          .btn_row button {
            width: 84px;
          }
        }

        /* @media (min-width: 567px) and (max-width: 1000px){
          left: 7%;
          bottom: 32%;
          border: 1px solid #fff;
          width: 51%;
          padding: 10px;
          .btn_row button {
            width: 84px;
          }
        } */
        @media (min-width: 567px) and (max-width: 1000px) {
          position: absolute;
          left: unset;
          bottom: unset;
          width: 55%;
          z-index: 11111;
          top: 58%;
        }
        /* @media (max-width: 1000px) {
          width: 90%;
          left: 3%;
          bottom: 6%;
        } */
      }

      .select_shape {
        position: absolute;
        left: 6%; /*tags*/
        bottom: -15%;
        border: 1px solid #fff;
        box-shadow: 1px 3px 25px 1px #cbced0;
        width: 32%;
        border-radius: 10px;
        background-color: #fff;
        padding: 20px;
        z-index: 11111;

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
            padding: 25px;
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
              font-size: 14px;
              margin: 0;
            }
            span {
              font-size: 11px;
            }
          }
        }
        @media (max-width: 567px) {
          left: 7%;
          bottom: 22%;
          border: 1px solid #fff;
          width: 85%;
          padding: 10px;
          .btn_row button{
            width: 84px;
          }

          /* .select_div .select_opt .head_icon {
            width: 160px;
          } */
        }

        @media (min-width: 567px) and (max-width: 1000px) {
          position: absolute;
          left: unset;
          bottom: unset;
          width: 55%;
          z-index: 11111;
          top: 58%;
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

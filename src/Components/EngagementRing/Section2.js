import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useDispatch } from "react-redux";
import { IoIosArrowDown } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import Section4 from "./Section4";
import {
  setProductIds,
  setSelectedRingShape,
  setSelectedRingSvg,
} from "../../redux/users/action";
import solitaire from "../../Images/Solitaire-removebg-preview.png";
import pave from "../../Images/Pave-removebg-preview.png";
import halo from "../../Images/Halo-removebg-preview.png";
import nature from "../../Images/Nature-removebg-preview.png";
import hiddenhalo from "../../Images/HiddenHalo-removebg-preview.png";
import sidestone from "../../Images/SideStone-removebg-preview.png";
import threestone from "../../Images/ThreeStones-removebg-preview.png";
import vintage from "../../Images/Vintage-removebg-preview.png";
import tension from "../../Images/Tension-removebg-preview.png";
import { EXCHANGE_URLS } from "../URLS";
import { useLoading } from "../LoadingContext";
import { IoFilterOutline } from "react-icons/io5";
import "react-modern-drawer/dist/index.css";
import Drawer from "react-modern-drawer";
import WhiteGold14 from "../../Images/fourone.png";
import YellowGold14 from "../../Images/fourtwo.png";
import RoseGold14 from "../../Images/fourthree.png";
import WhiteGold18 from "../../Images/eightone.png";
import YellowGold18 from "../../Images/eighttwo.png";
import RoseGold18 from "../../Images/eightthree.png";
import Platinum from "../../Images/pt.png";
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

const shapesList = [
  { title: "Solitaire", imgUrl: solitaire },
  { title: "Pave", imgUrl: pave },
  { title: "Halo", imgUrl: halo },
  { title: "Nature", imgUrl: nature },
  { title: "Hidden Halo", imgUrl: hiddenhalo },
  { title: "Side Stone", imgUrl: sidestone },
  { title: "Three Stone", imgUrl: threestone },
  { title: "Vintage", imgUrl: vintage },
  { title: "Tension", imgUrl: tension },
];

export default function Section2() {
  const [show, setShow] = useState(false);
  const [shape, setShape] = useState(false);
  const [selectedDropButton, setSelectedDropButton] = useState();
  const [selectedOption, setSelectedOption] = useState();

  const [selectedButton, setSelectedButton] = useState(1);
  const [collection, setCollection] = useState([]);
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const { setLoading } = useLoading();

  const handleButtonClick = (buttonIndex, selectedRingSvg, shapeTitle) => {
    setSelectedButton(buttonIndex);
    dispatch(setSelectedRingSvg(selectedRingSvg));
    dispatch(setSelectedRingShape(shapeTitle));
  };

  useEffect(() => {
    const fetchCollections = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${EXCHANGE_URLS}/collection`);
        if (response.status === 200) {
          setCollection(response.data.data);
          console.log("response", response.data.data);
        }
      } catch (error) {
        console.error("Error fetching collections:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCollections();
  }, [setLoading]);

  useEffect(() => {
    const fetchProductsDetails = async () => {
      if (collection.length > 0 && selectedButton >= 0) {
        const collectionId = collection[selectedButton]?.id;
        try {
          const res = await axios.get(
            `${EXCHANGE_URLS}/collectionById?collectionId=${collectionId}`
          );
          if (res.status === 200) {
            setProducts(res.data.products);
            const productIds = res.data.products.map((product) => product.node);
            dispatch(setProductIds(productIds));
            console.log("productid", productIds);
          }
        } catch (error) {
          console.error("Error fetching products:", error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchProductsDetails();
  }, [collection, selectedButton, dispatch, setLoading]);

  const [isOpen, setIsOpen] = React.useState(false);
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

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  function toggleShowName() {
    setShow((prevState) => !prevState);
  }

  function toggleShapeName() {
    setShape((prevState) => !prevState);
  }

  const handleButtonDropClick = (buttonIndex) => {
    setSelectedDropButton(buttonIndex);
  };

  const handleButtonOption = (buttonIndex) => {
    setSelectedOption(buttonIndex);
  };

  const drawerContent = (
    <>
      <div className="ring_types">
        {shapesList.map((shape, index) => (
          <button
            key={index}
            className={selectedButton === index + 1 ? "selected" : ""}
            onClick={() =>
              handleButtonClick(index + 1, shape.imgUrl, shape.title)
            }
          >
            <img
              src={shape.imgUrl}
              alt={`img of ring ${shape.title}`}
              style={{ width: "52px" }}
            />
            <span>{shape.title}</span>
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
      <div className="container-fluid">
        <div className="row ">
          <div className="col-lg-12">
            <div className="heading text-center">
              <h2>Engagement Rings</h2>
              <p>
                Discover our collection of made to order engagement rings and
                customize it to your preference
              </p>
            </div>
          </div>
        </div>
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
      </div>
      {/* <div className="tags">
        {show && <h5> {selectedDropButton}</h5>}
        {shape && <h5> {selectedOption}</h5>}
      </div> */}
      <Section4 products={products} />
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
    flex-wrap: nowrap;
    align-items: baseline;
    overflow-x: auto;
    justify-content: center;
    gap: 20px;
    button {
      width: 93px;
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
      font-weight: 500;
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
    padding: 20px 0px;
    width: 100%;
  }


  .drawer-toggle-button {
    font-weight:500;
    padding:5px 10px;
    border:1px solid #d1d1d1;
    border-radius:4px;
    font-size:14px;
    background-color:transparent;
  }


  @media (min-width: 877px){
    .drawer-toggle-button {
      display:none;
    }
    .drawer-content {
      display: block;
    }
  }
  .EZDrawer__container {
    overflow-y: scroll !important;
    height: 67vh !important;
    border-top-right-radius: 25px !important;
    border-top-left-radius: 25px !important;
    padding-bottom: 40px;
  }


  @media (max-width: 567px) {
    .drawer-toggle-button {
      display: block;
    }
    .drawer-content {
      /* display: none; */
      .ring_types {
        justify-content: left;
        flex-wrap: wrap;
        gap: 5px;
        margin: 20px 10px 0px;
        width: 100%;
        button {
          width: 85px;
          border: 1px solid #d1d1d1;
          background-color: rgba(247, 247, 247);
          padding: 0px 3px;
        }
      }
    }

    .heading {
      padding: 10px 0px;
      h2 {
        font-size: 18px;
      }
      p {
        font-size: 12px;
        line-height: 1rem;
      }
    }
  }

  @media (min-width: 567px) and (max-width: 992px) {
    .drawer-toggle-button {
      display: none;
    }
  }
`;

// const StyledSection = styled.section`
//   padding: 20px;
//   @media (max-width: 567px) {
//     padding: 0px;
//   }
//   .select_div {
//     display: flex;
//     flex-wrap: wrap;
//     justify-content: space-between;
//     margin-top: 40px;
//     @media (max-width: 567px) {
//       margin-top: 10px;
//       gap: 30px;
//     }
//     .select_opt {
//       display: flex;
//       flex-wrap: wrap;
//       gap: 20px;

//       .head_icon {
//         position: relative;
//         cursor: pointer;
//         display: flex;
//         justify-content: space-between;
//         align-items: center;
//         background-color: rgba(247, 247, 247);
//         border-radius: 0.375rem;
//         padding: 10px 10px;
//         border: 1px solid transparent;
//         width: 150px;
//         position: relative;
//         h3 {
//           font-size: 14px;
//         }
//       }

//       .select_metal,
//       .select_shape {
//         position: absolute;
//         left: 15%;
//         bottom: -40%;
//         border: 1px solid #fff;
//         box-shadow: 1px 3px 25px 1px #cbced0;
//         width: 41%;
//         border-radius: 10px;
//         background-color: #fff;
//         padding: 20px;
//         z-index: 1;

//         .first_row {
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//           h5 {
//             font-size: 15px;
//             font-weight: 700;
//             padding-top: 8px;
//           }
//           span {
//             color: rgba(102, 102, 102);
//             font-size: 15px;
//             font-weight: 600;
//             margin-left: 5px;
//           }
//           .icon {
//             cursor: pointer;
//           }
//         }

//         .btn_row {
//           display: flex;
//           flex-wrap: wrap;
//           gap: 10px;
//           margin-top: 15px;
//           button {
//             border-radius: 10px;
//             padding: 8px;
//             background-color: #fff;
//             border: 1px solid rgba(221, 211, 211);
//             width: 87px;
//             cursor: pointer;
//             &.selected {
//               border: 2px solid black;
//             }
//             &:hover {
//               background-color: rgba(245, 245, 245);
//             }
//             svg {
//               height: 50px;
//               cursor: pointer;
//             }

//             h5 {
//               color: rgb(46 44 44);
//               font-size: 11px;
//               margin: 0;
//             }
//             span {
//               font-size: 11px;
//             }
//           }
//         }
//         @media (max-width: 567px) {
//           left: 7%;
//           bottom: 2%;
//           border: 1px solid #fff;
//           width: 85%;
//           padding: 10px;
//           .btn_row button {
//             width: 84px;
//           }
//         }
//         @media (max-width: 1000px) {
//           width: 90%;
//           left: 3%;
//           bottom: 6%;
//         }
//       }
//     }

//     select {
//       background-color: rgba(247, 247, 247);
//       border-radius: 0.375rem;
//       font-size: 14px;
//       padding: 10px 10px;
//       border: 1px solid transparent;
//       cursor: pointer;
//     }
//   }
// `;


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
        width: 150px;
        position: relative;
        h3 {
          font-size: 14px;
        }
      }

      .select_metal {
        position: absolute;
        left: 3%; /*tags*/
        bottom: -32%;
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
        @media (min-width: 567px) and (max-width: 1000px){
            position:absolute;
            left:unset;
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

      .select_shape{
        position:absolute;
        left:6%; /*tags*/
        bottom:-46%;
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
          bottom: 0;
          border: 1px solid #fff;
          width: 85%;
          padding: 10px;
          .btn_row button{
            width:84px;
          }
        }

        @media  (min-width: 567px) and (max-width: 1000px) {
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
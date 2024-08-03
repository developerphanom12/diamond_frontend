import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import {
  setForHerHim,
  setHerHimProductIds,
  setSelectedHerImgTitle,
  setSelectedHimImgTitle,
} from "../../redux/users/action";
import forHer from "../../Images/her.png";
import forHim from "../../Images/him.png";
import styled from "styled-components";
import WhiteGold14 from "../../Images/fourone.png";
import YellowGold14 from "../../Images/fourtwo.png";
import RoseGold14 from "../../Images/fourthree.png";
import WhiteGold18 from "../../Images/eightone.png";
import YellowGold18 from "../../Images/eighttwo.png";
import RoseGold18 from "../../Images/eightthree.png";
import Platinum from "../../Images/pt.png";
import natureForHer from "../../Images/NatureHer.png";
import paveForHer from "../../Images/PaveHer.png";
import prongForHer from "../../Images/ProngHer.png";
import solidForHer from "../../Images/SolidHer.png";
import cigarForHer from "../../Images/CigarHer.png";
import classicForHim from "../../Images/ClassicHim.png";
import diamondForHim from "../../Images/DiamondHim.png";
import designerForHim from "../../Images/DesignerHim.png";
import { IoIosArrowDown } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import { IoFilterOutline } from "react-icons/io5";
import "react-modern-drawer/dist/index.css";
import Drawer from "react-modern-drawer";
import { NoProduct } from "../NoProduct";
import { EXCHANGE_URLS } from "../URLS";
import axios from "axios";

const ForHerList = [
  { id: 1, title: "Nature", imgUrl: natureForHer },
  { id: 2, title: "Pave", imgUrl: paveForHer },
  { id: 3, title: "Prong", imgUrl: prongForHer },
  { id: 4, title: "Solid", imgUrl: solidForHer },
  { id: 5, title: "Cigar Band", imgUrl: cigarForHer },
];

const ForHimList = [
  { id: 1, title: "Classic", imgUrl: classicForHim },
  { id: 2, title: "Diamond", imgUrl: diamondForHim },
  { id: 3, title: "Designer", imgUrl: designerForHim },
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
export default function WeddingBands() {
  const [show, setShow] = useState(false);
  const [selectedButton, setSelectedButton] = useState(1);
  const [selectedDropButton, setSelectedDropButton] = useState(1);
  const [isOpen, setIsOpen] = React.useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [isForHer, setIsForHer] = useState(true);
  const [visibleProducts, setVisibleProducts] = useState(20);
  const [herHimBandProduct, setHerHimBandProduct] = useState();
  const [selectedHerHimProductId, setSelectedHerHimProductId] = useState(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleModalNavigate = (forHer) => {
    setIsForHer(forHer);
    setSelectedButton(1);
    if (forHer) {
      dispatch(
        setSelectedHerImgTitle(ForHerList[0].title, ForHerList[0].imgUrl)
      );
    } else {
      dispatch(
        setSelectedHimImgTitle(ForHimList[0].title, ForHimList[0].imgUrl)
      );
    }
    // navigate("/naturaldiamond", {
    //   state: { forHer, herHimProducts: selectedHerHimProductId },
    // });
  };
  const handleButtonDropClick = (buttonIndex) => {
    setSelectedDropButton(buttonIndex);
  };
  function toggleShowName() {
    setShow((prevState) => !prevState);
  }
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleButtonHerClick = (buttonIndex, selectedTitle, selectedImg) => {
    setSelectedButton(buttonIndex);
    dispatch(setSelectedHerImgTitle(selectedTitle, selectedImg));
  };

  const handleButtonHimClick = (buttonIndex, selectedTitle, selectedImg) => {
    setSelectedButton(buttonIndex);
    dispatch(setSelectedHimImgTitle(selectedTitle, selectedImg));
  };

  const handleLoadMore = () => {
    setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 20);
  };

  useEffect(() => {
    setSelectedButton(1);
    dispatch(setSelectedHerImgTitle(ForHerList[0].title, ForHerList[0].imgUrl));
  }, [dispatch]);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const drawerContent = (
    <>
      <>
        <div className="ring_types">
          {isForHer
            ? ForHerList.map((her, index) => (
                <button
                  key={index}
                  className={selectedButton === index + 1 ? "selected" : ""}
                  onClick={() =>
                    handleButtonHerClick(index + 1, her.title, her.imgUrl)
                  }
                >
                  <img
                    src={her.imgUrl}
                    alt={`img of ring ${her.title}`}
                    style={{ width: "52px" }}
                  />
                  <span>{her.title}</span>
                </button>
              ))
            : ForHimList.map((him, index) => (
                <button
                  key={index}
                  className={selectedButton === index + 1 ? "selected" : ""}
                  onClick={() =>
                    handleButtonHimClick(index + 1, him.title, him.imgUrl)
                  }
                >
                  <img
                    src={him.imgUrl}
                    alt={`img of ring ${him.title}`}
                    style={{ width: "52px" }}
                  />
                  <span>{him.title}</span>
                </button>
              ))}
        </div>
      </>

      <>
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </StyledSection>
      </>
    </>
  );

  const handleHerHimBandClick = (herHimProductIds) => {
    setSelectedHerHimProductId(herHimProductIds);
    dispatch(setHerHimProductIds(herHimProductIds));
  };

  // const handleNavigateDetail = async (products) => {
  //   const productId = products?.node?.id;
  //   console.log("products", productId);
  //   try {
  //     const response = await axios.get(
  //       `${EXCHANGE_URLS}/weddingdata?collectionId=432312975578&tags=forher,nature`
  //     );
  //     if (response?.status === 200) {
  //       const productData = response?.data?.data;
  //       console.log("nikeee", productData);
  //       setHerHimBandProduct(productData);
  //       // navigate("/ringdetails", { state: { products: productData } });
  //     }
  //   } catch (error) {
  //     console.error("Error fetching diamond details:", error);
  //   }
  // };

  useEffect(() => {
    const fetchCollections = async () => {
      try {
        const response = await axios.get(
          `${EXCHANGE_URLS}/weddingdata?collectionId=432312975578&tags=forher,nature`
        );
        if (response?.status === 200) {
          const herHimBandProduct = response?.data?.products;
          console.log("nikeee", herHimBandProduct);
          setHerHimBandProduct(herHimBandProduct);
          // navigate("/ringdetails", { state: { products: productData } });
        }
      } catch (error) {
        console.error("Error fetching diamond details:", error);
      }
    };

    fetchCollections();
  }, []);

  return (
    <Root>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-12">
            <div className="heading">
              <h3>Select your ring style and color</h3>
              <p>
                To design your ring for your stone use the buttons below to
                choose your setting and metal
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="two_btn">
            <div className="col-lg-2"></div>
            <div className="col-lg-2 col-md-3 col-1"></div>
            <div className="col-lg-2 col-md-3 col-5">
              <button
                className={isForHer ? "selected" : ""}
                onClick={() => handleModalNavigate(true)}
              >
                <img src={forHer} alt="img for her" />
                <h5>FOR HER</h5>
              </button>
            </div>
            <div className="col-lg-2 col-md-3 col-5">
              <button
                className={!isForHer ? "selected" : ""}
                onClick={() => handleModalNavigate(false)}
              >
                <img src={forHim} alt="img for him" />
                <h5>FOR HIM</h5>
              </button>
            </div>

            <div className="col-lg-2 col-md-3 col-1"></div>
            <div className="col-lg-2"></div>
          </div>
        </div>
      </div>
      <>
        <div>
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
        <div className="tags">{show && <h5> {selectedDropButton}</h5>}</div>
      </>
      <>
        <div className="main_div">
          {herHimBandProduct &&
            herHimBandProduct
              .slice(0, visibleProducts)
              .map((product, index) => {
                return (
                  <div key={index} className="subdiv">
                    <>
                      <Slider {...settings}>
                        {product?.images?.edges?.length > 0 ? (
                          product.images.edges.map((image, imageIndex) => (
                            <img
                              style={{ height: "250px !important" }}
                              key={imageIndex}
                              src={image?.node?.originalSrc}
                              alt={image?.node?.altText || "Product Image"}
                              onError={(e) => {
                                e.target.onerror = null;
                                e.target.src =
                                  "https://via.placeholder.com/283";
                              }}
                            />
                          ))
                        ) : (
                          <div
                            style={{
                              backgroundColor: "#ccc",
                            }}
                          >
                            <NoProduct />
                          </div>
                        )}
                      </Slider>
                    </>

                    <div className="hov_content">
                      <div className="d-flex   flex-column">
                        <div className="d-flex flex justify-content-between">
                          <h5 className="prd_name">{product?.title}</h5>
                          <div className="d-flex">
                            <span className="white_color"></span>
                            <span className="golden_color"></span>
                            <span className="red_color"></span>
                          </div>
                        </div>
                        <>
                          <p className="prd_price pt-1 pb-1">
                            max- ${product?.priceRange?.maxVariantPrice?.amount}{" "}
                            min- {product?.priceRange?.minVariantPrice?.amount}{" "}
                          </p>
                        </>
                      </div>

                      <div className="btn_div">
                        <button
                          className="info_btn"
                          onClick={() => handleNavigateDetail(product)}
                        >
                          More Info
                        </button>

                        <button
                          className="add_btn"
                          onClick={() => handleHerHimBandClick(product)}
                        >
                          Add to Cart
                        </button>
                      </div>

                      <div className="note">
                        <p className="note">
                          Pay in 12 interest-free installments of $
                          <span>Learn more</span>
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
        </div>
      </>
      <div className="load_btn">
        {visibleProducts < herHimBandProduct && herHimBandProduct.length && (
          <button onClick={handleLoadMore}>Load More</button>
        )}
      </div>
    </Root>
  );
}

const Root = styled.section`
  .heading {
    text-align: center;
    margin-top: 20px;
    color: #000;
    h3 {
      color: rgba(0, 0, 0);
      /* font-size: 30px; */
      padding: 0px 20px;
      line-height: 2.25rem;
    }
    p {
      font-size: large;
      font-weight: 500;
      word-spacing: 1.5px;
    }
  }
  .two_btn {
    display: flex;
    justify-content: center;
    margin: 20px 0px;

    button {
      display: flex;
      width: 100%;
      height: 8vh;
      border: 1px solid #d1d1d1;
      align-items: center;
      justify-content: center;
      padding: 10px;
      gap: 10px;
      border-radius: 4px;
      &.selected {
        border: 2px solid black;
        font-weight: 600;
        position: relative;
        z-index: 1;
      }
    }
    img {
      width: 30px;
      height: 30px;
    }

    h5 {
      font-size: 13px;
      padding-top: 7px;
    }
  }
  .ring_types {
    display: flex;
    flex-wrap: nowrap;
    align-items: baseline;
    overflow-x: auto;
    justify-content: center;
    gap: 20px;
    padding-bottom: 20px;
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
    font-weight: 500;
    padding: 5px 10px;
    border: 1px solid #d1d1d1;
    border-radius: 4px;
    font-size: 14px;
    background-color: transparent;
  }
  .EZDrawer__container {
    overflow-y: scroll !important;
    height: 67vh !important;
    border-top-right-radius: 25px !important;
    border-top-left-radius: 25px !important;
    padding-bottom: 40px;
  }
  .main_div {
    display: flex;
    flex-wrap: wrap;
    position: relative;
    gap: 4px;
    margin-top: 20px;
    .subdiv {
      width: 24vw;
      height: 55vh;
      border: 3px solid #f7f7f7;
      border-radius: 20px;
      padding: 5px;
      overflow: hidden;
      position: relative;
      margin-bottom: 20px;
      padding: 15px;
      img {
        width: 100%;
        height: 88%;
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
        font-size: 14px;
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
        }
      }

      .note {
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
  .load_btn {
    display: flex;
    justify-content: center;
    padding: 20px 0;
    button {
      border: 2px solid black;
      background-color: transparent;
      font-size: 16px;
      color: #000000;
      font-weight: 500;
      padding: 10px 30px;
      border-radius: 50px;
    }
  }
  @media (max-width: 567px) {
    padding: 0px 10px;

    .main_div {
      gap: 15px;
      margin-top: 0;
      .subdiv {
        width: 45vw;
        height: 36vh;
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
        height: 36vh;
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
          flex: 1;
          font-size: 11px;
          padding: 10px 10px;
          border-radius: 15px;
        }
      }
    }
    .main_div .subdiv img {
      width: 100%;
      height: 92%;
    }
  }
  @media (min-width: 877px) {
    .drawer-toggle-button {
      display: none;
    }
    .drawer-content {
      display: block;
    }
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
  @media (max-width: 987px) {
    .two_btn {
      button {
        height: 5vh;
        padding: 5px;
        &.selected {
          padding: 5px;
          border: 1px solid black;
          border-radius: 4px;
        }
      }
      img {
        width: 20px;
        height: 20px;
      }
    }
  }
  @media (max-width: 768px) {
    .heading h3 {
      font-size: 18px;
      line-height: 20px;
    }
    .heading p {
      font-size: 12px;
    }
  }
  @media (max-width: 467px) {
    .container-fluid {
      margin: 0px;
    }
  }
`;

const StyledSection = styled.section`
  border-top: 1px solid lightgray;
  padding: 10px 20px;
  @media (max-width: 567px) {
    padding: 0px;
  }
  .select_div {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 10px;
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

      .select_metal {
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
  }
`;

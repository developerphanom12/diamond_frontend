import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import { useState } from "react";
import Slider from "react-slick";
import { useDispatch } from "react-redux";
import { setDiamondType, setProductIds } from "../../redux/users/action";
import ndia from "../Images/naturaldiamond-removebg-preview.png";
import labgrown from "../Images/labgrowncopy-removebg.png";

export default function Section4({ products }) {
  const [modal, setModal] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const settings = {
    // dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2,
  };
  const handleAddDiamondClick = (productIds) => {
    setSelectedProductId(productIds);
    setModal(true);
    dispatch(setProductIds(productIds));
  };

  const handleModalNavigate = (labgrownValue) => {
    console.log("Navigating with labgrownValue:", labgrownValue);
    dispatch(setDiamondType(labgrownValue));
    navigate("/naturaldiamond", {
      state: { labgrownValue, products: selectedProductId },
    });
  };

  const handleNavigate = (diamond) => {
    navigate("/ringdetails", { state: { diamond } });
  };

  return (
    <Root>
      <div className="main_div">
        {products &&
          products.map((i, index) => {
            return (
              <div key={index} className="subdiv">
                <div className="slider-container">
                  <Slider {...settings}>
                    <div style={{ width: "283px", height: "283px" }}>
                      {i?.node?.images?.edges?.[0]?.node?.originalSrc ? (
                        <img
                          src={i.node.images.edges[0].node.originalSrc}
                          alt={i.node.images.edges[0].node.altText || "img"}
                          style={{ width: "283px", height: "283px" }}
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "https://via.placeholder.com/283";
                          }}
                        />
                      ) : (
                        <div
                          style={{
                            width: "283px",
                            height: "283px",
                            backgroundColor: "#ccc",
                          }}
                        >
                          Image not available
                        </div>
                      )}
                    </div>
                  </Slider>
                </div>
                <div className="hov_content">
                  <div className="d-flex   flex-column">
                    <div className="d-flex flex justify-content-between">
                      <h5 className="prd_name">{i?.node.title}</h5>
                      <div className="d-flex">
                        <span className="white_color"></span>
                        <span className="golden_color"></span>
                        <span className="red_color"></span>
                      </div>
                    </div>
                    <>
                      <p className="prd_price pt-1 pb-1">
                        max-{" "}
                        {i?.node?.priceRange?.maxVariantPrice?.currencyCode}:
                        {i?.node?.priceRange?.maxVariantPrice?.amount} min-{" "}
                        {i?.node?.priceRange?.maxVariantPrice?.currencyCode}:
                        {i?.node?.priceRange?.minVariantPrice?.amount}{" "}
                      </p>
                    </>
                  </div>

                  <div className="btn">
                    <button
                      className="info_btn"
                      onClick={() => {
                        handleNavigate()
                      }}
                    >
                      More Info
                    </button>
                    <button
                      className="add_btn"
                      onClick={() => handleAddDiamondClick(i?.node)}
                    >
                      Add Diamond
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
      <Modal isOpen={modal} toggle={() => setModal(!modal)}>
        <ModalHeader toggle={() => setModal(!modal)}></ModalHeader>

        <CustomModalBody>
          <h5>Before we continue</h5>
          <h2>CHOOSE YOUR CENTER STONE</h2>
          <div className="choose_option">
            <div
              className="ring_pandet"
              onClick={() => handleModalNavigate(false)}
            >
              <img
                src={ndia}
                alt="img of natural diamond"
                style={{ width: "52px" }}
              />
              <span>Natural Diamond</span>
            </div>
            <div
              className="ring_pandet"
              onClick={() => handleModalNavigate(true)}
            >
              <img
                src={labgrown}
                alt="img of lab grown diamond"
                style={{ width: "52px" }}
              />
              <span>Lab Diamond</span>
            </div>

            {/* <div
              className="ring_pandet"
              onClick={() => {
                navigate("/gemstone");
              }}
            >
              <img src={gem} alt="img"/>
              <span>Gemstones & Moissanite</span>
            </div> */}
          </div>
        </CustomModalBody>
      </Modal>
    </Root>
  );
}

const Root = styled.section`
  padding: 0 20px;
  .slider-container {
    position: relative;
    perspective: 1000px;
  }

  &:hover .slider-container {
    .slick-slide img {
      transform: rotate3d(0, 1, 0.5, 3.142rad);
      transition: transform 2.5s ease; /* Add transition for smooth animation */
    }
  }
  .main_div {
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;
    gap: 4px;
    .subdiv {
      width: 300px;
      height: 325px;
      border: 3px solid #f7f7f7;
      border-radius: 20px;
      padding: 5px;
      overflow: hidden;
      position: relative;
      margin-bottom: 20px;

      &:hover {
        border: 3px solid black;
        overflow: unset;
      }
      .hov_content {
        display: flex;
        flex-wrap: wrap;
        .flex-column {
          display: flex;
          width: 100%;
        }
      }

      &:hover .hov_content {
        z-index: 1;
        position: absolute;
        background-color: white;
        border: 3px solid black;
        padding: 0 20px 0;
        left: -3px;
        overflow: hidden;
        width: 300px;
        border-top: none;
        border-radius: 0 0 20px 20px;
      }

      .prd_name {
        font-size: 14px;
      }
      .prd_price {
        font-size: 14px;
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

      .btn {
        display: flex;
        justify-content: space-between;
        padding: 0;
        width: 100%;
        .info_btn {
          padding: 12px 21px;
          border-radius: 25px;
          font-size: 13px;
          background-color: #fff;
        }
        .add_btn {
          background-color: black;
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
`;
const CustomModalBody = styled(ModalBody)`
  padding: 30px 85px 50px;
  text-align: center;

  h2 {
    font-size: 25px;
    margin-top: 20px;
    color: #000000;
    font-weight: 700;
  }
  .choose_option {
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
    justify-content: center;
    margin-top: 20px;
    .ring_pandet {
      flex-direction: column;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      svg {
        width: 56px;
        height: 56px;
      }
      span {
        font-size: 14px;
      }
    }
  }
  .modal-dialog {
    margin-top: 82px !important;
  }

  .slick-slide img {
    width: 100%;
  }
  .slick-next {
    right: 0px !important;
  }
  .slick-prev {
    left: 0px !important;
    z-index: 1;
  }
`;

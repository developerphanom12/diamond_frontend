import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import { useState } from "react";
import Slider from "react-slick";

export default function Section4({ products }) {
  const [modal, setModal] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const navigate = useNavigate();
  const settings = {
    // dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2,
  };

  const handleAddDiamondClick = (productId) => {
    setSelectedProductId(productId);
    setModal(true);
  };

  const handleModalNavigate = () => {
    navigate('/naturaldiamond', { state: { product: selectedProductId } });
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
                        max- {i?.priceRange?.maxVariantPrice?.currencyCode}:
                        {i?.priceRange?.maxVariantPrice?.amount} min-{" "}
                        {i?.priceRange?.maxVariantPrice?.currencyCode}:
                        {i?.priceRange?.minVariantPrice?.amount}{" "}
                      </p>
                    </>
                  </div>

                  <div className="btn">
                    <button className="info_btn">More Info</button>
                    <button className="add_btn" onClick={() => handleAddDiamondClick(products?.node?.id)}>
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
              onClick={handleModalNavigate}
            >
              <svg
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.78295 14.4651L6.76871 13.2668C6.75812 13.112 6.73372 12.959 6.70584 12.8068C6.70564 12.8037 6.70381 12.8011 6.70371 12.7979C6.70361 12.797 6.70422 12.796 6.70422 12.7951C6.66536 12.5865 6.6149 12.3803 6.5441 12.1796C6.38459 11.7303 6.20474 11.2209 5.819 11.1981C5.80923 11.1981 5.80028 11.1973 5.79133 11.1973C5.46582 11.1973 5.25667 11.5562 5.07112 11.8736C5.01883 11.9631 4.98109 12.0597 4.93907 12.1541C4.67947 11.542 4.53319 10.8723 4.51223 10.1716C4.64661 10.2365 4.79371 10.2785 4.96369 10.2785C4.98078 10.2785 4.99787 10.2785 5.01496 10.2777C5.58299 10.2574 5.89387 9.71292 5.99559 9.5347C6.10138 9.35078 6.13068 9.22057 6.19416 8.93655C6.21776 8.83239 6.24624 8.7038 6.28693 8.5386C6.3496 8.279 6.40982 8.05846 6.45702 7.89163L7.59471 7.69631C8.18146 7.48635 8.56232 7.0827 8.56639 6.66929C8.57209 6.16962 8.05532 5.85956 7.59797 5.58449C7.43703 5.48806 7.26858 5.40525 7.09442 5.33527C7.94485 4.79979 8.94766 4.48505 10.0247 4.48505C11.2837 4.48505 12.4417 4.91321 13.3715 5.62519H12.1064C10.8434 5.62519 9.81638 6.6522 9.81638 7.91523L10.3898 9.37499H10.8296L10.233 7.87617C10.2542 6.86136 11.0867 6.04186 12.1064 6.04186H13.8586C14.7541 6.90825 15.3575 8.07311 15.507 9.375H15.554C15.7197 9.375 15.8787 9.44081 15.9959 9.5581L16.1559 9.71822C16.0041 6.46342 13.3163 3.86006 10.0247 3.86006C6.63605 3.86006 3.87889 6.61722 3.87889 10.0059C3.87889 13.3946 6.63605 16.1517 10.0247 16.1517C10.0763 16.1517 10.1262 16.1452 10.1775 16.144L9.42729 15.4781C8.44757 15.3702 7.54141 15.0181 6.78294 14.4651H6.78295ZM6.66393 5.63578C6.9156 5.71146 7.15954 5.8082 7.38476 5.94258C7.74446 6.15905 8.15217 6.404 8.14973 6.66524C8.14729 6.89554 7.86165 7.1584 7.49055 7.29512L6.12906 7.52461L6.09243 7.64994C6.04117 7.82734 5.96385 8.1016 5.88166 8.44014C5.84097 8.60778 5.81167 8.7388 5.78807 8.84541C5.72867 9.10909 5.70832 9.19779 5.63427 9.32718C5.56021 9.45657 5.3356 9.84883 4.9995 9.86103C4.79605 9.86927 4.64193 9.81078 4.52078 9.67182C4.61976 8.02987 5.43631 6.58202 6.66393 5.63577V5.63578ZM5.19421 12.6733C5.25006 12.4672 5.3234 12.2675 5.43163 12.0835C5.49917 11.9672 5.70507 11.614 5.79215 11.614C5.79215 11.614 5.79297 11.6148 5.79377 11.6148C5.90445 11.6213 6.09 12.1462 6.15185 12.3204C6.26252 12.6337 6.33007 12.9624 6.35286 13.2839L6.36242 14.126C5.89652 13.7113 5.49877 13.2227 5.1942 12.6733L5.19421 12.6733ZM15.554 10H10.1076L7.32841 12.7793L12.8285 17.6613L18.3242 12.7875H18.3243L18.3333 12.7793L15.554 10V10ZM10.3665 10.625H13.3115L14.8327 12.8037L12.7929 16.794L8.23936 12.7523L10.3665 10.625H10.3665ZM13.5903 16.1503L15.3177 12.7712L13.8201 10.625H15.2951L17.4222 12.7521L13.5903 16.1503V16.1503ZM12.566 15.333L9.75698 12.8397L11.1765 11.4201L10.6499 12.7344L12.566 15.333Z"
                  fill="currentColor"
                ></path>
              </svg>
              <span>Natural Diamond</span>
            </div>
            <div className="ring_pandet">
              <svg
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.45717 15.5267L10.1613 16.1517H4.51881C4.03216 16.1517 3.58782 15.9043 3.33228 15.4901C3.07593 15.0767 3.05315 14.5689 3.27043 14.1327L6.62168 7.43263V4.75685H6.10084C5.92832 4.75685 5.78834 4.61688 5.78834 4.44435C5.78834 4.27183 5.92832 4.13185 6.10084 4.13185H10.2675C10.44 4.13185 10.58 4.27183 10.58 4.44435C10.58 4.61688 10.44 4.75685 10.2675 4.75685H9.74668V7.43263L10.7179 9.37498H10.0827C10.0628 9.37498 10.0449 9.38453 10.0253 9.38637L9.15504 7.64585C9.13246 7.60068 9.12503 7.55308 9.12513 7.50588H9.12168V4.75685H7.24668V7.50588H7.24322C7.24332 7.55308 7.23589 7.60068 7.21331 7.64585L5.7739 10.5243H8.67449L8.25783 10.9409H5.56557L3.82953 14.4126C3.7099 14.6527 3.7221 14.9335 3.86371 15.1621C4.00531 15.39 4.25027 15.5267 4.51882 15.5267H9.45718L9.45717 15.5267ZM18.3084 12.7793L18.2993 12.7875H18.2992L12.8035 17.6613L7.30344 12.7793L10.0827 9.99998H15.529L18.3084 12.7793V12.7793ZM8.21439 12.7523L12.7679 16.794L14.8077 12.8037L13.2865 10.625H10.3416L8.21438 12.7523H8.21439ZM17.3972 12.7521L15.2702 10.625H13.7951L15.2927 12.7712L13.5653 16.1503L17.3972 12.7521ZM10.625 12.7344L11.1515 11.4201L9.73203 12.8396L12.5411 15.333L10.625 12.7344V12.7344Z"
                  fill="currentColor"
                ></path>
              </svg>
              <span>Lab Diamond</span>
            </div>

            <div
              className="ring_pandet"
              onClick={() => {
                navigate("/gemstone");
              }}
            >
              <svg
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.94139 16.0419C5.53661 16.0419 3.58022 14.079 3.58022 11.6669C3.58022 11.4441 3.60199 11.2254 3.63495 11.0097C4.09963 11.1733 4.56248 11.2591 5.0174 11.2591C5.10773 11.2591 5.19807 11.2559 5.2884 11.2494C5.81167 11.2111 6.18196 11.0736 6.54002 10.9401C6.88507 10.8124 7.2106 10.6911 7.67527 10.6521C7.95939 10.6272 8.24636 10.6413 8.53567 10.6882L8.88519 10.3385C8.46466 10.2417 8.04779 10.2021 7.64109 10.237C7.11944 10.2809 6.75079 10.4177 6.39516 10.5495C6.04847 10.6781 5.72133 10.8002 5.25747 10.8343C4.76146 10.8701 4.24723 10.7862 3.72853 10.5978C4.10837 9.10644 5.2477 7.88004 6.77521 7.45462L7.00388 7.39115V4.69991H8.87888V7.39115L9.10756 7.45462C10.1887 7.75532 11.0713 8.46262 11.6358 9.37499H12.3664C11.7774 8.23781 10.763 7.33896 9.50388 6.92239V4.6999H10.0247C10.1972 4.6999 10.3372 4.55992 10.3372 4.3874C10.3372 4.21487 10.1972 4.0749 10.0247 4.0749H9.50388V4.07408H6.37888V4.0749H5.85805C5.68552 4.0749 5.54555 4.21487 5.54555 4.3874C5.54555 4.55992 5.68552 4.6999 5.85805 4.6999H6.37888V6.92239C4.3517 7.59377 2.95522 9.5111 2.95522 11.6669C2.95522 14.424 5.19236 16.6669 7.94138 16.6669C8.74176 16.6669 9.49595 16.4722 10.1669 16.1346L9.66033 15.685C9.13227 15.9133 8.55193 16.0419 7.94138 16.0419H7.94139Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M15.554 10H10.1076L7.32839 12.7793L12.8285 17.6613L18.3242 12.7875H18.3243L18.3333 12.7793L15.554 10ZM10.3665 10.625H13.3115L14.8327 12.8037L12.7929 16.794L8.23934 12.7523L10.3665 10.625H10.3665ZM13.5903 16.1503L15.3177 12.7712L13.8201 10.625H15.2951L17.4222 12.7521L13.5903 16.1503V16.1503Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M10.6499 12.7344L11.1764 11.4201L9.75697 12.8396L12.566 15.333L10.6499 12.7344Z"
                  fill="currentColor"
                ></path>
              </svg>{" "}
              <span>Gemstones & Moissanite</span>
            </div>
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

import styled from "styled-components";
import Section3 from "./Section3";
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import ring from "../Images/ring.png";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import { EXCHANGE_URLS } from "../URLS";

export default function Section2() {
  const userCheck = useSelector((state) => state?.users?.userCheck);
  const token = localStorage.getItem("token");
  const [selectedButton, setSelectedButton] = useState(1);
  const [object, setObject] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedVariantId, setSelectedVariantId] = useState("");
  const navigate = useNavigate();

  const handleButtonClick = (buttonIndex) => {
    setSelectedButton(buttonIndex);
    sliderRef.slickGoTo(buttonIndex - 1);
  };

  let sliderRef = useRef(null);

  const selectedShapeImage = useSelector(
    (state) => state.users.selectedShapeImage
  );
  const selectedRingSvg = useSelector((state) => state.users.selectedRingSvg);
  const productIds = useSelector((state) => state.users.productIds);
  const diamondType = useSelector((state) => state.users.diamondType);
  const location = useLocation();
  const { diamond } = location.state || {};
  console.log("ring", productIds);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const totalPrice =
    parseFloat(productIds?.priceRange?.maxVariantPrice?.amount || 0) +
    parseFloat(diamond?.price || 0);

  useEffect(() => {
    const fetchCollections = async () => {
      try {
        const response = await axios.get(
          `${EXCHANGE_URLS}/prodtcs?productId=${productIds.id}`
        );
        if (response.status === 200) {
          setObject(response.data.data);
          console.log("respe", response.data.data);
          const selectedVariantId =
            response.data.data?.variants?.edges[0]?.node?.id || "";
          setSelectedVariantId(selectedVariantId);
        }
      } catch (error) {
        console.error("Error fetching collections:", error);
      }
    };
    fetchCollections();
  }, [productIds.id, selectedSize]);


  const handleCheckout = () => {
    if (userCheck && token) {
      navigate("/checkout", {
        state: {
          diamond: diamond?.diamond,
          price: diamond?.price,
          selectedVariantId: selectedVariantId,
          productId: productIds.id,
          diamondId: diamond?.id,
          totalPrice: totalPrice.toFixed(2),
          selectedSize: selectedSize,
        },
      });
    } else {
      window.open('/login', '_blank'); // Opens the login page in a new tab
    }
  };
  return (
    <Root>
      <div className="main_div">
        <div className="image_div">
          <div className="slider-container">
            <Slider
              ref={(slider) => {
                sliderRef = slider;
              }}
              {...settings}
            >
              <div key={1}>
                {productIds?.images?.edges?.length > 0 && (
                  <img
                    src={productIds.images.edges[0].node.originalSrc}
                    alt={
                      productIds.images.edges[0].node.altText || "Product Image"
                    }
                  />
                )}
              </div>

              <div key={2}>
                {diamond?.diamond?.video ? (
                  <div>
                    <img src={diamond?.diamond?.image} alt="img" />
                  </div>
                ) : (
                  <img src={ring} alt="img" />
                )}
              </div>
            </Slider>
            <div
              style={{
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <button
                className="button"
                onClick={() => handleButtonClick(1)}
                style={{
                  borderColor: selectedButton === 1 ? "black" : "transparent",
                }}
              >
                <svg
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.49 4.17993L9.82983 4.78003C12.3599 5.39002 14.2599 7.68994 14.2599 10.4299C14.2599 13.64 11.6699 16.25 8.49999 16.25C5.31981 16.25 2.73998 13.64 2.73998 10.4299C2.73998 7.68994 4.62987 5.39001 7.1599 4.78003L6.49999 4.17993C3.88989 5.03003 1.98999 7.51001 1.98999 10.4299C1.98999 14.0501 4.90991 17 8.5 17C12.0898 17 15.0099 14.0501 15.0099 10.4299C15.0099 7.51001 13.1099 5.03003 10.49 4.17993ZM8.5 3.03003L5.21997 1.69995L8.48999 4.63H8.5L11.7599 1.69995L8.5 3.03003Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <span>Setting</span>
              </button>

              <button
                className="button"
                onClick={() => handleButtonClick(2)}
                style={{
                  borderColor: selectedButton === 2 ? "black" : "transparent",
                }}
              >
                <svg
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M28.9085 8H11.0919L2 17.0923L19.9924 33.0628L37.9707 17.1189L38 17.0923L28.9085 8ZM11.916 9.99069H21.8844L27.7042 17.0359L19.6717 30.1165L4.90143 17.0067L11.916 9.99069ZM24.0319 26.8208L30.1461 16.8659L24.4671 9.99069H28.084L35.0986 17.0055L24.0319 26.8208ZM19.6447 26.4863L9.19873 17.2133L14.4772 11.9346L13.4674 16.419L19.6447 26.4863Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <span>Stone</span>
              </button>
            </div>
          </div>
        </div>

        <div className="des_div">
          <div className="title">
            <h2>
              {productIds?.title} with a {diamond?.diamond?.certificate?.carats}
              carat {diamond?.diamond?.certificate?.color}{" "}
              {diamond?.diamond?.certificate?.clarity}{" "}
              {diamond?.diamond?.certificate?.shape}{" "}
              {diamondType === true ? "Lab Grown" : "Natural"} Diamond
            </h2>
          </div>

          <div className="complete_info_container">
            <button
              className={selectedButton === 1 ? "selected" : ""}
              onClick={() => {
                handleButtonClick(1);
              }}
            >
              <div>
                <img
                  src={selectedRingSvg}
                  alt="img of stone"
                  style={{ width: "50px", height: "50px" }}
                />

                <div className="prod_name">
                  <h2>{productIds?.title}</h2>
                  <p>14K White Gold</p>
                </div>

                <div className="prod_price">
                  <h2>
                    {productIds?.priceRange?.maxVariantPrice?.currencyCode}:
                    {productIds?.priceRange?.maxVariantPrice?.amount}
                  </h2>
                  <p>Change</p>
                </div>
              </div>
            </button>

            <div className="plus_sign">
              <span>+</span>
            </div>

            <button
              className={selectedButton === 2 ? "selected" : ""}
              onClick={() => {
                handleButtonClick(2);
              }}
            >
              <div>
                <img
                  src={selectedShapeImage}
                  alt="img of stone"
                  style={{ width: "40px", height: "40px" }}
                />

                <div className="prod_name">
                  <h2> {diamond?.diamond?.certificate?.shape}</h2>
                  <p>
                    {diamond?.diamond?.certificate?.carats}ct{" "}
                    {diamond?.diamond?.certificate?.color}{" "}
                    {diamond?.diamond?.certificate?.clarity}{" "}
                  </p>
                </div>
                <div className="prod_price">
                  <h2>${diamond?.price}</h2>
                  <p>Change</p>
                </div>
              </div>
            </button>
          </div>
          <div className="ring_size">
            <select
              value={selectedSize}
              onChange={(e) => {
                const selectedIndex = e.target.selectedIndex;
                const selectedVariantId =
                  object?.variants?.edges[selectedIndex]?.node?.id;
                setSelectedSize(e.target.value);
              }}
            >
              <option value="">Select Ring Size</option>
              {object?.variants?.edges?.map((variant) => (
                <option key={variant.node.id} value={variant.node.title}>
                  {variant.node.title}
                </option>
              ))}
            </select>
          </div>
          <div className="total_price">
            <h5>Total Price</h5>
            <h2>${totalPrice.toFixed(2)}</h2>
            <p>Ships in 2-3 weeks</p>
          </div>

          <div className="product_btn">
            <button className="secure_btn" onClick={handleCheckout}>
              Secure Checkout
            </button>
            <button className="cart_btn">Add to Cart</button>
          </div>

          <p className="note">
            Pay in 12 interest-free installments of $95.83{" "}
            <span>Learn more</span>
          </p>

          <div className="policy">
            <div className="policy_type">
              <svg
                width="30"
                height="32"
                viewBox="0 0 30 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.8637 8.49689L4.02783 5.19775V7.32439L11.2859 11.1362L13.9252 14.4353L19.8637 8.49689Z"
                  stroke="currentColor"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M25.8025 26.9721H23.823L19.8641 19.714L16.5649 17.0747L22.5034 11.1362L25.8025 26.9721Z"
                  stroke="currentColor"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M12.6056 21.0337L13.9253 26.9721L11.9458 27.632L9.96631 23.673L12.6056 21.0337Z"
                  stroke="currentColor"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M9.96644 18.3944L4.02799 17.0747L3.36816 19.0542L7.32713 21.0337L9.96644 18.3944Z"
                  stroke="currentColor"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M0.478516 15.1642L4.06584 11.7583"
                  stroke="currentColor"
                  stroke-miterlimit="10"
                ></path>
                <path
                  d="M15.9048 24.3332L18.5441 21.6938"
                  stroke="currentColor"
                  stroke-miterlimit="10"
                ></path>
                <path
                  d="M14.9946 31.0001L19.8636 26.3125"
                  stroke="currentColor"
                  stroke-miterlimit="10"
                ></path>
                <path
                  d="M8.31726 20.0441C8.31726 20.0441 21.1839 7.17748 23.4933 4.86808C25.8027 2.55869 28.442 1.23903 29.1019 1.89886C29.7617 2.55869 28.442 5.198 26.1326 7.50739C23.1634 10.4766 16.0152 17.6247 10.9566 22.6834C9.06343 24.3184 7.32751 24.9928 6.66768 24.333C6.00785 23.6732 6.6823 21.9373 8.31725 20.0441L8.31726 20.0441Z"
                  stroke="currentColor"
                  stroke-miterlimit="10"
                ></path>
                <path
                  d="M17.7124 5.10437L22.1171 1"
                  stroke="currentColor"
                  stroke-miterlimit="10"
                ></path>
                <path
                  d="M23.6157 15.0037L26.9149 11.7046"
                  stroke="currentColor"
                  stroke-miterlimit="10"
                ></path>
                <path
                  d="M6.41699 13.8444L9.89818 10.3628"
                  stroke="currentColor"
                  stroke-miterlimit="10"
                ></path>
              </svg>
              <p>
                Overnight <br />
                Shipping
              </p>
            </div>

            <div className="policy_type">
              <svg
                width="27"
                height="34"
                viewBox="0 0 27 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.14111 28.4867L11.0918 16.481"
                  stroke="currentColor"
                  stroke-miterlimit="10"
                ></path>
                <path
                  d="M20.3799 29.7988L13.4292 17.1611"
                  stroke="currentColor"
                  stroke-miterlimit="10"
                ></path>
                <path
                  d="M17.1868 13.3218L13.6253 14.6769L10.0639 13.3218L1.61377 28.4886L6.13355 27.9537L7.94724 32.2783L13.6253 22.0675L19.3035 32.2783L21.1171 27.9537L25.6369 28.4886L17.1868 13.3218Z"
                  stroke="currentColor"
                  stroke-miterlimit="10"
                ></path>
                <path
                  d="M17.1098 1.31592H10.1292L4.48182 5.419L2.32471 12.0579L4.48182 18.6969L10.1292 22.7999H17.1098L22.7572 18.6969L24.9143 12.0579L22.7572 5.419L17.1098 1.31592Z"
                  fill="white"
                  stroke="currentColor"
                  stroke-miterlimit="10"
                ></path>
                <path
                  d="M13.625 20.1646C18.132 20.1646 21.7857 16.5109 21.7857 12.0039C21.7857 7.49691 18.132 3.84326 13.625 3.84326C9.118 3.84326 5.46436 7.49691 5.46436 12.0039C5.46436 16.5109 9.118 20.1646 13.625 20.1646Z"
                  fill="white"
                  stroke="currentColor"
                  stroke-miterlimit="10"
                ></path>
                <path
                  d="M18.0423 5.73926L7.30029 16.4813"
                  stroke="currentColor"
                  stroke-miterlimit="10"
                ></path>
                <path
                  d="M15.5149 4.47559L6.03662 13.9538"
                  stroke="currentColor"
                  stroke-miterlimit="10"
                ></path>
              </svg>
              <p>
                Lifetime <br></br>Warranty
              </p>
            </div>

            <div className="policy_type">
              <svg
                width="68"
                height="69"
                viewBox="0 0 68 69"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M27.5523 37.1789C26.3201 35.5205 25.5976 33.4994 25.4236 31.1465L25.3711 30.4417H34.5811L34.6606 31.0068C34.9924 33.3735 35.8971 35.0919 39.0897 35.7159V26.4784C30.2692 25.1611 26.4936 21.9704 26.4936 15.8749C26.4936 10.2534 31.5288 6.12217 39.0897 5.46482V1.2644H44.2076V5.5199C51.6339 6.2567 55.8907 9.8036 56.532 15.8056L56.6095 16.5309H47.6769L47.5719 16.003C47.1625 13.9476 46.1405 12.8046 44.2076 12.2959V21.035C50.7164 21.9538 57.1791 23.9835 57.1791 31.3733C57.1791 36.1478 54.073 39.8184 48.9332 41.5086M44.2076 34.8766C46.1912 34.3166 47.3508 33.0122 47.3508 31.2836C47.3508 29.6434 46.8575 28.6836 44.2076 27.984V34.8766ZM39.0897 12.829C37.1958 13.2826 36.0893 14.4102 36.0893 15.9376C36.0893 17.401 36.3123 18.444 39.0897 19.1527V12.829Z"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-miterlimit="10"
                ></path>
                <path
                  d="M26.3033 60.6248L8.81714 43.1387L1.4897 50.4661L18.9759 67.9523L26.3033 60.6248Z"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M48.9632 41.5998L55.6131 38.6425L57.0742 36.4508C58.0269 35.0218 59.4287 33.9511 61.058 33.408C62.28 33.0007 63.6011 33.0007 64.8231 33.408L65.3142 33.5717C66.3607 33.9206 66.8264 35.1395 66.2791 36.0973L61.4751 44.5044L48.9632 56.4813H22.1599"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M8.71753 50.3665L11.6485 53.2974"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M11.6484 45.9699L17.5104 40.108L21.9068 37.177H30.6998L35.0962 40.108H45.9609C48.0542 40.108 49.7511 41.8049 49.7511 43.8982C49.7511 45.9915 48.0542 47.6884 45.9609 47.6884H32.5132"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linejoin="round"
                ></path>
              </svg>
              <p>
                30 Days <br></br>Free Return
              </p>
            </div>

            <div className="policy_type">
              <svg
                width="61"
                height="54"
                viewBox="0 0 61 54"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.43727 1.24023H8.8402C8.8402 3.20287 8.05972 5.08711 6.67193 6.47491C5.28414 7.86271 3.39989 8.64318 1.43726 8.64318V1.24023H1.43727Z"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M59.5629 1.24025V8.64318C57.6002 8.64318 55.716 7.86269 54.3282 6.47491C52.9404 5.08712 52.1599 3.20287 52.1599 1.24023H59.5628L59.5629 1.24025Z"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M1.43726 42.9391V35.5361C3.39989 35.5361 5.28413 36.3166 6.67193 37.7044C8.05973 39.0922 8.8402 40.9764 8.8402 42.9391H1.43726V42.9391Z"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M59.5628 42.9391H52.1599C52.1599 40.9764 52.9404 39.0922 54.3282 37.7044C55.716 36.3166 57.6002 35.5361 59.5629 35.5361V42.9391L59.5628 42.9391Z"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M19.9424 42.939H1.43726V1.24023H59.5628V42.939H41.0576"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M11.5459 15.1399H49.4539"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M16.6003 20.1941H44.3995"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M22.9185 10.0854H38.0816"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M39.5826 27.7759H21.4174L12.1477 36.4087L30.5 51.7843L48.8523 36.4087L39.5826 27.7759Z"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-miterlimit="10"
                ></path>
                <path
                  d="M30.5 51.7843L44.0369 31.9242L39.5826 27.7759L24.1992 35.1293"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M12.1477 36.4087L21.4174 27.7759L30.5 51.7843L12.1477 36.4087Z"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linejoin="round"
                ></path>
              </svg>
              <p>
                Certificate
                <br />& Appraisal
              </p>
            </div>
          </div>

          <div>
            <Section3 />
          </div>

          <div className="appointment">
            <h5>Virtual Appointment</h5>
            <p>
              <strong>See jewelry</strong> up close with a personal appointment.
              Explore engagement rings, diamonds, and fine jewelry in person
              through your device.
            </p>
            <button>Book Appointment</button>
          </div>
        </div>
      </div>
    </Root>
  );
}

const Root = styled.section`
  padding: 30px 30px;

  .main_div {
    display: flex;
    flex-wrap: wrap;

    .image_div {
      border: 1px solid #d3d3d3;
      width: 50%;
      height: 613px;
      border-radius: 20px;

      .slick-slide img {
        display: block;
        width: 100%;
        border-radius: 20px;
      }
      button.button {
        width: 50%;
        padding: 13px 0px;
        background-color: white;
        border: none;
        border-top: 1px solid #d3d3d3;
        border-radius: 0 0 20px 20px;

        svg {
          width: 18px;
          margin-right: 5px;
        }
        span {
          font-size: 13px;
        }
      }
      .slick-list,
      .slick-slider,
      .slick-track {
        height: 560px;
      }
    }

    .des_div {
      height: 600px;
      width: 50%;
      padding-left: 70px;
      .title {
        h2 {
          font-size: 24px;
          font-weight: 600;
        }
      }
    }

    .complete_info_container {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-top: 30px;

      button {
        border: 1px solid #d3d3d3;
        width: 50%;
        border-radius: 15px;
        background-color: #f7f7f7;
        justify-content: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 20px;
        &.selected {
          border: 2px solid black;
          background-color: white;
        }

        img,
        svg {
          width: 30px;
          height: 25px;
        }

        .prod_name {
          margin-top: 10px;

          h2 {
            font-size: 19px;
            font-weight: 600;
            text-align: center;
            margin-bottom: 0px;
          }

          p {
            color: rgba(112, 112, 112);
            text-align: center;
            font-size: 14px;
            margin-bottom: 0;
          }
        }

        .prod_price {
          margin-top: 10px;

          h2 {
            font-size: 19px;
            font-weight: 600;
            text-align: center;
            margin-bottom: 0px;
          }

          p {
            color: rgba(112, 112, 112);
            text-align: center;
            text-decoration: underline;
            font-size: 12px;
            border: 1px solid transparent;
          }
        }
      }

      .plus_sign {
        position: absolute;
        transform: translate(274px, 0);
        span {
          border: 1px solid rgba(0, 0, 0);
          padding: 0px 6px 3px 6px;
          background-color: rgba(0, 0, 0);
          color: #d3d3d3;
          border-radius: 100%;
          font-size: 17px;
          font-weight: 700;
        }
      }
    }

    .ring_size {
      display: flex;
      justify-content: center;
      margin-top: 20px;

      select {
        font-size: 14px;
        font-weight: 400;
        border-radius: 6px;
        border: 1px solid #e0e0e0;
        padding: 0.75rem 3rem 0.75rem 0.75rem;
        cursor: pointer;
        transition: 0.5s;
        &:hover {
          box-shadow: 0 0 5px #cacaca;
        }
      }
    }

    .total_price {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: 20px;
      h5 {
        font-size: 19px;
        font-weight: 500;
        color: rgba(153, 153, 153);
        margin-bottom: 0;
      }
      h2 {
        font-weight: 500;
        font-size: 30px;
        color: #060606;
      }
      p {
        color: rgba(153, 153, 153);
        text-align: center;
        font-size: 14px;
      }
    }

    .product_btn {
      display: flex;
      flex-direction: column;
      gap: 20px;
      .secure_btn {
        background-color: rgba(0, 0, 0);
        color: white;
        font-size: 17px;
        padding: 16px 0;
        font-weight: 600;
        border-radius: 50px;
        border: 1px solid transparent;
      }
      .cart_btn {
        background-color: #fff;
        color: rgba(0, 0, 0);
        font-size: 17px;
        padding: 16px 0;
        font-weight: 600;
        border-radius: 50px;
        border: 1px solid rgba(0, 0, 0);
      }
      /* p{
        text-align: center;
        font-size:12px;
        color:rgba(0, 0, 0);
      } */
    }
    .note {
      text-align: center;
      font-size: 12px;
      color: rgba(0, 0, 0);
      margin-top: 10px;
      span {
        cursor: pointer;
        text-decoration: underline;
      }
    }

    .policy {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 30px;

      .policy_type {
        flex: 1;
        justify-content: center;
        display: flex;
        flex-direction: column;
        align-items: center;

        svg {
          width: 30px;
          height: 30px;
        }
        p {
          font-size: 14px;
          color: #333;
          margin-top: 10px;
          text-align: center;
          line-height: 16px;
        }
      }
    }

    .appointment {
      background-color: rgba(247, 247, 247);
      padding: 20px;
      border-radius: 20px;
      margin-top: 25px;
      /* margin-bottom:40px; */
      h5 {
        font-size: 1rem;
        font-weight: 600;
      }
      p {
        font-size: 13px;
        margin-bottom: 0;
      }
      button {
        font-size: 0.875rem;
        letter-spacing: 0;
        line-height: 1.2;
        font-weight: 400;
        text-decoration: underline;
        border: 1px solid transparent;
        margin-top: 10px;
        padding: 0;
        color: #000000;
      }
    }
  }
  img {
    transition: transform 1s ease-in-out;
  }
  img:hover {
    transform: rotate3d(360deg);
    /* transform: rotate3d(0, 1, 0, 60deg); */
  }
`;

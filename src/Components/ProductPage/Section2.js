import styled from "styled-components";
import Section3 from "./Section3";
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import ring from "../Images/ring.png";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import { EXCHANGE_URLS } from "../URLS";
import diam from "../Images/diamondwithoutring.png";
import ringdiam from "../Images/ringwithdiamond.png";
import overn from "../Images/aeroplane.png";
import lifet from "../Images/certifiedd.png";
import monyy from "../Images/moneyinhand.png";
import badgedd from "../Images/badgess.png"



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
    responsive: [
      {
        breakpoint: 1090,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
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
      window.open("/login", "_blank"); // Opens the login page in a new tab
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
                <img src={ringdiam} alt="img" style={{ width: "25px" }} />

                <span>Setting</span>
              </button>

              <button
                className="button"
                onClick={() => handleButtonClick(2)}
                style={{
                  borderColor: selectedButton === 2 ? "black" : "transparent",
                }}
              >
                <img src={diam} alt="img" style={{ width: "20px" }} />
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
              style={{ position: "relative" }}
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
              style={{ position: "relative" }}
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
            <img src={overn} alt="img" style={{width:"35px",height:"35px"}}/>
              <p>
                Overnight <br />
                Shipping
              </p>
            </div>

            <div className="policy_type">
            <img src={badgedd} alt="img" style={{width:"50px",height:"50px"}}/>

              <p>
                Lifetime <br></br>Warranty
              </p>
            </div>

            <div className="policy_type">
            <img src={monyy} alt="img" style={{width:"35px",height:"35px"}}/>

              <p>
                30 Days <br></br>Free Return
              </p>
            </div>

            <div className="policy_type">
            <img src={lifet} alt="img" style={{width:"35px",height:"35px"}}/>

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
      position: relative;
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
        position:absolute;
        z-index:1111;
        transform:translate(265px, 0);
        span {
          border: 1px solid rgba(0, 0, 0);
          padding: 0px 6px 3px 6px;
          background-color: rgba(0, 0, 0);
          color: #d3d3d3;
          border-radius: 100%;
          font-size: 17px;
          font-weight: 700;
        }
        @media (max-width: 999px) {
          display: none;
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
  @media (max-width: 1024px) {
    .main_div {
      flex-direction: column;
      .image_div,
      .des_div {
        width: 100%;
        margin: 10px 0px;
        padding: 0px;
      }
    }
  }
`;

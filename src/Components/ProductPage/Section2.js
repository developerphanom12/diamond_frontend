import styled from "styled-components";
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import { EXCHANGE_URLS } from "../URLS";
import diam from "../Images/diamondwithoutring.png";
import ringdiam from "../Images/ringwithdiamond.png";
import overn from "../Images/aeroplane.png";
import lifet from "../Images/certifiedd.png";
import monyy from "../Images/moneyinhand.png";
import badgedd from "../Images/badgess.png";
import RingShipReturn from "../DiamondDetails/RingShipReturn";
import { useLoading } from "../LoadingContext";
import { toast } from "react-toastify";
import deleteicon from "../Images/delete.PNG";
import ww from "../Images/ww.webp";
import dia from "../Images/dia.webp";
import ring from "../Images/ringwithdiamond.png";
import diamondd from "../Images/round-removebg-preview.png";
import Drawer from "react-modern-drawer";

export default function Section2() {
  const [selectedButton, setSelectedButton] = useState(1);
  const [object, setObject] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedVariantId, setSelectedVariantId] = useState("");
  const navigate = useNavigate();
  const { setLoading } = useLoading();
  const [isOpen, setIsOpen] = React.useState(false);

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
  const diamondById = useSelector((state) => state.users.diamondById);
  const diamondType = useSelector((state) => state.users.diamondType);
  const location = useLocation();
  const { diamond, products } = location.state || {};
  console.log("ring", productIds, diamond, products, diamondById);

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
    parseFloat(diamond?.price || diamondById?.price);

  useEffect(() => {
    setLoading(true);
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
      } finally {
        setLoading(false);
      }
    };
    fetchCollections();
  }, [productIds.id, selectedSize, setLoading]);

  const handleCheckout = () => {
    if (!selectedSize) {
      toast.info("Please select a ring size before proceeding to checkout.");
      return;
    }
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
  };
  const VideoContainer = styled.div`
    position: relative;
    width: 100%;
    max-width: 600px;
    max-height: 613px;
    height: 100%;
    @media (max-width: 768px) {
      height: 100%;
      width: 100%;
      min-height: 50vh;
      min-width: 50vh;
    }
    iframe {
      height: 100%;
      width: 100%;
      > div {
        width: 100%;
        height: 100%;
        > div {
          width: 100%;
          height: 100%;
        }
      }
    }
  `;

  const VideoFrame = styled.iframe`
    width: 100%;
    height: 100%;
  `;

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <Root>
    <div className="main_div">
      <div className="image_div">
        <Slider
          ref={(slider) => {
            sliderRef = slider;
          }}
          {...settings}
        >
          <div key={1} className="img_container">
            {productIds?.images?.edges?.length > 0 && (
              <img
                src={productIds.images.edges[0].node.originalSrc}
                alt={
                  productIds.images.edges[0].node.altText || "Product Image"
                }
              />
            )}
          </div>

          <div key={2} className="img_container">
            {diamond && diamond.diamond ? (
              diamond.diamond.video ? (
                <VideoContainer>
                  <VideoFrame
                    src={diamond.diamond.video}
                    title="Diamond Video"
                    allowFullScreen
                  />
                </VideoContainer>
              ) : (
                <img src={diamond.diamond.image} alt="img" />
              )
            ) : diamondById && diamondById.diamond ? (
              diamondById.diamond.video ? (
                <VideoContainer>
                  <VideoFrame
                    src={diamondById.diamond.video}
                    title="Diamond Video"
                    allowFullScreen
                  />
                </VideoContainer>
              ) : (
                <img src={diamondById.diamond.image} alt="img" />
              )
            ) : null}
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
                alt="img"
                style={{ width: "50px", height: "50px" }}
                
              />

              <div className="prod_name">
                <h2>{productIds?.title}</h2>
                <p>14K White Gold</p>
              </div>

              <div className="prod_price">
                <h2>${productIds?.priceRange?.maxVariantPrice?.amount}</h2>
                <p
                  onClick={() => {
                    navigate("/engagementring");
                  }}
                >
                  Change
                </p>
              </div>
            </div>
          </button>

          

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
                alt="img"
                style={{ width: "40px", height: "40px" }}
              />

              <div className="prod_name">
                <h2> {diamond?.diamond?.certificate?.shape}</h2>
                <p>
                  {diamond?.diamond ? (
                    <>
                      {diamond?.diamond?.certificate?.carats}ct{" "}
                      {diamond?.diamond?.certificate?.color}{" "}
                      {diamond?.diamond?.certificate?.clarity}{" "}
                    </>
                  ) : (
                    <>
                      {diamondById?.diamond?.certificate?.carats} ct,{" "}
                      {diamondById?.diamond?.certificate?.cut} cut,{" "}
                      {diamondById?.diamond?.certificate?.color},{" "}
                      {diamondById?.diamond?.certificate?.shape}{" "}
                    </>
                  )}
                </p>
              </div>
              <div className="prod_price">
                <h2>
                  $
                  {diamond && diamond.price ? (
                    <>{diamond?.price} </>
                  ) : (
                    <>{diamondById.price}</>
                  )}
                </h2>
                <p
                  onClick={() => {
                    navigate("/naturaldiamond");
                  }}
                >
                  Change
                </p>
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
            {selectedSize ? "Secure Checkout" : "Select Ring Size"}
          </button>
          <button className="cart_btn" onClick={toggleDrawer}>
            Add to Cart
          </button>
          <Drawer
            open={isOpen}
            onClose={toggleDrawer}
            direction="right"
            className="custom-drawer"
            size="300px"
          >
            <div className="cart_heading">
              <h2>My Shopping Bag</h2>
            </div>

            <div className="prod_main_div">
              <div className="prod_div">
                <div className="prod">
                  <div className="bg-img">
                    <div className="dia_img">
                      <img src={dia} alt="img" />
                    </div>
                  </div>

                  <div className="prod_name">
                    <h3>
                      The Ashley with a 0.5 Carat J VS1 Round Natural Diamond
                    </h3>
                  </div>

                  <div className="prod_spec">
                    <div className="icon_content">
                      <img src={ring} alt="img" />
                      <div className="content_head">
                        <h4>The Ashley </h4>
                        <p>14k White Gold </p>
                      </div>
                    </div>
                    <div className="prod_price">
                      <h4>$700</h4>
                    </div>
                  </div>

                  <div className="prod_spec">
                    <div className="icon_content">
                      <img src={diamondd} alt="img" />
                      <div className="content_head">
                        <h4>Round </h4>
                        <p>0.5 Carat J VS1</p>
                      </div>
                    </div>
                    <div className="prod_price">
                      <h4>$713</h4>
                    </div>
                  </div>

                  <div className="price_div">
                    <p>
                      Total: <span style={{ color: "#000000" }}>$1,413</span>
                    </p>
                    <div className="delete_icon">
                      <img src={deleteicon}  alt="img"/>
                    </div>
                  </div>
                </div>
              </div>
              <div className="prod_div">
                <div className="prod">
                  <div className="bg-img">
                    <div className="dia_img">
                      <img src={dia} alt="img" />
                    </div>
                  </div>

                  <div className="prod_name">
                    <h3>
                      The Ashley with a 0.5 Carat J VS1 Round Natural Diamond
                    </h3>
                  </div>

                  <div className="prod_spec">
                    <div className="icon_content">
                      <img src={ring} alt="img" />
                      <div className="content_head">
                        <h4>The Ashley </h4>
                        <p>14k White Gold </p>
                      </div>
                    </div>
                    <div className="prod_price">
                      <h4>$700</h4>
                    </div>
                  </div>

                  <div className="prod_spec">
                    <div className="icon_content">
                      <img src={diamondd} alt="img" />
                      <div className="content_head">
                        <h4>Round </h4>
                        <p>0.5 Carat J VS1</p>
                      </div>
                    </div>
                    <div className="prod_price">
                      <h4>$713</h4>
                    </div>
                  </div>

                  <div className="price_div">
                    <p>
                      Total: <span style={{ color: "#000000" }}>$1,413</span>
                    </p>
                    <div className="delete_icon">
                      <img src={deleteicon}  alt="img"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="total_price_div">
              <p>Total:</p>
              <h4>$2,799</h4>
            </div>

            <div className="but_div">
              <button>Checkout Now</button>
            </div>
          </Drawer>
        </div>

        <p className="note">
          Pay in 12 interest-free installments of $95.83{" "}
          <span>Learn more</span>
        </p>

        <div className="policy">
          <div className="policy_type">
            <img
              src={overn}
              alt="img"
              style={{ width: "35px", height: "35px" }}
            />
            <p>
              Overnight <br />
              Shipping
            </p>
          </div>

          <div className="policy_type">
            <img
              src={badgedd}
              alt="img"
              style={{width: "50px", height: "50px"}}
            />

            <p>
              Lifetime <br></br>Warranty
            </p>
          </div>

          <div className="policy_type">
            <img
              src={monyy}
              alt="img"
              style={{ width: "35px", height: "35px" }}
            />

            <p>
              30 Days <br />
              Free Return
            </p>
          </div>

          <div className="policy_type">
            <img
              src={lifet}
              alt="img"
              style={{ width: "35px", height: "35px" }}
            />

            <p>
              Certificate
              <br />& Appraisal
            </p>
          </div>
        </div>

        <div>
          <RingShipReturn />
        </div>

        <div className="appointment">
          <h5>Virtual Appointment</h5>
          <p>
            <strong>See jewelry</strong> up close with a personal appointment.
            Explore engagement rings, diamonds, and fine jewelry in person
            through your device.
          </p>
        
        </div>
      </div>
    </div>
  </Root>

  );
}

const Root = styled.section`
  padding: 30px 30px;
  iframe {
    padding: 20px;
    height: 90vh;
    width: 50vw;
  }
  .main_div {
    display: flex;

    .image_div {
      border: 1px solid #d3d3d3;
      width: 50%;
      height: 613px;
      border-radius: 20px;
      .img_container {
        width: 500px;
        height: 500px;
      }

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
        height:50vh;
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

      /* .plus_sign {
        position: absolute;
        z-index: 1111;
        transform: translate(265px, 0);
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
      } */
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
        background-color:#fff;
        color:rgba(0, 0, 0);
        font-size:17px;
        padding:16px 0;
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
   

      h5 {
        font-size: 1rem;
        font-weight: 600;
      }

      p {
        font-size: 13px;
        margin-bottom: 0;
      }

      /* button {
        font-size: 0.875rem;
        letter-spacing: 0;
        line-height: 1.2;
        font-weight: 400;
        text-decoration: underline;
        border: 1px solid transparent;
        margin-top: 10px;
        padding: 0;
        color: #000000;
      } */

    }
  }
  img {
    transition: transform 1s ease-in-out;
  }
  img:hover {
    transform: rotate3d(360deg);
    
  }
  .slick-slide.slick-active.slick-current {
    > div {
      height: auto;
    }
  }

  .custom-drawer {
    z-index: 11111111 !important;
  }

  .cart_heading {
    padding: 16px;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1),
      0 1px 2px -1px rgba(0, 0, 0, 0.1);

    h2 {
      font-size: 16px;
      color: #000000;
      font-weight: 400;
      font-family: ProximaNova, sans-serif;
    }
  }

  .prod_main_div {
    width: 100%;
    height: 420px;
    overflow: auto;
    scrollbar-width: none;
    -ms-overflow-style: none;

    .prod_div {
      padding: 10px 16px;
      .prod {
        padding: 12px;
        background-color: #f7f7f7;
        border-radius: 1.25rem;
        display: flex;
        flex-direction: column;
        gap: 15px;
        .bg-img {
          height: 180px;
          background-image: url(${ww});
          background-size: 100%;
          background-repeat: no-repeat;
          .dia_img {
            display: flex;
            align-items: flex-end;
            height: 100%;
            width: 100%;
            justify-content: flex-end;

            img {
              width: 20%;
              height: 20%;
              object-fit: contain;
            }
          }
        }
        .prod_name {
          h3 {
            font-size: 15px;
            color: #000000;
            font-weight: 400;
            font-family: ProximaNova, sans-serif;
          }
        }
        .prod_spec {
          display: flex;
          justify-content: space-between;
          padding-bottom: 15px;
          border-bottom: 1px solid #ededed;
          .icon_content {
            display: flex;
            align-items: center;
            img {
              width: 40px;
              height: 40px;
              mix-blend-mode: multiply;
            }
            .content_head {
              display: flex;
              flex-direction: column;
              h4 {
                font-size: 14px;
                color: #000000;
                font-family: ProximaNova, sans-serif;
                margin-bottom: 0;
                font-weight: 500;
              }
              p {
                font-size: 13px;
                color: #808080;
                margin-bottom: 0;
                font-family: ProximaNova, sans-serif;
              }
            }
          }
          .prod_price {
            h4 {
              font-weight: 500;
              font-size: 14px;
              font-family: ProximaNova, sans-serif;
              margin-bottom: 0;
            }
          }
        }
        .price_div {
          display: flex;
          justify-content: space-between;
          p {
            font-size: 21px;
            color: rgba(102, 102, 102);
            font-weight: 500;
          }

          .delete_icon {
            img {
              cursor: pointer;
            }
          }
        }
      }
    }
  }

  .element-with-scroll::-webkit-scrollbar {
    display: none;
  }

  .total_price_div {
    padding: 16px;
    display: flex;
    justify-content: space-between;

    p {
      font-size: 21px;
      color: #666666;
      font-family: ProximaNova, sans-serif;
    }

    h4 {
      font-weight: 500;
      font-size: 21px;
      font-family: ProximaNova, sans-serif;
      color: #000000;
    }
  }

  .but_div {
    padding: 16px;
    button {
      color: rgba(255, 255, 255);
      font-weight: 600;
      font-size: 1rem;
      text-align: center;
      padding: 1rem 2rem;
      background-color: #000000;
      border: transparent;
      border-radius: 30px;
      width: 100%;
    }
  }

  @media (max-width: 567px) {
    .main_div .complete_info_container button {
      padding-top: 10px 0;
      height: 35vh;
    }

    .main_div .policy .policy_type p {
      font-size: 11px;
    }

    .main_div {
      flex-direction: column;
      gap:20px;
    }

    .main_div .image_div {
      width:100%;
      height:355px;
    }

    .main_div .des_div {
      width: 100%;
      padding-left:0;
    }

   .main_div .des_div .title h2 {
    font-size: 18px;
  
}

   .main_div .image_div .img_container {
    height:unset;
}

 .main_div .image_div .slick-list,  .main_div .image_div .slick-slider,  .main_div .image_div .slick-track {
    height: 300px;
}

  }

  @media (min-width: 567px) and (max-width: 992px) {
    .prod_main_div {
      height: 890px;
    }

    .main_div .complete_info_container button {
      padding-top: 10px 0;
      height: 18vh;
    }

    .main_div .image_div .slick-slider,
    .gMiibD .main_div .image_div .slick-track {
      
      iframe {
        width: 90vw;
        height: 40vh;
      }
    }
    .slick-slide.slick-active.slick-current {
      height: 370px;
    }
    .main_div {
      flex-direction: column;
      .image_div,
      .des_div {
        width: 100%;
        margin: 10px 0px;
        padding: 0px;
        height: auto;
        .title h2 {
          font-size: 18px;
        }
      }
    }
  }


`;

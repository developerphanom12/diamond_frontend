import styled from "styled-components";
import React, { useEffect, useState } from "react";
import aeroplane from "../../Images/aeroplane.png";
import badgess from "../../Images/badgess.png";
import moneyinhand from "../../Images/moneyinhand.png";
import certifiedd from "../../Images/certifiedd.png";
import pinkimg from "../../Images/pink.PNG";
import modimg from "../../Images/modimg.PNG";
import color from "../../Images/color.PNG";
import clarity from "../../Images/clarity.PNG";
import diamo from "../../Images/diamo.PNG";
import j from "../../Images/j.jpg";
import vs from "../../Images/vs.png";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { EXCHANGE_URLS } from "../../URLS";
import axios from "axios";
import { useLoading } from "../../LoadingContext";
import Section3 from "./Section3";
import deleteicon from "../../Images/delete.PNG";
import ww from "../../Images/ww.webp";
import Drawer from "react-modern-drawer";
import {
  setSelectedMaterialImage,
  setSelectedOptions,
  setSelectedShapeImage,
} from "../../../redux/users/action";
import ROUND from "../../Images/round-removebg-preview.png";
import EMERALD from "../../Images/emerald-removebg-preview.png";
import HEART from "../../Images/heart-removebg-preview.png";
import MARQUISE from "../../Images/Marquise-removebg-preview.png";
import OVAL from "../../Images/oval-removebg-preview.png";
import PEAR from "../../Images/Pear-removebg-preview.png";
import PRINCESS from "../../Images/Princess-removebg-preview.png";
import RADIANT from "../../Images/Radiant-removebg-preview.png";
import CUSHION from "../../Images/cushionremovebg.png";
import ECUSHION from "../../Images/ECusion-removebg-preview.png";
import one from "../../Images/1.png";
import four from "../../Images/4.png";
import six from "../../Images/6.png";
import two from "../../Images/2.png";
import five from "../../Images/5.png";
import seven from "../../Images/7.png";
import three from "../../Images/3.png";

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
const materialList = [
  { name: "14k white gold", imgUrl: one },
  { name: "14k yellow gold", imgUrl: four },
  { name: "14k pink gold", imgUrl: six },
  { name: "18k white gold", imgUrl: two },
  { name: "18k yellow gold", imgUrl: five },
  { name: "18k pink gold", imgUrl: seven },
  { name: "Platinum", imgUrl: three },
];
export default function Section2() {
  const uniqueProduct = useSelector((state) => state.users.uniqueProduct);
  const [unique, setUnique] = useState(null);
  const [sizeOptions, setSizeOptions] = useState([]);
  const [size, setSize] = useState("");
  const [caratOptions, setCaratOptions] = useState([]);
  const [carat, setCarat] = useState("");
  const [preDefineData, setPreDefineData] = useState(null);
  const [selectedShapes, setSelectedShapes] = useState(["ROUND"]);
  const [selectedMaterial, setSelectedMaterial] = useState(["14kWhite"]);

  const location = useLocation();
  const { setLoading } = useLoading();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const product = location.state;
  console.log("uniqueProduct", product, uniqueProduct);
  const [isOpen, setIsOpen] = React.useState(false);

  const fetchUniqueData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${EXCHANGE_URLS}/fetchpredefione?productId=${uniqueProduct}`
      );
      if (response.status === 200) {
        setUnique(response.data.data);
        console.log("shdgfhsgd", response.data.data);
        const uniqueSizes = [];
        const uniqueCarats = [];

        response.data.data?.variants?.edges?.forEach((variant) => {
          variant?.node?.selectedOptions?.forEach((option) => {
            if (option.name === "size" && !uniqueSizes.includes(option.value)) {
              uniqueSizes.push(option.value);
            }
            if (
              option.name === "carat" &&
              !uniqueCarats.includes(option.value)
            ) {
              uniqueCarats.push(option.value);
            }
          });
        });

        setSizeOptions(uniqueSizes);
        setCaratOptions(uniqueCarats);

        if (!size && uniqueSizes.length > 0) {
          setSize(uniqueSizes[0]);
        }
        if (!carat && uniqueCarats.length > 0) {
          setCarat(uniqueCarats[0]);
        }
      }
    } catch (error) {
      console.error("Error fetching collections:", error);
    } finally {
      setLoading(false);
    }
  };
  const fetchPreDefineApi = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${EXCHANGE_URLS}/productPredefine?productId=${uniqueProduct}&size=${size}&carat=${carat}`
      );
      if (response.status === 200) {
        setPreDefineData(response.data.data);
        console.log("Predefined Data:", response.data.data);
        dispatch(setSelectedOptions(uniqueProduct, carat, size));
        console.log("storing_or_not", setSelectedOptions);
      }
    } catch (error) {
      console.error("Error fetching", error);
    } finally {
      setLoading(false);
    }
  };

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  useEffect(() => {
    fetchUniqueData();
  }, [uniqueProduct]);

  useEffect(() => {
    if (size && !isNaN(carat)) {
      fetchPreDefineApi();
    }
  }, [size, carat]);
  const handleCheckout = () => {
    navigate("/checkout", {
      state: {
        uniqueProduct: uniqueProduct,
        size: size,
        carat: carat,
      },
    });
  };

  const handleShapeClick = (shapeName, shapeImageUrl) => {
    dispatch(setSelectedShapeImage(shapeImageUrl));
    setSelectedShapes([shapeName]); // Set the selected shape
  };
  const handleMaterialClick = (shapeName, shapeImageUrl) => {
    dispatch(setSelectedMaterialImage(shapeImageUrl));
    setSelectedMaterial([shapeName]); // Set the selected shape
  };

  return (
    <Root>
      <div className="main_div">
        <div className="image_div">
          <ImageContainer>
            {preDefineData && preDefineData.image.length > 0 ? (
              <img
                src={preDefineData.image.originalSrc}
                title="Diamond Image"
                alt="Diamond"
              />
            ) : (
              <img
                src={unique?.images?.edges?.[0]?.node?.originalSrc}
                title="Diamond Image"
                alt="Diamond"
              />
            )}
          </ImageContainer>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <button className="button">
              {unique?.images?.edges?.[0]?.node?.originalSrc ? (
                <img
                  src={unique?.images?.edges?.[0]?.node?.originalSrc}
                  title="Diamond image"
                  alt="img"
                  style={{ width: "50px", height: "50px" }}
                />
              ) : (
                "No image"
              )}

              <span>Image</span>
            </button>
          </div>
        </div>
        <div className="des_div">
          <div className="title">
            <h2>
              {unique?.title} -{unique?.variants?.edges?.[0]?.node?.title}
            </h2>
            <h4>${unique?.variants?.edges?.[0]?.node?.price}</h4>
            <p>
              {unique?.description && unique.description}
              {!unique?.description && "No Description About Product"}
            </p>
          </div>
          <div className="prod_spec">
            <h4>Carat Weight</h4>
            <div className="carattt">
              {caratOptions.map((caratOption, index) => (
                <div key={index} className="spec">
                  <button
                    onClick={() => setCarat(caratOption)}
                    className={`spec ${
                      carat === caratOption ? "selected" : ""
                    }`}
                  >
                    <p>{caratOption}</p>
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className="ring_types mt-4">
            <h4>Center Stone Shape: Round</h4>
            <div>
              {shapesList.map((shape) => (
                <button
                  key={shape.name}
                  className={`btn_shapes ${
                    selectedShapes.includes(shape.name) ? "selected" : ""
                  }`}
                  onClick={() => handleShapeClick(shape.name, shape.imgUrl)}
                >
                  <img className="img" src={shape.imgUrl} alt={shape.name} />
                  <p style={{ display: "none" }}>{shape.name}</p>
                </button>
              ))}
            </div>
          </div>
          <div className="ring_types mt-4">
            <h4>Material: 14k White Gold</h4>
            <div>
              {materialList.map((shape) => (
                <button
                  key={shape.name}
                  className={`btn_shapes ${
                    selectedMaterial.includes(shape.name) ? "selected" : ""
                  }`}
                  onClick={() => handleMaterialClick(shape.name, shape.imgUrl)}
                >
                  <img className="img" src={shape.imgUrl} alt={shape.name} />
                  <p style={{ display: "none" }}>{shape.name}</p>
                </button>
              ))}
            </div>
          </div>
          <div className="ring_size">
            <select value={size} onChange={(e) => setSize(e.target.value)}>
              <option value="">Select Ring Size</option>
              {sizeOptions.map((sizeOption, index) => (
                <option key={index} value={sizeOption}>
                  {sizeOption}
                </option>
              ))}
            </select>
          </div>
          <div className="product_btn">
            <button className="btn" onClick={toggleDrawer}>
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
                        {unique?.images?.edges?.[0]?.node?.originalSrc ? (
                          <img
                            src={unique?.images?.edges?.[0]?.node?.originalSrc}
                            title="Diamond Image"
                            alt="Diamond"
                          />
                        ) : (
                          <img
                            src={unique?.images?.edges?.[0]?.node?.originalSrc}
                            title="Diamond Image"
                            alt="Diamond"
                          />
                        )}
                      </div>
                    </div>

                    <div className="prod_name">
                      <h3>
                        {unique?.title} -
                        {unique?.variants?.edges?.[0]?.node?.title}
                      </h3>
                    </div>

                    <div className="prod_spec">
                      <div className="icon_content">
                        {unique?.images?.edges?.[0]?.node?.originalSrc ? (
                          <img
                            src={unique?.images?.edges?.[0]?.node?.originalSrc}
                            title="Diamond Image"
                            alt="Diamond"
                          />
                        ) : (
                          <img
                            src={unique?.images?.edges?.[0]?.node?.originalSrc}
                            title="Diamond Image"
                            alt="Diamond"
                          />
                        )}
                        <div className="content_head">
                          <h4> {unique?.title} </h4>
                          <p>14k White Gold </p>
                        </div>
                      </div>
                      <div className="prod_price">
                        <h4>${unique?.variants?.edges?.[0]?.node?.price}</h4>
                      </div>
                    </div>

                    <div className="prod_spec">
                      <div className="icon_content">
                        {unique?.images?.edges?.[0]?.node?.originalSrc ? (
                          <img
                            src={unique?.images?.edges?.[0]?.node?.originalSrc}
                            title="Diamond Image"
                            alt="Diamond"
                          />
                        ) : (
                          <img
                            src={unique?.images?.edges?.[0]?.node?.originalSrc}
                            title="Diamond Image"
                            alt="Diamond"
                          />
                        )}
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
                        Total:{" "}
                        <span style={{ color: "#000000" }}>
                          ${unique?.variants?.edges?.[0]?.node?.price}
                        </span>
                      </p>
                      <div className="delete_icon">
                        <img src={deleteicon} alt="img" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="total_price_div">
                <p>Total:</p>
                <h4>${unique?.variants?.edges?.[0]?.node?.price}</h4>
              </div>

              <div className="but_div">
                <button onClick={handleCheckout}>Checkout Now</button>
              </div>
            </Drawer>
          </div>
          <div className="policy">
            <div className="policy_type">
              <img src={aeroplane} alt="aeroplane_images" />

              <p>
                Overnight <br />
                Shipping
              </p>
            </div>

            <div className="policy_type">
              <img
                src={badgess}
                alt="badgess_images"
                style={{ width: "50px", height: "50px" }}
              />
              <p>
                Lifetime <br />
                Warranty
              </p>
            </div>

            <div className="policy_type">
              <img src={moneyinhand} alt="moneyinhand_images" />
              <p>
                30 Days <br></br>Free Return
              </p>
            </div>

            <div className="policy_type">
              <img src={certifiedd} alt="certifiedd_images" />
              <p>
                Certificate<br></br>& Appraisal
              </p>
            </div>
          </div>
          <div className="setting_detail">
            <h4>Setting details</h4>
            <div className="setting_info">
              <div className="setting_div">
                <div className="profile_cont">
                  <img src={carat} alt="carat" />
                  <p>width</p>
                </div>
                <h4>18mm</h4>
                <img
                  src={j}
                  alt="j"
                  className="ring_img"
                  style={{ visibility: "Hidden" }}
                />
                <p className="para">Universal measurement unit for diamonds</p>
              </div>
              <div className="setting_div">
                <div className="profile_cont">
                  <img src={pinkimg} alt="pinkimg" />
                  <p>profile</p>
                </div>
                <h4>Medium</h4>
                <img src={modimg} alt="modimg" className="ring_img2" />
                <p className="para">Only stacks with a chevron/curved band</p>
              </div>
            </div>

            <h4>Your Diamond Info</h4>

            <div className="diamond_info">
              <div className="setting_div">
                <div className="profile_cont">
                  <img src={carat} alt="carat" />
                  <p>CARAT</p>
                </div>

                <h4> carat</h4>
                <img
                  src={j}
                  alt="j"
                  className="ring_img"
                  style={{ visibility: "Hidden" }}
                />
                <p className="para">Universal measurement unit for diamonds</p>
              </div>

              <div className="setting_div">
                <div className="profile_cont">
                  <img src={color} alt="color" />
                  <p>COLOR</p>
                </div>
                <h4> color</h4>
                <img src={j} alt="j" className="ring_img" />
                <p className="para">Slightly tinted</p>
              </div>

              <div className="setting_div">
                <div className="profile_cont">
                  <img src={clarity} alt="clarity" />
                  <p>CLARITY</p>
                </div>
                <h4>clarity</h4>
                <img src={vs} alt="vs" className="ring_img" />
                <p className="para">
                  Visible inclusion under 10x magnification
                </p>
              </div>

              <div className="setting_div">
                <div className="profile_cont">
                  <img src={diamo} alt="diamo" />
                  <p>CUT</p>
                </div>
                <h4>cut</h4>
                <img
                  src={j}
                  alt="j"
                  className="ring_img"
                  style={{ visibility: "Hidden" }}
                />
                <p className="para">Incredible fire and brilliance</p>
              </div>
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
  padding: 20px;
  margin: 20px 0px;
  .main_div {
    display: flex;
    flex-wrap: wrap;
    gap: 50px;
    justify-content: space-between;
    .image_div {
      flex: 1;
      border: 1px solid #d3d3d3;
      padding: 20px 20px 0px 20px;
      height: 600px;
      border-radius: 20px;
      flex-direction: column;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: 100%;
        height: 90%;
      }

      button.button {
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
    }
    .ring_size {
      display: flex;
      justify-content: start;
      margin-top: 20px;
      select {
        font-size: 14px;
        font-weight: 400;
        border-radius: 6px;
        background-color: #fff;
        border: 1px solid lightgray;
        border: 1px solid #e0e0e0;
        padding: 0.75rem 3rem 0.75rem 0.75rem;
        cursor: pointer;
        transition: 0.5s;
        &:hover {
          box-shadow: 0 0 5px #cacaca;
        }
      }
    }

    .des_div {
      flex: 1;
      padding: 10px 30px;
      .title {
        h2 {
          font-size: 23px;
          font-weight: 600;
          line-height: 1.2;
        }

        h4 {
          font-size: 21px;
          color: #666666;
          font-weight: 500;
          line-height: 1.25;
        }
        p {
          font-size: 13px;
          font-weight: 400;
          color: #666666;
        }
      }

      .prod_spec {
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        gap: 10px;
        .carattt {
          gap: 10px;
          display: flex;
          flex-wrap: wrap;
        }
        h4 {
          margin-bottom: 0;
          font-size: 14px;
          color: #000000;
          font-weight: 700;
          margin-bottom: 3px;
        }
        .spec {
          display: flex;
          flex-direction: column;
          padding: 10px;
          width: 40px;
          height: 40px;
          justify-content: center;
          border-radius: 7px;
          background: transparent;
          align-items: center;
          cursor: pointer;
          border: 1px solid #bbb9b9;

          p {
            color: #666666;
            font-size: 11px;
            margin-bottom: 0;
            line-height: 1.2;
          }
        }
      }
      .ring_types {
        display: flex;
        flex-direction: column;

        h4 {
          font-size: 14px;
          color: #000000;
          font-weight: 700;
          margin-bottom: 3px;
        }
        > div {
          display: flex;
          overflow-x: auto;
          .btn_shapes {
            width: 48px !important;
            border: 2px solid transparent;
            background: #fff;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 12px 0;
            font-size: 12px;
            line-height: 25px;
            font-weight: 500;
            .img {
              width: 40px;
              height: 40px;
            }
            &.selected {
              border-bottom: 3px solid black;
            }

            &:hover {
              background-color: rgba(247, 247, 247);
            }
          }
        }
      }
      .product_btn {
        display: flex;
        flex-direction: column;
        gap: 20px;
        margin-top: 50px;
        .btn {
          background-color: rgba(0, 0, 0);
          color: white;
          font-size: 17px;
          padding: 16px 0;
          font-weight: 600;
          border-radius: 50px;
          border: 1px solid transparent;
        }
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

        img {
          width: 35px;
          height: 35px;
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

    .setting_detail {
      display: flex;
      flex-direction: column;
      gap: 15px;
      margin-top: 20px;
      h4 {
        font-size: 16px;
        color: #000000;
        font-weight: 700;
      }
      .diamond_info {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        .setting_div {
          width: 47%;
          background: #fff;
          border: 1px solid #e0e0e0;
          border-radius: 12px;
          padding: 10px;
          display: flex;
          gap: 8px;
          flex-direction: column;
          .profile_cont {
            display: flex;
            gap: 10px;
            align-items: center;
            p {
              font-size: 12px;
              color: #bbb9b9;
              font-weight: 600;
              text-transform: uppercase;
              margin-bottom: 0;
            }
          }
          h4 {
            font-size: 24px;
          }
          .ring_img {
            width: 100%;
          }
          .ring_img2 {
            width: auto;
            max-width: 70px;
          }
          .para {
            font-size: 13px;
            color: #666666;
            margin-bottom: 0;
          }
        }
      }
      .setting_info {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        .setting_div {
          width: 37%;
          background: #fff;
          border: 1px solid #e0e0e0;
          border-radius: 12px;
          padding: 10px;
          display: flex;

          flex-direction: column;
          .profile_cont {
            display: flex;
            gap: 10px;
            align-items: center;
            p {
              font-size: 12px;
              color: #bbb9b9;
              font-weight: 600;
              text-transform: uppercase;
              margin-bottom: 0;
            }
          }
          h4 {
            font-size: 24px;
          }
          .ring_img {
            width: 100%;
          }
          .ring_img2 {
            width: auto;
            max-width: 70px;
          }
          .para {
            font-size: 13px;
            color: #666666;
            margin-bottom: 0;
          }
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
    max-height: 420px;
    height: 100%;
    overflow-y: scroll;
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
        gap: 7px;
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
            font-size: 13px;
            color: #000000;
            font-weight: 400;
            font-family: ProximaNova, sans-serif;
          }
        }
        .prod_spec {
          display: flex;
          justify-content: space-between;
          padding-bottom: 10px;
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
                font-size: 12px;
                color: #000000;
                font-family: ProximaNova, sans-serif;
                margin-bottom: 0;
                font-weight: 500;
              }
              p {
                font-size: 12px;
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
            font-size: 16px;
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
    padding: 0px 16px;
    display: flex;
    justify-content: space-between;

    p {
      font-size: 18px;
      color: #666666;
      font-family: ProximaNova, sans-serif;
    }

    h4 {
      font-weight: 500;
      font-size: 18px;
      font-family: ProximaNova, sans-serif;
      color: #000000;
    }
  }
  .but_div {
    padding: 16px;
    margin-bottom: 20px;
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
  @media (min-width: 567px) and (max-width: 992px) {
  }

  @media (max-width: 567px) {
    padding: 10px 0px;
    .main_div {
      gap: 0px;
    }

    .main_div .image_div {
      width: 100%;
      height: unset;
      padding: 5px;
      margin: 10px;
      img {
        width: 90vw;
      }
    }
    .main_div .des_div .prod_spec {
      width: 90vw;
      .carattt {
        width: 100%;
        gap: 10px;
        display: flex;
        flex-wrap: nowrap;
        overflow-x: scroll;
        padding-bottom: 10px;
      }
    }
    .main_div .ring_size select {
      width: 100%;
    }
    .main_div .des_div {
      width: 100%;
      margin-top: 20px;
      padding: 5px;
    }
    .main_div .setting_detail .diamond_info .setting_div {
      flex: 1;
    }
    .main_div .des_div .prod_spec .spec {
      padding: 0px 14px;
    }
    .main_div .des_div .prod_spec {
      gap: 20px;
    }
    .main_div .des_div .title h2,
    .main_div .des_div .title h4 {
      font-size: 18px;
    }
  }
  @media (min-width: 567px) and (max-width: 992px) {
    .main_div {
      gap: 0px;
    }

    .main_div .image_div {
      width: 100%;
      height: unset;
      margin: 20px;
    }
    .main_div .des_div {
      width: 100%;
      margin-top: 20px;
      padding: 5px;
    }
    .main_div .des_div h2 {
      font-size: 18px;
    }
    .main_div .setting_detail .diamond_info .setting_div {
      flex: 1;
    }
  }
`;
const ImageContainer = styled.div`
  width: 100%;
  height: 100%;

  @media (max-width: 768px) {
    /* height: auto; // Adjust height for mobile */
  }

  img {
    width: 100%;
    height: 100%;

    @media (max-width: 768px) {
      height: 100%;
    }
  }
`;

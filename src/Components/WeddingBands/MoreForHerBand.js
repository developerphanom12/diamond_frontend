import { EXCHANGE_URLS } from "../URLS";
import {
  fetchPredefineData,
  setSelectedMaterialImage,
  setSelectedOptions,
  setSelectedShapeImage,
} from "../../redux/users/action";
import styled from "styled-components";
import React, { useEffect, useState } from "react";
import axios from "axios";
import aeroplane from "../../Images/aeroplane.png";
import badgess from "../../Images/badgess.png";
import moneyinhand from "../../Images/moneyinhand.png";
import certifiedd from "../../Images/certifiedd.png";
import wid from "../../Images/svgviewer-png-output.png";
import met from "../../Images/svgviewer-png-output (3).png";
import circle from "../../Images/Screenshot from 2024-07-25 17-29-15.png";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useLoading } from "../LoadingContext";
import ww from "../../Images/ww.webp";
import one_four_k_white_gold from "../../Images/fourone.png";
import one_four_k_yellow_gold from "../../Images/fourtwo.png";
import one_four_k_pink_gold from "../../Images/fourthree.png";
import one_eight_k_white_gold from "../../Images/eightone.png";
import one_eight_k_yellow_gold from "../../Images/eighttwo.png";
import one_eight_k_red from "../../Images/eightthree.png";
import Platinum from "../../Images/pt.png";
import noimg from "../../Images/eligantPacking.png";
import solid from "../../Images/SolidHer.png";
import pave from "../../Images/PaveHer.png";
import classic from "../../Images/classic.png";
import chevron from "../../Images/chevron.png";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import fourmm from "../../Images/fourmm.png";
import fivemm from "../../Images/fivemm.png";
import sixmm from "../../Images/sixmm.png";

import diamond_half_way from "../../Images/diamondhalfway.png";
import diamond_all_around from "../../Images/diamondallaround.png";

import ringwithdiamond from "../../Images/ringwithdiamond.png";
import ship from "../../Images/ship.png";
import ret from "../../Images/ret.png";

const materialList = [
  { value: "14ct White Gold", imgUrl: one_four_k_white_gold },
  { value: "14ct Yellow Gold", imgUrl: one_four_k_yellow_gold },
  { value: "14ct Pink Gold", imgUrl: one_four_k_pink_gold },
  { value: "18ct White Gold", imgUrl: one_eight_k_white_gold },
  { value: "18ct Yellow Gold", imgUrl: one_eight_k_yellow_gold },
  { value: "18ct Red", imgUrl: one_eight_k_red },
  { value: "Platinum", imgUrl: Platinum },
];

const settingList = [
  { value: "Diamonds Half Way", imgUrl: diamond_half_way },
  { value: "Diamonds All Around", imgUrl: diamond_all_around },
];

const styleList = [
  { value: "Solid", imgUrl: solid},
  { value: "Pave", imgUrl: pave},
  { value: "Classic", imgUrl: classic},
  { value: "Chevron", imgUrl: chevron},
];

const widthList = [
  { value: "3MM", imgUrl: fourmm },
  { value: "4MM", imgUrl: fourmm },
  { value: "5MM", imgUrl: fivemm },
  { value: "6MM", imgUrl: sixmm },
];

export default function MoreForHerBand() {
  const uniqueProduct = useSelector((state) => state.users.uniqueProduct);
  const [unique, setUnique] = useState(null);
  const [colorOptions, setColorOptions] = useState([]);
  const [color, setColor] = useState("");
  const [fingerSizeList, setFingerSizeList] = useState([]);
  const [carat, setCarat] = useState("");
  const [preDefineData, setPreDefineData] = useState(null);
  const [selectedShapes, setSelectedShapes] = useState("ROUND");
  const [selectedStyle, setSelectedStyle] = useState("");
  const [selectedStyleImg, setSelectedStyleImg] = useState([]);
  const [selectedSetting, setSelectedSetting] = useState("");
  const [selectedSettingImg, setSelectedSettingImg] = useState([]);
  const [selectedWidth, setSelectedWidth] = useState("");
  const [selectedWidthImg, setSelectedWidthImg] = useState([]);
  const [selectedShapesImg, setSelectedShapesImg] = useState([]);
  const [selectedMaterial, setSelectedMaterial] = useState(null);
  const [fingerSize, setFingerSize] = useState([]);
  const { setLoading } = useLoading();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const fetchUniqueData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${EXCHANGE_URLS}/fetchpredefione?productId=${uniqueProduct}`
      );
      if (response.status === 200) {
        setUnique(response.data.data);
        console.log("PredefinedData:", response);

        const uniqueColors = [];
        const uniqueCarats = [];
        const uniqueFingers = [];
        response.data.data?.variants?.edges?.forEach((variant) => {
          variant?.node?.selectedOptions?.forEach((option) => {
            if (
              option.name === "Colours" &&
              !uniqueColors.includes(option.value)
            ) {
              uniqueColors.push(option.value);
            }
            if (
              option.name === "CENTRE STONE SIZE" &&
              !uniqueCarats.includes(option.value)
            ) {
              uniqueCarats.push(option.value);
            }
            if (
              option.name === "FINGER SIZE" &&
              !uniqueFingers.includes(option.value)
            ) {
              uniqueFingers.push(option.value);
            }
          });
        });

        setColorOptions(uniqueColors);

        setFingerSizeList(uniqueFingers);
        if (!color && uniqueColors.length > 0) {
          setColor(uniqueColors[0]);
        }
        if (!carat && uniqueCarats.length > 0) {
          setCarat(uniqueCarats[0]);
        }
        if (!fingerSize && uniqueFingers.length > 0) {
          setFingerSize(uniqueFingers[0]);
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
        `${EXCHANGE_URLS}/productPredefine?productId=${uniqueProduct}&colours=${color}&carat=${carat}`
      );
      if (response.status === 200) {
        setPreDefineData(response.data.data);
        const data = response.data.data;
        dispatch(fetchPredefineData(data));
        console.log("Predefined neww Data:", response);
        dispatch(setSelectedOptions(uniqueProduct, carat, color));
        dispatch(setSelectedMaterialImage(imageUrl));
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

  const handleCheckout = () => {
    navigate("/checkout", {
      state: {
        uniqueProduct: uniqueProduct,
        color: color,
        carat: carat,
        unique: unique,
      },
    });
  };

  const handleShapeClick = (shapeName, shapeImageUrl) => {
    dispatch(setSelectedShapeImage(shapeImageUrl));
    setSelectedShapes(shapeName);
    setSelectedShapesImg(shapeImageUrl);
  };

  const handleSettingClick = (shapeName, shapeImageUrl) => {
    setSelectedSetting(shapeName);
    setSelectedSettingImg(shapeImageUrl);
  };

  const handleStyleClick = (shapeName, shapeImageUrl) => {
    setSelectedStyle(shapeName);
    setSelectedStyleImg(shapeImageUrl);
  };

  const handleWidthClick = (shapeName, shapeImageUrl) => {
    setSelectedWidth(shapeName);
    setSelectedWidthImg(shapeImageUrl);
  };

  const handleMaterialClick = (selectedMaterialValue) => {
    const selectedMaterial = materialList.find(
      (material) => material.value === selectedMaterialValue
    );
    setColor(selectedMaterialValue);
    setSelectedMaterial(selectedMaterial);
  };

  const isMaterialAvailable = (materialValue) => {
    return colorOptions.includes(materialValue);
  };

  const getSelectedMaterial = () => {
    return materialList.find((material) => material.name === color);
  };

  const imageUrl =
    preDefineData?.image?.originalSrc ||
    unique?.image?.originalSrc ||
    "No Product Variant Available";

  useEffect(() => {
    fetchUniqueData();
  }, [uniqueProduct]);

  useEffect(() => {
    fetchPreDefineApi();
  }, [color, carat]);
  // const videoUrl ="gid://shopify/Video/34989581926618"
  const videoMetafield = "gid://shopify/Video/34989581926618";
  let videoUrl = null;

  if (videoMetafield) {
    const videoId = videoMetafield;
    // Assuming a pattern to generate the video URL, adjust accordingly
    videoUrl = `https://cdn.shopify.com/videos/${videoId}.mp4`;
  }

  return (
    <Root>
      <div className="main_wrapper">
        <div className="image_div">
          <ImageContainer>
            {imageUrl ? (
              <img src={imageUrl} title="Product Image" alt="Product" />
            ) : (
              <img src={noimg} alt="img not available" />
            )}
          </ImageContainer>
        </div>
        <div className="des_div">
          <div className="title">
            <h2>{unique?.title}</h2>
            <h4>${preDefineData?.price}</h4>
            <p>
              {unique?.description && unique.description}
              {!unique?.description && "No Description About Product"}
            </p>
          </div>

          <div className="ring_types mt-4">
            <h4>Material:{selectedMaterial?.name}</h4>
            <div>
              {colorOptions &&
                materialList.map((material) => (
                  <button
                    key={material.value}
                    className={`btn_shapes ${
                      color === material.value ? "selected" : ""
                    }`}
                    onClick={() => handleMaterialClick(material.value)}
                    disabled={!isMaterialAvailable(material.value)}
                    style={{
                      opacity: isMaterialAvailable(material.value) ? 1 : 0.5,
                      cursor: isMaterialAvailable(material.value)
                        ? "pointer"
                        : "not-allowed",
                    }}
                  >
                    <img
                      className="img color_div"
                      src={material.imgUrl}
                      alt={material.value}
                    />
                    <p style={{ display: "none" }}>{material.value}</p>
                  </button>
                ))}
            </div>
          </div>

          <div className="ring_types mt-4">
            <h4>Setting Type : {selectedSetting}</h4>
            <div>
              {settingList &&
                settingList.map((setting) => (
                  <button
                    key={setting.value}
                    className={`btn_shapes ${
                      selectedSetting.includes(setting.value) ? "selected" : ""
                    }`}
                    onClick={() => handleSettingClick(setting.value)}
                  >
                    <img
                      className="img color_div"
                      src={setting.imgUrl}
                      alt={setting.value}
                    />
                    <p style={{ display: "none" }}>{setting.value}</p>
                  </button>
                ))}
            </div>
          </div>

          <div className="ring_types mt-4">
            <h4>Style : {selectedStyle}</h4>
            <div>
              {styleList &&
                styleList.map((style) => (
                  <button
                    key={style.value}
                    className={`btn_shapes ${
                      selectedStyle.includes(style.value) ? "selected" : ""
                    }`}
                    onClick={() => handleStyleClick(style.value)}
                  >
                    <img
                      className="img color_div"
                      src={style.imgUrl}
                      alt={style.value}
                    />
                    <p style={{ display: "none" }}>{style.value}</p>
                  </button>
                ))}
            </div>
          </div>

          <div className="ring_types mt-4">
            <h4>Width : {selectedWidth}</h4>
            <div>
              {widthList &&
                widthList.map((width) => (
                  <button
                    key={width.value}
                    className={`btn_shapes ${
                      selectedWidth.includes(width.value) ? "selected" : ""
                    }`}
                    onClick={() => handleWidthClick(width.value)}
                  >
                    <img
                      className="img color_div"
                      src={width.imgUrl}
                      alt={width.value}
                    />
                    <p style={{ display: "none" }}>{width.value}</p>
                  </button>
                ))}
            </div>
          </div>

          <div className="ring_size">
            <select
              value={fingerSize}
              onChange={(e) => setFingerSize(e.target.value)}
            >
              <option value="">Select Ring Size</option>
              {fingerSizeList.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </div>

          <div className="total_price">
            <h5>Total Price</h5>
            <h2>$850</h2>
            <p>Ships in 2-3 weeks</p>
          </div>

          <div className="product_btn">
            <button className="btn">
              {/* {color ? "Add to Cart" : "Select Ring Size"} */}
              Select Ring Size
            </button>
            {/* <Drawer
              open={isOpen}
              onClose={toggleDrawer}
              direction="right"
              className="custom-drawer"
              size="300px"
            >
              <div className="cart_heading">
                <h2>My Shopping Bag </h2>
              </div>

              <div className="prod_main_div">
                <div className="prod_div">
                  <div className="prod">
                    <div
                      className="bg-img"
                      style={{
                        height: "180px",
                        backgroundImage: `url(${imageUrl})`,
                      }}
                    >
                      <div className="dia_img">
                        {selectedShapesImg ? (
                          <img
                            src={selectedShapesImg}
                            title="Selected Shape Image"
                            alt="Selected Shape"
                          />
                        ) : (
                          <img
                            src={imageUrl}
                            title="Selected Shape Image"
                            alt="Selected Shape"
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
                        {selectedShapesImg ? (
                          <img
                            src={selectedShapesImg}
                            title="Selected Shape Image"
                            alt="Selected Shape"
                          />
                        ) : (
                          <img
                            src={imageUrl}
                            title="Selected Shape Image"
                            alt="Selected Shape"
                          />
                        )}
                        <div className="content_head">
                          <h4> {unique?.title} </h4>
                          {color ? <p>{color}</p> : <p>Platinum</p>}
                        </div>
                      </div>
                      <div className="prod_price">
                        <h4>${preDefineData?.price}</h4>
                      </div>
                    </div>

                    <div className="prod_spec">
                      <div className="icon_content">
                        {selectedShapesImg ? (
                          <img
                            src={selectedShapesImg}
                            title="Selected Shape Image"
                            alt="Selected Shape"
                          />
                        ) : (
                          <img
                            src={imageUrl}
                            title="Selected Shape Image"
                            alt="Selected Shape"
                          />
                        )}
                        <div className="content_head">
                          <h4>{selectedShapes} </h4>
                          <p> {unique?.variants?.edges?.[0]?.node?.title}</p>
                        </div>
                      </div>
                      <div className="prod_price">
                        <h4>${preDefineData?.price}</h4>
                      </div>
                    </div>

                    <div className="price_div">
                      <p>
                        Total:{" "}
                        <span style={{ color: "#000000" }}>
                          <h4>${preDefineData?.price}</h4>
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
                <h4>${preDefineData?.price}</h4>
              </div>

              <div className="but_div">
                <button onClick={handleCheckout}>
                  {fingerSize ? "Add to Cart" : "Select Ring Size"}
                </button>
              </div>
            </Drawer> */}
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
                30 Days <br />
                Free Return
              </p>
            </div>

            <div className="policy_type">
              <img src={certifiedd} alt="certifiedd_images" />
              <p>
                Certificate
                <br />& Appraisal
              </p>
            </div>
          </div>

          <div className="setting_detail">
            <div className="setting_main_div">
              <h4 className="seting_content">Setting Details</h4>
              <div className="subfirst_detail">
                <div className="profile_div">
                  <div className="profile_cont">
                    <img src={wid} alt="pinkimg" />
                    <p>WIDTH</p>
                  </div>

                  <h4>1.8mm</h4>

                  <div className="img_div" style={{ visibility: "hidden" }}>
                    <img src={circle} alt="img" />
                  </div>
                  <p className="para">Measured at the base of the ring</p>
                </div>
              </div>

              <div className="subsecond_detail">
                <div className="profile_div">
                  <div className="profile_cont">
                    <img src={met} alt="pinkimg" />
                    <p>METAL</p>
                  </div>

                  <h4>14k White Gold</h4>

                  <div className="img_div">
                    <img src={circle} alt="img" />

                    <div className="quality_content">
                      <div className="color_content">
                        <div
                          className="color_box"
                          style={{ backgroundColor: "#F0E68C" }}
                        ></div>
                        <h5>58.5% Gold</h5>
                      </div>
                      <div className="color_content">
                        <div
                          className="color_box"
                          style={{ backgroundColor: "#BAC4C8" }}
                        ></div>
                        <h5>8.7% Zinc</h5>
                      </div>
                    </div>

                    <div className="quality_content">
                      <div className="color_content">
                        <div
                          className="color_box"
                          style={{ backgroundColor: "#B87333" }}
                        ></div>
                        <h5>25.4% Copper</h5>
                      </div>
                      <div className="color_content">
                        <div
                          className="color_box"
                          style={{ backgroundColor: "#BDBAAE" }}
                        ></div>
                        <h5>7.3% Nickel</h5>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="para">
                      The secret sauce that makes this piece.
                    </p>
                    <p className="para">
                      *All white gold pieces are Rhodium plated
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="acc_div">
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <div className="heading">
                  <img src={ringwithdiamond} alt="img" style={{ width: "25px" }} />

                  <h5>Wedding Band Details</h5>
                </div>
              </AccordionSummary>

              <AccordionDetails>
                <div className="heading">
                  <h5>Details</h5>
                </div>
                <table>
                  <tr>
                    <td>SKU</td>
                    <td>316Q-WB-4-HA-WG-14</td>
                  </tr>
                  <tr>
                    <td>Width</td>
                    <td>
                    4.0mm</td>
                  </tr>
                  <tr>
                    <td>Material</td>
                    <td>14k White Gold</td>
                  </tr>

                  <tr>
                    <td>Type</td>
                    <td>Hammered</td>
                  </tr>

                  <tr>
                    <td>Width</td>
                    <td>4MM</td>
                  </tr>

                  <tr>
                    <td>Cut</td>
                    <td>Excellent</td>
                  </tr>
                </table>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <div className="heading">
                  <img src={ship} alt="img"  />

                  <h5>Shipping</h5>
                </div>
              </AccordionSummary>
              <AccordionDetails>
                <p className="description">
                  This item is made to order and takes 2-3 weeks to craft. We
                  ship FedEx Priority Overnight, signature required and fully
                  insured.
                </p>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <div className="heading">
                  <img
                    src={ret}
                    alt="img"
                    style={{ width: "20px", height: "20px" }}
                  />

                  <h5>Return Policy</h5>
                </div>
              </AccordionSummary>
              <AccordionDetails>
                <p className="description">
                  Received an item you don't like? We are proud to offer free
                  returns within 30 days from receiving your item. Contact our
                  support team to issue a return.
                </p>
              </AccordionDetails>
            </Accordion>
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
  padding: 20px;
  margin: 20px 0px;
  position: relative;

  .main_wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 50px;
    justify-content: space-between;
    position: relative;

    .image_div {
      flex: 1;
      top: 20px;
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

    .des_div {
      flex: 1;
      overflow: auto;
      position: relative;
      padding: 10px 30px;
      .ring_size {
        display: flex;
        justify-content: start;
        margin-top: 20px;
        select {
          font-size: 14px;
          font-weight: 400;
          border-radius: 6px;
          background-color: #fff;
          border: 1px solid #e0e0e0;
          padding: 0.75rem 3rem 0.75rem 0.75rem;
          cursor: pointer;
          transition: 0.5s;
          &:hover {
            box-shadow: 0 0 5px #cacaca;
          }
        }
      }
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
          width: 55px;
          height: 50px;
          justify-content: center;
          border-radius: 11px;
          background: transparent;
          align-items: center;
          cursor: pointer;
          border: 1px solid #bbb9b9;
          &.selected {
            border: 2px solid #000;
          }

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
            width: 54px !important;
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
        font-weight:500;
        font-size:30px;
        color:#060606;
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
        margin-top: 10px;
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

    .siz_div {
      width: 35%;
    }
    .setting_main_div {
      display: flex;
      gap: 10px;
      flex-direction: column;
      background-color: #f6f6f9;
      padding: 12px;
      border-radius: 15px;

      .subfirst_detail {
        display: flex;
        flex-direction: column;
        gap: 15px;
        width: 50%;

        .profile_div {
          background: #fff;
          border: 1px solid #e0e0e0;
          border-radius: 12px;
          padding: 10px;
          display: flex;
          gap: 8px;
          flex-direction: column;
          .profile_cont {
            display: flex;
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
            color: #000000;
            font-weight: 700;
            font-size: 24px;
            margin-bottom: 0;
          }
          .ring_img {
            width: 70px;
          }
          .img_div {
            display: flex;
            gap: 15px;
            visibility: hidden;
          }

          .para {
            font-size: 12px;
            font-weight: 500;
            color: #666666;
            margin-bottom: 0;
          }
        }
      }

      .subsecond_detail {
        display: flex;
        flex-direction: column;
        gap: 15px;

        .profile_div {
          background: #fff;
          border: 1px solid #e0e0e0;
          border-radius: 12px;
          padding: 10px;
          display: flex;
          gap: 8px;
          flex-direction: column;

          .profile_cont {
            display: flex;
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
            color: #000000;
            font-weight: 700;
            margin-bottom: 0%;
          }

          .ring_img {
            width: 70px;
          }

          .img_div {
            display: flex;
            gap: 15px;
            .quality_content {
              display: flex;
              flex-direction: column;
              justify-content: center;
              gap: 8px;
              .color_content {
                display: flex;
                gap: 10px;
                align-items: center;
                .color_box {
                  height: 16px;
                  width: 16px;
                  border-radius: 30px;
                }
                h5 {
                  font-size: 11px;
                  font-weight: 500;
                  margin-bottom: 0;
                }
              }
            }
          }

          .para {
            font-size: 12px;
            font-weight: 500;
            color: #666666;
            margin-bottom: 0;
          }
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

    .seting_content {
      font-size: 16px;
      color: #000000;
      font-weight: 700;
      margin-bottom: 0;
    }

    .setting_detail {
      display: flex;
      flex-direction: column;
      gap: 15px;
      margin-top: 10px;
      h4 {
        font-size: 16px;
        color: #000000;
        font-weight: 700;
      }
      .profile_div {
        background: #fff;
        border: 1px solid #e0e0e0;
        border-radius: 12px;
        padding: 10px;
        display: flex;
        gap: 8px;
        flex-direction: column;
        .profile_cont {
          display: flex;
          gap: 2px;
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
          width: 70px;
        }
        .para {
          font-size: 12px;
          font-weight: 500;
          color: #666666;
          margin-bottom: 0;
        }
      }
    }

    .acc_div {
      margin-top: 20px;
      .heading {
        display: flex;
        gap: 10px;

        svg {
          width: 21px;
          height: 21px;
        }

        h5 {
          font-size: 14px;
          color: rgba(0, 0, 0);
          font-weight: 500;
          margin-top: 3px;
        }
      }

      tr td {
        font-size: 13px;
        color: #777777;
        padding-right: 40px;
      }

      .description {
        font-size: 13px;
        color: #777777;
      }
      .css-1086bdv-MuiPaper-root-MuiAccordion-root {
        box-shadow: unset;
        position: unset;
        border-bottom: 1px solid #d3d3d366;
      }
      .css-1086bdv-MuiPaper-root-MuiAccordion-root::before {
        background-color: #fff;
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
                margin-bottom: 0;
                font-weight: 500;
              }
              p {
                font-size: 12px;
                color: #808080;
                margin-bottom: 0;
              }
            }
          }
          .prod_price {
            h4 {
              font-weight: 500;
              font-size: 14px;
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
    }

    h4 {
      font-weight: 500;
      font-size: 18px;
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

  @media (max-width: 567px) {
    padding: 10px 0px;
    .main_wrapper {
      gap: 0px;
      display: unset;
    }

    .main_wrapper .image_div {
      /* width: 100%; */
      height: unset;
      padding: 5px;
      margin: 10px;
      img {
        width: 90vw;
      }
    }
    .main_wrapper .des_div .prod_spec {
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
    .main_wrapper .ring_size select {
      width: 100%;
    }
    .main_wrapper .des_div {
      width: 100%;
      margin-top: 20px;
      padding: 5px;
    }
    .main_wrapper .setting_detail .diamond_info .setting_div {
      flex: 1;
    }
    .main_wrapper .des_div .prod_spec .spec {
      padding: 0px 14px;
    }
    .main_wrapper .des_div .prod_spec {
      gap: 20px;
    }
    .main_wrapper .des_div .title h2,
    .main_wrapper .des_div .title h4 {
      font-size: 18px;
    }

    .main_wrapper .setting_main_div .subfirst_detail .profile_div .para {
      margin-bottom: 15px;
    }
    .main_wrapper .setting_main_div .subfirst_detail {
      width: 100%;
    }
    .main_wrapper .setting_main_div .subsecond_detail {
      width: 100%;
    }
    .main_wrapper .setting_detail {
      width: 100%;
    }
    .main_wrapper .setting_Stone .sub_stone .head_cont {
      margin-top: 25px;
    }
    .siz_div {
      width: 100%;
    }

    .main_wrapper .policy .policy_type p {
      font-size: 11px;
    }
  }

  /* @media (min-width: 430px) and (max-width: 932px) {
    display:unset;
  } */

  @media (min-width: 567px) and (max-width: 992px) {
    .main_wrapper {
      gap: 0px;
    }

    .main_wrapper .image_div {
      width: 100%;
      height: unset;
      margin: 20px;
      flex: unset;
    }
    .main_wrapper .des_div {
      width: 100%;
      margin-top: 20px;
      padding: 5px;
    }
    .main_wrapper .des_div h2 {
      font-size: 18px;
    }
    .main_wrapper .setting_detail .diamond_info .setting_div {
      flex: 1;
    }
  }
`;
const ImageContainer = styled.div`
  width: 100%;
  height: 100%;

  @media (max-width: 768px) {
  }

  img {
    width: 100%;
    height: 100%;

    @media (max-width: 768px) {
      height: 100%;
    }
  }
`;

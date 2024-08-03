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
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import fourmm from "../../Images/fourmm.png";
import fivemm from "../../Images/fivemm.png";

const materialList = [
  { value: "14ct White Gold", imgUrl: one_four_k_white_gold },
  { value: "14ct Yellow Gold", imgUrl: one_four_k_yellow_gold },
  { value: "14ct Pink Gold", imgUrl: one_four_k_pink_gold },
  { value: "18ct White Gold", imgUrl: one_eight_k_white_gold },
  { value: "18ct Yellow Gold", imgUrl: one_eight_k_yellow_gold },
  { value: "18ct Red", imgUrl: one_eight_k_red },
  { value: "Platinum", imgUrl: Platinum },
];

const styleList = [
  { value: "Solid", imgUrl: solid },
  { value: "Pave", imgUrl: pave },
];

const widthList = [
  { value: "4MM", imgUrl: fourmm },
  { value: "5MM", imgUrl: fivemm },
];

export default function MoreForHimBand() {
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
        setCaratOptions(uniqueCarats);
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
            <h4>Width :{selectedWidth}</h4>
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
                    <p style={{display: "none"}}>{width.value}</p>
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

          <div className="product_btn">
            <button className="btn" >
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
                  <h5>Wedding Band Details</h5>
                </div>
              </AccordionSummary>

              <AccordionDetails>
                <div className="heading">
                  <h5>Details </h5>
                </div>
                <table>
                  <tr>
                    <td>SKU</td>
                    <td>235Q-WB-4-WG-14</td>
                  </tr>
                  <tr>
                    <td>Width</td>
                    <td>4.0mm</td>
                  </tr>
                  <tr>
                    <td>Material</td>
                    <td>14k White Gold</td>
                  </tr>

                  <tr>
                    <td>Width</td>
                    <td>4MM</td>
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
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.1729 13.81L19.5576 10.1576H15.1729V6.15759H3.17285V17.1576H5.04285C5.1528 17.6047 5.40949 18.0021 5.77188 18.2862C6.13427 18.5703 6.58144 18.7246 7.0419 18.7246C7.50236 18.7246 7.94953 18.5703 8.31192 18.2862C8.67431 18.0021 8.931 17.6047 9.04095 17.1576H15.7431C15.8521 17.5865 16.101 17.9668 16.4504 18.2385C16.7998 18.5101 17.2297 18.6576 17.6723 18.6576C18.1148 18.6576 18.5447 18.5101 18.8941 18.2385C19.2435 17.9668 19.4924 17.5865 19.6015 17.1576H21.1726L21.1729 13.81ZM7.04215 17.7241C6.83114 17.7241 6.62486 17.6615 6.44941 17.5443C6.27396 17.4271 6.13722 17.2604 6.05646 17.0655C5.97571 16.8705 5.95459 16.656 5.99575 16.4491C6.03692 16.2421 6.13853 16.052 6.28774 15.9028C6.43695 15.7536 6.62705 15.652 6.83401 15.6108C7.04097 15.5696 7.25549 15.5908 7.45044 15.6715C7.64539 15.7523 7.81201 15.889 7.92925 16.0645C8.04648 16.2399 8.10905 16.4462 8.10905 16.6572C8.10871 16.94 7.99619 17.2112 7.79618 17.4112C7.59618 17.6112 7.32501 17.7237 7.04215 17.7241V17.7241ZM14.1729 16.1572H9.04125C8.9313 15.7101 8.67461 15.3127 8.31222 15.0286C7.94983 14.7445 7.50266 14.5902 7.0422 14.5902C6.58174 14.5902 6.13457 14.7445 5.77218 15.0286C5.40979 15.3127 5.1531 15.7101 5.04315 16.1572H4.17315V7.15719H14.1732V16.1572H14.1729ZM17.6729 17.6572C17.4751 17.6572 17.2817 17.5985 17.1173 17.4887C16.9528 17.3788 16.8247 17.2226 16.749 17.0399C16.6733 16.8571 16.6535 16.6561 16.6921 16.4621C16.7307 16.2681 16.8259 16.0899 16.9657 15.9501C17.1056 15.8102 17.2838 15.715 17.4778 15.6764C17.6717 15.6378 17.8728 15.6576 18.0555 15.7333C18.2383 15.809 18.3944 15.9372 18.5043 16.1016C18.6142 16.2661 18.6729 16.4594 18.6729 16.6572C18.6726 16.9224 18.5671 17.1766 18.3795 17.3641C18.192 17.5516 17.9377 17.657 17.6726 17.6572H17.6729ZM20.1729 16.1572H19.6018C19.4927 15.7283 19.2438 15.348 18.8944 15.0763C18.545 14.8047 18.1151 14.6572 17.6726 14.6572C17.23 14.6572 16.8001 14.8047 16.4507 15.0763C16.1013 15.348 15.8524 15.7283 15.7434 16.1572H15.1734V11.1572H18.915L20.1729 13.918V16.1572ZM16.0229 12.1572H18.1729L16.0229 13.7119V12.1572ZM5.49625 8.44849H12.7842V13.9143L11.5331 9.65589L5.49625 8.44849Z"
                      fill="currentColor"
                    ></path>
                  </svg>
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
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.0274 16.6169L8.65655 13.6249L10.3598 11.9214L10.0339 13.3685L12.0274 16.6169ZM12.7684 19.0977L12.7253 19.0712L12.3422 19.4112L5.74225 13.5528L9.07735 10.2176H15.6131L18.9481 13.5528L18.9374 13.5628L12.8558 18.9556L12.7684 19.0977ZM15.1984 11.2177H14.1819L16.2019 13.5092L14.6598 16.019L17.4904 13.509L15.1984 11.2177ZM7.19985 13.5092L12.2661 18.0061L14.9639 13.6161L12.8486 11.2172H9.49145L7.19985 13.5092ZM20.9898 12.5132C20.7546 11.971 20.4253 11.4748 20.0171 11.0474L17.8235 8.69469C17.3977 8.20898 16.8432 7.85349 16.224 7.66919C15.914 7.57973 15.5933 7.53228 15.2706 7.52809L14.4698 7.49809L11.2666 7.37599L6.11415 7.17999L6.75715 4.95999L2.57715 8.10739L6.75715 11.2549L6.13985 9.09789L11.2577 8.95999L14.4622 8.87399L15.2632 8.85249C15.4751 8.83882 15.6879 8.85481 15.8953 8.89999C16.3146 8.995 16.6963 9.21182 16.9926 9.52319L19.3135 11.7177C20.0235 12.4149 20.6215 13.2733 20.1894 14.0389C19.5808 14.858 18.8593 15.5869 18.0464 16.2039L15.7198 18.2709L15.6236 18.3563C15.5937 18.3829 15.574 18.419 15.5677 18.4586C15.5615 18.4981 15.5691 18.5386 15.5894 18.5731C15.6097 18.6076 15.6413 18.634 15.6789 18.6478C15.7165 18.6616 15.7577 18.662 15.7954 18.6488C15.8534 18.6294 15.9077 18.6006 15.9561 18.5634L16.0426 18.5017L16.2063 18.3802L16.5263 18.1357L17.1605 17.6433L18.4227 16.655L19.685 15.6697C20.1589 15.3287 20.564 14.9012 20.8789 14.4097C21.0466 14.1236 21.1441 13.802 21.1635 13.471C21.1711 13.1433 21.112 12.8174 20.9898 12.5132V12.5132Z"
                      fill="currentColor"
                    ></path>
                  </svg>
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
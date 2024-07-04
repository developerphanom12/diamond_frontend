import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BsQuestionCircleFill } from "react-icons/bs";
import Slider from "@mui/material/Slider";
import Section4 from "./Section4";
import "react-modern-drawer/dist/index.css";
import Drawer from "react-modern-drawer";
import { useDispatch } from "react-redux";
import { IoFilterOutline } from "react-icons/io5";
import {
  setDiamondIds,
  setDiamondType,
  setSelectedShapeImage,
} from "../../redux/users/action";
import ROUND from "../Images/round-removebg-preview.png";
import EMERALD from "../Images/emerald-removebg-preview.png";
import HEART from "../Images/heart-removebg-preview.png";
import MARQUISE from "../Images/Marquise-removebg-preview.png";
import OVAL from "../Images/oval-removebg-preview.png";
import PEAR from "../Images/Pear-removebg-preview.png";
import PRINCESS from "../Images/Princess-removebg-preview.png";
import RADIANT from "../Images/Radiant-removebg-preview.png";
import CUSHION from "../Images/cushionremovebg.png";
import ASSCHER from "../Images/ECusion-removebg-preview.png";
import { useLocation } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import { IoIosArrowUp } from "react-icons/io";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { EXCHANGE_URLS } from "../URLS";
import { useLoading } from "../LoadingContext";

const shapesList = [
  { name: "ROUND", imgUrl: ROUND },
  { name: "PRINCESS", imgUrl: PRINCESS },
  { name: "OVAL", imgUrl: OVAL },
  { name: "EMERALD", imgUrl: EMERALD },
  { name: "PEAR", imgUrl: PEAR },
  { name: "HEART", imgUrl: HEART },
  { name: "MARQUISE", imgUrl: MARQUISE },
  { name: "CUSHION", imgUrl: CUSHION },
  { name: "ASSCHER", imgUrl: ASSCHER },
  { name: "RADIANT", imgUrl: RADIANT },
];

const colorOptions = ["D", "E", "F", "G", "H", "I", "J"];
const clarityOptions = [
  "FL",
  "IF",
  "VVS1",
  "VVS2",
  "VS1",
  "VS2",
  "I2",
  "SI2",
  "SI1",
];
const cutOptions = ["GD", "VG", "EX"];
const polishOptions = ["GD", "VG", "EX"];
const symmetryOptions = ["GD", "VG", "EX"];

export default function Section2() {
  const [selectedShapes, setSelectedShapes] = useState(["ROUND"]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedClarity, setSelectedClarity] = useState([]);
  const [caratRange, setCaratRange] = useState([0.5, 11.5]);
  const minCarat = caratRange[0];
  const maxCarat = caratRange[1];
  const [selectedCut, setSelectedCut] = useState([]);
  const [selectedCarat, setSelectedCarat] = useState([]);
  const [selectedBudget, setSelectedBudget] = useState([]);
  const [selectedCertificate, setSelectedCertificate] = useState({
    1: false,
    2: false,
  });
  const [selectedPolish, setSelectedPolish] = useState([]);
  const [selectedSymmetry, setSelectedSymmetry] = useState([]);
  const [mincount, setminCount] = useState(181);
  const [maxcount, setmaxCount] = useState(502086918);
  const [value, setValue] = useState([]);
  const { setLoading } = useLoading();
  const dispatch = useDispatch();
  const { state } = useLocation();
  const typelabgrown = state ? state.labgrownValue : false;
  const diamondApi = async (params) => {
    setLoading(true);
    try {
      const query = new URLSearchParams();

      if (params.selectedShapes.length)
        query.append("shapes", params.selectedShapes.join(","));
      query.append("typelabgrown", params.typelabgrown);
      if (params.selectedColors.length)
        query.append("color", params.selectedColors.join(","));
      if (params.selectedClarity.length)
        query.append("clarity", params.selectedClarity.join(","));
      if (params.selectedCut.length)
        query.append("cut", params.selectedCut.join(","));
      if (params.selectedPolish.length)
        query.append("polish", params.selectedPolish.join(","));
      if (params.selectedSymmetry.length)
        query.append("symmetry", params.selectedSymmetry.join(","));
      if (minCarat !== undefined && minCarat !== null)
        query.append("minPrice", minCarat);
      if (maxCarat !== undefined && maxCarat !== null)
        query.append("maxPrice", maxCarat);

      // If any optional parameters are needed, add them here
      // if (params.selectedCarat.length) query.append('carat', params.selectedCarat.join(','));
      // if (params.selectedBudget.length) query.append('Budget', params.selectedBudget.join(','));
      // const selectedCertificate = Object.keys(params.selectedCertificate)
      //   .filter((key) => params.selectedCertificate[key])
      //   .join(',');
      // if (selectedCertificate) query.append('lab', selectedCertificate);

      const queryString = query.toString();
      const resp = await axios.get(
        `${EXCHANGE_URLS}/nivodafilter?${queryString}`
      );

      if (resp?.status === 200) {
        setValue(resp?.data?.items);
        const diamondIds = resp.data.items.map((item) => item);
        dispatch(setDiamondIds(diamondIds));
      }
    } catch (err) {
      console.error("err", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (typelabgrown) {
      dispatch(setDiamondType(typelabgrown));
    }

    const params = {
      typelabgrown,
      selectedShapes,
      selectedColors,
      selectedClarity,
      selectedCut,
      selectedPolish,
      selectedSymmetry,
      caratRange,
    };

    diamondApi(params);
  }, [
    selectedShapes,
    selectedColors,
    selectedClarity,
    selectedCut,
    selectedPolish,
    selectedSymmetry,
    typelabgrown,
    caratRange,
    dispatch,
  ]);

  const handleShapeClick = (shapeName, shapeImageUrl) => {
    dispatch(setSelectedShapeImage(shapeImageUrl));
    setSelectedShapes([shapeName]); // Set the selected shape
  };

  const handleColorClick = (color) => {
    setSelectedColors((prevColors) =>
      prevColors.includes(color)
        ? prevColors.filter((c) => c !== color)
        : [...prevColors, color]
    );
  };

  const handleButtonClarity = (clarity) => {
    setSelectedClarity((prevClarity) =>
      prevClarity.includes(clarity)
        ? prevClarity.filter((c) => c !== clarity)
        : [...prevClarity, clarity]
    );
  };

  const handleButtonCut = (cut) => {
    setSelectedCut((prevCut) =>
      prevCut.includes(cut)
        ? prevCut.filter((c) => c !== cut)
        : [...prevCut, cut]
    );
  };

  const handleButtonPolish = (polish) => {
    setSelectedPolish((prevPolish) =>
      prevPolish.includes(polish)
        ? prevPolish.filter((p) => p !== polish)
        : [...prevPolish, polish]
    );
  };

  const handleButtonSymmetry = (symmetry) => {
    setSelectedSymmetry((prevSymmetry) =>
      prevSymmetry.includes(symmetry)
        ? prevSymmetry.filter((s) => s !== symmetry)
        : [...prevSymmetry, symmetry]
    );
  };

  const handleButtonCertificate = (index) => {
    setSelectedCertificate((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const minincrement = () => {
    setminCount(mincount + 2100);
  };

  const mindecrement = () => {
    setminCount(mincount - 2100);
  };

  const formatNumber = (number) => {
    return number.toLocaleString();
  };

  const maxincrement = () => {
    setmaxCount(maxcount + 2100);
  };

  const maxdecrement = () => {
    setmaxCount(maxcount - 2100);
  };

  const handleChangeCarat = (event, newValue) => {
    setCaratRange(newValue);
  };

  const increaseMinimum = () => {
    const newMin = Math.min(caratRange[0] + 0.1, caratRange[1]);
    setCaratRange([newMin, caratRange[1]]);
  };

  const decreaseMinimum = () => {
    const newMin = Math.max(caratRange[0] - 0.1, 0.1);
    setCaratRange([newMin, caratRange[1]]);
  };

  const increaseMaximum = () => {
    const newMax = Math.min(caratRange[1] + 0.1, 11.5);
    setCaratRange([caratRange[0], newMax]);
  };

  const decreaseMaximum = () => {
    const newMax = Math.max(caratRange[1] - 0.1, caratRange[0]);
    setCaratRange([caratRange[0], newMax]);
  };
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
  const drawerContent = (
    <>
      <div className="ring_types mt-4">
        {shapesList.map((shape) => (
          <button
            key={shape.name}
            className={`btn_shapes ${
              selectedShapes.includes(shape.name) ? "selected" : ""
            }`}
            onClick={() => handleShapeClick(shape.name, shape.imgUrl)}
          >
            <img src={shape.imgUrl} alt={shape.name} />
            {shape.name}
          </button>
        ))}
      </div>
      <div className="section3">
        <div className="variation">
          <div className="var_kind">
            <div className="head_icon">
              <h5>Color</h5>
              <BsQuestionCircleFill />
            </div>
            <section>
              {colorOptions.map((color) => (
                <button
                  key={color}
                  className={`btn_icons ${
                    selectedColors.includes(color) ? "selected" : ""
                  }`}
                  onClick={() => handleColorClick(color)}
                >
                  {color}
                </button>
              ))}
            </section>
          </div>
          <div className="var_kind">
            <div className="head_icon">
              <h5>Clarity</h5>
              <BsQuestionCircleFill />
            </div>
            <section>
              {clarityOptions.map((clarity) => (
                <button
                  key={clarity}
                  className={`btn_icons ${
                    selectedClarity.includes(clarity) ? "selected" : ""
                  }`}
                  onClick={() => handleButtonClarity(clarity)}
                >
                  {clarity}
                </button>
              ))}
            </section>
          </div>
          <div className="var_kind">
            <div className="head_icon">
              <h5>Cut</h5>
              <BsQuestionCircleFill />
            </div>
            <section>
              {cutOptions.map((cut) => (
                <button
                  key={cut}
                  className={`btn_icons ${
                    selectedCut.includes(cut) ? "selected" : ""
                  }`}
                  onClick={() => handleButtonCut(cut)}
                >
                  {cut}
                </button>
              ))}
            </section>
          </div>
        </div>
        <div className="carat_budget_certificate">
          <div className="carat_div">
            <h5>Carat</h5>
            <Slider
              value={caratRange}
              onChange={handleChangeCarat}
              valueLabelDisplay="auto"
              disableSwap
              min={0.5}
              max={11.5}
              step={0.1}
            />
            <div className="carat_value_div">
              <div className="carat_min_max_div">
                <div className="value">
                  <p>{caratRange[0]}</p>
                  <h6>Minimum</h6>
                </div>
                <div className="carat_btn_div">
                  <button onClick={increaseMinimum}>
                    <IoIosArrowUp />
                  </button>
                  <button onClick={decreaseMinimum}>
                    <IoIosArrowDown />
                  </button>
                </div>
              </div>
              <hr />
              <div className="carat_min_max_div">
                <div className="value">
                  <p>{caratRange[1]}</p>
                  <h6>Maximum</h6>
                </div>
                <div className="carat_btn_div">
                  <button onClick={increaseMaximum}>
                    <IoIosArrowUp />
                  </button>
                  <button onClick={decreaseMaximum}>
                    <IoIosArrowDown />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="budget_div">
            <h5>Budget</h5>
            <div className="budget_value_div">
              <div className="min_max_div">
                <div className="value_div">
                  <h6>Minimum</h6>
                  <p>${formatNumber(mincount)}</p>
                </div>
                <div className="btn_div">
                  <button>
                    <IoIosArrowUp onClick={minincrement} />
                  </button>
                  <button>
                    <IoIosArrowDown onClick={mindecrement} />
                  </button>
                </div>
              </div>
              <hr />
              <div className="min_max_div">
                <div className="value_div">
                  <h6>Maximum</h6>
                  <p>${formatNumber(maxcount)}</p>
                </div>
                <div className="btn_div">
                  <button>
                    <IoIosArrowUp onClick={maxincrement} />
                  </button>
                  <button>
                    <IoIosArrowDown onClick={maxdecrement} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carat_budget_certificate">
          <div className="certificate_div">
            <h5> Lab Certificate</h5>
            <div className="btn">
              <button
                className={selectedCertificate[1] ? "selected" : ""}
                onClick={() => handleButtonCertificate(1)}
              >
                IGI
              </button>
              <button
                className={selectedCertificate[2] ? "selected" : ""}
                onClick={() => handleButtonCertificate(2)}
              >
                GIA
              </button>
              <button
                className={selectedCertificate[3] ? "selected" : ""}
                onClick={() => handleButtonCertificate(3)}
              >
                HRD
              </button>
            </div>
          </div>
        </div>

        <div className="advance_quality">
          <Accordion>
            <AccordionSummary
              expandIcon={<FaPlus />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography className="quality_content">
                Advanced Quality Specs
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <div className="symmetry_polish_div">
                  <div className="symmetry_var_kind">
                    <div className="symmetry_head_icon">
                      <h5>Symmetry</h5>
                    </div>
                    <section>
                      {symmetryOptions.map((symmetry) => (
                        <button
                          key={symmetry}
                          className={`btn_icons ${
                            selectedSymmetry.includes(symmetry)
                              ? "selected"
                              : ""
                          }`}
                          onClick={() => handleButtonSymmetry(symmetry)}
                        >
                          {symmetry}
                        </button>
                      ))}
                    </section>
                  </div>
                  <div className="symmetry_var_kind">
                    <div className="symmetry_head_icon">
                      <h5>Polish</h5>
                    </div>
                    <section>
                      {polishOptions.map((polish) => (
                        <button
                          key={polish}
                          className={`btn_icons ${
                            selectedPolish.includes(polish) ? "selected" : ""
                          }`}
                          onClick={() => handleButtonPolish(polish)}
                        >
                          {polish}
                        </button>
                      ))}
                    </section>
                  </div>
                </div>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </>
  );

  return (
    <Root>
      <button className="drawer-toggle-button" onClick={toggleDrawer}>
        <IoFilterOutline /> Filter
      </button>
      <div
        className={`drawer-content ${
          isOpen && screenWidth <= 876 ? "open" : ""
        }`}
      >
        {screenWidth > 876 ? (
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

      <Section4 value={value} />
    </Root>
  );
}
const Root = styled.section`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: 0px 10px;
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
  @media (min-width: 877px) {
    .drawer-toggle-button {
      display: none;
    }
    .drawer-content {
      display: block;
    }
  }
  .EZDrawer__container {
    overflow-y: scroll !important;
    height: 350px !important;
    border-top-right-radius: 25px !important;
    border-top-left-radius: 25px !important;
    padding-bottom: 40px;
  }

  @media (max-width: 876px) {
    .drawer-toggle-button {
      display: block;
    }
    .drawer-content {
      /* display: none; */
      .ring_types {
        justify-content: left;
        gap: 4px;
        margin: 0px 10px;
        width: 100%;
        .btn_shapes {
          width: 93px !important;
          border: 1px solid #d1d1d1;
          background-color: rgba(247, 247, 247);
          padding: 12px 42px;
        }
      }
    }
  }
  img {
    width: 45px;
    height: 45px;
  }
  .ring_types {
    display: flex;
    width: 100%;
    overflow-x: auto;
    justify-content: center;
    gap: 20px;

    .btn_shapes {
      width: 93px !important;
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
    }
  }
  .section3 {
    padding: 0 20px;
    width: 100%;

    .variation {
      display: flex;
      flex-wrap: wrap;
      margin-top: 40px;
      gap: 40px;

      .var_kind {
        flex: 1;

        .head_icon {
          display: flex;
          align-items: center;
          gap: 5px;

          h5 {
            font-size: 15px;
            font-weight: 600;
            color: #000;
          }
          svg {
            height: 14px;
            margin-top: -9px;
            color: #d7d4d4;
          }
        }
        section {
          display: flex;
          padding: 0;
          background-color: rgba(247, 247, 247, 1);
          border: 0.3px solid #d1d1d1;
          border-radius: 7px;

          button {
            border: none;
            flex: 1;
            padding: 10px 0;
            font-size: 14px;
            background-color: transparent;
            font-weight: 600;
            color: #7e7676;
            &.selected {
              border: 2px solid black;
              background-color: #fff;
              border-radius: 7px;
            }
          }
        }
      }
    }

    .carat_budget_certificate {
      display: flex;
      margin-top: 20px;
      flex-wrap: wrap;
      justify-content: space-between;
      .carat_div {
        display: flex;
        flex-direction: column;
        width: 35vw;
        h5 {
          font-size: 15px;
          font-weight: 600;
          color: #000;
          margin-bottom: 0;
          width: 100%;
        }

        .css-188mx6n-MuiSlider-root {
          color: #000000;
          padding: 9px 0;
        }

        .css-188mx6n-MuiSlider-root {
          height: 2px;
        }

        .carat_value_div {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          .carat_min_max_div {
            border: 1px solid #ededed;
            height: 40px;
            border-radius: 5px;
            display: flex;
            width: 40%;
            margin: 10px 0px;
            .value {
              width: 100%;
              padding: 6px;
              display: flex;
              justify-content: space-between;
              align-items: center;
              gap: 10px;
              h6 {
                color: rgba(102, 102, 102);
                margin-bottom: 0;
                font-size: 10px;
              }
              p {
                color: #000000;
                font-size: 13px;
                margin: 0;
              }
            }
            .carat_btn_div {
              /* width: 20%; */
              display: flex;
              flex-direction: column;
              align-items: flex-end;
              button {
                border: 1px solid #ededed;
                background-color: transparent;
                height: 19px;
                padding: 0;
                display: flex;
                justify-content: center;
                svg {
                  color: #7e7676;
                }
              }
            }
          }
          hr {
            width: 57px;
            color: #bbb5b5;
          }
        }
      }

      .budget_div {
        display: flex;
        flex-direction: column;
        width: 35vw;
        h5 {
          font-size: 15px;
          font-weight: 600;
          color: #000;
        }
        .budget_value_div {
          display: flex;
          align-items: center;
          width: 100%;
          .min_max_div {
            border: 1px solid #ededed;
            height: 55px;
            width: 40%;
            margin-top: 10px;
            border-radius: 5px;
            display: flex;
            justify-content: space-between;
            .value_div {
              padding: 6px;
              h6 {
                color: rgba(102, 102, 102);
                margin-bottom: 14px;
                font-size: 10px;
              }
              p {
                color: #000000;
                font-size: 13px;
                margin: 2px;
              }
            }
            .btn_div {
              display: flex;
              flex-direction: column;
              button {
                border: 1px solid #ededed;
                background-color: transparent;
                width: 27px;
                height: 27px;
                font-weight: 600;
                color: #7e7676;
                svg {
                  color: #7e7676;
                }
              }
            }
          }
          hr {
            width: 57px;
            color: #bbb5b5;
          }
        }
      }

      .certificate_div {
        display: flex;
        flex-direction: column;
        flex: 1;
        h5 {
          font-size: 15px;
          font-weight: 600;
          color: #000;
        }
        .btn {
          display: flex;
          gap: 20px;
          padding: 0;
          border: none;
          button {
            background-color: rgba(247, 247, 247, 1);
            border: 0.3px solid #d1d1d1;
            border-radius: 7px;
            width: 100px;
            padding: 20px 0;
            font-size: 14px;
            font-weight: 600;
            color: #7e7676;

            &.selected {
              border: 2px solid black;
              background-color: #fff;
              border-radius: 7px;
            }
          }
        }
      }
    }

    .advance_quality {
      /* border-top:1px solid black; */
      margin-top: 30px;

      .css-1086bdv-MuiPaper-root-MuiAccordion-root {
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
      }

      .quality_content {
        font-size: 13px;
        font-weight: 700;
        color: #000000;
      }

      .img,
      svg {
        color: black;
        height: 13px;
      }

      .symmetry_polish_div {
        display: flex;
        gap: 40px;
        .symmetry_var_kind {
          flex: 1;

          .symmetry_head_icon {
            display: flex;
            align-items: center;
            gap: 5px;

            h5 {
              font-size: 15px;
              font-weight: 600;
              color: #000;
            }
            svg {
              /* color:#e9e4e4; */
              height: 14px;
              margin-top: -9px;
              color: #d7d4d4;
            }
          }

          section {
            display: flex;
            padding: 0;
            background-color: rgba(247, 247, 247, 1);
            border: 0.3px solid #d1d1d1;
            border-radius: 7px;
            button {
              flex: 1;
              border: none;
              padding: 10px 0;
              font-size: 14px;
              background-color: transparent;
              font-weight: 600;
              color: #7e7676;
              &.selected {
                border: 2px solid black;
                background-color: #fff;
                border-radius: 7px;
              }
            }
          }
        }
      }

      .css-eqpfi5-MuiAccordionSummary-content {
        -webkit-flex-grow: unset;
        flex-grow: unset;
      }

      .css-yw020d-MuiAccordionSummary-expandIconWrapper.Mui-expanded {
        transform: rotate(128deg);
      }

      .css-1f773le-MuiButtonBase-root-MuiAccordionSummary-root {
        gap: 4px;
      }
    }
  }

  @media only screen and (max-width: 567px) {
    .section3 .variation {
      gap: 30px;
    }

    .section3 .variation .var_kind {
      width: 100%;
      flex: unset;
    }

    .section3 .carat_budget_certificate .carat_div {
      gap: 15px;
      width: 100%;
    }

    .section3 .carat_budget_certificate .budget_div {
      flex: unset;
      width: 100%;
    }

    .section3 .carat_budget_certificate .budget_div .budget_value_div {
      justify-content: center;
    }

    .section3 .carat_budget_certificate .certificate_div {
      flex: unset;
      width: 100%;
    }

    .symmetry_polish_div {
      flex-direction: column;
    }
    .section3 .carat_budget_certificate .certificate_div .btn button {
      width: 50vw;
      padding: 10px 0px;
    }

    /* .main_div .subdiv {
      width: 373px;
    }

    .main_div .subdiv:hover .hov_content {
      width: 373px;
    } */
  }
  span.MuiSlider-thumb.MuiSlider-thumbSizeMedium.MuiSlider-thumbColorPrimary.MuiSlider-thumb.MuiSlider-thumbSizeMedium.MuiSlider-thumbColorPrimary.css-cp2j25-MuiSlider-thumb {
    color: white;
    border: 2px solid black;
  }
`;

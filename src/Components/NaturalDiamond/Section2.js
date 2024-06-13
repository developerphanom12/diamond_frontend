import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BsQuestionCircleFill } from "react-icons/bs";
import Slider from "@mui/material/Slider";
import Section4 from "./Section4";
import { useDispatch } from "react-redux";
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
import ECUSHION from "../Images/ECusion-removebg-preview.png";
import { useLocation } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import { IoIosArrowUp } from "react-icons/io";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { EXCHANGE_URLS } from "../URLS";

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

const colorOptions = ["J", "I", "H", "G", "F", "E", "D"];
const clarityOptions = ["SI1", "I2", "VS2", "VS1", "VVS2", "VVS1", "IF", "FL"];
const cutOptions = ["GD", "VG", "EX"];
const polishOptions = ["GD", "VG", "EX"];
const symmetryOptions = ["GD", "VG", "EX"];

function valuetext(value) {
  return `${value}°C`;
}

const minDistance = 0.5;

export default function Section2() {
  const [selectedShapes, setSelectedShapes] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedClarity, setSelectedClarity] = useState([]);
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
  const [maxcount, setmaxCount] = useState(2086918);
  const [value1, setValue1] = React.useState([0.5, 11.5]);
  const [value, setValue] = useState([]);

  const dispatch = useDispatch();
  const { state } = useLocation();
  const typelabgrown = state ? state.labgrownValue : false;

  useEffect(() => {
    if (typelabgrown) {
      dispatch(setDiamondType(typelabgrown));
    }

    const diamondApi = async () => {
      try {
        const shapesParam = selectedShapes.join(",");
        const colors = selectedColors.join(",");
        const clarity = selectedClarity.join(",");
        const cut = selectedCut.join(",");
        // const carat = selectedCarat.join(",");
        // const Budget = selectedBudget.join(",");
        // const lab = Object.keys(selectedCertificate).filter(
        //   (key) => selectedCertificate[key]
        // ).join(",");
        const polish = selectedPolish.join(",");
        const symmetry = selectedSymmetry.join(",");
        //&carat=${carat}&Budget=${Budget}&lab=${lab}
        const resp = await axios.get(
          `${EXCHANGE_URLS}/nivodafilter?shapes=${shapesParam}&typelabgrown=${typelabgrown}&color=${colors}&clarity=${clarity}&cut=${cut}&polish=${polish}&symmetry=${symmetry}`
        );
        if (resp?.status === 200) {
          setValue(resp?.data?.items);
          console.log("diaaa", resp?.data?.items);
          const diamondIds = resp.data.items.map((item) => item);
          dispatch(setDiamondIds(diamondIds));
          console.log("diamondids", diamondIds);
        }
      } catch (err) {
        console.error("err", err);
      }
    };

    diamondApi();
  }, [
    selectedShapes,
    selectedColors,
    selectedClarity,
    selectedCut,
    // selectedCarat,
    // selectedBudget,
    // selectedCertificate,
    selectedPolish,
    selectedSymmetry,
    dispatch,
    typelabgrown,
  ]);

  const handleShapeClick = (shapeName, shapeImageUrl) => {
    dispatch(setSelectedShapeImage(shapeImageUrl));
    setSelectedShapes((prevShapes) =>
      prevShapes.includes(shapeName)
        ? prevShapes.filter((s) => s !== shapeName)
        : [...prevShapes, shapeName]
    );
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

  const handleButtonSymmetry = (symmetry) => {
    setSelectedSymmetry((prevSymmetry) =>
      prevSymmetry.includes(symmetry)
        ? prevSymmetry.filter((s) => s !== symmetry)
        : [...prevSymmetry, symmetry]
    );
  };

  const handleButtonPolish = (polish) => {
    setSelectedPolish((prevPolish) =>
      prevPolish.includes(polish)
        ? prevPolish.filter((p) => p !== polish)
        : [...prevPolish, polish]
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

  const handleChange1 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }
    if (activeThumb === 0) {
      setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
    } else {
      setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
    }
  };

  const increaseMinimum = () => {
    const newValue = [value1[0] + 1, value1[1]];
    setValue1(newValue);
  };

  const decreaseMinimum = () => {
    const newValue = [value1[0] - 1, value1[1]];
    setValue1(newValue);
  };

  const increaseMaximum = () => {
    const newValue = [value1[0], value1[1] + 1];
    setValue1(newValue);
  };

  const decreaseMaximum = () => {
    const newValue = [value1[0], value1[1] - 1];
    setValue1(newValue);
  };
  return (
    <Root>
      <div className="ring_types mt-4">
        {shapesList.map((shape) => (
          <button
            key={shape.name}
            className={selectedShapes.includes(shape.name) ? "selected" : ""}
            onClick={() => handleShapeClick(shape.name, shape.imgUrl)}
          >
            {shape.name}
            <img src={shape.imgUrl} alt={shape.name} />
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
              {colorOptions.map((color, index) => (
                <button
                  key={index}
                  className={selectedColors.includes(color) ? "selected" : ""}
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
              {clarityOptions.map((clarity, index) => (
                <button
                  key={index}
                  className={
                    selectedClarity.includes(clarity) ? "selected" : ""
                  }
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
              {cutOptions.map((cut, index) => (
                <button
                  key={index}
                  className={selectedCut.includes(cut) ? "selected" : ""}
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
              getAriaLabel={() => "Minimum distance"}
              value={value1}
              onChange={handleChange1}
              valueLabelDisplay="auto"
              getAriaValueText={valuetext}
              disableSwap
            />
            <div className="carat_value_div">
              <div className="carat_min_max_div">
                <div className="value">
                  <p>{value1[0]}</p>
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
                  <p>{value1[1]}</p>
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
                  <div className=" symmetry_var_kind">
                    <div className="symmetry_head_icon">
                      <h5>Symmetry</h5>
                    </div>

                    <section>
                      {symmetryOptions.map((symm, index) => (
                        <button
                          key={index}
                          className={
                            selectedSymmetry.includes(symm) ? "selected" : ""
                          }
                          onClick={() => handleButtonSymmetry(symm)}
                        >
                          {symm}
                        </button>
                      ))}
                    </section>
                  </div>
                  <div className=" symmetry_var_kind">
                    <div className="symmetry_head_icon">
                      <h5>Polish</h5>
                    </div>

                    <section>
                      {polishOptions.map((polish, index) => (
                        <button
                          key={index}
                          className={
                            selectedPolish.includes(polish) ? "selected" : ""
                          }
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
      <Section4 value={value} />
    </Root>
  );
}
const Root = styled.section`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  img {
    width: 52px;
    height: 52px;
  }
  .ring_types {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    button {
      width: 104px;
      border: 2px solid transparent;
      background: #fff;
      display: flex;
      flex-direction: column;
      justify-content: center;
      border-radius: 10px;
      align-items: center;
      padding: 12px 0;

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
            font-size: 17px;
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
          button {
            border: 2px solid transparent;
            flex: 1;
            padding: 10px 0;
            font-size: 14px;
            &.selected {
              border: 2px solid black;
              background-color: #fff;
              border-radius: 10px;
            }
          }
        }
      }
    }

    .carat_budget_certificate {
      display: flex;
      gap: 30px;
      margin-top: 40px;
      flex-wrap: wrap;

      .carat_div {
        display: flex;
        flex-direction: column;
        flex: 1;
        h5 {
          font-size: 17px;
          margin-bottom: 0;
        }

        .css-188mx6n-MuiSlider-root {
          color: #000000;
          padding: 9px 0;
        }

        .css-188mx6n-MuiSlider-root {
          height: 2px;
        }

        .carat_value_div {
          display: flex;
          justify-content: center;
          align-items: center;
          .carat_min_max_div {
            border: 1px solid #ededed;
            height: 40px;
            /* width: 45%; */
            border-radius: 5px;
            display: flex;
            .value {
              /* width: 80%; */
              padding: 6px;
              display: flex;
              justify-content: space-between;
              align-items: center;
              gap: 10px;
              h6 {
                color: rgba(102, 102, 102);
                margin-bottom: 0;
                font-size: 12px;
              }
              p {
                color: #000000;
                font-size: 16px;
                margin: 0;
              }
            }
            .carat_btn_div {
              /* width: 20%; */
              display: flex;
              flex-direction: column;
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
        flex: 1;

        h5 {
          font-size: 17px;
        }
        .budget_value_div {
          display: flex;
          /* justify-content: center; */
          align-items: center;
          .min_max_div {
            border: 1px solid #ededed;
            height: 56px;
            /* width: 45%;/ */
            border-radius: 5px;
            display: flex;
            .value_div {
              /* width: 80%; */
              padding: 6px;
              h6 {
                color: rgba(102, 102, 102);
                margin-bottom: 0;
                font-size: 12px;
              }
              p {
                color: #000000;
                font-size: 16px;
                margin-top: 9px;
              }
            }
            .btn_div {
              /* width: 20%; */
              display: flex;
              flex-direction: column;
              button {
                border: 1px solid #ededed;
                background-color: transparent;
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
        /* width: 20%;/ */
        display: flex;
        flex-direction: column;
        flex: 1;
        h5 {
          font-size: 17px;
        }
        .btn {
          display: flex;
          gap: 20px;
          padding: 0;
          border: none;
          button {
            border: 2px solid transparent;
            flex: 1;
            padding: 15px 0;
            font-size: 14px;
            border-radius: 5px;
            &.selected {
              border: 2px solid black;
              background-color: #fff;
              border-radius: 10px;
            }
          }
        }
      }
    }

    /* .select_div {
      display: flex;
      justify-content: end;
      margin-top: 20px;

      select {
        background-color: rgba(247, 247, 247);
        border-radius: 0.375rem;
        font-size: 14px;
        padding: 10px 10px;
        border: 1px solid transparent;
      }
    } */

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
              font-size: 17px;
              font-weight: 600;
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
            button {
              border: 2px solid transparent;
              flex: 1;
              padding: 10px 0;
              font-size: 14px;
              &.selected {
                border: 2px solid black;
                background-color: #fff;
                border-radius: 10px;
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

    /* .main_div .subdiv {
      width: 373px;
    }

    .main_div .subdiv:hover .hov_content {
      width: 373px;
    } */
  }
`;

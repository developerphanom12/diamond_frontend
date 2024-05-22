import React, { useState } from "react";
import styled from "styled-components";
import { BsQuestionCircleFill } from "react-icons/bs";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { IoIosArrowDown } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import { IoIosArrowUp } from "react-icons/io";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

function valuetext(value) {
  return `${value}°C`;
}

const minDistance = 10;

export default function Section3() {
  const [selectedButton, setSelectedButton] = useState(1);
  const [selectedClarity, setSelectedClarity] = useState(1);
  const [selectedCut, setSelectedCut] = useState(1);
  const [selectedSymmetry, setSelectedSymmetry] = useState(1);
  const [selectedPolish, setSelectedPolish] = useState(1);
  const [selectedCertificate, setSelectedCertificate] = useState({
    1: false,
    2: false,
  });
  const [mincount, setminCount] = useState(181);
  const [maxcount, setmaxCount] = useState(2086918);
  const [value1, setValue1] = React.useState([0.5, 100]);

  const handleButtonClick = (buttonIndex) => {
    setSelectedButton(buttonIndex);
  };

  const handleButtonClarity = (buttonIndex) => {
    setSelectedClarity(buttonIndex);
  };

  const handleButtonCut = (buttonIndex) => {
    setSelectedCut(buttonIndex);
  };

  const handleButtonSymmetry = (buttonIndex) => {
    setSelectedSymmetry(buttonIndex);
  };

  const handleButtonPolish = (buttonIndex) => {
    setSelectedPolish(buttonIndex);
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
    // Use toLocaleString to format the number with commas
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
      <div className="variation">
        <div className="var_kind">
          <div className="head_icon">
            <h5>Color</h5>
            <BsQuestionCircleFill />
          </div>

          <section>
            <button
              className={selectedButton === 1 ? "selected" : ""}
              onClick={() => handleButtonClick(1)}
            >
              J
            </button>

            <button
              className={selectedButton === 2 ? "selected" : ""}
              onClick={() => handleButtonClick(2)}
            >
              I
            </button>
            <button
              className={selectedButton === 3 ? "selected" : ""}
              onClick={() => handleButtonClick(3)}
            >
              H
            </button>
            <button
              className={selectedButton === 4 ? "selected" : ""}
              onClick={() => handleButtonClick(4)}
            >
              G
            </button>
            <button
              className={selectedButton === 5 ? "selected" : ""}
              onClick={() => handleButtonClick(5)}
            >
              F
            </button>
            <button
              className={selectedButton === 6 ? "selected" : ""}
              onClick={() => handleButtonClick(6)}
            >
              E
            </button>
            <button
              className={selectedButton === 7 ? "selected" : ""}
              onClick={() => handleButtonClick(7)}
            >
              D
            </button>
          </section>
        </div>

        <div className="var_kind">
          <div className="head_icon">
            <h5>Clarity</h5>
            <BsQuestionCircleFill />
          </div>
          <section>
            <button
              className={selectedClarity === 1 ? "selected" : ""}
              onClick={() => handleButtonClarity(1)}
            >
              SI1
            </button>

            <button
              className={selectedClarity === 2 ? "selected" : ""}
              onClick={() => handleButtonClarity(2)}
            >
              VS2
            </button>
            <button
              className={selectedClarity === 3 ? "selected" : ""}
              onClick={() => handleButtonClarity(3)}
            >
              VS1
            </button>
            <button
              className={selectedClarity === 4 ? "selected" : ""}
              onClick={() => handleButtonClarity(4)}
            >
              VVS2
            </button>
            <button
              className={selectedClarity === 5 ? "selected" : ""}
              onClick={() => handleButtonClarity(5)}
            >
              VVS1
            </button>
            <button
              className={selectedClarity === 6 ? "selected" : ""}
              onClick={() => handleButtonClarity(6)}
            >
              IF
            </button>
            <button
              className={selectedClarity === 7 ? "selected" : ""}
              onClick={() => handleButtonClarity(7)}
            >
              FL
            </button>
          </section>
        </div>

        <div className="var_kind">
          <div className="head_icon">
            <h5>Cut</h5>
            <BsQuestionCircleFill />
          </div>

          <section>
            <button
              className={selectedCut === 1 ? "selected" : ""}
              onClick={() => handleButtonCut(1)}
            >
              GOOD
            </button>

            <button
              className={selectedCut === 2 ? "selected" : ""}
              onClick={() => handleButtonCut(2)}
            >
              VERY GOOD
            </button>

            <button
              className={selectedCut === 3 ? "selected" : ""}
              onClick={() => handleButtonCut(3)}
            >
              EXCELLENT
            </button>
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
                <p>${mincount}</p>
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
                <p>$ {formatNumber(maxcount)}</p>
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
          <h5>Certificate</h5>
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
                    <BsQuestionCircleFill />
                  </div>

                  <section>
                    <button
                      className={selectedSymmetry === 1 ? "selected" : ""}
                      onClick={() => handleButtonSymmetry(1)}
                    >
                      GOOD
                    </button>

                    <button
                      className={selectedSymmetry === 2 ? "selected" : ""}
                      onClick={() => handleButtonSymmetry(2)}
                    >
                      VERY GOOD
                    </button>

                    <button
                      className={selectedSymmetry === 3 ? "selected" : ""}
                      onClick={() => handleButtonSymmetry(3)}
                    >
                      EXCELLENT
                    </button>
                  </section>
                </div>
                <div className=" symmetry_var_kind">
                  <div className="symmetry_head_icon">
                    <h5>Polish</h5>
                    <BsQuestionCircleFill />
                  </div>

                  <section>
                    <button
                      className={selectedPolish === 1 ? "selected" : ""}
                      onClick={() => setSelectedPolish(1)}
                    >
                      GOOD
                    </button>

                    <button
                      className={selectedPolish === 2 ? "selected" : ""}
                      onClick={() => setSelectedPolish(2)}
                    >
                      VERY GOOD
                    </button>

                    <button
                      className={selectedPolish === 3 ? "selected" : ""}
                      onClick={() => setSelectedPolish(3)}
                    >
                      EXCELLENT
                    </button>
                  </section>
                </div>
              </div>
              {/* 
              <div className="symmetry_polish_div">
                <div className=" symmetry_var_kind">
                  <div className="symmetry_head_icon">
                    <h5>Cut</h5>
                    <BsQuestionCircleFill />
                  </div>

                  <section>
                    <button
                      className={selectedCut === 1 ? "selected" : ""}
                      onClick={() => handleButtonCut(1)}
                    >
                      GOOD
                    </button>

                    <button
                      className={selectedCut === 2 ? "selected" : ""}
                      onClick={() => handleButtonCut(2)}
                    >
                      VERY GOOD
                    </button>

                    <button
                      className={selectedCut === 3 ? "selected" : ""}
                      onClick={() => handleButtonCut(3)}
                    >
                      EXCELLENT
                    </button>
                  </section>
                </div>
              </div> */}
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>

      <div className="select_div">
        <select>
          <option value="volvo">Price(low-to-high)</option>
          <option value="saab">Price(high-to-low)</option>
          <option value="fiat">Carat(low-to-high)</option>
          <option value="fiat">Carat(high-to-low)</option>

          <option value="fiat">Color(low-to-high)</option>
          <option value="fiat">Color(high-to-low)</option>

          <option value="fiat">Clarity(low-to-high)</option>
          <option value="fiat">Clarity(high-to-low)</option>

          <option value="fiat">Cut(low-to-high)</option>
          <option value="fiat">Cut(high-to-low)</option>
        </select>
      </div>
    </Root>
  );
}

const Root = styled.section`
  padding: 0 20px;

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

  .carat_budget_certificate {
    display: flex;
    gap: 30px;
    margin-top: 40px;

    .carat_div {
      width: 40%;
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
          width: 45%;
          border-radius: 5px;
          display: flex;
          .value {
            width: 80%;
            padding: 6px;
            display: flex;
            justify-content: space-between;
            align-items: center;
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
          .carat_btn_div {
            width: 20%;
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
      width: 40%;
      h5 {
        font-size: 17px;
      }
      .budget_value_div {
        display: flex;
        justify-content: center;
        align-items: center;
        .min_max_div {
          border:1px solid #ededed;
          height:56px;
          width:45%;
          border-radius:5px;
          display:flex;
          .value_div{
            width: 80%;
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
            width: 20%;
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
      width: 20%;

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

  .select_div {
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
`;

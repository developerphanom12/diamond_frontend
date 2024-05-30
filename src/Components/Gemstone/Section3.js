import React, { useState } from "react";
import styled from "styled-components";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import Slider from "@mui/material/Slider";
import Sliderr from "./Sliderr";

function valuetext(value) {
  return `${value}°C`;
}

const minDistance = 10;

export default function Section3() {
  const [mincount, setminCount] = useState(181);
  const [maxcount, setmaxCount] = useState(2086918);
  const [value1, setValue1] = React.useState([0.5, 100]);

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
      <div className="carat_budget_certificate">
        <div className="certificate_div">
          <h5>Gemstone</h5>
          <div className="btn">
            <Sliderr />
          </div>
        </div>
        <div className="carat_div">
          <h5>Carat</h5>
          <Slider
            getAriaLabel={() => "Minimum distance"}
            value={value1}
            onChange={handleChange1}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
            disableSwap
            style={{margin:"10px 0px"}}
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
      </div>
    </Root>
  );
}

const Root = styled.section`
  padding: 0 20px;

  
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
          border: 1px solid #ededed;
          height: 56px;
          width: 45%;
          border-radius: 5px;
          display: flex;
          .value_div {
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

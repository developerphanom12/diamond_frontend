import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Slider from "@mui/material/Slider";
import "react-modern-drawer/dist/index.css";
import Drawer from "react-modern-drawer";
import { useDispatch } from "react-redux";
import { IoFilterOutline } from "react-icons/io5";
import {
  setCollectionIds,
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
import { IoIosArrowUp } from "react-icons/io";
import { EXCHANGE_URLS } from "../URLS";
import { useLoading } from "../LoadingContext";
import Sliderr from "./Sliderr";
import Svgsvg2 from "../../globalSvg/Svgsvg2";
import Svgsvg from "../../globalSvg/Svgsvg";
import Svgsvg3 from "../../globalSvg/Svgsvg3";

const collections = [
  {
    id: "430466695386",
    title: "Moissanite",
    svg: <Svgsvg2 />,
  },
  {
    id: "430466728154",
    title: "Sapphire",
    svg: <Svgsvg />,
  },
  {
    id: "430466793690",
    title: "Emerald",
    svg: <Svgsvg3 />,
  },
];

const shapesList = [
  { name: "gemRound", imgUrl: ROUND },
  { name: "gemPrincess", imgUrl: PRINCESS },
  { name: "gemOval", imgUrl: OVAL },
  { name: "gemEmrald", imgUrl: EMERALD },
  { name: "gemPear", imgUrl: PEAR },
  { name: "gemHeart", imgUrl: HEART },
  { name: "gemMarquise", imgUrl: MARQUISE },
  { name: "gemCushion", imgUrl: CUSHION },
  { name: "gemAsscher", imgUrl: ASSCHER },
  { name: "gemRadiant", imgUrl: RADIANT },
];
export default function Section2() {
  const [selectedShapes, setSelectedShapes] = useState(["gemRound"]);
  const [selectedCollection, setSelectedCollection] = useState(
    collections[0].id
  );
  const [caratRange, setCaratRange] = useState([0.5, 11.5]);
  const [mincount, setminCount] = useState(181);
  const [maxcount, setmaxCount] = useState(502086918);
  const minCarat = caratRange[0];
  const maxCarat = caratRange[1];
  const [value, setValue] = useState([]);
  const { setLoading } = useLoading();
  const dispatch = useDispatch();
  const { state } = useLocation();

  const diamondApi = async (params) => {
    setLoading(true);
    try {
      const query = new URLSearchParams();

      if (params.selectedShapes.length > 0)
        query.append("tag", params.selectedShapes.join(","));
      if (minCarat !== undefined && minCarat !== null)
        query.append("minPrice", minCarat);
      if (maxCarat !== undefined && maxCarat !== null)
        query.append("maxPrice", maxCarat);
      query.append("collectionId", params.selectedCollection);

      const queryString = query.toString();
      const resp = await axios.get(`${EXCHANGE_URLS}/fetch?${queryString}`);

      if (resp?.status === 200) {
        setValue(resp?.data?.items);
        const collectionIds = resp.data.items.map((item) => item.collectionId);
        dispatch(setCollectionIds(collectionIds));
      }
    } catch (err) {
      console.error("Error fetching gem", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const params = {
      selectedShapes,
      minCarat: caratRange[0],
      maxCarat: caratRange[1],
      selectedCollection,
    };

    diamondApi(params);
  }, [selectedShapes, caratRange, dispatch]);

  const handleShapeClick = (shapeName, shapeImageUrl) => {
    dispatch(setSelectedShapeImage(shapeImageUrl));
    setSelectedShapes([shapeName]);
  };
  const handleCollectionChange = (collectionId) => {
    setSelectedCollection(collectionId);
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
            <p>{shape.name}</p>
          </button>
        ))}
      </div>

      <div className="carat_budget_certificate">
        <>
          <div className="certificate_div">
            <h5>Gemstone</h5>
            <div className="btn">
              <Sliderr
                collections={collections}
                onCollectionChange={handleCollectionChange}
              />
            </div>
          </div>
        </>
        <>
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
        </>
        <>
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
        </>
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
    height: 60vh !important;
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
        gap: 6px;
        margin: 0px 20px;
        width: 100%;
        padding-bottom: 10px;
        h5 {
          display: block;
          font-size: 13px;
          font-weight: 600;
          color: #000;
        }
        .btn_shapes {
          width: 84px !important;
          height: 93px;
          border: 1px solid transparent;
          background-color: rgba(247, 247, 247);
          padding: 12px 42px;
          p {
            font-size: 11px;
            line-height: 1.25;
            margin: 0px;
          }
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
    h5 {
      display: none;
    }
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
      p {
        font-size: 14px;
        line-height: 1.25;
        margin: 10px 0px 0px;
      }
    }
  }

  .carat_budget_certificate {
    padding: 0 20px;
    width: 100%;
    display: flex;
    margin-top: 20px;
    flex-wrap: wrap;
    justify-content: space-between;
    .carat_div {
      display: flex;
      flex-direction: column;
      flex: 1;
      padding: 0px 10px;
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
      flex: 1;
      padding: 0px 20px;

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
      padding: 0px 10px;

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

  @media only screen and (max-width: 567px) {
    .variation {
      gap: 30px;
    }

    .variation .var_kind {
      width: 100%;
      flex: unset;
    }

    .carat_budget_certificate .carat_div {
      gap: 15px;
      width: 100%;
    }

    .carat_budget_certificate .budget_div {
      flex: unset;
      width: 100%;
    }

    .carat_budget_certificate .budget_div .budget_value_div {
      justify-content: center;
    }

    .carat_budget_certificate .certificate_div {
      flex: unset;
      width: 100%;
    }

    .symmetry_polish_div {
      flex-direction: column;
    }
    .carat_budget_certificate .certificate_div .btn button {
      padding: 10px 0px;
    }
  }
  span.MuiSlider-thumb.MuiSlider-thumbSizeMedium.MuiSlider-thumbColorPrimary.MuiSlider-thumb.MuiSlider-thumbSizeMedium.MuiSlider-thumbColorPrimary.css-cp2j25-MuiSlider-thumb {
    color: white;
    border: 2px solid black;
  }
`;

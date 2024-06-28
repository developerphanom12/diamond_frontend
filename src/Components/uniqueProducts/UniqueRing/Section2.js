import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Section4 from "./Section4";
import "react-modern-drawer/dist/index.css";
import Drawer from "react-modern-drawer";
import { useDispatch, useSelector } from "react-redux";
import { IoFilterOutline } from "react-icons/io5";
import { setSelectedShape, setUniqueData } from "../../../redux/users/action";
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
import { useNavigate } from "react-router-dom";
import { EXCHANGE_URLS } from "../../URLS";
import { useLoading } from "../../LoadingContext";

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

export default function Section2() {
  const selectedShape = useSelector((state) => state.users.selectedShape);
  const [selectedShapes, setSelectedShapes] = useState(["ROUND"]); // Default to ROUND
  const [data, setData] = useState([]);
  const { setLoading } = useLoading();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fetchDiamondData = async (shape) => {
    setLoading(true);
    try {
      const response = await axios.get(`${EXCHANGE_URLS}/tagdata?tag=${shape}`);
      if (response.status === 200) {
        setData(response.data.data);
        dispatch(setUniqueData(response.data.data));
        console.log("response", response.data.data);
      }
    } catch (error) {
      console.error("Error fetching collections:", error);
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    const shape =
      selectedShape ||
      (selectedShapes.length > 0 ? selectedShapes[0] : "ROUND");
    fetchDiamondData(shape);
  }, [selectedShape, selectedShapes, dispatch, setLoading]);

  const handleShapeClick = (shapeName) => {
    setSelectedShapes([shapeName]);
    dispatch(setSelectedShape(shapeName)); // Set the selected shape
    navigate("/uniquering", { state: { selectedShape: shapeName } }); // Navigate with selected shape
  };

  const [isOpen, setIsOpen] = useState(false);
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
              (selectedShape || selectedShapes).includes(shape.name)
                ? "selected"
                : ""
            }`}
            onClick={() => handleShapeClick(shape.name)}
          >
            <img src={shape.imgUrl} alt={shape.name} />
            {shape.name}
          </button>
        ))}
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

      <Section4 data={data} />
    </Root>
  );
}

const Root = styled.section`
  padding: 0 0 20px;
  .column {
    border: 1px solid rgba(247, 247, 247);
    background-color: rgba(247, 247, 247);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 15px;
    border-radius: 10px;
    h2 {
      font-size: 40px;
      font-weight: 400;
      margin-right: 10px;
    }
    span {
      color: rgba(128, 128, 128);
      font-size: 13px;
      font-weight: 600;
    }
    h6 {
      color: rgba(0, 0, 0);
      font-size: 18px;
      text-transform: uppercase;
    }
    img,
    svg {
      vertical-align: middle;
      width: 35px;
      height: 35px;
    }
    a {
      color: rgba(128, 128, 128);
      text-decoration: underline;
      &:hover {
        text-decoration: underline;
      }
    }
  }

  .heading {
    padding: 10px 24px;
    h2 {
      color: rgba(0, 0, 0);
      font-size: 28px;
      margin-bottom: 10px;
    }
    p {
      font-size: 18px;
      font-weight: 500;
      line-height: 1.75rem;
    }
  }

  .ring_types {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    button {
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

      img,
      svg {
        height: 50px;
        width: 62px;
      }
    }
  }

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
`;

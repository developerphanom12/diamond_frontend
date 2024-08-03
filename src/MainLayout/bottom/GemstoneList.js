import React from "react";
import styled from "styled-components";
import round from "../../Images/round-removebg-preview.png";
import emerald from "../../Images/emerald-removebg-preview.png";
import heart from "../../Images/heart-removebg-preview.png";
import marquise from "../../Images/Marquise-removebg-preview.png";
import oval from "../../Images/oval-removebg-preview.png";
import pear from "../../Images/Pear-removebg-preview.png";
import princess from "../../Images/Princess-removebg-preview.png";
import Radiant from "../../Images/Radiant-removebg-preview.png";
import Cushion from "../../Images/cushionremovebg.png";
import Svgsvg from "../../globalSvg/Svgsvg";
import Svgsvg2 from "../../globalSvg/Svgsvg2";
import Svgsvg3 from "../../globalSvg/Svgsvg3";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  setSelectedCollectionId,
  setSelectedShapeImageGem,
} from "../../redux/users/action";

export default function GemstoneList() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const handleShapeClick = (shapeName) => {
    dispatch(setSelectedShapeImageGem(shapeName));
    navigate("/gemstone");
  };

  const handleTitleClick = (collections) => {
    dispatch(setSelectedCollectionId(collections));
    navigate("/gemstone");
  };
  return (
    <Root>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-12">
            <b>Design your Gemstone ring</b>
            <div className="ring_space">
              <ul>
                <li
                  style={{ display: "flex" }}
                  onClick={() => handleTitleClick("430466695386")}
                >
                  {" "}
                  <Svgsvg2 />
                  Start with a Moissanite
                </li>
                <li
                  style={{ display: "flex" }}
                  onClick={() => handleTitleClick("430466728154")}
                >
                  {" "}
                  <Svgsvg />
                  Start with Sapphire
                </li>
                <li
                  style={{ display: "flex" }}
                  onClick={() => handleTitleClick("430466793690")}
                >
                  {" "}
                  <Svgsvg3 />
                  Start with Emerald
                </li>
                <li
                  onClick={() => {
                    navigate("/gemstone");
                  }}
                >
                  <svg
                    viewBox="0 0 14 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.0176 10.4175C13.0176 14.0396 10.0977 16.9869 6.50879 16.9869C2.91992 16.9869 0 14.0396 0 10.4175C0 7.49785 1.89844 5.01995 4.51404 4.16765L5.17725 4.7625C2.64258 5.372 0.75 7.67314 0.75 10.4175C0.75 13.6265 3.33301 16.2369 6.50879 16.2369C9.68457 16.2369 12.2676 13.6265 12.2676 10.4175C12.2676 7.67278 10.3745 5.37127 7.83911 4.76213L8.50293 4.1674C11.1188 5.01945 13.0176 7.49761 13.0176 10.4175ZM9.77808 1.68169L9.77271 1.68657L6.73926 4.40508L6.73242 4.42144L6.72461 4.41827L6.50769 4.61261L6.505 4.61017L6.50231 4.61261L3.23473 1.6817L4.88585 0.0131226H8.12157L9.77282 1.6817L9.76855 1.68561L9.77808 1.68169ZM7.91297 0.513113H7.17005L7.90333 1.62944L7.48951 2.61626L8.3921 2.24761L9.04786 1.65996L7.91297 0.513113ZM3.95948 1.66008L4.60499 2.23906L6.50904 3.01665L6.83521 2.88335L7.33887 1.68218L6.57105 0.513113H5.09449L3.95948 1.66008Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  Start with a Setting
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-12 bord">
            <b>Shop Gemstone By Shape</b>
            <div className="ring_space">
              <ul>
                <li onClick={() => handleShapeClick("Round")}>
                  <img src={round} alt="img" />
                  <span>Round</span>
                </li>
                <li onClick={() => handleShapeClick("Emerald")}>
                  {" "}
                  <img src={emerald} alt="img" />
                  <span>Emerald</span>
                </li>
                <li onClick={() => handleShapeClick("Heart")}>
                  <img src={heart} alt="img" />

                  <span>Heart</span>
                </li>
                <li onClick={() => handleShapeClick("Marquise")}>
                  <img src={marquise} alt="img" />

                  <span>Marquise</span>
                </li>
                <li onClick={() => handleShapeClick("Oval")}>
                  <img src={oval} alt="img" />

                  <span>Oval</span>
                </li>
              </ul>
              <ul>
                <li onClick={() => handleShapeClick("Pear")}>
                  <img src={pear} alt="img" />

                  <span>Pear</span>
                </li>
                <li onClick={() => handleShapeClick("Princess")}>
                  <img src={princess} alt="img" />

                  <span>Princess</span>
                </li>
                <li onClick={() => handleShapeClick("Radiant")}>
                  <img src={Radiant} alt="img" />

                  <span>Radiant</span>
                </li>
                <li onClick={() => handleShapeClick("Cushion")}>
                  <img src={Cushion} alt="img" />
                  <span>Cushion</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12 bord">
            <b>PRESET GEMSTONE RING</b>
            <div className="ring_space">
              <ul>
                <li style={{ display: "flex" ,alignItems:"center"}}>
                  <img src={round} alt="img" />{" "}
                  <a href="gemstone">
                    <span>Moissanite Rings</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12 ">
           
          </div>
        </div>
      </div>
    </Root>
  );
}
const Root = styled.section`
  .col-lg-3 {
    margin: 20px 0px;
  }
  b {
    font-size: 13px;
    text-transform: uppercase;
    padding: 10px;
  }
  ul {
    padding:0px 20px;
    list-style: none;
    li {
      font-weight: 550;
      font-size: 13px;
      margin: 10px 0px;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 10px;
      a {
        text-decoration: none;
        color: black;
        display: flex;
        flex-direction: row;
      }
        &:hover {
          text-decoration: underline;
        }
    }
  }
  svg {
    width: 25px !important;
    height: 25px !important;
  }
  svg,
  img {
    width: 30px;
    height: 30px;
    mix-blend-mode: multiply;
  }

  .ring_space {
    display: flex;
    justify-content: space-between;
    padding: 0px;
  }

  .bord {
    border-left: 1px solid #ededed;
  }

  @media (max-width: 567px) {
    margin-left: 0;

    .col-lg-3 {
      margin: 0;
      padding: 0;
    }

    padding: 0px;
    .imgh {
      display: none;
    }
    .ring_space {
      padding: 0;
      gap: 10px;
    }

    ul li a {
      font-size: 12px;
    }

    .bord {
      border-top: 1px solid #ededed;
      border-left: unset;
      padding-top: 20px;
    }

    span {
      font-size: 12px;
    }

    ul li {
      font-size: 12px;
      gap: 6px;
      display: flex;
      align-items: center;
    }

    b {
      font-size: 13px;
    }
  }
`;

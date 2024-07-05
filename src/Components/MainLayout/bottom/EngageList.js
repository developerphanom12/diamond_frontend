import React, { useEffect, useState } from "react";
import styled from "styled-components";
import gold1 from "../../Images/4.png";
import gold2 from "../../Images/6.png";
import gold3 from "../../Images/1.png";
import gold4 from "../../Images/1.png";
import rinfWdiamond from "../../Images/ringwithdiamond.png";
import naturaldiamond from "../../Images/naturaldiamond-removebg-preview.png";
import labgrown from "../../Images/labgrowncopy-removebg-preview.png";
import round from "../../Images/round-removebg-preview.png";
import emerald from "../../Images/emerald-removebg-preview.png";
import heart from "../../Images/heart-removebg-preview.png";
import marquise from "../../Images/Marquise-removebg-preview.png";
import oval from "../../Images/oval-removebg-preview.png";
import pear from "../../Images/Pear-removebg-preview.png";
import princess from "../../Images/Princess-removebg-preview.png";
import Radiant from "../../Images/Radiant-removebg-preview.png";
import Cushion from "../../Images/cushionremovebg.png";
import Solitaire from "../../Images/Solitaire-removebg-preview.png";
import Natural from "../../Images/Nature-removebg-preview.png";
import Vintage from "../../Images/Vintage-removebg-preview.png";
import SideStones from "../../Images/SideStone-removebg-preview.png";
import Pave from "../../Images/Pave-removebg-preview.png";
import ThreeStones from "../../Images/ThreeStones-removebg-preview.png";
import Halo from "../../Images/Halo-removebg-preview.png";
import HiddenHalo from "../../Images/HiddenHalo-removebg-preview.png";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setDiamondType, setSelectedShape } from "../../../redux/users/action";

export default function EngageList() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleShapeClick = (shapeName) => {
    dispatch(setSelectedShape(shapeName));
    navigate("/uniquering");
  };
  const handleDiamondTypeClick = (diamondType) => {
    dispatch(setDiamondType(diamondType));
    navigate("/naturaldiamond");
  };
  return (
    <Root>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 col-mg-6 col-12">
            <b>Design your engagement ring</b>
            <div className="ring_space">
              <ul>
                <li className="d-flex">
                  {" "}
                  <img src={rinfWdiamond} alt="img" />
                  <a href="engagementring">Start with a setting</a>
                </li>
                <li className="d-flex"  onClick={() => handleDiamondTypeClick(false)}>
                  {" "}
                  <img src={naturaldiamond} alt="img" />
                  Start with a Natural Diamond 
                </li>
                <li
                  className="d-flex"
                  onClick={() => handleDiamondTypeClick(true)}
                >
                  <img src={labgrown} alt="img" />
                  Start with a Lab-created Diamond
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-mg-6 col-12 bord">
            <b>Present Engagement Rings</b>
            <div className="ring_space">
              <ul>
                <li onClick={() => handleShapeClick("ROUND")}>
                  <img src={round} alt="img" />

                  <span>Round</span>
                </li>
                <li onClick={() => handleShapeClick("EMERALD")}>
                  <img src={emerald} alt="img" />
                  <span>Emerald</span>
                </li>
                <li onClick={() => handleShapeClick("HEART")}>
                  <img src={heart} alt="img" />
                  <span>Heart</span>
                </li>
                <li onClick={() => handleShapeClick("MARQUISE")}>
                  <img src={marquise} alt="img" />
                  <span>Marquise</span>
                </li>
                <li onClick={() => handleShapeClick("OVAL")}>
                  <img src={oval} alt="img" />
                  <span>Oval</span>
                </li>
              </ul>
              <ul>
                <li onClick={() => handleShapeClick("PEAR")}>
                  <img src={pear} alt="img" />
                  <span>Pear</span>
                </li>
                <li onClick={() => handleShapeClick("PRINCESS")}>
                  <img src={princess} alt="img" />
                  <span>Princess</span>
                </li>
                <li onClick={() => handleShapeClick("RADIANT")}>
                  <img src={Radiant} alt="img" />
                  <span>Radiant</span>
                </li>
                <li onClick={() => handleShapeClick("CUSHION")}>
                  <img src={Cushion} alt="img" />
                  <span>Cushion</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3  col-md-6 col-12  bord">
            <b>Shop By Style</b>
            <div className="ring_space">
              <ul>
                <li>
                  <img src={Solitaire} alt="img" />
                  Solitaire{" "}
                </li>
                <li>
                  {" "}
                  <img src={Natural} alt="img" />
                  <span>Natural</span>
                </li>
                <li>
                  <img src={Vintage} alt="img" />

                  <span>Vintage</span>
                </li>
                <li>
                  <img src={SideStones} alt="img" />

                  <span>Side Stones</span>
                </li>
              </ul>
              <ul>
                <li>
                  <img src={Pave} alt="img" />

                  <span>Pave</span>
                </li>
                <li>
                  <img src={ThreeStones} alt="img" />

                  <span>Three Stones</span>
                </li>
                <li>
                  <img src={Halo} alt="img" />

                  <span>Halo</span>
                </li>
                <li>
                  <img src={HiddenHalo} alt="img" />
                  <span>Hidden Halo</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3  col-md-6 col-12  bord">
            <b>Shop By Metal</b>
            <div className="ring_space">
              <ul>
                <li style={{ display: "flex", alignItems: "center" }}>
                  <img src={gold1} alt="img" />
                  <p style={{ margin: "0", padding: "0px 4px" }}>
                    {" "}
                    Yellow Gold
                  </p>
                </li>
                <li style={{ display: "flex", alignItems: "center" }}>
                  <img src={gold2} alt="img" />

                  <p style={{ margin: "0", padding: "0px 4px" }}> Rose Gold</p>
                </li>
              </ul>
              <ul>
                <li style={{ display: "flex", alignItems: "center" }}>
                  <img src={gold3} alt="img" />

                  <p style={{ margin: "0", padding: "0px 4px" }}> White Gold</p>
                </li>
                <li style={{ display: "flex", alignItems: "center" }}>
                  <img src={gold4} alt="img" />

                  <p style={{ margin: "0", padding: "0px 4px" }}> Platinum</p>
                </li>
              </ul>
            </div>
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
    padding: 20px;
    list-style: none;
    li {
      font-weight: 500;
      font-size: 13px;
      margin: 10px 0px;
      cursor: pointer;
      a {
        text-decoration: none;
        color: black;
        display: flex;
        flex-direction: row;
        &:hover {
          text-decoration: underline;
        }
      }
      &:hover {
        text-decoration: underline;
      }
    }
  }

  svg,
  img {
    width: 25px;
    height: 25px;
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

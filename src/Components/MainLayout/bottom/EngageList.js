import React from "react";
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

export default function EngageList() {
  return (
    <Root>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 col-mg-6 col-6">
            <b>Design your engagement ring</b>
            <ul>
              <li>
                {" "}
                <img src={rinfWdiamond} alt="img" />
                <a href="engagementring">Start with a setting</a>
              </li>
              <li>
                {" "}
                <img src={naturaldiamond} alt="img" />
                <a href="naturaldiamond"> Start with a Natural Diamond</a>
              </li>
              <li>
                <img src={labgrown} alt="img" />
                <a href="naturaldiamond">   Start with a Lab-created Diamond</a>
              
              </li>
            </ul>
          </div>
          <div
            className="col-lg-3 col-mg-6 col-6"
            style={{ borderLeft: "1px solid #ededed" }}
          >
            <b>Present Engagement Rings</b>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "0px 20px",
              }}
            >
              <ul>
                <li>
                  <img src={round} alt="img" /> <span>Round</span>
                </li>
                <li>
                  {" "}
                  <img src={emerald} alt="img" />
                  <span>Emerald</span>
                </li>
                <li>
                  <img src={heart} alt="img" />

                  <span>Heart</span>
                </li>
                <li>
                  <img src={marquise} alt="img" />

                  <span>Marquise</span>
                </li>
                <li>
                  <img src={oval} alt="img" />

                  <span>Oval</span>
                </li>
              </ul>
              <ul>
                <li>
                  <img src={pear} alt="img" />

                  <span>Pear</span>
                </li>
                <li>
                  <img src={princess} alt="img" />

                  <span>Princess</span>
                </li>
                <li>
                  <img src={Radiant} alt="img" />

                  <span>Radiant</span>
                </li>
                <li>
                  <img src={Cushion} alt="img" />
                  <span>Cushion</span>
                </li>
              </ul>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-8 col-8"
            style={{ borderLeft: "1px solid #ededed" }}
          >
            <b>Shop By Style</b>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "0px 30px",
              }}
            >
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
          <div
            className="col-lg-2 col-md-4 col-4"
            style={{ borderLeft: "1px solid #ededed" }}
          >
            <b>Shop By Metal</b>
            <ul>
              <li style={{ display: "flex", alignItems: "center" }}>
                <img src={gold1} alt="img" />
                <p style={{ margin: "0", padding: "0px 4px" }}> Yellow Gold</p>
              </li>
              <li style={{ display: "flex", alignItems: "center" }}>
                <img src={gold2} alt="img" />

                <p style={{ margin: "0", padding: "0px 4px" }}> Rose Gold</p>
              </li>
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
    </Root>
  );
}
const Root = styled.section`
  padding: 30px;
  b {
    font-size: 15px;
    text-transform: uppercase;
  }
  ul {
    padding: 0;
    list-style: none;
    li {
      font-weight: 400;
      font-size: 15px;
      margin: 10px 0px;
      cursor: pointer;
      a {
        text-decoration: none;
        color: black;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
  svg,
  img {
    width: 30px;
    height: 30px;
  }
`;

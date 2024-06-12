import React from "react";
import styled from "styled-components";
import backimg from "../../Images/Diamond-2.jpg";
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

export default function DiamondList() {
  return (
    <Root>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3">
            <b>Design your Diamond ring</b>
            <ul>
              <li>
                {" "}
                <img src={rinfWdiamond} alt="img" />
                Start with a setting
              </li>
              <li>
                {" "}
                <img src={naturaldiamond} alt="img" />
                Start with a Natural Diamond
              </li>
              <li>
                <img src={labgrown} alt="img" />
                Start with a Lab-created Diamond
              </li>
            </ul>
          </div>
          <div className="col-lg-3" style={{ borderLeft: "1px solid #ededed" }}>
            <b>Shop Natural Diamond By Shape</b>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "0px 20px",
              }}
            >
              <ul>
                <li>
                  <img src={round} alt="img" />
                  Round{" "}
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
          <div className="col-lg-3" style={{ borderLeft: "1px solid #ededed" }}>
            <b>Shop Natural Diamond By Shape</b>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "0px 20px",
              }}
            >
              <ul>
                <li>
                  <img src={round} alt="img" />
                  {" "}
                  <span>Round</span>

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
            className="col-lg-3"
            style={{
              borderLeft: "1px solid #ededed",
              padding: "0px",
              margin: "0",
            }}
          >
            <img
              src={backimg}
              alt="img"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>
      </div>
    </Root>
  );
}
const Root = styled.section`
  margin-left: 10px;
  .col-lg-3 {
    margin: 30px 0px;
  }
  b {
    font-size: 15px;
    text-transform: uppercase;
    padding: 10px;
  }
  ul {
    padding: 20px;
    list-style: none;
    li {
      font-weight: 400;
      font-size: 15px;
      margin: 10px 0px;
    }
  }
  svg,
  img {
    width: 30px;
    height: 30px;
  }
`;

import React from "react";
import styled from "styled-components";
import backimg from "../../Images/Diamond-2.jpg";


export default function EducationList() {
  return (
    <Root>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3">
            <b>Diamonds</b>
            <ul>
              <li> 4 C'S</li>
              <li>Shapes</li>
              <li>Diamond Types</li>
              <li>Anatomy</li>
              <li>Sparkle</li>
            </ul>
          </div>
          <div className="col-lg-3" style={{ borderLeft: "1px solid #ededed" }}>
            <b>MOISSANITE & GEMSTONES</b>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "0px 20px",
              }}
            >
              <ul>
                <li>
                  <span>Moissanite</span>
                </li>
                <li>
                  {" "}
                  <span>Moissanite Colors</span>
                </li>
                <li>
                  <span>Moissanite Vs Diamonds</span>
                </li>
                <li>
                  <span>Sapphires</span>
                </li>
                <li>
                  <span>Emeralds</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3" style={{ borderLeft: "1px solid #ededed" }}>
            <b>ENGAGEMENT RINGS</b>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "0px 20px",
              }}
            >
              <ul>
                <li>
                  <span>Ring Styles</span>
                </li>
                <li>
                  {" "}
                  <span>Setting Types</span>
                </li>
                <li>
                  <span>Metals</span>
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
      cursor: pointer;

    }
  }
  svg,
  img {
    width: 30px;
    height: 30px;
  }
`;

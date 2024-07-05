import React from "react";
import styled from "styled-components";
import backimg from "../../Images/Diamond-2.jpg";


export default function EducationList() {
  return (
    <Root>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-12">
            <b>Diamonds</b>
            <ul>
              <li> 4 C'S</li>
              <li>Shapes</li>
              <li>Diamond Types</li>
              <li>Anatomy</li>
              <li>Sparkle</li>
            </ul>
          </div>
          <div className="col-lg-3  col-md-6 col-12 bord">
            <b>MOISSANITE & GEMSTONES</b>
            <div
              className="ring_space"
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
          <div className="col-lg-3  col-md-6 col-12 bord" >
            <b>ENGAGEMENT RINGS</b>
            <div
              className="ring_space"
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
            className="col-lg-3  col-md-6 col-12"

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
        &:hover{
          text-decoration: underline;
        }
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

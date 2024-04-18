import React from "react";
import styled from "styled-components";
import bgg from "../Images/bannerimggg.webp";

export default function Section1() {
  return (
    <Root>
      <div className="contain_tag">
        <div className="tag">
          ENDS <b>APRIL 25</b>
        </div>
      </div>
      <div className="main_content">
        <div className="everyday">
          <b>every day is earth day</b>
        </div>
        <div>
          <h1>get 25% off</h1>
        </div>
        <div>
          <h4>lab diamonds</h4>
        </div>
        <div>
          <button>shop engagement rings</button>
          <button>shop lab diamonds</button>
          <h6>
            apply code <b>earth</b> at checkout
          </h6>
        </div>
      </div>
    </Root>
  );
}
const Root = styled.section`
  background-image: url(${bgg});
  background-size: 100% 100%;
  object-fit: contain;
  height: 450px;
  padding: 20px;
  position: relative;
  color: #000;
  .contain_tag {
    transform: rotate(-45deg);
    display: flex;
    justify-content: flex-start;
    position: absolute;
    left: -88px;
    top: 58px;
    z-index: 1;
    .tag {
      border: 2px solid black;
      border-radius: 50px;
      background-color: #fff;
      color: #000;
      padding: 10px;
      font-size: 18px;
      width: 330px;
      text-align: center;
      box-shadow: 0px 3px 5px 0px gray;
    }
  }
  .main_content {
    padding: 40px 20px;
    width: 50vw;
    text-transform: uppercase;
    text-align: center;
    .everyday {
      font-size: 18px;
      margin-bottom: 16px;
      line-height: 1.25;
      letter-spacing: 0.37em;
    }
    h1 {
      font-size: 76px;
      line-height: 1;
      font-weight: 700;
      color: #000;
      font-family: "TheSeasons", "ProximaNova", "roboto", -apple-sysytem,
        "sans-serif" !important;
    }
    h4 {
      letter-spacing: 0.2em;
      margin: 16px;
      font-size: 24px;
    }
    button {
      background-color: #000;
      color: #fff;
      border: 1px solid #fff;
      border-radius: 50px;
      padding: 13px 18px;
      font-size: 18px;
      text-transform: capitalize;
      margin: 5px;
      transition-timing-function: cubic-bezier(.4,0,.2,1);
      &:hover {
        background-color: #fff;
        color: #000;
        transition-duration: 0.5s;
      }
    }
    h6{
      text-transform: capitalize;
      margin-top: 1.875rem;
      color: rgba(0, 0, 0, 0.8);
      font-size: 15px;
      b{
        font-weight: bolder;
      text-transform: uppercase;

      }
    }
  }
`;

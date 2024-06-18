import React from "react";
import styled from "styled-components";
import b1 from "../Images/black1.png";
import b2 from "../Images/black2.png";
import b3 from "../Images/black3.png";

export default function Subscription() {
  return (
    <Root>
      <div className="container-fluid ">
        <div className="row">
          <div className="col-lg-2 col-md-2 col-0"></div>
          <div className="col-lg-8  col-md-8 col-12">
            <h3>SUBSCRIBE TO OUR NEWSLETTER</h3>
            <div className="inputy_btn">
              <input placeholder="ENTER YOUR EMAIL" />
              <button>SUBSCRIBE</button>
            </div>
          </div>
          <div className="col-lg-2  col-md-2 col-0"></div>
        </div>
        <div className="row">
          <div className="col-lg-4  col-md-6 col-12">
            <img src={b1} alt="img" />
            <h3 className="h3">Worldwide Delivery</h3>
            <p>Overnight Complimentary Shipping</p>
          </div>
          <div
            className="col-lg-4  col-md-6 col-12"
            style={{
              borderLeft: "1px solid white",
              borderRight: "1px solid white",
            }}
          >
            <img src={b2} alt="img" />
            <h3 className="h3">Returns Within 30 Days</h3>

            <p>Satisfaction Guaranteed</p>
          </div>
          <div className="col-lg-4   col-md-6 col-12">
            <img src={b3} alt="img" />
            <h3 className="h3">Life Time Warranty</h3>

            <p>Shop With Confidence</p>
          </div>
        </div>
      </div>
    </Root>
  );
}
const Root = styled.section`
  background-color: #232323;
  color: #fff;
  padding: 20px 0px;
  h3 {
    font-weight: 300;
    width: 100%;
    text-align: center;
    margin: 30px 0px;
  }
  .col-lg-8.inputy_btn {
    display: flex;
    margin: 10px 30px;
    width: fit-content;
  }
  .col-lg-8 {
    text-align: center;
  }
  input {
    padding: 12px;
    background-color: #474747;
    margin: 0;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    border: none;
    width: 34vw;
    outline: none;
  }
  button {
    padding: 12px 20px;
    border: none;
    background-color: #696969;
    color: #fff;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }
  input::placeholder {
    background-color: #474747;
    color: #fff;
    padding: 10px 15px;
    line-height: 1.5;
  }
  .col-lg-4 {
    margin: 40px 0px;
    text-align: center;
    padding: 0px !important;
    p {
      font-size: 12px;
      margin: 0;
    }
    .h3 {
      font-weight: 300;
      width: 100%;
      text-align: center;
      margin: 0px 0px 30px;
    }
  }
  @media (max-width: 767px) {
    h3 {
      font-size: 16px;
    }
    .col-lg-4 {
      margin: 20px 0px;
    }
  }
`;

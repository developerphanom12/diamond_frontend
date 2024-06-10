import React from "react";
import styled from "styled-components";
import insta from "../Images/Screenshot from 2024-04-18 19-18-01.png";

export default function Footer() {
  return (
    <Root>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-4">
            <h2>RING-BUILDER</h2>
            <p>
              We’re A Team Of Creatives, Programmers, And Jewelry Experts. Our
              Mission Is To Change Online Jewelry Shopping. We Understand That
              Behind Every Piece Of Jewelry Is A Highlight Moment.
            </p>
            <p>580 Fifth Ave. Suite #1706, New York, NY 10036</p>
            <p>+1 (888) 346-0787 - Toll Free</p>
            <p>contact@RingBuilderjewelry.com</p>
            <img src={insta} alt="img" />
          </div>
          <div className="col-lg-2 col-md-2 col-2">
            <p>About</p>
            <p>ABOUT US</p>
            <p>CONTACT US</p>
            <p>BLOG</p>
            <p>FAQ</p>
            <p>REVIEWS</p>
            <p>EDUCATION</p>
          </div>
          <div className="col-lg-3 col-md-3 col-3">
            <p>Information</p>
            <p>SHIPPING INFO</p>
            <p>MONEY BACK GUARANTEE</p>
            <p>CONFLICT FREE DIAMONDS</p>
            <p>PROFFESIONAL APPRAISAL</p>
            <p>TERMS OF USE</p>
            <p>PRIVACY POLICY</p>
            <p>ACCESSIBILITY</p>
          </div>
          <div className="col-lg-3 col-md-3 col-3">
            <p> Jewelry</p>
            <p>ENGAGEMENT RINGS</p>
            <p>WEDDING BANDS</p>
            <p>PENDANTS</p>
            <p>MOISSANITE</p>
            <p>ETERNITY RINGS</p>
            <p>DIAMONDS NECKLACES</p>
          </div>
        </div>
      </div>
    </Root>
  );
}
const Root = styled.section`
  background-color: #000;
  color: #fff;
  padding: 40px 0px;
  .col-lg-4 {
    padding: 20px;
    border-bottom: 1px solid #fff;
    h2 {
      font-weight: 400;
    }
    p {
      font-size: 14px;
    }
  }
  .col-lg-2,
  .col-lg-3 {
    padding: 20px 50px;
    p {
      font-size: 15px;
    }
    border-bottom: 1px solid #fff;
  }
  @media (max-width: 767px) {
    .col-lg-2,
    .col-lg-3 {
      padding: 10px 0px;
    }
    .col-lg-4 {
      padding: 10px;
    }
  }
`;

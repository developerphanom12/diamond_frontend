import React from "react";
import styled from "styled-components";
import ringg1 from "../Images/ringgg1.webp";
import ringg3 from "../Images/ringgg3.webp";
import ringg2 from "../Images/ringgg2.webp";
import ringg4 from "../Images/ringgg4.webp";
import { IoIosArrowForward } from "react-icons/io";

export default function Section3() {
  return (
    <Root>
      <div className="container-fluid mb-8">
        <div className="row">
          <div className="col-lg-2"></div>
          <div className="col-lg-8">
            <h2>Our Selections</h2>
          </div>
          <div className="col-lg-2"></div>
        </div>
      </div>
      <div className="container-fluid ">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-6 col1">
            <div className="content_div">
              <h3>Engagement ring</h3>
              <div className="shop">
                shop now <IoIosArrowForward />
              </div>
            </div>
          </div>
          <div className="col-lg-3  col-md-6 col-6  col2">
            <div className="content_div">
              <h3>Wedding bands</h3>
              <div className="shop">
                shop now <IoIosArrowForward />
              </div>
            </div>
          </div>
          <div className="col-lg-3  col-md-6 col-6  col3">
            <div className="content_div">
              <h3>fine jewelry</h3>
              <div className="shop">
                shop now <IoIosArrowForward />
              </div>
            </div>
          </div>
          <div className="col-lg-3  col-md-6 col-6  col4">
            <div className="content_div">
              <h3>eternity rings</h3>
              <div className="shop">
                shop now <IoIosArrowForward />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Root>
  );
}
const Root = styled.section`
  padding: 40px 10px;
  color: #000;
  text-transform: capitalize;

  h2 {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 50px;
    font-weight: 400;
    text-transform: uppercase;
  }
  .col-lg-8 {
    padding: 20px;
  }
  .col-lg-3 {
    width: 318px;
    margin: 0px 6px;
    .content_div {
      padding: 20px;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      justify-content: end;
      align-items: center;
    }
    h3 {
      line-height: 1.25;
      font-weight: 400;
      font-size: 24px;
      word-wrap: break-word;
    }
    &:hover {
      .shop {
        cursor: pointer;
      }
      svg {
        animation: vibrate 2s infinite;
      }
    }
  }
  .col-lg-3.col4,
  .col-lg-3.col3,
  .col-lg-3.col2,
  .col-lg-3.col1 {
    height: 420px;
    background-size: 100% 100%;
    object-fit: contain;
    border-radius: 20px;
    display: flex;
  }
  .col-lg-3.col1 {
    background-image: url(${ringg1});
  }
  .col-lg-3.col2 {
    background-image: url(${ringg2});
  }
  .col-lg-3.col3 {
    background-image: url(${ringg3});
  }
  .col-lg-3.col4 {
    background-image: url(${ringg4});
  }
  @media (max-width: 899px) {
    .col-lg-3 {
      padding: 0px;
      gap: 20px;

      .content_div {
        padding: 5px;
        width: 100%;
        h3 {
          font-size: 18px;
        }
      }
    }
    .col-lg-3.col4,
    .col-lg-3.col3,
    .col-lg-3.col2,
    .col-lg-3.col1 {
  
      height: 300px;
      width: 164px;
      margin-top: 10px;
    }
  }
`;

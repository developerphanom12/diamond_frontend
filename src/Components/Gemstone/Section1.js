import React from "react";
import styled from "styled-components";

export default function Section1() {

  return (
    <Root>
      <div className="container-fluid">
       
        <div className="row">
          <div className="col-lg-12 col-md-12 col-12">
            <div className="heading">
              <h3>Select Gemstone</h3>
              <p>
                Browse and explore The Precious Earth's extenstive collection of
                conflict free diamonds
              </p>
            </div>
          </div>
        </div>
      </div>
    </Root>
  );
}
const Root = styled.section`
  padding: 10px 0px 0px;
  margin: 0px;

  .container-fluid {
    text-align: center;
    margin: 0px 5px;
    .col-lg-4,
    .col-md-4 {
      margin: -1px;
      padding: 0px;
      width: 32vw;
      text-align: center;
    }
  }
  .bord {
    border: 2px solid black !important;
    width: 32vw;
    height: 11vh;
    position: relative;
    z-index: 1;
  }

  .column {
    height: 11vh;
    border: 1px solid #d1d1d1;
    background-color: rgba(247, 247, 247, 1);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border-radius: 5px;
    width: 32vw;

    h2 {
      font-size: 40px;
      font-weight: 400;
      margin-right: 10px;
    }
    span {
      color: rgba(128, 128, 128);
      font-size: 13px;
      font-weight: 600;
    }
    h6 {
      color: rgba(0, 0, 0);
      font-size: 18px;
      text-transform: uppercase;
    }
    img,
    svg {
      vertical-align: middle;
      width: 35px;
      height: 35px;
    }
    a {
      color: rgba(128, 128, 128);
      text-decoration: underline;
      font-size: 10px;
      margin-left: 100px;
      &:hover {
        text-decoration: underline;
      }
    }

    .view_cont {
      margin-left: 75px;
      padding-top: 20px;
      h5 {
        font-size: 9px;
        text-align: right;
        margin-bottom: 0;
      }
      .view_btn {
        display: flex;
        align-items: center;
        gap: 10px;
        h5 {
          text-decoration: underline;
          font-size: 9px;
          margin-top: -12px;
          color: #afafafeb;
          font-weight: 500;
        }
        p {
          font-size: 13px;
        }
      }
    }
  }

  .heading {
    text-align: center;
    margin-top: 20px;
    color: #000;
    h3 {
      color: rgba(0, 0, 0);
      padding: 0px 20px;
      line-height: 2.25rem;
    }
    p {
      font-size: large;
      font-weight: 500;
      word-spacing: 1.5px;
    }
  }

  .two_btn {
    display: flex;
    justify-content: center;
    margin: 20px 0px;

    button {
      display: flex;
      width: 100%;
      height: 8vh;
      border: 1px solid #d1d1d1;
      align-items: center;
      justify-content: center;
      padding: 10px;
      gap: 10px;
      border-radius: 4px;
      &.selected {
        border: 2px solid black;
        font-weight: 600;
        position: relative;
        z-index: 1;
      }
    }
    img {
      width: 30px;
      height: 30px;
    }

    h5 {
      font-size: 13px;
      padding-top: 7px;
    }
  }

  @media (max-width: 987px) {
    .column,
    .bord {
      padding: 5px;
      height: 9vh;
      width: 31vw;
      h2 {
        display: none;
      }
      h6 {
        font-size: 15px;
      }
      .view_cont {
        display: none;
      }
    }
    .two_btn {
      button {
        height: 5vh;
        padding: 5px;
        &.selected {
          padding: 5px;
          border: 1px solid black;
          border-radius: 4px;
        }
      }
      img {
        width: 20px;
        height: 20px;
      }
    }
  }
  @media (max-width: 768px) {
 
    .column,
    .bord {
      height: 8vh;
      padding: 5px;
      h2 {
        display: none;
      }
      h6 {
        font-size: 13px;
      }
      .view_cont {
        display: none;
      }
    }
  }
  @media (max-width: 667px) {
    .heading {
      h3{
        font-size:18px;
      }
      p{
        font-size:12px;
        line-height:1rem;
      }
}
    .column,
    .bord {
      padding: 5px;
      height: 7vh;
      h2 {
        display: none;
      }
      h6 {
        font-size: 11px;
      }
      .view_cont {
        display: none;
      }
    }
  }
  @media (max-width: 467px) {
    .container-fluid {
      margin: 0px;
    }

    .column,
    .bord {
      padding: 5px;
      height: 6vh;
      width: 30vw;
      h2 {
        display: none;
      }
      h6 {
        font-size: 10px;
      }
      .view_cont {
        display: none;
      }
      span {
        font-size: 10px;
      }
      svg {
        width: 16px;
        height: 16px;
      }
    }
  }
`;



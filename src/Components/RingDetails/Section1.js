import React from "react";
import styled from "styled-components";
import { CiCircleCheck } from "react-icons/ci";

export default function Section1() {
  return (
    <Root>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4 col-md-12 col-12">
            <div className="column">
              <div className="d-flex ">
                <h2>1</h2>
                <div className="flex-column">
                  <span>Select your</span>
                  <h6>Setting</h6>
                </div>
              </div>

              <div className="view_cont">
                <h5>The Riley</h5>
                <div className="view_btn">
                  <h5>View/Change</h5>
                  <p>$450</p>
                </div>
              </div>

              <CiCircleCheck />
            </div>
          </div>

          <div className="col-lg-4 col-md-12 col-12">
            <div className="column ">
              <div className="d-flex">
                <h2>2</h2>
                <div className="flex-column">
                  <span>Select your</span>
                  <h6>Stone</h6>
                </div>
              </div>
              <div className="view_cont">
                <h5>The Riley</h5>
                <div className="view_btn">
                  <h5>View/Change</h5>
                  <p>$450</p>
                </div>
              </div>
              <CiCircleCheck />

            </div>
          </div>

          <div className="col-lg-4 col-md-12 col-12">
            <div className="column bord">
              <div className="d-flex ">
                <h2>3</h2>
                <div className="flex-column">
                  <span>Complete</span>
                  <h6>Ring</h6>
                </div>
              </div>

              <div className="view_cont">
                <h5>The Riley</h5>
                <div className="view_btn">
                  <h5>View/Change</h5>
                  <p>$450</p>
                </div>
              </div>

              <CiCircleCheck />

            </div>
          </div>
        </div>
      </div>
    </Root>
  );
}
const Root = styled.section`
  padding: 20px;
  .bord {
    border: 2px solid black !important;
  }
  .column {
    margin: 10px 0px;
    border: 1px solid rgba(247, 247, 247);
    background-color: rgba(247, 247, 247);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
    border-radius: 10px;
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
`;

import React from "react";
import styled from "styled-components";
import { CiCircleCheck } from "react-icons/ci";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

export default function Section1() {
  const productIds = useSelector((state) => state.users.productIds);
  const diamondById = useSelector((state) => state.users.diamondById);
  console.log("Navigating withlabgrownValue:", productIds);
  const location = useLocation();
  const { products } = location.state || {};
  console.log("proooooooooooooooooo:", products);
  return (
    <Root>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-4">
            <div className="column">
              <div className="d-flex ">
                <h2>1</h2>
                <div className="flex-column">
                  <span>Select your</span>
                  <h6>Setting</h6>
                </div>
              </div>

              <div className="view_cont">
                <h5>{productIds?.title}</h5>
                <div className="view_btn">
                  <h5>View</h5>
                  <p>${productIds?.priceRange?.minVariantPrice?.amount}</p>
                </div>
              </div>
              <CiCircleCheck />
            </div>
          </div>

          <div className="col-lg-4 col-md-4 col-4">
            <div id="container" className="column ">
              <div className="d-flex">
                <h2>2</h2>
                <div className="flex-column">
                  <span>Select your</span>
                  <h6>Stone</h6>
                </div>
              </div>
              <div className="view_cont">
                <h5>
                  {diamondById?.diamond?.certificate?.carats} ct,{" "}
                  {diamondById?.diamond?.certificate?.cut} cut,{" "}
                  {diamondById?.diamond?.certificate?.color},{" "}
                  {diamondById?.diamond?.certificate?.shape}{" "}
                </h5>
                <div className="view_btn">
                  <h5>View</h5>
                  <p>${diamondById?.price}</p>
                </div>
              </div>
              <CiCircleCheck />
            </div>
          </div>

          <div className="col-lg-4 col-md-4 col-4">
            <div className="column bord">
              <div className="d-flex ">
                <h2>3</h2>
                <div className="flex-column">
                  <span>Complete</span>
                  <h6>Ring</h6>
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
  padding: 20px 0px;
  margin: 0px 10px;

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
      margin-left: 5px;
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

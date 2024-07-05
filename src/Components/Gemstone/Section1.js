import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import {  ModalBody } from "reactstrap";
import { CiCircleCheck } from "react-icons/ci";
import { setDiamondType } from "../../redux/users/action";
import { useDispatch, useSelector } from "react-redux";

export default function Section1() {
  const [selectedButton, setSelectedButton] = useState(false);
  const productIds = useSelector((state) => state.users.productIds);

  const [modal, setmodal] = useState(false);
  const [modal1, setmodal1] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleModalNavigate = (labgrownValue, buttonIndex) => {
    console.log("Navigating with labgrownValue:", labgrownValue);
    dispatch(setDiamondType(labgrownValue));
    setSelectedButton(buttonIndex);
    setmodal(false);
    navigate("/naturaldiamond", {
      state: { labgrownValue },
    });
  };

  return (
    <Root>
      <div className="container-fluid">
        {/* <div className="row">
          <div
            className="col-lg-4 col-md-4 col-4"
            onClick={() => setmodal1(true)}
          >
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
            <div
              id="container"
              className="column bord"
              onClick={() => setmodal(true)}
            >
              <div className="d-flex">
                <h2>2</h2>
                <div className="flex-column">
                  <span>Select your</span>
                  <h6>Stone</h6>
                </div>
              </div>
              <CiCircleCheck />
            </div>
          </div>

          <div className="col-lg-4 col-md-4 col-4">
            <div className="column">
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
        </div> */}
        <div className="row">
          <div className="col-lg-12 col-md-12 col-12">
            <div className="heading">
              <h3>Select Gemstone</h3>
              <p>
                Browse and explore Ring-Builder's extenstive collection of
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

const CustomModalBody = styled(ModalBody)`
  position: relative;
  z-index: 1212121;
  padding: 30px 85px 50px;
  text-align: center;

  h2 {
    font-size: 25px;
    margin-top: 20px;
    color: #000000;
    font-weight: 700;
  }
  .choose_option {
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
    z-index: 1111;
    justify-content: center;
    margin-top: 20px;

    .ring_pandet {
      flex-direction: column;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      &.selected {
        border: 2px solid black;
        border-radius: 10px;
        font-weight: 600;
      }
      svg {
        width: 56px;
        height: 56px;
        cursor: pointer;
      }
      span {
        cursor: pointer;
        font-size: 14px;
      }
    }
  }
  .modal-dialog {
    margin-top: 82px !important;
    top: 26% !important;
  }
`;

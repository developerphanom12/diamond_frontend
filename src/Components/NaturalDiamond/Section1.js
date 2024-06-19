import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import ring from "../Images/Solitaire-removebg-preview.png";
import ndia from "../Images/naturaldiamond-removebg-preview.png";
import labgrown from "../Images/labgrowncopy-removebg.png";
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
        <div className="row">
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
                <h5>{productIds?.[0]?.title}</h5>
                <div className="view_btn">
                  <h5>View/Change</h5>
                  <p>${productIds?.[0]?.priceRange?.minVariantPrice?.amount}</p>
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

              <div className="arrow-right"></div>
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
        </div>
        <div className="row">
          <div className="col-lg-12 col-md-12 col-12">
            <div className="heading">
              <h2>Select your Stone Shape and Quality</h2>
              <p>
                Use the filters below to design your perfect engagement ring
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="two_btn">
            <div className="col-lg-2  "></div>
            <div className="col-lg-2 col-md-3 col-2"></div>

            <div className="col-lg-2 col-md-3 col-4">
              <button
                className={selectedButton === true ? "selected" : ""}
                onClick={() => handleModalNavigate(true, true)}
              >
                <img
                  src={labgrown}
                  alt="img of lab grown diamond"
                  style={{ width: "42px" }}
                />
                <h5>Lab Grown</h5>
              </button>
            </div>
            <div className="col-lg-2 col-md-3 col-4">
              <button
                className={selectedButton === false ? "selected" : ""}
                onClick={() => handleModalNavigate(false, false)}
              >
                <img
                  src={ndia}
                  alt="img of natural diamond"
                  style={{ width: "42px" }}
                />
                <h5>Natural</h5>
              </button>
            </div>
            <div className="col-lg-2 col-md-3 col-2"></div>
            <div className="col-lg-2   "></div>
          </div>
        </div>
      </div>

      <Modal
        isOpen={modal1}
        toggle={() => setmodal1(!modal1)}
        style={{ zIndex: "111111", position: "relative", top: "26%" }}
      >
        <ModalHeader toggle={() => setmodal1(!modal1)}></ModalHeader>

        <CustomModalBody>
          <h5>Before we continue</h5>
          <h2>CHOOSE YOUR SETTING</h2>
          <div className="choose_option">
            <div
              className="ring_pandet"
              onClick={() => {
                navigate("/engagementring");
              }}
            >
              <img
                src={ring}
                alt="img of natural diamond"
                style={{ width: "42px" }}
              />
              <span>Engagement Ring</span>
            </div>
          </div>
        </CustomModalBody>
      </Modal>

      <Modal
        isOpen={modal}
        toggle={() => setmodal(!modal)}
        style={{ zIndex: "111111", position: "relative", top: "26%" }}
      >
        <ModalHeader toggle={() => setmodal(!modal)}></ModalHeader>
        <CustomModalBody>
          <h5>Before we continue</h5>
          <h2>CHOOSE YOUR CENTER STONE</h2>
          <div className="choose_option">
            <div
              className="ring_pandet"
              onClick={() => handleModalNavigate(false, false)}
            >
              <img
                src={ndia}
                alt="img of natural diamond"
                style={{ width: "52px" }}
              />
              <span>Natural Diamond</span>
            </div>
            <div
              className="ring_pandet"
              onClick={() => handleModalNavigate(true, true)}
            >
              <img
                src={labgrown}
                alt="img of lab grown diamond"
                style={{ width: "52px" }}
              />
              <span>Lab Diamond</span>
            </div>
          </div>
        </CustomModalBody>
      </Modal>
    </Root>
  );
}
const Root = styled.section`
  padding: 20px 0px;
  margin: 0px 10px;

  .container-fluid {
    text-align: center;
    margin: 0px 10px;
    .col-lg-4   {
      padding: 0px;
      width: 32vw;
      text-align: center;
    }
  }
  .bord {
    border: 2px solid black !important;
    width: 32vw;
    height: 11vh;
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

    h2 {
      color: rgba(0, 0, 0);
      font-size: 30px;
    }
    p {
      font-size: 20px;
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
      align-items: center;
      justify-content: center;
      padding: 10px;
      gap: 10px;
      border: 2px solid transparent;
      border-radius: 5px;
      &.selected {
        border: 2px solid black;
        border-radius: 10px;
        font-weight: 600;
      }
    }
    svg {
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
    .col-4 {
      width: 28vw;
    }
    .column,
    .bord {
      padding: 5px;
      height: 5vh;
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

  /* *{text-align:center;
  } */

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

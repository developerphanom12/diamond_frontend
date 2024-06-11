import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import ndia from "../Images/naturaldiamond-removebg-preview.png";
import labgrown from "../Images/labgrowncopy-removebg.png";
 import ring from "../Images/Solitaire-removebg-preview.png"

export default function Section1() {
  const [selectedButton, setSelectedButton] = useState(2);
  const handleButtonClick = (buttonIndex) => {
    setSelectedButton(buttonIndex);
  };
  const [modal, setmodal] = useState(false);
  const [modal1, setmodal1] = useState(false);
  const navigate = useNavigate();


  return (
    <Root>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4" onClick={() => setmodal1(true)}>
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
              <svg
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.3289 6.5L7.32894 10.5L4.67102 7.84208"
                  stroke="currentColor"
                  stroke-width="0.75"
                  stroke-miterlimit="10"
                ></path>
                <rect
                  x="0.375"
                  y="0.875"
                  width="15.25"
                  height="15.25"
                  rx="7.625"
                  stroke="currentColor"
                  stroke-width="0.75"
                ></rect>
              </svg>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="column bord" onClick={() => setmodal(true)}>
              <div className="d-flex">
                <h2>2</h2>
                <div className="flex-column">
                  <span>Select your</span>
                  <h6>Stone</h6>
                </div>
              </div>
              <svg
                viewBox="0 0 18 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.49173 2.78856L4.81532 4.81791L5.9079 6.59697L5.2688 6.98946L3.89566 4.75357L5.91351 2.3109L6.49173 2.78856Z"
                  fill="currentColor"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.9015 0.5H4.37073L0.0175781 4.85327L8.63245 12.5L17.2405 4.86609L17.2548 4.85327L12.9015 0.5ZM12.5908 1.25L16.1614 4.82055L9.93921 10.3386L13.3692 4.75356L10.4749 1.25H12.5908ZM12.4495 4.81791L8.4481 11.3335L1.11072 4.8208L4.6814 1.25H9.50212L12.4495 4.81791Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="column">
              <div className="d-flex ">
                <h2>3</h2>
                <div className="flex-column">
                  <span>Complete</span>
                  <h6>Ring</h6>
                </div>
              </div>
              <svg
                viewBox="0 0 14 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.0176 10.4175C13.0176 14.0396 10.0977 16.9869 6.50879 16.9869C2.91992 16.9869 0 14.0396 0 10.4175C0 7.49785 1.89844 5.01995 4.51404 4.16765L5.17725 4.7625C2.64258 5.372 0.75 7.67314 0.75 10.4175C0.75 13.6265 3.33301 16.2369 6.50879 16.2369C9.68457 16.2369 12.2676 13.6265 12.2676 10.4175C12.2676 7.67278 10.3745 5.37127 7.83911 4.76213L8.50293 4.1674C11.1188 5.01945 13.0176 7.49761 13.0176 10.4175ZM9.77808 1.68169L9.77271 1.68657L6.73926 4.40508L6.73242 4.42144L6.72461 4.41827L6.50769 4.61261L6.505 4.61017L6.50231 4.61261L3.23473 1.6817L4.88585 0.0131226H8.12157L9.77282 1.6817L9.76855 1.68561L9.77808 1.68169ZM7.91297 0.513113H7.17005L7.90333 1.62944L7.48951 2.61626L8.3921 2.24761L9.04786 1.65996L7.91297 0.513113ZM3.95948 1.66008L4.60499 2.23906L6.50904 3.01665L6.83521 2.88335L7.33887 1.68218L6.57105 0.513113H5.09449L3.95948 1.66008Z"
                  fill="currentColor"
                ></path>
              </svg>{" "}
            </div>
          </div>
        </div>

        <div className="heading">
          <h2>Select your Stone Shape and Quality</h2>
          <p>Use the filters below to design your perfect engagement ring</p>
        </div>

        <div className="two_btn">
          <button
            className={selectedButton === 1 ? "selected" : ""}
            onClick={() => handleButtonClick(1)}
          >
            <img
              src={labgrown}
              alt="img of lab grown diamond"
              style={{ width: "42px" }}
            />
            <h5>Lab Grown</h5>
          </button>

          <button
            className={selectedButton === 2 ? "selected" : ""}
            onClick={() => handleButtonClick(2)}
          >
            <img
              src={ndia}
              alt="img of natural diamond"
              style={{ width: "42px" }}
            />
            <h5>Natural</h5>
          </button>
        </div>
      </div>

      <Modal isOpen={modal1} toggle={() => setmodal1(!modal1)}>
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
        style={{ zIndex: "111111", position: "relative" }}
      >
        <ModalHeader toggle={() => setmodal(!modal)}></ModalHeader>

        <CustomModalBody>
          <h5>Before we continue</h5>
          <h2>CHOOSE YOUR CENTER STONE</h2>
          <div className="choose_option">
            <div
              className="ring_pandet"
              onClick={() => {
                navigate("/naturaldiamond");
              }}
            >
              <img
                src={ndia}
                alt="img of natural diamond"
                style={{ width: "42px" }}
              />
              <span>Natural Diamond</span>
            </div>
            <div className="ring_pandet">
              <img
                src={labgrown}
                alt="img of lab grown diamond"
                style={{ width: "42px" }}
              />
              <span>Lab Diamond</span>
            </div>

            {/* <div
              className="ring_pandet"
              onClick={() => {
                navigate("/gemstone");
              }}
            >
              <svg
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.94139 16.0419C5.53661 16.0419 3.58022 14.079 3.58022 11.6669C3.58022 11.4441 3.60199 11.2254 3.63495 11.0097C4.09963 11.1733 4.56248 11.2591 5.0174 11.2591C5.10773 11.2591 5.19807 11.2559 5.2884 11.2494C5.81167 11.2111 6.18196 11.0736 6.54002 10.9401C6.88507 10.8124 7.2106 10.6911 7.67527 10.6521C7.95939 10.6272 8.24636 10.6413 8.53567 10.6882L8.88519 10.3385C8.46466 10.2417 8.04779 10.2021 7.64109 10.237C7.11944 10.2809 6.75079 10.4177 6.39516 10.5495C6.04847 10.6781 5.72133 10.8002 5.25747 10.8343C4.76146 10.8701 4.24723 10.7862 3.72853 10.5978C4.10837 9.10644 5.2477 7.88004 6.77521 7.45462L7.00388 7.39115V4.69991H8.87888V7.39115L9.10756 7.45462C10.1887 7.75532 11.0713 8.46262 11.6358 9.37499H12.3664C11.7774 8.23781 10.763 7.33896 9.50388 6.92239V4.6999H10.0247C10.1972 4.6999 10.3372 4.55992 10.3372 4.3874C10.3372 4.21487 10.1972 4.0749 10.0247 4.0749H9.50388V4.07408H6.37888V4.0749H5.85805C5.68552 4.0749 5.54555 4.21487 5.54555 4.3874C5.54555 4.55992 5.68552 4.6999 5.85805 4.6999H6.37888V6.92239C4.3517 7.59377 2.95522 9.5111 2.95522 11.6669C2.95522 14.424 5.19236 16.6669 7.94138 16.6669C8.74176 16.6669 9.49595 16.4722 10.1669 16.1346L9.66033 15.685C9.13227 15.9133 8.55193 16.0419 7.94138 16.0419H7.94139Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M15.554 10H10.1076L7.32839 12.7793L12.8285 17.6613L18.3242 12.7875H18.3243L18.3333 12.7793L15.554 10ZM10.3665 10.625H13.3115L14.8327 12.8037L12.7929 16.794L8.23934 12.7523L10.3665 10.625H10.3665ZM13.5903 16.1503L15.3177 12.7712L13.8201 10.625H15.2951L17.4222 12.7521L13.5903 16.1503V16.1503Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M10.6499 12.7344L11.1764 11.4201L9.75697 12.8396L12.566 15.333L10.6499 12.7344Z"
                  fill="currentColor"
                ></path>
              </svg>{" "}
              <span>Gemstones & Moissanite</span>
            </div> */}
          </div>
        </CustomModalBody>
      </Modal>
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
    padding: 10px 15px;
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
    gap: 10px;
    flex-wrap: wrap;

    button {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      padding: 10px 70px;
      gap: 10px;
      border: 2px solid transparent;
      border-radius: 10px;
      &.selected {
        border: 2px solid black;
        border-radius: 10px;
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
`;

const CustomModalBody = styled(ModalBody)`
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
      svg {
        width: 56px;
        height: 56px;
      }
      span {
        font-size: 14px;
      }
    }
  }
  .modal-dialog {
    margin-top: 82px !important;
  }
`;

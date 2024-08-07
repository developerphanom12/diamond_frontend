import React, { useState } from "react";
import styled from "styled-components";
import { GiDoorRingHandle } from "react-icons/gi";
import { GiDiamondRing } from "react-icons/gi";
import { BsQuestionCircleFill } from "react-icons/bs";

export default function Section1() {
  const [selectedButton, setSelectedButton] = useState(2);
  const handleButtonClick = (buttonIndex) => {
    setSelectedButton(buttonIndex);
  };


  return (
    <Root>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4">
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
              {/* <a href="/">View/Change</a>*/}
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
            <div className="column bord">
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

          <button  className={selectedButton === 1 ? "selected" : ""}
              onClick={() => handleButtonClick(1)}>
            <svg
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.45717 15.5267L10.1613 16.1517H4.51881C4.03216 16.1517 3.58782 15.9043 3.33228 15.4901C3.07593 15.0767 3.05315 14.5689 3.27043 14.1327L6.62168 7.43263V4.75685H6.10084C5.92832 4.75685 5.78834 4.61688 5.78834 4.44435C5.78834 4.27183 5.92832 4.13185 6.10084 4.13185H10.2675C10.44 4.13185 10.58 4.27183 10.58 4.44435C10.58 4.61688 10.44 4.75685 10.2675 4.75685H9.74668V7.43263L10.7179 9.37498H10.0827C10.0628 9.37498 10.0449 9.38453 10.0253 9.38637L9.15504 7.64585C9.13246 7.60068 9.12503 7.55308 9.12513 7.50588H9.12168V4.75685H7.24668V7.50588H7.24322C7.24332 7.55308 7.23589 7.60068 7.21331 7.64585L5.7739 10.5243H8.67449L8.25783 10.9409H5.56557L3.82953 14.4126C3.7099 14.6527 3.7221 14.9335 3.86371 15.1621C4.00531 15.39 4.25027 15.5267 4.51882 15.5267H9.45718L9.45717 15.5267ZM18.3084 12.7793L18.2993 12.7875H18.2992L12.8035 17.6613L7.30344 12.7793L10.0827 9.99998H15.529L18.3084 12.7793V12.7793ZM8.21439 12.7523L12.7679 16.794L14.8077 12.8037L13.2865 10.625H10.3416L8.21438 12.7523H8.21439ZM17.3972 12.7521L15.2702 10.625H13.7951L15.2927 12.7712L13.5653 16.1503L17.3972 12.7521ZM10.625 12.7344L11.1515 11.4201L9.73203 12.8396L12.5411 15.333L10.625 12.7344V12.7344Z"
                fill="currentColor"
              ></path>
            </svg>
            <h5>Lab Grown</h5>
          </button>

          <button  className={selectedButton === 2 ? "selected" : ""}
              onClick={() => handleButtonClick(2)}>
            <svg
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.78295 14.4651L6.76871 13.2668C6.75812 13.112 6.73372 12.959 6.70584 12.8068C6.70564 12.8037 6.70381 12.8011 6.70371 12.7979C6.70361 12.797 6.70422 12.796 6.70422 12.7951C6.66536 12.5865 6.6149 12.3803 6.5441 12.1796C6.38459 11.7303 6.20474 11.2209 5.819 11.1981C5.80923 11.1981 5.80028 11.1973 5.79133 11.1973C5.46582 11.1973 5.25667 11.5562 5.07112 11.8736C5.01883 11.9631 4.98109 12.0597 4.93907 12.1541C4.67947 11.542 4.53319 10.8723 4.51223 10.1716C4.64661 10.2365 4.79371 10.2785 4.96369 10.2785C4.98078 10.2785 4.99787 10.2785 5.01496 10.2777C5.58299 10.2574 5.89387 9.71292 5.99559 9.5347C6.10138 9.35078 6.13068 9.22057 6.19416 8.93655C6.21776 8.83239 6.24624 8.7038 6.28693 8.5386C6.3496 8.279 6.40982 8.05846 6.45702 7.89163L7.59471 7.69631C8.18146 7.48635 8.56232 7.0827 8.56639 6.66929C8.57209 6.16962 8.05532 5.85956 7.59797 5.58449C7.43703 5.48806 7.26858 5.40525 7.09442 5.33527C7.94485 4.79979 8.94766 4.48505 10.0247 4.48505C11.2837 4.48505 12.4417 4.91321 13.3715 5.62519H12.1064C10.8434 5.62519 9.81638 6.6522 9.81638 7.91523L10.3898 9.37499H10.8296L10.233 7.87617C10.2542 6.86136 11.0867 6.04186 12.1064 6.04186H13.8586C14.7541 6.90825 15.3575 8.07311 15.507 9.375H15.554C15.7197 9.375 15.8787 9.44081 15.9959 9.5581L16.1559 9.71822C16.0041 6.46342 13.3163 3.86006 10.0247 3.86006C6.63605 3.86006 3.87889 6.61722 3.87889 10.0059C3.87889 13.3946 6.63605 16.1517 10.0247 16.1517C10.0763 16.1517 10.1262 16.1452 10.1775 16.144L9.42729 15.4781C8.44757 15.3702 7.54141 15.0181 6.78294 14.4651H6.78295ZM6.66393 5.63578C6.9156 5.71146 7.15954 5.8082 7.38476 5.94258C7.74446 6.15905 8.15217 6.404 8.14973 6.66524C8.14729 6.89554 7.86165 7.1584 7.49055 7.29512L6.12906 7.52461L6.09243 7.64994C6.04117 7.82734 5.96385 8.1016 5.88166 8.44014C5.84097 8.60778 5.81167 8.7388 5.78807 8.84541C5.72867 9.10909 5.70832 9.19779 5.63427 9.32718C5.56021 9.45657 5.3356 9.84883 4.9995 9.86103C4.79605 9.86927 4.64193 9.81078 4.52078 9.67182C4.61976 8.02987 5.43631 6.58202 6.66393 5.63577V5.63578ZM5.19421 12.6733C5.25006 12.4672 5.3234 12.2675 5.43163 12.0835C5.49917 11.9672 5.70507 11.614 5.79215 11.614C5.79215 11.614 5.79297 11.6148 5.79377 11.6148C5.90445 11.6213 6.09 12.1462 6.15185 12.3204C6.26252 12.6337 6.33007 12.9624 6.35286 13.2839L6.36242 14.126C5.89652 13.7113 5.49877 13.2227 5.1942 12.6733L5.19421 12.6733ZM15.554 10H10.1076L7.32841 12.7793L12.8285 17.6613L18.3242 12.7875H18.3243L18.3333 12.7793L15.554 10V10ZM10.3665 10.625H13.3115L14.8327 12.8037L12.7929 16.794L8.23936 12.7523L10.3665 10.625H10.3665ZM13.5903 16.1503L15.3177 12.7712L13.8201 10.625H15.2951L17.4222 12.7521L13.5903 16.1503V16.1503ZM12.566 15.333L9.75698 12.8397L11.1765 11.4201L10.6499 12.7344L12.566 15.333Z"
                fill="currentColor"
              ></path>
            </svg>
            <h5>Natural</h5>
          </button>

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

    button{
      display: flex;
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

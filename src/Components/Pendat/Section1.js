import React from "react";
import styled from "styled-components";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import { IoDiamondSharp } from "react-icons/io5";
import { useState } from "react";
import {  useNavigate } from "react-router-dom";
import { GiPearlNecklace } from "react-icons/gi";
import { GiHeartNecklace } from "react-icons/gi";



export default function Pendats(){
const [modal, setmodal] = useState(false);
const navigate = useNavigate();

  return (
    <Root>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4">
            <div className="column bord" onClick={() => setmodal(true)}>
              <div className="d-flex">
                <h2>1</h2>
                <div className="flex-column">
                  <span>Select your</span>
                  <h6>Setting</h6>
                </div>
              </div>
       
              <GiPearlNecklace />

            </div>
          </div>

          <div className="col-lg-4">
            <div className="column">
              <div className="d-flex">
                <h2>2</h2>
                <div className="flex-column">
                  <span>Select your</span>
                  <h6>Stone</h6>
                </div>
              </div>
              <a href="/">Browse Diamonds</a>
              <IoDiamondSharp />
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
             
              <GiHeartNecklace />
            </div>
          </div>
        </div>
      </div>

      <Modal isOpen={modal} toggle={() => setmodal(!modal)}>
        <ModalHeader toggle={() => setmodal(!modal)}></ModalHeader>

        <CustomModalBody>
          <h5>Before we continue</h5>
          <h2>CHOOSE YOUR SETTING</h2>
          <div className="choose_option">
            <div className="ring_pandet" onClick={()=>{navigate("/ring")}}>
              <svg
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M24 15.5C19.3056 15.5 15.5 19.3056 15.5 24C15.5 28.6944 19.3056 32.5 24 32.5C28.6944 32.5 32.5 28.6944 32.5 24C32.5 19.3056 28.6944 15.5 24 15.5ZM14.5 24C14.5 18.7533 18.7533 14.5 24 14.5C29.2467 14.5 33.5 18.7533 33.5 24C33.5 29.2467 29.2467 33.5 24 33.5C18.7533 33.5 14.5 29.2467 14.5 24Z"
                  fill="black"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M24 16.799L30.2734 20.421V27.6648L24 31.2868L17.7266 27.6648V20.421L24 16.799ZM18.4766 20.854V27.2318L24 30.4207L29.5234 27.2318V20.854L24 17.6651L18.4766 20.854Z"
                  fill="black"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M24.375 15V17.4964H23.625V15H24.375Z"
                  fill="black"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16.7171 19.1943L18.3188 20.3317L17.8845 20.9432L16.2829 19.8057L16.7171 19.1943Z"
                  fill="black"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M15.8581 27.9508L17.9611 27.1007L18.2422 27.796L16.1392 28.6461L15.8581 27.9508Z"
                  fill="black"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M23.625 33V30.6187H24.375V33H23.625Z"
                  fill="black"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M31.2942 28.8135L29.6925 27.7618L30.1042 27.1349L31.7058 28.1865L31.2942 28.8135Z"
                  fill="black"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M31.7171 19.8057L30.1155 20.9432L29.6812 20.3317L31.2829 19.1943L31.7171 19.8057Z"
                  fill="black"
                ></path>
                <path
                  d="M24.2518 19.5247L28.2518 21.5247V26.4389L27.2518 22.5247L24.2518 19.5247Z"
                  fill="black"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4.5 23C3.94827 23 3.5 23.4483 3.5 24C3.5 24.5517 3.94827 25 4.5 25H14.5V23H4.5ZM2.5 24C2.5 22.896 3.39599 22 4.5 22H15.5V26H4.5C3.39599 26 2.5 25.104 2.5 24Z"
                  fill="black"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M43.5 25C44.0517 25 44.5 24.5517 44.5 24C44.5 23.4483 44.0517 23 43.5 23H33.5V25H43.5ZM45.5 24C45.5 25.104 44.604 26 43.5 26H32.5V22H43.5C44.604 22 45.5 22.896 45.5 24Z"
                  fill="black"
                ></path>
              </svg>
              <span>Engagement Ring</span>
            </div>
            <div className="ring_pandet" onClick={()=>{navigate("/pendats")}}>
              <svg
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="18.516"
                  cy="21.8034"
                  r="11.1894"
                  stroke="currentColor"
                ></circle>
                <circle
                  cx="18.516"
                  cy="21.8036"
                  r="8.99765"
                  stroke="currentColor"
                ></circle>
                <circle
                  cx="18.5159"
                  cy="21.8036"
                  r="6.0753"
                  stroke="currentColor"
                ></circle>
                <path
                  d="M18.5158 15.2283V13.4019M18.5158 30.2054V27.6483M12.3058 21.8036H9.74878M24.7258 21.8036H27.2829M25.4564 27.6483L22.8994 25.4566M14.1323 17.4201L12.3058 15.9589M12.3058 27.6483L13.767 26.1872M22.8994 17.7854L25.0911 15.9589"
                  stroke="currentColor"
                ></path>
                <path
                  d="M5 5.36529L11.21 13.0365M24.4466 13.0365L30.9359 5"
                  stroke="currentColor"
                ></path>
              </svg>
              <span>Pendant</span>
            </div>
          </div>
        </CustomModalBody>
      </Modal>



    </Root>
  );
}
const Root = styled.section`
    padding: 20px 20px 0;
.bord{
  border:2px solid black! important;
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
      &:hover {
        text-decoration: underline;
      }
    }
  }

`;
const CustomModalBody = styled(ModalBody)`
 padding:30px 85px 50px;
  *{text-align:center;
  }

  h2 {
    font-size: 25px;
    margin-top: 20px;
    color:#000000;
    font-weight:700;
}
.choose_option{
  display:flex;
  gap:70px;
 .ring_pandet{
  flex-direction: column;
    display: flex;
    svg{
    width:110px;
    height:87px;
    }

 }

}
`;


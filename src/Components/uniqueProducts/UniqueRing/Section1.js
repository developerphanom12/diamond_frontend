import React from "react";
import styled from "styled-components";
import { ModalBody } from "reactstrap";

export default function Section1() {
  return (
    <Root>
      <div className="container-fluid ">
        <div className="row ">
          <div className="col-lg-12">
            <div className="heading text-center">
              <h2>Lab Diamond Engagement Rings</h2>
              <p>
                Discover our collection of made to order engagement rings and
                customize it to your preference
              </p>
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
    .heading {
      padding: 10px 24px;
      h2 {
        color: rgba(0, 0, 0);
        font-size: 28px;
        margin-bottom: 10px;
      }
      p {
        font-size: 18px;
        font-weight: 500;
        line-height: 1.75rem;
      }
    }
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
    button {
      color: rgba(128, 128, 128);
      text-decoration: underline;
      border: 1px solid transparent;
      font-weight: 500;
      font-size: 12px;
      background: none;
      &:hover {
        text-decoration: underline;
      }
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
      button {
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

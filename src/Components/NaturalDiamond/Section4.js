import React from "react";
import styled from "styled-components";
import dia from "../Images/dia.webp";
import{ useNavigate } from "react-router-dom"
export default function Section4() {
  const navigate = useNavigate();
  return (
    <Root>
      <div className="main_div">
        <div className="subdiv">
          <img src={dia} alt="img" />
          <div className="hov_content">
            <div className="heading">
              <h5>Round</h5>
              <p>$26,192</p>
            </div>

            <div className="var">
              <div className="var_types">
                <h5>0.5</h5>
                <p>carat</p>
              </div>
              <div className="var_types">
                <h5>J</h5>
                <p>color</p>
              </div>

              <div className="var_types">
                <h5>Sl1</h5>
                <p>Clarity</p>
              </div>

              <div className="var_types">
                <h5>Excellent</h5>
                <p>Cut</p>
              </div>
            </div>

            <div className="btn">
              <button className="info_btn">More Info</button>
              <button className="add_btn" onClick={ ()=> {navigate("/productpage")} }>Complete your ring</button>
            </div>
          </div>
        </div>


      </div>
    </Root>
  );
}

const Root = styled.section`
  padding: 0 20px;
  .main_div {
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;
    margin-bottom: 100px;

    .subdiv {
      width: 25%;
      height: 400px;
      border: 3px solid #f7f7f7;
      border-radius: 20px;
      padding: 20px;
      overflow: hidden;
      position: relative;
      margin-bottom: 20px;

      img {
        width: 100%;
      }

      &:hover {
        border: 3px solid black;
        overflow: unset;
      }

      &:hover .hov_content {
        z-index: 1;
        position: absolute;
        background-color: white;
        border: 3px solid black;
        padding: 0 20px 0;
        left: -3px;
        overflow: hidden;
        width: 327px;
        border-top: none;
        border-radius: 0 0 20px 20px;
      }

      &:hover .var {
        .var_types {
          h5 {
            font-size: 15px;
            font-weight: 700;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            /* transition:0.2s; */
          }
          p {
            font-size: 10px;
            /* transition:0.2s; */
          }
        }
      }
    }

    .heading {
      display: flex;
      justify-content: space-between;
      margin-top: 20px;

      h5 {
        font-size: 14px;
        color: #000000;
        font-weight: 400;
      }
      p {
        color: rgba(102, 102, 102);
        font-size: 14px;
        opacity: 1;
      }
    }

    .var {
      display: flex;
      flex: 1;
      justify-content: center;
      gap: 30px;

      .var_types {
        flex-direction: column;
        flex: 1;
        text-align: center;
        h5 {
          font-size: 12px;
          font-weight: 500;
          color: #000000;
          text-transform: capitalize;
          margin-bottom: 2px;
        }
        p {
          font-size: 10px;
          color: rgba(102, 102, 102);
          text-transform: capitalize;
        }
      }
    }

    .btn {
      display: flex;
      gap: 6px;
      padding: 0 0 20px 0;
      .info_btn {
        padding: 12px 21px;
        border-radius: 25px;
        font-size: 13px;
        background-color: #fff;
      }

      .add_btn {
        background-color: black;
        color: white;
        padding: 12px 27px;
        border-radius: 25px;
        font-size: 13px;
      }
    }
  }
`;

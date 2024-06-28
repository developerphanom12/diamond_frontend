import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { ModalBody } from "reactstrap";
import { useDispatch } from "react-redux";

import noimg from "../../Images/eligantPacking.png";
import { setUniqueProduct } from "../../../redux/users/action";

export default function Section4({ data }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    // Placeholder for add to cart functionality
  };

  const handleUniqueRingDetail = (product) => {
    dispatch(setUniqueProduct(product));
    console.log("Navigating with product:", product);
    navigate('/uniqueringdetails', { state: { product } });
  };
  return (
    <Root>
      <div className="main_div">
        {data &&
          data.map((i, index) => {
            return (
              <div key={index} className="subdiv">
                <>
                  {i?.images?.edges?.[0]?.node?.src ? (
                    <img
                      src={i.images.edges[0].node.src}
                      alt="img"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://via.placeholder.com/283";
                      }}
                    />
                  ) : (
                    <div
                      style={{
                        backgroundColor: "#ccc",
                      }}
                    >
                      <img src={noimg} alt="img" />
                    </div>
                  )}
                </>

                <div className="hov_content">
                  <div className="d-flex   flex-column">
                    <div className="d-flex flex justify-content-between">
                      <h5 className="prd_name">{i?.title}</h5>
                    </div>
                    <>
                      <p className="prd_price pt-1 pb-1">
                        ${i?.variants?.edges?.[0]?.node?.price}:
                      </p>
                    </>
                  </div>

                  <div className="btn_div">
                    <button
                      className="info_btn"
                      onClick={() => handleUniqueRingDetail(i.id)}
                      style={{ fontSize: "10px" }}
                    >
                      More Info
                    </button>
                    <button
                      className="add_btn"
                      onClick={() => handleAddToCart(i.id)}
                    >
                      Add To Cart
                    </button>
                  </div>

                  <div className="note">
                    <p className="note">
                      Pay in 12 interest-free installments of $
                      <span>Learn more</span>
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </Root>
  );
}

const Root = styled.section`
  padding: 0 20px;

  .main_div {
    display: flex;
    flex-wrap: wrap;
    position: relative;
    gap: 4px;
    margin-top: 20px;
    .subdiv {
      width: 24vw;
      height: 50vh;
      border: 3px solid #f7f7f7;
      border-radius: 20px;
      padding: 5px;
      overflow: hidden;
      position: relative;
      margin-bottom: 20px;
      img {
        width: 95%;
        height: 86%;
      }
      &:hover {
        border: 3px solid black;
        overflow: unset;
        transform: scale(1.1);
        z-index: 1;
      }
      .hov_content {
        display: flex;
        flex-wrap: wrap;
        .flex-column {
          display: flex;
          width: 100%;
        }
      }

      &:hover .hov_content {
        width: 24vw;
        z-index: 1;
        position: absolute;
        background-color: white;
        border: 3px solid black;
        padding: 0 20px 0;
        left: -3px;
        overflow: hidden;
        border-top: none;
        border-radius: 0 0 20px 20px;
      }

      .prd_name {
        font-size: 14px;
      }
      .prd_price {
        font-size: 13px;
        width: 100%;
      }
      .white_color,
      .golden_color,
      .red_color {
        height: 18px;
        width: 18px;
        text-align: center;
        border-radius: 50px;
        margin-left: 10px;
      }

      .white_color {
        background-color: #ebebeb;
      }

      .golden_color {
        background-color: #ffdfb0;
      }

      .red_color {
        background-color: #efcbcb;
      }

      .btn_div {
        display: flex;
        justify-content: space-between;
        padding: 0;
        width: 100%;
        gap: 10px;
        .info_btn {
          flex: 1;
          padding: 12px 21px;
          border-radius: 25px;
          font-size: 13px;
          background-color: #fff;
          border: 2px solid black;
        }
        .add_btn {
          flex: 1;
          background-color: black;
          border: 2px solid black;
          color: white;
          padding: 5px 17px;
          border-radius: 25px;
          font-size: 13px;
        }
      }

      .note {
        p {
          font-size: 10px;
          margin-top: 20px;
          text-align: center;
          margin-top: 8px;
        }
        span {
          text-decoration: underline;
          cursor: pointer;
        }
      }
    }
  }
  @media (max-width: 867px) {
    padding: 0px 10px;
    .main_div {
      .subdiv {
        width: 45vw;
        height: 36vh;
        &:hover .hov_content {
          width: 45vw;
          padding: 0px 10px;
        }
        .prd_name {
          font-size: 12px;
          margin-bottom: 9px;
        }
        .prd_price {
          font-size: 11px;
          margin-bottom: 10px;
        }
        .white_color,
        .golden_color,
        .red_color {
          height: 10px;
          width: 10px;
        }
        .btn_div .info_btn,
        .btn_div .add_btn {
          font-size: 11px;
          padding: 3px 10px;
          border-radius: 15px;
        }
      }
    }
  }
`;
const CustomModalBody = styled(ModalBody)`
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

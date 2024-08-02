import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUniqueProduct } from "../../../redux/users/action";
import nopro from "../../Images/product-not-found.jpg";
import { NoProduct } from "../../NoProduct";

export default function Section4({ data }) {
  const [visibleProducts, setVisibleProducts] = useState(20);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleUniqueRingDetail = (product) => {
    dispatch(setUniqueProduct(product));
    console.log("Navigating with product:", product);
    navigate("/uniqueringdetails", { state: { product } });
  };

  const handleLoadMore = () => {
    setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 20);
  };
  return (
    <Root>
      <div className="main_div">
        {data && data.length > 0 ? (
          data.slice(0, visibleProducts).map((i, index) => {
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
                      <img src={nopro} alt="img" />
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
                      onClick={() => handleUniqueRingDetail(i.id)}
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
          })
        ) : (
          <div style={{ width: "100vw", height: "80vh" }}>
            <NoProduct />
          </div>
        )}
      </div>


      <div className="load_btn">
        {visibleProducts < data.length && (
          <button onClick={handleLoadMore}>Load More</button>
        )}
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
      padding: 15px;
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
          cursor: pointer;
        }
        .add_btn {
          flex: 1;
          background-color: black;
          border: 2px solid black;
          color: white;
          padding: 5px 17px;
          border-radius: 25px;
          font-size: 13px;
          cursor: pointer;
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

.load_btn {
    display:flex;
    justify-content:center;
    padding:20px 0;
    button{
      border:2px solid black;
      background-color:transparent;
      font-size:16px;
      color:#000000;
      font-weight:500;
      padding:10px 30px;
      border-radius: 50px;
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
          padding: 10px 10px;
          border-radius: 15px;
        }
      }
    }
  }
`;

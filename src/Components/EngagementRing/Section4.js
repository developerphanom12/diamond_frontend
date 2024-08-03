import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setDiamondType, setProductIds } from "../../redux/users/action";
import ndia from "../../Images/naturaldiamond-removebg-preview.png";
import labgrown from "../../Images/labgrowncopy-removebg.png";
import { EXCHANGE_URLS } from "../URLS";
import axios from "axios";
import { NoProduct } from "../NoProduct";

export default function Section4({ products }) {
  const [modal, setModal] = useState(false);
  const [productById, setProductById] = useState("");
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [visibleProducts, setVisibleProducts] = useState(20);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAddDiamondClick = (productIds) => {
    setSelectedProductId(productIds);
    setModal(true);
    dispatch(setProductIds(productIds));
  };

  const handleModalNavigate = (labgrownValue) => {
    console.log("Navigating with labgrownValue:", labgrownValue);
    dispatch(setDiamondType(labgrownValue));
    navigate("/naturaldiamond", {
      state: { labgrownValue, products: selectedProductId },
    });
  };

  const handleNavigateDetail = async (products) => {
    const productId = products?.node?.id;
    console.log("products", productId);
    try {
      const response = await axios.get(
        `${EXCHANGE_URLS}/fetchproductsbyid?productId=${productId}`
      );
      if (response?.status === 200) {
        const productData = response?.data?.data;
        console.log("nikeee", productData);
        setProductById(productData);
        navigate("/ringdetails", { state: { products: productData } });
      }
    } catch (error) {
      console.error("Error fetching diamond details:", error);
    }
  };

  const handleLoadMore = () => {
    setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 20);
  };

  return (
    <Root>
      <div className="main_div">
        {products &&
          products.slice(0, visibleProducts).map((i, index) => {
            return (
              <div key={index} className="subdiv">
                <>
                  {i?.node?.images?.edges?.[0]?.node?.originalSrc ? (
                    <img
                      src={i.node.images.edges[0].node.originalSrc}
                      alt={i.node.images.edges[0].node.altText || "img"}
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
                      <NoProduct />
                    </div>
                  )}
                </>

                <div className="hov_content">
                  <div className="d-flex   flex-column">
                    <div className="d-flex flex justify-content-between">
                      <h5 className="prd_name">{i?.node.title}</h5>
                      <div className="d-flex">
                        <span className="white_color"></span>
                        <span className="golden_color"></span>
                        <span className="red_color"></span>
                      </div>
                    </div>
                    <>
                      <p className="prd_price pt-1 pb-1">
                        max-{" "}
                        {i?.node?.priceRange?.maxVariantPrice?.currencyCode}:
                        {i?.node?.priceRange?.maxVariantPrice?.amount} min-{" "}
                        {i?.node?.priceRange?.maxVariantPrice?.currencyCode}:
                        {i?.node?.priceRange?.minVariantPrice?.amount}{" "}
                      </p>
                    </>
                  </div>

                  <div className="btn_div">
                    <button
                      className="info_btn"
                      onClick={() => handleNavigateDetail(i)}
                    >
                      More Info
                    </button>

                    <button
                      className="add_btn"
                      onClick={() => handleAddDiamondClick(i?.node)}
                    >
                      Add Diamond
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

      <div className="load_btn">
        {visibleProducts < products.length && (
          <button onClick={handleLoadMore}>Load More</button>
        )}
      </div>

      <Modal isOpen={modal} toggle={() => setModal(!modal)}>
        <ModalHeader toggle={() => setModal(!modal)}></ModalHeader>

        <CustomModalBody>
          <h5>Before we continue</h5>
          <h2>CHOOSE YOUR CENTER STONE</h2>
          <div className="choose_option">
            <div
              className="ring_pandet"
              onClick={() => handleModalNavigate(false)}
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
              onClick={() => handleModalNavigate(true)}
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
  padding: 0 20px;

  .main_div {
    display: flex;
    flex-wrap: wrap;
    position: relative;
    gap: 4px;
    margin-top: 20px;
    .subdiv {
      width: 24vw;
      height: 55vh;
      border: 3px solid #f7f7f7;
      border-radius: 20px;
      padding: 5px;
      overflow: hidden;
      position: relative;
      margin-bottom: 20px;
      padding: 15px;
      img {
        width: 100%;
        height: 88%;
      }
      &:hover {
        border: 3px solid black;
        overflow: unset;
        /* transform: scale(1.1); */
        /* z-index: 1; */
        padding: 15px;
      }
      .hov_content {
        display: flex;
        flex-wrap: wrap;
        margin-top: 20px;
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
          /* flex: 1; */
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

  .load_btn {
    display: flex;
    justify-content: center;
    padding: 20px 0;
    button {
      border: 2px solid black;
      background-color: transparent;
      font-size: 16px;
      color: #000000;
      font-weight: 500;
      padding: 10px 30px;
      border-radius: 50px;
    }
  }

  @media (max-width: 567px) {
    padding: 0px 10px;

    .main_div {
      gap: 15px;
      margin-top: 0;
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
          flex: 1;
          font-size: 11px;
          padding: 3px 10px;
          border-radius: 15px;
        }
      }
    }
  }

  @media (min-width: 567px) and (max-width: 992px) {
    padding: 0px 10px;

    .main_div {
      padding: 0 20px;
      gap: 15px;
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
          flex: 1;
          font-size: 11px;
          padding: 10px 10px;
          border-radius: 15px;
        }
      }
    }

    .main_div .subdiv img {
      width: 100%;
      height: 92%;
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

  @media (max-width: 567px) {
    padding: 20px 0;
  }
`;

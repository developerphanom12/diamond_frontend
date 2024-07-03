import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import noimg from "../Images/s6.png";
import { EXCHANGE_URLS } from "../URLS";
import axios from "axios";
import { setDiamondById } from "../../redux/users/action";
import { useDispatch, useSelector } from "react-redux";
import { useLoading } from "../LoadingContext";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import ring from "../Images/Solitaire-removebg-preview.png";
import Drawer from "react-modern-drawer";

export default function Section4({ value }) {
  const [modal1, setModal1] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [diamondByIdState, setDiamondByIdState] = useState("");
  const { setLoading } = useLoading();
  const productIds = useSelector((state) => state.users.productIds);

  const location = useLocation();
  const { products } = location.state || {};
  //  ------------------------------------
  const [isOpen, setIsOpen] = React.useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // diamondbyId
  const apiDetail = async (diamond) => {
    const diamondId = diamond?.id;
    console.log("xxxxx", diamondId);
    setLoading(true);
    try {
      const response = await axios.get(
        `${EXCHANGE_URLS}/diamondbyId?id=${diamondId}`
      );
      if (response?.status === 200) {
        const diamondData = response?.data?.diamondData;
        setDiamondByIdState(diamondData);
        dispatch(setDiamondById(diamondData));
      }
    } catch (error) {
      console.error("Error fetching diamond details:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (value && value.length > 0) {
      apiDetail(value[0]?.diamond);
    }
  }, [value]);

  const handleClickDiamondDetail = (products, diamond) => {
    apiDetail(diamond);
    setSelectedProduct({ diamond, products });
    if (screenWidth <= 567) {
      setIsOpen(true);
    } else {
      navigate("/diamonddetails", { state: { products, diamond } });
    }
  };
  const handleNavigate = (diamond, products) => {
    if (productIds && productIds?.id) {
      navigate("/productpage", { state: { diamond, products } });
    } else {
      setModal1(true);
    }
  };

  const drawerContent = (
    <div className="main_div">
      {selectedProduct ? (
        <div className="subdiv" >
          <img
            src={selectedProduct.diamond?.image || noimg}
            alt="diamond images"
          />
          <div className="hov_content">
            <div className="heading">
              <h5>{selectedProduct.diamond?.certificate?.shape}</h5>
              <p>${selectedProduct.diamond?.price}</p>
            </div>
            <div className="var">
              <div className="var_types">
                <h5>{selectedProduct.diamond?.certificate?.carats}</h5>
                <p>carats</p>
              </div>
              <div className="var_types">
                <h5>{selectedProduct.diamond?.certificate?.color}</h5>
                <p>color</p>
              </div>
              <div className="var_types">
                <h5>{selectedProduct.diamond?.certificate?.clarity}</h5>
                <p>Clarity</p>
              </div>
              <div className="var_types">
                <h5>{selectedProduct.diamond?.certificate?.cut}</h5>
                <p>Cut</p>
              </div>
            </div>
            <div className="btn_div">
              <button
                className="info_btn"
                onClick={() =>
                  handleClickDiamondDetail(
                    selectedProduct.products,
                    selectedProduct.diamond
                  )
                }
              >
                More Info
              </button>
              <button
                className="add_btn"
                onClick={() => {
                  handleNavigate(
                    selectedProduct.diamond,
                    selectedProduct.products
                  );
                }}
              >
                Complete your ring
              </button>
            </div>
          </div>
        </div>
      ) : (
        value &&
        value.map((i, index) => (
          <div key={index} className="subdiv">
            <img src={i?.diamond?.image || noimg} alt="diamond images" />
            <div className="hov_content">
              <div className="heading">
                <h5>{i?.diamond?.certificate?.shape}</h5>
                <p>${i?.price}</p>
              </div>
              <div className="var">
                <div className="var_types">
                  <h5>{i?.diamond?.certificate?.carats}</h5>
                  <p>carats</p>
                </div>
                <div className="var_types">
                  <h5>{i?.diamond?.certificate?.color}</h5>
                  <p>color</p>
                </div>
                <div className="var_types">
                  <h5>{i?.diamond?.certificate?.clarity}</h5>
                  <p>Clarity</p>
                </div>
                <div className="var_types">
                  <h5>{i?.diamond?.certificate?.cut}</h5>
                  <p>Cut</p>
                </div>
              </div>
              <div className="btn_div">
                <button
                  className="info_btn"
                  onClick={() =>
                    handleClickDiamondDetail(i.products, i.diamond)
                  }
                >
                  More Info
                </button>
                <button
                  className="add_btn"
                  onClick={() => {
                    handleNavigate(i.diamond, i.products);
                  }}
                >
                  Complete your ring
                </button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
  return (
    <Root>
      <button className="drawer-toggle-button" onClick={toggleDrawer}>
        {drawerContent}
      </button>
      <div
        className={`drawer-content ${
          isOpen && screenWidth <= 567 ? "open" : ""
        }`}
      >
        {screenWidth > 567 ? (
          drawerContent
        ) : (
          <Drawer
            open={isOpen}
            onClose={toggleDrawer}
            direction="bottom"
            className="bla"
          >
            {drawerContent}
          </Drawer>
        )}
      </div>
      <Modal
        isOpen={modal1}
        toggle={() => setModal1(!modal1)}
        style={{ zIndex: "111111", position: "relative", top: "26%" }}
        onClose={() => setModal1(false)}
      >
        <ModalHeader toggle={() => setModal1(!modal1)}></ModalHeader>

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
    </Root>
  );
}
const Root = styled.section`
  padding: 0 10px;
  .drawer-content {
    padding: 20px 0px;
    width: 100%;
  }
  .drawer-toggle-button {
    font-weight: 500;
    padding: 5px 10px;
    border: 1px solid #fff;
    border-radius: 4px;
    font-size: 14px;
    background-color: transparent;
  }
  @media (min-width: 568px) {
    .drawer-toggle-button {
      display: none;
    }
    .drawer-content {
      display: block;
    }
  }
  .EZDrawer__container {
    overflow-y: scroll !important;
    height: 70vh !important;
    border-top-right-radius: 25px !important;
    border-top-left-radius: 25px !important;
    padding-bottom: 40px;
  }
  .main_div {
    display: flex;
    flex-wrap: wrap;
    position: relative;
    gap: 4px;
    margin-top: 20px;

    .subdiv {
      width: 24vw;
      height: 57vh;
      border: 3px solid #f7f7f7;
      border-radius: 20px;
      padding: 5px;
      overflow: hidden;
      position: relative;
      margin-bottom: 20px;
      .aws_wrapper {
        height: 244px !important;
        width: 262px !important;
      }
      img {
        width: 100%;
        height: 88%;
      }

      &:hover {
        border: 3px solid black;
        overflow: unset;
        .aws_wrapper {
          height: 244px !important;
          width: 262px !important;
        }
      }
      .hov_content {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }

      &:hover .hov_content,
      &.open .hov_content {
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
      &:hover .var {
        .var_types {
          h5 {
            font-size: 15px;
            font-weight: 700;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          p {
            font-size: 10px;
          }
        }
      }
    }

    .hov_content .heading {
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
        font-size: 13px;
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

    .btn_div {
      display: flex;
      justify-content: space-between;
      padding: 0;
      width: 100%;
      gap: 10px;
      padding-bottom: 10px;

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
  }
  @media (max-width: 1025px) {
    .main_div {
      gap: 0px;
      justify-content: center;
      .subdiv {
        height: auto;
      }
    }
  }
  @media (max-width: 876px) {
    padding: 0px;
    .main_div {
      .subdiv {
        width: 44vw;
        height: 30vh;
        img {
          height: 84%;
          width: 100%;
        }
        .heading .h5 {
          font-size: 12px;
          margin-bottom: 9px;
        }
        .heading .p {
          font-size: 11px;
          margin-bottom: 10px;
        }

        .btn_div .info_btn,
        .btn_div .add_btn {
          font-size: 11px;
          padding: 3px 10px;
          border-radius: 15px;
        }
        &:hover .hov_content {
          width: 44vw;
          padding: 0px 10px 10px;
        }
      }
    }
    .main_div .var {
      gap: 2px;
    }
    .main_div .hov_content .heading {
      margin-top: 10px;
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

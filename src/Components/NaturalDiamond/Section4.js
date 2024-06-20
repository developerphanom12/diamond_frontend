import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import noimg from "../Images/s6.png";
import { EXCHANGE_URLS } from "../URLS";
import axios from "axios";
import { setDiamondById } from "../../redux/users/action";
import { useDispatch, useSelector } from "react-redux";
import { useLoading } from "../LoadingContext";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import ring from "../Images/Solitaire-removebg-preview.png";

export default function Section4({ value }) {
  const [modal1, setModal1] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [diamondByIdState, setDiamondByIdState] = useState("");
  const { setLoading } = useLoading();
  const productIds = useSelector((state) => state.users.productIds);

  console.log("productIds in Section4:", productIds.id);

  const handleNavigate = (diamond) => {
    productIds?.id && productIds?.id?.length > 0
      ? navigate("/productpage", { state: { diamond } })
      : setModal1(true);
  };
  // diamondbyId
  const apiDetail = async (diamond) => {
    const diamondId = diamond?.id;
    console.log("xxxxx",diamondId)
   
    setLoading(true);
    try {
      const response = await axios.get(
        `${EXCHANGE_URLS}/diamondbyId?id=${diamondId}`
      );
      if (response?.status === 200) {
        const diamondData = response?.data?.diamondData;
        setDiamondByIdState(diamondData);
        dispatch(setDiamondById(diamondData));
        console.log("mujhseee",response)
      }
    } catch (error) {
      console.error('Error fetching diamond details:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (value && value.length > 0) {
      apiDetail(value[0]?.diamond);
    }
  }, [value]);

  const handleNavigateDetail = ( ) => {
    apiDetail( );
    navigate('/diamonddetails');
  };

  return (
    <Root>
      <div className="main_div">
        {value &&
          value.map((i, index) => {
            return (
              <div key={index} className="subdiv">
               {i?.diamond?.image ? (
                  <img
                    src={i?.diamond?.image}
                    alt="diamond images"
                    style={{
                      width: "100%",
                      maxWidth: "250px",
                      height: "250px",
                    }}
                  />
                ) : (
                  <img
                    src={noimg}
                    alt="no img available"
                    style={{
                      width: "100%",
                      width: "250px",
                      height: "250px",
                    }}
                  />
                )}

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
                      onClick={() => handleNavigateDetail(i.diamond)}
                    >
                      More Info
                    </button>
                    <button
                      className="add_btn"
                      onClick={() => handleNavigate(i)}
                    >
                      Complete your ring
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
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
  padding: 0 20px;

  .main_div {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;
    margin-bottom: 100px;
    gap: 15px;

    .subdiv {
      width: 300px;
      height: 380px;
      border: 3px solid #f7f7f7;
      border-radius: 20px;
      padding: 20px;
      overflow: hidden;
      position: relative;
      margin-bottom: 20px;
      .aws_wrapper {
        height: 244px !important;
        width: 262px !important;
      }
      img {
        width: 100%;
      }

      &:hover {
        border: 3px solid black;
        overflow: unset;
        .aws_wrapper {
          height: 244px !important;
          width: 262px !important;
        }
      }

      &:hover .hov_content {
        z-index: 1;
        position: absolute;
        background-color: white;
        border: 3px solid black;
        padding: 0 20px 0;
        left: -3px;
        overflow: hidden;
        width: 300px;
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

    .btn_div {
      display: flex;
      gap: 6px;
      padding: 0 0 20px 0;
      .info_btn {
        padding: 12px 14px;
        border-radius: 25px;
        border: 2px solid black;
        font-size: 13px;
        background-color: #fff;
      }

      .add_btn {
        background-color: black;
        color: white;
        border: 2px solid black;
        padding: 12px 27px;
        border-radius: 25px;
        font-size: 13px;
      }
    }
  }

  @media only screen and (max-width: 567px) {
    .main_div {
      justify-content: center;
      .subdiv {
        width: 300px;
        height: 380px;
      }
    }
  }

  @media only screen and (min-width: 567px) and (max-width: 992px) {
    .main_div {
      justify-content: center;
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

import styled from "styled-components";
import RingShipReturn from "./RingShipReturn";
import React, { useEffect } from "react";
import aeroplane from "../Images/aeroplane.png";
import badgess from "../Images/badgess.png";
import moneyinhand from "../Images/moneyinhand.png";
import certifiedd from "../Images/certifiedd.png";
import carat from "../Images/carat.PNG";
import color from "../Images/color.PNG";
import clarity from "../Images/clarity.PNG";
import diamo from "../Images/diamo.PNG";
import j from "../Images/j.jpg";
import vs from "../Images/vs.png";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

export default function Section2() {
  const diamondById = useSelector((state) => state.users.diamondById);
  const navigate = useNavigate();
  const diamondType = useSelector((state) => state.users.diamondType);
  console.log("jagsdjhgd", diamondType);
  const location = useLocation();
  const { products, diamond } = location.state || {};
  useEffect(() => {
    if (!diamondById || !diamondById.diamond) {
      toast.error("Please select a ring and diamond before proceeding.");
      navigate("/engagementring");
    }
  }, [diamondById, navigate]);

  const VideoContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100% !important;
    object-fit: contain;
    background-position: 100% 100%;
    @media (max-width: 768px) {
      height: 100%;
      width: 100%;
      min-height: 50vh;
      min-width: 50vh;
    }
    iframe {
      height: 100%;
      width: 100%;
      > div {
        width: 100%;
        height: 100%;
        > div {
          width: 100%;
          height: 100%;
        }
      }
    }
  `;

  const VideoFrame = styled.iframe`
    width: 100%;
    height: 100%;
    > div {
      width: 100%;
      height: 100%;
    }
  `;

  return (
    <Root>
      <div className="main_div">
        <div className="image_div">
          <ImageContainer>
            {diamondById?.diamond?.video ? (
              <VideoContainer>
                <VideoFrame
                  src={diamondById?.diamond.video}
                  title="Diamond Video"
                  allowFullScreen
                />
              </VideoContainer>
            ) : (
              <img
                src={diamondById?.diamond?.image}
                title="Diamond Image"
                alt="Diamond"
              />
            )}
          </ImageContainer>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <button className="button">
              {diamondById?.diamond?.image ? (
                <img
                  src={diamondById?.diamond?.image}
                  title="Diamond image"
                  alt="img"
                  style={{ width: "50px", height: "50px" }}
                />
              ) : (
                "No image"
              )}

              <span>Image</span>
            </button>
          </div>
        </div>
        <div className="des_div">
          <div className="title">
            <h2>
              {" "}
              {diamondById?.diamond?.certificate?.carats} Carat{" "}
              {diamondById?.diamond?.certificate?.color}{" "}
              {diamondById?.diamond?.certificate?.clarity}{" "}
              {diamondById?.diamond?.certificate?.shape}{" "}
              {diamondType && diamondType === false
                ? "Natural Diamond"
                : "Lab Grown"}
            </h2>
            <h4>${diamondById?.price}</h4>
          </div>

          <div className="prod_spec">
            <div className="spec" style={{ borderRight: "1px solid #bbb9b9" }}>
              <h4>{diamondById?.diamond?.certificate?.carats}</h4>
              <p>Carat</p>
            </div>
            <div className="spec" style={{ borderRight: "1px solid #bbb9b9" }}>
              <h4>{diamondById?.diamond?.certificate?.color}</h4>
              <p>Color</p>
            </div>
            <div className="spec" style={{ borderRight: "1px solid #bbb9b9" }}>
              <h4>{diamondById?.diamond?.certificate?.clarity}</h4>
              <p>Clarity</p>
            </div>

            <div className="spec" style={{ borderRight: "1px solid #bbb9b9" }}>
              <h4>{diamondById?.diamond?.certificate?.cut}</h4>
              <p>Cut</p>
            </div>

            <div className="spec" style={{ borderRight: "1px solid #bbb9b9" }}>
              <h4>
                {diamondById?.diamond?.certificate?.length}/
                {diamondById?.diamond?.certificate?.width}
              </h4>
              <p>L/W (mm)</p>
            </div>

            <div className="spec">
              <h4>{diamondById?.diamond?.certificate?.shape}</h4>
              <p>Shape</p>
            </div>
          </div>

          <div className="product_btn">
            <button
              className="btn"
              onClick={() => {
                navigate("/productpage", { state: { products, diamond } });
              }}
            >
              Complete Your Ring
            </button>
          </div>

          <div className="policy">
            <div className="policy_type">
              <img src={aeroplane} alt="aeroplane_images" />

              <p>
                Overnight <br />
                Shipping
              </p>
            </div>

            <div className="policy_type">
              <img
                src={badgess}
                alt="badgess_images"
                style={{ width: "50px", height: "50px" }}
              />
              <p>
                Lifetime <br />
                Warranty
              </p>
            </div>

            <div className="policy_type">
              <img src={moneyinhand} alt="moneyinhand_images" />
              <p>
                30 Days <br />
                Free Return
              </p>
            </div>

            <div className="policy_type">
              <img src={certifiedd} alt="certifiedd_images" />
              <p>
                Certificate
                <br />& Appraisal
              </p>
            </div>
          </div>

          <div className="setting_detail">
            <h4>Your Diamond Info</h4>

            <div className="setting_info">
              <div className="setting_div">
                <div className="profile_cont">
                  <img src={carat} alt="carat" />
                  <p>CARAT</p>
                </div>
                <h4>{diamondById?.diamond?.certificate?.carats}</h4>
                <img
                  src={j}
                  alt="j"
                  className="ring_img"
                  style={{ visibility: "Hidden" }}
                />
                <p className="para">Universal measurement unit for diamonds</p>
              </div>

              <div className="setting_div">
                <div className="profile_cont">
                  <img src={color} alt="color" />
                  <p>COLOR</p>
                </div>
                <h4>{diamondById?.diamond?.certificate?.color}</h4>
                <img src={j} alt="j" className="ring_img" />
                <p className="para">Slightly tinted</p>
              </div>

              <div className="setting_div">
                <div className="profile_cont">
                  <img src={clarity} alt="clarity" />
                  <p>CLARITY</p>
                </div>
                <h4>{diamondById?.diamond?.certificate?.clarity}</h4>
                <img src={vs} alt="vs" className="ring_img" />
                <p className="para">
                  Visible inclusion under 10x magnification
                </p>
              </div>

              <div className="setting_div">
                <div className="profile_cont">
                  <img src={diamo} alt="diamo" />
                  <p>CUT</p>
                </div>
                <h4>{diamondById?.diamond?.certificate?.cut}</h4>
                <img
                  src={j}
                  alt="j"
                  className="ring_img"
                  style={{ visibility: "Hidden" }}
                />
                <p className="para">Incredible fire and brilliance</p>
              </div>
            </div>
          </div>

          <div>
            <RingShipReturn />
          </div>

          <div className="appointment">
            <h5>Virtual Appointment</h5>
            <p>
              <strong>See jewelry</strong> up close with a personal appointment.
              Explore engagement rings, diamonds, and fine jewelry in person
              through your device.
            </p>
            <button>Book Appointment</button>
          </div>
        </div>
      </div>
    </Root>
  );
}

const Root = styled.section`
  padding: 20px;

  .main_div {
    display: flex;
    flex-wrap: wrap;
    gap: 50px;
    justify-content: space-between;
    .image_div {
      flex: 1;
      border: 1px solid #d3d3d3;
      padding: 20px 20px 0px 20px;
      border-radius: 20px;
      display: flex;
      height: 630px;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      button.button {
        width: 50%;
        padding: 13px 0px;
        background-color: white;
        border: none;
        border-top: 1px solid #d3d3d3;
        border-radius: 0 0 20px 20px;

        svg {
          width: 18px;
          margin-right: 5px;
        }

        span {
          font-size: 13px;
        }
      }
    }

    .des_div {
      flex: 1;
      padding: 10px 30px;
      margin: 0px 10px;
      .title {
        h2 {
          font-size: 23px;
          font-weight: 600;
          line-height: 1.2;
        }

        h4 {
          font-size: 21px;
          color: #666666;
          font-weight: 500;
          line-height: 1.25;
        }
      }

      .prod_spec {
        display: flex;
        flex-wrap: wrap;
        margin-top: 30px;
        .spec {
          display: flex;
          flex-direction: column;
          flex: 1;
          align-items: center;

          h4 {
            margin-bottom: 0;
            font-size: 14px;
            color: #000000;
            font-weight: 600;
            margin-bottom: 3px;
          }
          p {
            color: #666666;
            font-size: 11px;
            margin-bottom: 0;
            line-height: 1.2;
          }
        }
      }
    }

    .product_btn {
      display: flex;
      flex-direction: column;
      gap: 20px;
      margin-top: 50px;
      .btn {
        background-color: rgba(0, 0, 0);
        color: white;
        font-size: 16px;
        line-height: 1;
        padding: 18px 32px;
        font-weight: 600;
        border-radius: 50px;
        border: 1px solid transparent;
      }
    }

    .policy {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 30px;

      .policy_type {
        flex: 1;
        justify-content: center;
        display: flex;
        flex-direction: column;
        align-items: center;

        img {
          width: 35px;
          height: 35px;
        }
        p {
          font-size: 14px;
          color: #333;
          margin-top: 10px;
          text-align: center;
          line-height: 16px;
        }
      }
    }

    .setting_detail {
      display: flex;
      flex-direction: column;
      gap: 15px;
      margin-top: 20px;
      h4 {
        font-size: 16px;
        color: #000000;
        font-weight: 700;
      }
      .setting_info {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        .setting_div {
          width: 47%;
          background: #fff;
          border: 1px solid #e0e0e0;
          border-radius: 12px;
          padding: 10px;
          display: flex;
          gap: 8px;
          flex-direction: column;
          .profile_cont {
            display: flex;
            gap: 10px;
            align-items: center;
            p {
              font-size: 12px;
              color: #bbb9b9;
              font-weight: 600;
              text-transform: uppercase;
              margin-bottom: 0;
            }
          }
          h4 {
            font-size: 24px;
          }
          .ring_img {
            width: 100%;
          }
          .para {
            font-size: 13px;
            color: #666666;
            margin-bottom: 0;
          }
        }
      }
    }

    .appointment {
      background-color: rgba(247, 247, 247);
      padding: 20px;
      border-radius: 20px;
      margin-top: 25px;
      /* margin-bottom:40px; */
      h5 {
        font-size: 1rem;
        font-weight: 600;
      }
      p {
        font-size: 13px;
        margin-bottom: 0;
      }
      button {
        font-size: 0.875rem;
        letter-spacing: 0;
        line-height: 1.2;
        font-weight: 400;
        text-decoration: underline;
        border: 1px solid transparent;
        margin-top: 10px;
        padding: 0;
        color: #000000;
      }
    }
  }

  @media (max-width: 567px) {
    padding: 10px 0px;
    .main_div {
      gap: 0px;
    }

    .main_div .image_div {
      width: 100%;
      height: unset;
      padding: 5px;
    }
    .main_div .des_div .prod_spec {
      display: none;
    }
    .main_div .des_div {
      width: 100%;
      margin-top: 20px;
      padding: 5px;
    }
    .main_div .setting_detail .setting_info .setting_div {
      flex: 1;
    }
    .main_div .des_div .prod_spec .spec {
      padding: 0px 14px;
    }
    .main_div .des_div .prod_spec {
      gap: 20px;
    }
    .main_div .des_div .title h2,
    .main_div .des_div .title h4 {
      font-size: 18px;
    }
  }

  @media (min-width: 567px) and (max-width: 992px) {
    .main_div {
      gap: 0px;
    }

    .main_div .image_div {
      width: 100%;
      height: unset;
    }
    .main_div .des_div {
      width: 100%;
      margin-top: 20px;
      padding: 5px;
    }
    .main_div .des_div h2 {
      font-size: 18px;
    }
    .main_div .setting_detail .setting_info .setting_div {
      flex: 1;
    }
  }
`;
const ImageContainer = styled.div`
  width: 100%;
  height: 100%;

  @media (max-width: 768px) {
    /* height: auto; // Adjust height for mobile */
  }

  img {
    width: 100%;
    height: 100%;

    @media (max-width: 768px) {
      height: 100%; // Adjust height for mobile
    }
  }
`;

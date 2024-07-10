import styled from "styled-components";
import React from "react";
// import round from "../Images/round-removebg-preview.png";
// import emerald from "../Images/emerald-removebg-preview.png";
// import heart from "../Images/heart-removebg-preview.png";
// import Marquise from "../Images/Marquise-removebg-preview.png";
// import oval from "../Images/oval-removebg-preview.png";
// import Pear from "../Images/Pear-removebg-preview.png";
// import Princess from "../Images/Princess-removebg-preview.png";
// import Radiant from "../Images/Radiant-removebg-preview.png";
// import cushionremovebg from "../Images/cushionremovebg.png";
// import ECusion from "../Images/ECusion-removebg-preview.png";
import aeroplane from "../Images/aeroplane.png";
import badgess from "../Images/badgess.png";
import moneyinhand from "../Images/moneyinhand.png";
import certifiedd from "../Images/certifiedd.png";
import pinkimg from "../Images/pink.PNG";
import modimg from "../Images/modimg.PNG";
// import images from "../Images/images.PNG";

import { useLocation, useNavigate } from "react-router-dom";
import RingShipReturn from "../DiamondDetails/RingShipReturn";

export default function Section2() {
  const location = useLocation();
  const { products } = location.state || {};
  const navigate = useNavigate();

  return (
    <Root>
      <div className="main_div">
        <div className="image_div">
          <img src={products?.mainImage && products.mainImage} alt="img"/>
          <div
            style={{
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <button className="button">
              {/* <img
                src={images}
                alt="images"
                style={{ width: "35px", height: "35px" }}
              /> */}
              <span>Image</span>
            </button>
          </div>
        </div>

        <div className="des_div">
          <div className="title">
            <h2>{products?.title}</h2>
            <h4>${products?.variants?.edges?.[0]?.node?.price}</h4>
            <p>
              {products?.description && products.description}
              {!products?.description && "No Description About Product"}
            </p>
          </div>

          <div className="stone_shape">
            {/* <h4>Center Stone Shape</h4> */}
            <div className="stone_images">
              {/* <img src={round} alt="round_images" />
              <img src={emerald} alt="emerald_images" />
              <img src={heart} alt="heart_images" />
              <img src={Marquise} alt="Marquise_images" />
              <img src={oval} alt="oval" />
              <img src={Pear} alt="Pear_images" />
              <img src={Princess} alt="Princess_images" />
              <img src={Radiant} alt="Radiant_images" />
              <img src={cushionremovebg} alt="cushionremovebg_images" />
              <img src={ECusion} alt="ECusion_images" /> */}
            </div>
          </div>

          <div className="product_btn">
            <button
              className="btn"
              onClick={() => {
                navigate("/naturaldiamond");
              }}
            >
              Add Central Stone
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
                Lifetime <br></br>Warranty
              </p>
            </div>

            <div className="policy_type">
              <img src={moneyinhand} alt="moneyinhand_images" />
              <p>
                30 Days <br></br>Free Return
              </p>
            </div>

            <div className="policy_type">
              <img src={certifiedd} alt="certifiedd_images" />
              <p>
                Certificate<br></br>& Appraisal
              </p>
            </div>
          </div>

          <div className="setting_detail">
            <h4>Setting Details</h4>
            <div className="profile_div">
              <div className="profile_cont">
                <img src={pinkimg} alt="pinkimg" />
                <p>Profile</p>
              </div>
              <h4>Low</h4>
              <img src={modimg} alt="modimg" className="ring_img" />
              <p className="para">Only stacks with a chevron/curved band</p>
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
            {/* <button>Book Appointment</button> */}
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
      height: 613px;
      border-radius: 20px;
      flex-direction: column;
      height: 630px;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: 40vw;
      }

      button.button {
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
        p {
          font-weight: 400;
          color: grey;
          margin-top: 20px;
          font-size: 13px;
        }
      }

      .stone_shape {
        margin-top: 20px;
        h4 {
          font-size: 16px;
          color: #000000;
          font-weight: 700;
        }
        .stone_images {
          display: flex;
          flex-wrap: wrap;
          gap: 5px;
          img {
            width: 40px;
            cursor: pointer;
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
        font-size: 17px;
        padding: 16px 0;
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
      .profile_div {
        width: 184px;
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
          width: 70px;
        }
        .para {
          font-size: 13px;
          color: #666666;
          margin-bottom: 0;
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
      margin:20px;
    }

    .main_div .image_div {
      width: 100%;
      height: unset;
      padding: 5px;
      margin: 10px;
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


 .main_div .product_btn {
      margin-top:0;
}


 .main_div .policy .policy_type p {
    font-size: 10px;
}

 .main_div .image_div img {
    width: 75vw;
    padding-top: 15px;
}


  }

  @media (min-width: 567px) and (max-width: 992px) {


    .main_div{
      display:unset;
    }

    .main_div .image_div {
      width: 100%;
      height: unset;
    
    }
    .main_div .des_div {
      width: 100%;
      margin-top: 20px;
      
    }
    .main_div .des_div h2 {
      font-size: 18px;
    }
    .main_div .setting_detail .setting_info .setting_div {
      flex: 1;
    }

    .main_div .image_div img {
    width: 90vw;
}
  }
`;

import styled from "styled-components";
import Section3 from "./Section3";
import React, { useRef } from "react";
import Slider from "react-slick";
import ring from "../Images/ring.png";
import round from "../Images/round-removebg-preview.png";
import emerald from "../Images/emerald-removebg-preview.png";
import heart from "../Images/heart-removebg-preview.png";
import Marquise from "../Images/Marquise-removebg-preview.png";
import oval from "../Images/oval-removebg-preview.png";
import Pear from "../Images/Pear-removebg-preview.png";
import Princess from "../Images/Princess-removebg-preview.png";
import Radiant from "../Images/Radiant-removebg-preview.png";
import cushionremovebg from "../Images/cushionremovebg.png";
import ECusion from "../Images/ECusion-removebg-preview.png";
import aeroplane from "../Images/aeroplane.png";
import badgess from "../Images/badgess.png";
import moneyinhand from "../Images/moneyinhand.png";
import certifiedd from "../Images/certifiedd.png";
import pinkimg from "../Images/pink.PNG";
import modimg from "../Images/modimg.PNG";
import images from "../Images/images.PNG";

import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Section2() {
  const productIds = useSelector((state) => state.users.productIds);
  const navigate = useNavigate();
  let sliderRef = useRef(null);

  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Root>
      <div className="main_div">
        <div className="image_div">
          <div className="slider-container">
            <Slider
              ref={(slider) => {
                sliderRef = slider;
              }}
              {...settings}
            >
              <div key={1}>
                <img src={ring} alt="text" />
              </div>
              {/* <div key={2}>
                <img src={ring} alt="text" />
              </div> */}
            </Slider>
            <div
              style={{
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <button className="button" onClick={previous}>
                <img src={images} alt="images" />
                <span>Image</span>
              </button>
            </div>
          </div>
        </div>

        <div className="des_div">
          <div className="title">
            <h2>The Ashley</h2>
            <h4>$700</h4>
            <p>
              Modest yet magnificent, The Ashley engagement ring has a slender
              1.5mm band that amplifies the size and sparkle of the center
              stone, turning it into a major showpiece. Four delicate claw
              prongs secure the gem in place and emphasize its low-profile
              silhouette. The clean lines, striking details, and modest geometry
              of this spectacular solitaire are both classic and oh-so modern.
            </p>
          </div>

          <div className="stone_shape">
            <h4>Center Stone Shape</h4>
            <div className="stone_images">
              <img src={round} alt="round_images" />
              <img src={emerald} alt="emerald_images" />
              <img src={heart} alt="heart_images" />
              <img src={Marquise} alt="Marquise_images" />
              <img src={oval} alt="oval" />
              <img src={Pear} alt="Pear_images" />
              <img src={Princess} alt="Princess_images" />
              <img src={Radiant} alt="Radiant_images" />
              <img src={cushionremovebg} alt="cushionremovebg_images" />
              <img src={ECusion} alt="ECusion_images" />
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
                Overnight <br></br>Shipping
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
            <Section3 />
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
  padding: 30px 30px;

  .main_div {
    display: flex;
    flex-wrap: wrap;

    .image_div {
      border: 1px solid #d3d3d3;
      width: 50%;
      height: 613px;
      border-radius: 20px;

      .slick-slide img {
        display: block;
        width: 100%;
        border-radius: 20px;
      }
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
      .slick-list,
      .slick-slider,
      .slick-track {
        height: 560px;
      }
    }

    .des_div {
      width: 50%;
      padding-left: 70px;

      .title {
        h2 {
          font-size: 24px;
          font-weight: 600;
        }
        h4 {
          font-size: 21px;
          color: #666666;
          font-weight: 700;
        }
        p {
          font-weight: 400;
          color: grey;
          margin-top: 20px;
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
    .main_div .image_div {
      width: 100%;
    }

    .main_div .des_div {
      width: 100%;
      margin-top: 20px;
      padding-left: 0;
    }
  }

  @media (min-width: 567px) and (max-width: 992px) {
    .main_div .image_div {
      width: 100%;
    }
    .main_div .des_div {
      width: 100%;
      margin-top: 20px;
      padding-left: 0px;
    }
  }
`;

import styled from "styled-components";
import React, { useEffect, useState } from "react";
import aeroplane from "../../../Images/aeroplane.png";
import badgess from "../../../Images/badgess.png";
import moneyinhand from "../../../Images/moneyinhand.png";
import certifiedd from "../../../Images/certifiedd.png";
import pinkimg from "../../../Images/pink.PNG";
import modimg from "../../../Images/modimg.PNG";
import slideimg2 from "../../../Images/slideimg2.webp";
import { useNavigate } from "react-router-dom";
import RingShipReturn from "../../DiamondDetails/RingShipReturn";
import { useLoading } from "../../LoadingContext";
import axios from "axios";
import { EXCHANGE_URLS } from "../../URLS";
import { useSelector } from "react-redux";
import nopro from "../../../Images/product-not-found.jpg";
import Drawer from "react-modern-drawer";
import dia from "../../../Images/dia.webp";
import ring from "../../../Images/ringwithdiamond.png";
import diamondd from "../../../Images/round-removebg-preview.png";
import deleteicon from "../../../Images/delete.PNG";
import ww from "../../../Images/ww.webp";




export default function Section2() {
  const uniqueProductGem = useSelector((state) => state.users.uniqueProductGem);
  const [unique, setUnique] = useState(null);
  const navigate = useNavigate();
  const { setLoading } = useLoading();
  const [isOpen, setIsOpen] = useState(false);

  const fetchUniqueData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${EXCHANGE_URLS}/fetchpredefione?productId=${uniqueProductGem}`
      );
      if (response.status === 200) {
        setUnique(response.data.data);
        console.log("shdgfhsproduct Gemgd", response.data.data);
      }
    } catch (error) {
      console.error("Error fetching collections:", error);
    } finally {
      setLoading(false);
    }
  };

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  useEffect(() => {
    fetchUniqueData();
  }, [uniqueProductGem]);
  return (
    <Root>
      <div className="main_div">
        <div className="image_div">
          {unique && unique?.images ? (
            <img
              src={unique?.images?.edges?.[0]?.node?.originalSrc || nopro}
              alt="no img"
            />
          ) : (
            <img src={slideimg2} alt="img" />
          )}

          <div
            style={{
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
          
          </div>
        </div>

        <div className="des_div">
          <div className="title">
            <h2>{unique?.title}</h2>
            <h4>${unique?.variants?.edges?.[0]?.node?.price}</h4>
            <p>
              {unique?.description && unique.description}
              {!unique?.description && "No Description About Product"}
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
                navigate("/checkoutgem", { state: { product: unique } });
              }}
            >
             Checkout
            </button>

            <button className="cart_btn"  onClick={toggleDrawer}>
              Add to Cart
            </button>

            <Drawer
              open={isOpen}
              onClose={toggleDrawer}
              direction="right"
              className="custom-drawer"
              size="300px"

            >
              <div className="cart_heading">
                <h2>My Shopping Bag</h2>
              </div>

              <div className="prod_main_div">
                <div className="prod_div">
                  <div className="prod">
                    <div className="bg-img">
                      <div className="dia_img">
                        <img src={dia} alt="img" />
                      </div>
                    </div>

                    <div className="prod_name">
                      <h3>
                        The Ashley with a 0.5 Carat J VS1 Round Natural Diamond
                      </h3>
                    </div>

                    <div className="prod_spec">
                      <div className="icon_content">
                        <img src={ring} alt="img" />
                        <div className="content_head">
                          <h4>The Ashley </h4>
                          <p>14k White Gold </p>
                        </div>
                      </div>
                      <div className="prod_price">
                        <h4>$700</h4>
                      </div>
                    </div>

                    <div className="prod_spec">
                      <div className="icon_content">
                        <img src={diamondd} alt="img" />
                        <div className="content_head">
                          <h4>Round </h4>
                          <p>0.5 Carat J VS1</p>
                        </div>
                      </div>
                      <div className="prod_price">
                        <h4>$713</h4>
                      </div>
                    </div>

                    <div className="price_div">
                      <p>
                        Total: <span style={{ color: "#000000" }}>$1,413</span>
                      </p>
                      <div className="delete_icon">
                        <img src={deleteicon} alt="img" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="prod_div">
                  <div className="prod">
                    <div className="bg-img">
                      <div className="dia_img">
                        <img src={dia} alt="img" />
                      </div>
                    </div>

                    <div className="prod_name">
                      <h3>
                        The Ashley with a 0.5 Carat J VS1 Round Natural Diamond
                      </h3>
                    </div>

                    <div className="prod_spec">
                      <div className="icon_content">
                        <img src={ring} alt="img"/>
                        <div className="content_head">
                          <h4>The Ashley</h4>
                          <p>14k White Gold</p>
                        </div>
                      </div>
                      <div className="prod_price">
                        <h4>$700</h4>
                      </div>
                    </div>

                    <div className="prod_spec">
                      <div className="icon_content">
                        <img src={diamondd} alt="img" />
                        <div className="content_head">
                          <h4>Round </h4>
                          <p>0.5 Carat J VS1</p>
                        </div>
                      </div>
                      <div className="prod_price">
                        <h4>$713</h4>
                      </div>
                    </div>

                    <div className="price_div">
                      <p>
                        Total: <span style={{ color: "#000000" }}>$1,413</span>
                      </p>
                      <div className="delete_icon">
                        <img src={deleteicon} alt="img" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="total_price_div">
                <p>Total:</p>
                <h4>$2,799</h4>
              </div>

              <div className="but_div">
                <button>Checkout Now</button>
              </div>
            </Drawer>
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
      padding: 20px 20px 20px 20px;
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
      /* button {
        font-size: 0.875rem;
        letter-spacing: 0;
        line-height: 1.2;
        font-weight: 400;
        text-decoration: underline;
        border: 1px solid transparent;
        margin-top: 10px;
        padding: 0;
        color: #000000;
      } */
    }
  }

  .cart_btn {
          background-color: #fff;
          color: rgba(0, 0, 0);
          font-size: 17px;
          padding: 16px 0;
          font-weight: 600;
          border-radius: 50px;
          border: 1px solid rgba(0, 0, 0);
        }

        .custom-drawer {
    z-index: 11111111 !important;
  }
  .cart_heading {
    padding: 16px;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1),
      0 1px 2px -1px rgba(0, 0, 0, 0.1);

    h2 {
      font-size: 16px;
      color: #000000;
      font-weight: 400;
    }
  }
  .prod_main_div {
    width: 100%;
    max-height: 420px;
    height: 100%;
    overflow-y: scroll;
    scrollbar-width: none;
    -ms-overflow-style: none;

    .prod_div {
      padding: 10px 16px;
      .prod {
        padding: 12px;
        background-color: #f7f7f7;
        border-radius: 1.25rem;
        display: flex;
        flex-direction: column;
        gap: 7px;
        .bg-img {
          height: 180px;
          background-image: url(${ww});
          background-size: 100%;
          background-repeat: no-repeat;
          .dia_img {
            display: flex;
            align-items: flex-end;
            height: 100%;
            width: 100%;
            justify-content: flex-end;

            img {
              width: 20%;
              height: 20%;
              object-fit: contain;
            }
          }
        }
        .prod_name {
          h3 {
            font-size: 13px;
            color: #000000;
            font-weight: 400;
          }
        }
        .prod_spec {
          display: flex;
          justify-content: space-between;
          padding-bottom: 10px;
          border-bottom: 1px solid #ededed;
          .icon_content {
            display: flex;
            align-items: center;
            img {
              width: 40px;
              height: 40px;
              mix-blend-mode: multiply;
            }
            .content_head {
              display: flex;
              flex-direction: column;
              h4 {
                font-size: 12px;
                color: #000000;
                margin-bottom: 0;
                font-weight: 500;
              }
              p {
                font-size: 12px;
                color: #808080;
                margin-bottom: 0;
              }
            }
          }
          .prod_price {
            h4 {
              font-weight: 500;
              font-size: 14px;
              margin-bottom: 0;
            }
          }
        }
        .price_div {
          display: flex;
          justify-content: space-between;
          p {
            font-size: 16px;
            color: rgba(102, 102, 102);
            font-weight: 500;
          }

          .delete_icon {
            img {
              cursor: pointer;
            }
          }
        }
      }
    }
  }
  .element-with-scroll::-webkit-scrollbar {
    display: none;
  }

  .total_price_div {
    padding: 0px 16px;
    display: flex;
    justify-content: space-between;

    p {
      font-size: 18px;
      color: #666666;
    }

    h4 {
      font-weight: 500;
      font-size: 18px;
      color: #000000;
    }
  }
  .but_div {
    padding: 16px;
    margin-bottom: 20px;
    button {
      color: rgba(255, 255, 255);
      font-weight: 600;
      font-size: 1rem;
      text-align: center;
      padding: 1rem 2rem;
      background-color: #000000;
      border: transparent;
      border-radius: 30px;
      width: 100%;
    }
  }

  @media (max-width: 567px) {
    padding: 10px 0px;
    .main_div {
      gap: 0px;
    }

    .main_div .image_div {
      width: 100%;
      height: 400px;
      margin: 10px;
      padding: 40px 5px 40px;
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
    .main_div .policy .policy_type p {
      font-size: 10px;
    }

    .main_div .image_div img {
      width: 80vw;
    }

    
  }

  @media (min-width: 567px) and (max-width: 992px) {
    .main_div .image_div img {
      width: 80vw;
    }

    .main_div {
      gap: 0px;
      flex-direction: column;
    }

    .main_div .image_div {
      width: 100%;
      height: unset;
      padding: 40px 5px 40px;
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

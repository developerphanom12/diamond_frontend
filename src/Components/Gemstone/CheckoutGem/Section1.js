import React from "react";
import styled from "styled-components";
import backgroundImage from "../../Images/girl.webp";
import verify from "../../Images/verify.svg";
import { useLocation } from "react-router-dom";
import Section2 from "./Section2";
import nopro from "../../Images/product-not-found.jpg";

export default function Section1() {
  const location = useLocation();
  const { product } = location.state || {};
console.log("wwwwwwwwwww",product)
  return (
    <Root>
      <div className="main_div">
        <div className="form_div">
          <h5>
            <Section2 />
          </h5>
        </div>
        <div className="product_checkout">
          <div className="desc_div">
            <div className="image_content">
            <img src={product?.images?.edges?.[0]?.node?.originalSrc || nopro} alt="Product" />
              <div className="ring_content">
              <h2>{product?.title || "No Title Available"}</h2>
                <div className="icon_content">
                  <>
                    <img
                      style={{ width: "25px", height: "25px"}}
                      src={product?.images?.edges?.[0]?.node?.originalSrc || nopro}
                      alt="img"
                    />
                  </>

                  <p>{product?.description || "No Description Available for this Product"}</p>
                </div>

                {/* <div className="icon_content">
                  <div style={{ width: "25px", height: "25px" }}>
                    <img
                      style={{ width: "25px", height: "25px" }}
                      src={selectedRingSvg}
                      alt="img"
                    />
                  </div>
                  <p>14k White Gold</p>
                </div> */}

                {/* <div className="icon_content">
                  <div style={{ width: "25px", height: "25px" }}>
                    <img
                      style={{ width: "25px", height: "25px" }}
                      src={selectedRingSvg}
                      alt="img"
                    />
                  </div>
                  <p>Ring Size: {selectedSize}</p>
                </div> */}
                   <div className="price">
                  <h5>${product?.priceRange?.maxVariantPrice?.amount || "Price not showing"}</h5>
                </div>
              </div>
            </div>
            <div className="discount">
              <input
                type="text"
                className="field_input"
                placeholder="Discount code"
              ></input>
              <button>Apply</button>
            </div>
            <div className="offer_div">
              <p>
                Government Employees, Hospital Employees, Medical Providers,
                Military, Nurses, First Responders, Students, and Teachers
                receive $100 off
              </p>
              <img src={verify} alt="text" />
            </div>

            <div className="subtotal">
              <h5>Subtotal</h5>
              <p>${product?.priceRange?.maxVariantPrice?.amount || "Price not showing"}</p>
            </div>

            <div className="shipping">
              <h5>Shipping </h5>
              <p>Free</p>
            </div>

            <div className="total">
              <h5>Total</h5>
              <p>USD ${product?.priceRange?.maxVariantPrice?.amount || "Price not showing"}</p>
            </div>
          </div>
        </div>
      </div>
    </Root>
  );
}
    
const Root = styled.section`
  .main_div {
    display: flex;
    flex-wrap: wrap;
    margin: 20px 0px;
    width: 100vw;
    .form_div {
      flex: 1;
      padding-top: 30px;

      h5 {
        text-transform: uppercase;
        text-align: center;
      }

    }

    .product_checkout {
      /* height: 600px; */
      flex: 1;
      background-image: url(${backgroundImage});
      background-size: cover;
      background-position: center;
      display: flex;
      .desc_div {
        background-color: white;
        background-color: #ffffffd9;
        backdrop-filter: blur(8px);
        margin: 60px;
        border-radius: 20px;
        padding: 32px;
        @media (max-width: 867px) {
          margin: 30px;
        }
        .image_content {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
          border-bottom: 1px solid rgba(143, 143, 143, 0.67);
          padding-bottom: 20px;

          img {
            height: 180px;
            flex: 1;
            object-fit: cover;
          }

          .ring_content {
            flex: 1;
            h2 {
              font-size: 16px;
              color: rgba(0, 0, 0, 0.8);
              margin-bottom: 15px;
            }
            .icon_content {
              display: flex;
              gap: 2px;
              img {
                width: 20px!important;
                height: 20px!important;
                object-fit: contain;
                
              }
              p {
                font-size: 11px;
                color: #000;
                margin-bottom: 10px;
              }
            }
            .price {
              margin-top: 20px;
              h5 {
                font-size: 18px;
                font-weight: 500;
                color: #000;
              }
            }
          }
        }
      }

      .discount {
        display: flex;
        margin-top: 20px;
        justify-content: space-between;
        gap: 15px;

        .field_input {
          width: 100%;
          font-size: 15px;
          border-color: #ddd;
          border-radius: 7px;
          padding: 13px;
          color: #333333;
          font-weight: 400;
        }

        button {
          background-color: rgba(0, 0, 0, 0.2);
          color: #666;
          font-size: 15px;
          font-weight: 600;
          border: 1px solid transparent;
          padding: 12px 20px;
          border-radius: 50px;
          transition: 0.5s;
          &:hover {
            color: #fff;
          }
        }
      }

      .offer_div {
        margin-top: 15px;
        p {
          color: #262626;
          font-size: 14px;
        }
        img {
          margin-top: 20px;
          width:214px;
          height: 42px;
        }
      }

      .subtotal {
        display: flex;
        justify-content: space-between;
        margin-top: 30px;
        h5 {
          font-size: 14px;
          color: #000;
          font-weight: 400;
        }
        p {
          font-size: 16px;
          color: #000;
          font-weight: 600;
        }
      }

      .shipping {
        display: flex;
        justify-content: space-between;
        margin-top: 10px;
        h5 {
          font-size: 14px;
          color: #000;
          font-weight: 400;
        }
        p {
          font-size: 16px;
          color: #000;
          font-weight: 600;
        }
      }

      .total {
        display: flex;
        justify-content: space-between;
        background-color: #403e3e;
        color: white;
        padding: 20px 20px;
        margin-top: 20px;
        h5 {
          margin-bottom: 0;
        }
        p {
          margin-bottom: 0;
        }
      }
    }
  }


    @media (max-width: 567px) {

    .main_div .form_div{
      width:100%;
      flex:unset;
    }

    .button_div{
    width:80%;
    margin-top:40px;
    justify-content:center;
}

.main_div .product_checkout .desc_div .image_content {
    flex-direction: column;
}

 ul li {
    width: 100%;
}


  }

  @media (min-width: 567px) and (max-width: 992px) {
    .main_div .form_div{
      width:100%;
      flex:unset;
    }

    .button_div{
    width:90%;
    margin-top:40px;
    justify-content:end;
}


  
  }
`;

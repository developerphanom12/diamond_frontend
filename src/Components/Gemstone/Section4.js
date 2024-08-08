import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { setProductGemId, setUniqueProductGem } from "../../redux/users/action";
import { useDispatch, useSelector } from "react-redux";
import { EXCHANGE_URLS } from "../URLS";
import axios from "axios";
import { useLoading } from "../LoadingContext";
import nopro from "../../Images/product-not-found.jpg";
import { NoProduct } from "../NoProduct";
import Slider from "react-slick";
import a from "../../Images/a.jpg";
import dia from "../../Images/dia.webp";
import ring from "../../Images/ringwithdiamond.png";
import diamondd from "../../Images/round-removebg-preview.png";
import deleteicon from "../../Images/delete.PNG";
import ww from "../../Images/ww.webp";
import Drawer from "react-modern-drawer";

export default function Section4({ value }) {
  const [visibleProducts, setVisibleProducts] = useState(20);
  const [isOpen, setIsOpen] = React.useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
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
          initialSlide: 2,
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
  const handleUniqueRingDetail = (product) => {
    dispatch(setUniqueProductGem(product));
    console.log("Navigating with product:", product);
    navigate("/gemdetails", { state: { product } });
  };

  const handleAddSetting = (product) => {
    dispatch(setProductGemId(product.id));
    navigate("/checkoutgem", { state: { product } });
  };
  const uniqueProductGem = useSelector((state) => state.users.uniqueProductGem);
  const [unique, setUnique] = useState(null);
  const { setLoading } = useLoading();

  const fetchUniqueData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${EXCHANGE_URLS}/fetchpredefione?productId=${uniqueProductGem}`
      );
      if (response.status === 200) {
        setUnique(response.data.data);
        console.log("shdgfhsproduct Gemgggd", response.data.data);
      }
    } catch (error) {
      console.error("Error fetching collections:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUniqueData();
  }, [uniqueProductGem]);

  const handleLoadMore = () => {
    setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 1);
  };

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <Root>
      {value && value.length > 0 ? (
        value.slice(0, visibleProducts).map((i, index) => (
          <div className="main_div" key={index}>
            <div className="subdiv">
              <div className="slider-container">
                <Slider {...settings}>
                  <div>
                    <img
                      src={i.images?.edges?.[0]?.node?.originalSrc || nopro}
                      alt="img"
                    />
                  </div>

                  <div>
                    <img src={a} alt="img" />
                  </div>
                </Slider>
              </div>
              <div className="hov_content">
                <div className="heading">
                  <h5>{i?.title}</h5>
                  <p>${i?.priceRange?.maxVariantPrice?.amount}</p>
                </div>
                <div className="btn_div">
                  <button
                    className="info_btn"
                    onClick={() => handleUniqueRingDetail(i.id)}
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

              </div>
            </div>
          </div>
        ))
      ) : (
        <div style={{ width: "100vw", height: "80vh" }}>
          <NoProduct />
        </div>
      )}

      <div className="load_btn">
        {visibleProducts < value.length && (
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
    margin-top: 20px;
    margin-bottom: 100px;

    .subdiv {
      width: 314px;
      height: 350px;
      border: 3px solid #f7f7f7;
      border-radius: 20px;
      padding: 20px;
      overflow: hidden;
      position: relative;
      margin-bottom: 20px;

      /* slider changes */
      .slick-prev {
        left: -2px;
        z-index: 111;
      }

      .slick-next {
        right: -2px;
        z-index: 111;
      }

      /* slider changes */
      .slick-prev:before,
      .slick-next:before {
        background: rgb(185 179 179);
        border-radius: 50px;
      }

      img {
        width: 100%;
        height: 90%;
      }

      &:hover {
        border: 3px solid black;
        overflow: unset;
      }

      &:hover .hov_content,
      &.open .hov_content {
        z-index: 1;
        position: absolute;
        background-color: white;
        border: 3px solid black;
        padding: 0 20px;
        left: -3px;
        overflow: hidden;
        width: 314px;
        border-top: none;
        border-radius: 0 0 20px 20px;
      }
    }

    .heading {
      display: flex;
      justify-content: space-between;
      margin-top: 20px;
      padding-bottom: 10px;

      h5 {
        font-size: 13px;
        color: #000000;
        font-weight: 400;
      }
      p {
        color: rgba(102, 102, 102);
        font-size: 13px;
        opacity: 1;
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

 
  /* .EZDrawer__container {
    z-index: 11111111 !important;
    overflow-y: unset!important;
    height: 100%!important;
    border-top-right-radius: 0 !important;
    border-top-left-radius: 0 !important;
    padding-bottom: 40px;
  }  */


  .bRtCQo .EZDrawer__container {
    z-index: 11111111 !important;
    overflow-y:unset!important;
    height: 100vh!important;
    border-top-right-radius: 0 !important;
    border-top-left-radius: 0 !important;
    padding-bottom: 40px;
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
    height: 420px;
    overflow: auto;
    scrollbar-width: none;
    -ms-overflow-style: none!important;
    .prod_div {
      padding: 10px 16px;
      .prod {
        padding: 12px;
        background-color: #f7f7f7;
        border-radius: 1.25rem;
        display: flex;
        flex-direction: column;
        gap: 15px;
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
            font-size: 15px;
            color: #000000;
            font-weight: 400;
          }
        }
        .prod_spec {
          display: flex;
          justify-content: space-between;
          padding-bottom: 15px;
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
                font-size: 14px;
                color: #000000;
                margin-bottom: 0;
                font-weight: 500;
              }
              p {
                font-size: 13px;
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
            font-size: 21px;
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
    padding: 16px;
    display: flex;
    justify-content: space-between;

    p {
      font-size: 21px;
      color: #666666;
    }

    h4 {
      font-weight: 500;
      font-size: 21px;
      color: #000000;
    }
  }

  .but_div {
    padding: 16px;
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
    padding: 0px;
    .main_div {
      .subdiv {
        width: 44vw;
        height: 218px;
        &.open {
          width: 100vw;
          height: 100vh;
          img {
            height: 60%;
            width: 100%;
          }
        }
        &:hover {
          /* border: 1px solid transparent; */
        }
        img {
          height: 90%;
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
        &.open {
          .btn_div .info_btn,
          .btn_div .add_btn {
            font-size: 13px;
            padding: 6px 10px;
            border-radius: 15px;
          }
        }
        &:hover .hov_content {
          width: 44vw;
          /* border: 1px solid transparent; */
          padding: 0px 10px 10px;
        }
        &.open .hov_content {
          width: 96vw;
          border: 1px solid transparent;
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

  @media (min-width: 567px) and (max-width: 992px) {
    .prod_main_div {
      height: 890px;
    }
  }
`;

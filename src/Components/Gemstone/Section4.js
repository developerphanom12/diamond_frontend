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

export default function Section4({ value }) {
  const [visibleProducts, setVisibleProducts] = useState(20);

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
                    onClick={() => handleAddSetting(i)}
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
  @media (max-width: 567px) {
    padding: 0px;
    .main_div {
      .subdiv {
        width: 44vw;
        height: 30vh;
        &.open {
          width: 100vw;
          height: 100vh;
          img {
            height: 60%;
            width: 100%;
          }
        }
        &:hover {
          border: 1px solid transparent;
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
          border: 1px solid transparent;
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
`;
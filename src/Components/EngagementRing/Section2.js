import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import Section3 from "./Section3";
import { useDispatch } from "react-redux";
import Section4 from "./Section4";
import { setProductIds } from "../../redux/users/action";
import solitaire from "../Images/Solitaire.png";
import pave from "../Images/Pave.png";
import halo from "../Images/Halo.png";
import nature from "../Images/Nature.png";
import hiddenhalo from "../Images/HiddenHalo.png";
import sidestone from "../Images/SideStone.png";
import threestone from "../Images/ThreeStones.png";
import vintage from "../Images/Vintage.png";
import tension from "../Images/Tension.png";

export default function Section2() {
  const [selectedButton, setSelectedButton] = useState(1);
  const [collection, setCollection] = useState([]);
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  const handleButtonClick = (buttonIndex) => {
    setSelectedButton(buttonIndex);
  };

  useEffect(() => {
    const fetchCollections = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3200/api/rings/collection"
        );
        if (response.status === 200) {
          setCollection(response.data.data);
          console.log("response", response.data.data);
        }
      } catch (error) {
        console.error("Error fetching collections:", error);
      }
    };

    fetchCollections();
  }, []);

  useEffect(() => {
    const fetchProductsDetails = async () => {
      if (collection.length > 0) {
        const collectionId = collection[selectedButton]?.id;
        try {
          const res = await axios.get(
            `http://localhost:3200/api/rings/collectionById?collectionId=${collectionId}`
          );
          if (res.status === 200) {
            setProducts(res.data.products);
            const productIds = res.data.products.map((product) => product.node);
            dispatch(setProductIds(productIds));
            console.log("productid", productIds);
          }
        } catch (error) {
          console.error("Error fetching products:", error);
        }
      }
    };

    fetchProductsDetails();
  }, [collection, selectedButton, dispatch]);

  return (
    <Root>
      <div className="container-fluid">
        <div className="row mt-4">
          <div className="col-lg-12">
            <div className="heading text-center">
              <h2>Engagement Rings</h2>
              <p>
                Discover our collection of made to order engagement rings and
                customize it to your preference
              </p>
            </div>
          </div>
        </div>
        <div className="ring_types mt-4">
          <button
            className={selectedButton === 1 ? "selected" : ""}
            onClick={() => handleButtonClick(1)}
          >
            <img
              src={solitaire}
              alt="img of solitaire ring"
              style={{ width: "52px" }}
            />
            <span>{collection[0]?.title}</span>
          </button>
          <button
            className={selectedButton === 2 ? "selected" : ""}
            onClick={() => handleButtonClick(2)}
          >
            <img
              src={pave}
              alt="img of solitaire ring"
              style={{ height: "62px" }}
            />
            <span>{collection[1]?.title}</span>
          </button>

          <button
            className={selectedButton === 3 ? "selected" : ""}
            onClick={() => handleButtonClick(3)}
          >
            <img
              src={halo}
              alt="img of solitaire ring"
              style={{ height: "62px" }}
            />
            <span>{collection[2]?.title}</span>
          </button>

          <button
            className={selectedButton === 4 ? "selected" : ""}
            onClick={() => handleButtonClick(4)}
          >
            <img
              src={nature}
              alt="img of solitaire ring"
              style={{ height: "62px" }}
            />
            <span>{collection[3]?.title}</span>
          </button>

          <button
            className={selectedButton === 5 ? "selected" : ""}
            onClick={() => handleButtonClick(5)}
          >
            <img
              src={hiddenhalo}
              alt="img of solitaire ring"
              style={{ height: "62px" }}
            />
            <span>{collection[4]?.title} </span>
          </button>

          <button
            className={selectedButton === 6 ? "selected" : ""}
            onClick={() => handleButtonClick(6)}
          >
            <img
              src={sidestone}
              alt="img of solitaire ring"
              style={{ width: "52px" }}
            />
            <span>{collection[5]?.title} </span>
          </button>

          <button
            className={selectedButton === 7 ? "selected" : ""}
            onClick={() => handleButtonClick(7)}
          >
            <img
              src={threestone}
              alt="img of solitaire ring"
              style={{ width: "52px" }}
            />
            <span>{collection[6]?.title} </span>
          </button>

          <button
            className={selectedButton === 8 ? "selected" : ""}
            onClick={() => handleButtonClick(8)}
          >
            <img
              src={vintage}
              alt="img of solitaire ring"
              style={{ width: "52px" }}
            />
            <span>{collection[7]?.title}</span>
          </button>

          <button
            className={selectedButton === 9 ? "selected" : ""}
            onClick={() => handleButtonClick(9)}
          >
            <img
              src={tension}
              alt="img of solitaire ring"
              style={{ height: "62px" }}
            />
            <span>{collection[8]?.title}</span>
          </button>
        </div>
      </div>
      <Section3 />
      <Section4 products={products} />
    </Root>
  );
}
const Root = styled.section`
  padding: 0 20px;

  .column {
    border: 1px solid rgba(247, 247, 247);
    background-color: rgba(247, 247, 247);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 15px;
    border-radius: 10px;
    h2 {
      font-size: 40px;
      font-weight: 400;
      margin-right: 10px;
    }
    span {
      color: rgba(128, 128, 128);
      font-size: 13px;
      font-weight: 600;
    }
    h6 {
      color: rgba(0, 0, 0);
      font-size: 18px;
      text-transform: uppercase;
    }
    img,
    svg {
      vertical-align: middle;
      width: 35px;
      height: 35px;
    }
    a {
      color: rgba(128, 128, 128);
      text-decoration: underline;
      &:hover {
        text-decoration: underline;
      }
    }
  }

  .heading {
    h2 {
      color: rgba(0, 0, 0);
      font-size: 30px;
    }
    p {
      font-size: 20px;
    }
  }

  .ring_types {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    button {
      width: 8%;
      border: 2px solid transparent;
      background: #fff;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-radius: 10px;
      padding: 12px 0;
      &:hover {
        background-color: rgba(247, 247, 247);
      }

      &.selected {
        border: 2px solid black;
        background-color: #fff;
        border-radius: 10px;
      }

      img,
      svg {
        height: 50px;
        width: 62px;
      }
    }
  }
`;

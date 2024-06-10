import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import Section3 from "./Section3";
import { useDispatch } from "react-redux";
import Section4 from "./Section4";
import { setProductIds, setSelectedRingSvg } from "../../redux/users/action";
import solitaire from "../Images/Solitaire-removebg-preview.png";
import pave from "../Images/Pave-removebg-preview.png";
import halo from "../Images/Halo-removebg-preview.png";
import nature from "../Images/Nature-removebg-preview.png";
import hiddenhalo from "../Images/HiddenHalo-removebg-preview.png";
import sidestone from "../Images/SideStone-removebg-preview.png";
import threestone from "../Images/ThreeStones-removebg-preview.png";
import vintage from "../Images/Vintage-removebg-preview.png";
import tension from "../Images/Tension-removebg-preview.png";

const shapesList = [
  { title: "Solitaire", imgUrl: solitaire },
  { title: "Pave", imgUrl: pave },
  { title: "Halo", imgUrl: halo },
  { title: "Nature", imgUrl: nature },
  { title: "Hidden Halo", imgUrl: hiddenhalo },
  { title: "Sidestone", imgUrl: sidestone },
  { title: "Three Stone", imgUrl: threestone },
  { title: "Vintage", imgUrl: vintage },
  { title: "Tension", imgUrl: tension },
];

export default function Section2() {
  const [selectedButton, setSelectedButton] = useState(1);
  const [collection, setCollection] = useState([]);
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  const handleButtonClick = (buttonIndex, selectedRingSvg) => {
    setSelectedButton(buttonIndex);
    dispatch(setSelectedRingSvg(selectedRingSvg));  
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
          {shapesList.map((shape, index) => (
            <button
              key={index}
              className={selectedButton === index + 1 ? "selected" : ""}
              onClick={() => handleButtonClick(index + 1, shape.imgUrl)}
            >
              <img
                src={shape.imgUrl}
                alt={`img of ring ${index + 1}`}
                style={{ width: "52px" }}
              />
              <span>{shape.title}</span>
            </button>
          ))}
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
      width: 100px;
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

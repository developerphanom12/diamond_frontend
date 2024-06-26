import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
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
import { EXCHANGE_URLS } from "../URLS";
import { useLoading } from "../LoadingContext";
import { IoFilterOutline } from "react-icons/io5";
import "react-modern-drawer/dist/index.css";
import Drawer from "react-modern-drawer";

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
  const { setLoading } = useLoading();
  const handleButtonClick = (buttonIndex, selectedRingSvg) => {
    setSelectedButton(buttonIndex);
    dispatch(setSelectedRingSvg(selectedRingSvg));
  };

  useEffect(() => {
    const fetchCollections = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${EXCHANGE_URLS}/collection`);
        if (response.status === 200) {
          setCollection(response.data.data);
          console.log("response", response.data.data);
        }
      } catch (error) {
        console.error("Error fetching collections:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCollections();
  }, [setLoading]);

  useEffect(() => {
    const fetchProductsDetails = async () => {
      if (collection.length > 0) {
        const collectionId = collection[selectedButton]?.id;
        try {
          const res = await axios.get(
            `${EXCHANGE_URLS}/collectionById?collectionId=${collectionId}`
          );
          if (res.status === 200) {
            setProducts(res.data.products);
            const productIds = res.data.products.map((product) => product.node);
            dispatch(setProductIds(productIds));
            console.log("productid", productIds);
          }
        } catch (error) {
          console.error("Error fetching products:", error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchProductsDetails();
  }, [collection, selectedButton, dispatch, setLoading]);

  const [isOpen, setIsOpen] = React.useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const drawerContent = (
    <>
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
    </>
  );
  return (
    <Root>
      <div className="container-fluid">
        <div className="row ">
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
        <button className="drawer-toggle-button" onClick={toggleDrawer}>
          <IoFilterOutline /> Filter
        </button>
        <div
          className={`drawer-content ${
            isOpen && screenWidth <= 876 ? "open" : ""
          }`}
        >
          {screenWidth > 876 ? (
            drawerContent
          ) : (
            <Drawer
              open={isOpen}
              onClose={toggleDrawer}
              direction="bottom"
              className="bla"
            >
              {drawerContent}
            </Drawer>
          )}
        </div>
      </div>
       
      <Section4 products={products} />
    </Root>
  );
}
const Root = styled.section`
  padding: 0 0 20px;

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
    padding: 10px 24px;
    h2 {
      color: rgba(0, 0, 0);
      font-size: 28px;
      margin-bottom: 10px;
    }
    p {
      font-size: 18px;
      font-weight: 500;
      line-height: 1.75rem;
    }
  }

  .ring_types {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    button {
      width: 93px !important;
      border: 2px solid transparent;
      background: #fff;
      display: flex;
      flex-direction: column;
      justify-content: center;
      border-radius: 10px;
      align-items: center;
      padding: 12px 0;
      font-size: 12px;
      line-height: 25px;
      font-weight: 500;
      &.selected {
        border: 2px solid black;
        border-radius: 10px;
      }

      &:hover {
        background-color: rgba(247, 247, 247);
      }

      img,
      svg {
        height: 50px;
        width: 62px;
      }
    }
  }

  .drawer-content {
    padding: 20px 0px;
    width: 100%;
  }
  .drawer-toggle-button {
    font-weight: 500;
    padding: 5px 10px;
    border: 1px solid #d1d1d1;
    border-radius: 4px;
    font-size: 14px;
    background-color: transparent;
  }
  @media (min-width: 877px) {
    .drawer-toggle-button {
      display: none;
    }
    .drawer-content {
      display: block;
    }
  }
  .EZDrawer__container {
    overflow-y: scroll !important;
    height: 350px !important;
    border-top-right-radius: 25px !important;
    border-top-left-radius: 25px !important;
    padding-bottom: 40px;
  }
  @media (max-width: 876px) {
    .drawer-toggle-button {
      display: block;
    }
    .drawer-content {
      /* display: none; */
      .ring_types {
        justify-content: left;
        gap: 4px;
        margin: 0px 10px;
        width: 100%;
        .btn_shapes {
          width: 93px !important;
          border: 1px solid #d1d1d1;
          background-color: rgba(247, 247, 247);
          padding: 12px 42px;
        }
      }
    }
  }
`;

import React, { useState, useEffect } from "react";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { IoSearchOutline } from "react-icons/io5";
import { LuUser2 } from "react-icons/lu";
import styled from "styled-components";
import BottomBar from "./bottom/BottomBar";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { EXCHANGE_URLS } from "../URLS";

const Root = styled.section`
  font-family: "ProximaNova", "sans-serif";
  border-bottom: 1px solid #f2f2f2;
  z-index: 11110011;
  position: sticky;
  h2 {
    text-transform: uppercase;
    margin: 20px 0px;
    text-align: center;
    background: linear-gradient(to right, #000, #333, #000, #333);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    cursor: pointer;
  }
  .search {
    display: flex;
    border-bottom: 1px solid black;
    flex: 2;
    margin: 20px 0px;
    align-items: center;
    input {
      border: transparent;
      outline: none;
      width: 100%;
      padding: 8px 4px;
      font-size: 1rem;
      line-height: 1.2;
      height: auto;
      letter-spacing: 1px;
    }
    button {
      padding: 5px;
      background-color: #fff;
      border: none;
      svg {
        width: 25px;
        height: 25px;
      }
    }
  }
  .icon {
    display: flex;
    justify-content: end;
    align-items: center;
    width: 100%;
    gap: 10px;
    margin: 20px 0px;

    svg {
      width: 20px;
      height: 20px;
    }
  }

  .search_div {
    width: 60%;
    overflow: auto;
    display: flex;
    flex-wrap: wrap;
    position: absolute;
    background-color: white;
    max-height: 300px;
    border-radius: 20px;
    margin: 0 20px;
    z-index: 1111;
    .col-lg-12,
    .col-md-4,
    .col-sm-6 {
      width: 33%;
    }
    .product-card {
      display: flex;
      flex-direction: column;
      align-items: center;

      img {
        width: 70%;
      }
      h3 {
        font-size: 24px;
      }
    }
  }

  @media (max-width: 567px) {
    .search_div {
      width: 100%;
      margin: 0;
    }

    .search_div .col-lg-12,
    .iGkxGw .search_div .col-md-4,
    .iGkxGw .search_div .col-sm-6 {
      width: 50%;
    }
    .search_div .product-card h3 {
      font-size: 20px;
    }
  }

  @media (min-width: 567px) and (max-width: 992px) {
    .search_div {
      width: 80%;
    }
    .search_div .product-card h3 {
      font-size: 20px;
    }
  }

  @media (min-width: 1024px) and (max-width: 1366px) {
    .search_div .product-card h3 {
      font-size: 20px;
    }
  }
`;

export default function NavBar() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]);
  const [typingTimeout, setTypingTimeout] = useState(0);

  useEffect(() => {
    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }
    setTypingTimeout(
      setTimeout(() => {
        if (searchTerm.trim() !== "") {
          handleSearch();
        } else {
          setProducts([]);
        }
      }, 500) // Adjust the delay time here (in milliseconds)
    );
  }, [searchTerm]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `${EXCHANGE_URLS}/search?keyword=${searchTerm}`
      );
      const { products, message } = response.data;

      if (products && products.length > 0) {
        setProducts(products);
      } else {
        console.log("No products found:", message);
        {
          products.length === 0 && <p>No products found</p>;
        }
        setProducts([]); // Reset products state if no products found
      }
    } catch (error) {
      console.error("Error searching products:", error);
    }
  };

  const onInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <Root>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 col-md-3 col-12">
            <div className="search">
              <input
                placeholder="SEARCH"
                value={searchTerm}
                onChange={onInputChange}
              />
              <button onClick={handleSearch}>
                <IoSearchOutline />
              </button>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-8">
            <h2
              onClick={() => {
                navigate("/");
              }}
            >
              Ring-Builder
            </h2>
          </div>
          <div className="col-lg-3 col-md-3 col-4">
            <div className="icon">
              <a href="/login">
                <LuUser2 />
              </a>
              <HiOutlineShoppingBag />
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="search_div">
            {products.length > 0 &&
              products.map((product) => (
                <div
                  className="col-lg-12 col-md-4 col-sm-6"
                  key={product.node.id}
                >
                  <div className="product-card">
                    <img
                      src={product.node.images.edges[0]?.node.src}
                      alt={product.node.title}
                    />
                    <h3>{product.node.title}</h3>
                    <p>Price: ${product.node.variants.edges[0]?.node.price}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12" style={{ padding: "0px" }}>
            <BottomBar />
          </div>
        </div>
      </div>
    </Root>
  );
}

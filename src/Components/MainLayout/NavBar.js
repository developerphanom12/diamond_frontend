import React, { useState, useEffect } from "react";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { IoSearchOutline } from "react-icons/io5";
import { LuUser2 } from "react-icons/lu";
import styled, { createGlobalStyle } from "styled-components";
import BottomBar from "./bottom/BottomBar";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { EXCHANGE_URLS } from "../URLS";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { IconContext } from "react-icons/lib";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import EngageList from "./bottom/EngageList";
import DiamondList from "./bottom/DiamondList";
import EducationList from "./bottom/EducationList";

const Nav = styled.div`
  background: white;
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const NavIcon = styled(Link)`
  margin-right: 10px;
  font-size: 22px;
  height: 80px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background: #ffffff;
  width: 95%;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  overflow: auto;
  top: 45px;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const GlobalStyle = createGlobalStyle`
  body.no-scroll {
    overflow: hidden;
  }
  
`;

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
      color: black;
    }
  }

  .ico_div {
    margin-top: -50px;
    svg {
      margin-left: 10px;
      width: 24px;
      height: 24px;
    }
  }

  .ring_head {
    margin-bottom: 0;
    margin-top: 0;
    text-transform: uppercase;
  }

  .icon_div {
    color: black !important;
    width: 20px;
    height: 20px;
  }

  .hightlight_content {
    background-color: black;
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    h5 {
      font-size: 12px;
      color: white;
      margin-bottom: 0;
      font-weight: 700;
    }
  }

  .css-15v22id-MuiAccordionDetails-root {
    padding: 16px 16px 16px;
    background: #f7f7f7;
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
    justify-content: center;

    .product-card {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 15px;

      img {
        width: 100px;
      }

      .sear_cont {
        display: flex;
        flex-direction: column;
        h3 {
          font-size: 17px;
          margin-bottom: 0;
        }
        p {
          font-size: 13px;
        }
      }
    }
  }

  .side_bar {
    display: none;
  }

  .search_div_second {
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
    justify-content: center;

    .product-card_second {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 15px;

      img {
        width: 100px;
      }

      .sear_cont_second {
        display: flex;
        flex-direction: column;
        h3 {
          font-size: 17px;
          margin-bottom: 0;
        }
        p {
          font-size: 13px;
        }
      }
    }
  }

  @media (max-width: 567px) {
    .first_header {
      display: none;
    }

    .side_bar {
      display: block;
    }

    .search {
      margin: 20px 10px;
    }

    .search_div_second {
      width:100%;
      margin:0;
      justify-content:unset;
      border-radius:0;
      max-height:500px;

    }

    .accor_heading {
      margin: 0;
      font-family: ProximaNova, sans-serif;
      font-weight: 500;
      font-size: 16px;
      line-height: 1.5;
      color: #808080;
    }
  }

  @media (min-width: 567px) and (max-width: 992px) {
    .search_div {
      width: 80%;
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

  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  useEffect(() => {
    if (sidebar) {
      document.body.classList.add("no-scroll"); // Add class to prevent scrolling
    } else {
      document.body.classList.remove("no-scroll"); // Remove class to allow scrolling
    }

    // Clean up on component unmount
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [sidebar]);

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
      <div className="first_header">
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
                The Precious Earth
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
                    className="col-lg-5 col-md-5 col-sm-6"
                    key={product.node.id}
                  >
                    <div className="product-card">
                      <img
                        src={product.node.images.edges[0]?.node.src}
                        alt={product.node.title}
                      />
                      <div className="sear_cont">
                        <h3>{product.node.title}</h3>
                        <p>
                          Price: ${product.node.variants.edges[0]?.node.price}
                        </p>
                      </div>
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
      </div>

      <div className="side_bar">
        <IconContext.Provider value={{ color: "black" }}>
          <Nav className="main_content">
            <NavIcon to="#">
              <FaIcons.FaBars onClick={showSidebar} className="icon_div" />
            </NavIcon>

            <h2
              className="ring_head"
              onClick={() => {
                navigate("/home");
              }}
            >
              The Precious Earth
            </h2>

            <svg
              stroke="currentColor"
              fill="none"
              stroke-width="2"
              viewBox="0 0 24 24"
              aria-hidden="true"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              ></path>
            </svg>
          </Nav>
          <SidebarNav sidebar={sidebar}>
            <SidebarWrap>
              <NavIcon to="#">
                <AiIcons.AiOutlineClose onClick={showSidebar} />
              </NavIcon>
              <div className="ico_div">
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="12" cy="8" r="5"></circle>
                  <path d="M20 21a8 8 0 1 0-16 0"></path>
                </svg>
              </div>

              <div className="search">
                <input
                  placeholder="SEARCH..."
                  value={searchTerm}
                  onChange={onInputChange}
                />
                <button onClick={handleSearch}>
                  <IoSearchOutline />
                </button>
              </div>

              <div className="container-fluid">
                <div className="row">
                  <div className="search_div_second">
                    {products.length > 0 &&
                      products.map((product) =>(
                        <div
                          className="col-lg-5 col-md-5 col-sm-12"
                          key={product.node.id}
                        >
                          <div className="product-card_second">
                            <img
                              src={product.node.images.edges[0]?.node.src}
                              alt={product.node.title}
                            />
                            <div className="sear_cont_second">
                              <h3>{product.node.title}</h3>
                              <p>
                                Price: $
                                {product.node.variants.edges[0]?.node.price}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>

              <div className="hightlight_content">
                <h5>30 Days Free Returns</h5>
              </div>

              <div>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    <Typography>
                      <div className="accor_heading">ENGAGEMENT RINGS</div>
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <EngageList />
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                  >
                    <Typography>
                      <div className="accor_heading">DIAMONDS</div>
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <DiamondList />
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                  >
                    <Typography>
                      <div className="accor_heading">EDUCATION</div>
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <EducationList />
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
            </SidebarWrap>
          </SidebarNav>
        </IconContext.Provider>
      </div>
      <GlobalStyle />
    </Root>
  );
}

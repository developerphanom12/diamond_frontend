import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { IoSearchOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { IconContext } from "react-icons/lib";
import axios from "axios";
import { EXCHANGE_URLS } from "../Components/URLS";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import EngageList from "./MainLayout/bottom/EngageList";
import DiamondList from "./MainLayout/bottom/DiamondList";
import EducationList from "./MainLayout/bottom/EducationList";

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
  width: 330px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  overflow: auto;
  top: 60px;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

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
      <div className="side_bar">
        <IconContext.Provider value={{ color: "black" }}>
          <Nav className="main_content">
            <NavIcon to="#">
              <FaIcons.FaBars onClick={showSidebar} className="icon_div" />
            </NavIcon>

            <h2 className="ring_head">Ring-Builder</h2>

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
    </Root>
  );
};

export default Sidebar;

const Root = styled.section`
  .ico_div {
    svg {
    }
  }

  .ring_head {
    margin-bottom: 0;
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

  .ico_div {
    margin-top: -50px;
    svg {
      margin-left: 10px;
      width: 24px;
      height: 24px;
    }
  }

  .search {
    display: flex;
    border-bottom: 1px solid black;
    flex: 2;
    margin: 20px 10px;
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
  .css-15v22id-MuiAccordionDetails-root {
    padding: 16px 16px 16px;
    background: #f7f7f7;
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
    .search_div .product-card h3 {
      font-size: 20px;
    }
  }
`;

import React from "react";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { IoSearchOutline } from "react-icons/io5";
import { LuUser2 } from "react-icons/lu";
import styled from "styled-components";
import BottomBar from "./bottom/BottomBar";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const navigate = useNavigate();
  return (
    <Root>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 col-md-3 col-12">
            <div className="search">
              <input placeholder="SEARCH" />
              <button>
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
          <div className="col-lg-12" style={{ padding: "0px" }}>
            <BottomBar />
          </div>
        </div>
      </div>
    </Root>
  );
}
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
`;

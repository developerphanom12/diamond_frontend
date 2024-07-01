import React, { useEffect, useState } from "react";
import styled from "styled-components";
import dia from "../Images/handimg.webp";
import { useNavigate } from "react-router-dom";
import Drawer from "react-modern-drawer";

export default function Section4() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = React.useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const drawerContent = (
    <>
      <div className="main_div">
        <div className="subdiv">
          <img src={dia} alt="img" />
          <div className="hov_content">
            <div className="heading">
              <h5>1Ct Marquise Keyzar Moissanite</h5>
              <p>$502</p>
            </div>
            <div className="btn_div">
              <button className="info_btn">More Info</button>
              <button
                className="add_btn"
                onClick={() => {
                  navigate("/productpage");
                }}
              >
                Add Setting
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
  return (
    <Root>
      <button className="drawer-toggle-button" onClick={toggleDrawer}>
      {drawerContent}
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
    
    </Root>
  );
}

const Root = styled.section`
  padding: 0 20px;
  .drawer-content {
    padding: 20px 0px;
    width: 100%;
  }
  .drawer-toggle-button {
    font-weight: 500;
    padding: 5px 10px;
    border: 1px solid transparent;
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
    height: 60vh !important;
    border-top-right-radius: 25px !important;
    border-top-left-radius: 25px !important;
    padding-bottom: 40px;
  }
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

      img {
        width: 100%;
      }

      &:hover {
        border: 3px solid black;
        overflow: unset;
      }

      &:hover .hov_content {
        z-index: 1;
        position: absolute;
        background-color: white;
        border: 3px solid black;
        padding: 0 20px 0;
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

      h5 {
        font-size: 14px;
        color: #000000;
        font-weight: 400;
      }
      p {
        color: rgba(102, 102, 102);
        font-size: 14px;
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
  @media (max-width: 876px) {
    padding: 0px;
    .main_div {
      .subdiv {
        width: 44vw;
        height: 30vh;
        img {
          height: 84%;
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
        &:hover .hov_content {
          width: 44vw;
          padding: 0px 10px 10px;
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

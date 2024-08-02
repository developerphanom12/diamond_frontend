import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import backimg from "../../Images/bandimgs.png";
import SolidHer from "../../Images/SolidHer.png";
import NatureHer from "../../Images/NatureHer.png";
import ProngHer from "../../Images/ProngHer.png";
import CigarHer from "../../Images/CigarHer.png";
import PaveHer from "../../Images/PaveHer.png";
import ClassicHim from "../../Images/ClassicHim.png";
import DiamondHim from "../../Images/DiamondHim.png";
import DesignerHim from "../../Images/DesignerHim.png";
import { setDiamondType, setSelectedShape } from "../../redux/users/action";
import gold1 from "../../Images/fourtwo.png";
import gold2 from "../../Images/fourthree.png";
import gold3 from "../../Images/fourone.png";
import gold4 from "../../Images/pt.png";

export default function WeddingBandList() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleShapeClick = (shapeName) => {
    dispatch(setSelectedShape(shapeName));
    dispatch(setDiamondType(false));
    navigate("/weddingbands");
  };
  const handleDiamondTypeClick = (diamondType) => {
    dispatch(setDiamondType(diamondType));
    navigate("/weddingbands");
  };

  return (
    <Root>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-12">
            <b>For Her</b>
            <div className="ring_space">
              <ul>
                <li className="d-flex">
                  {" "}
                  <img src={NatureHer} alt="img" />
                  <a href="naturaldiamond">Nature</a>
                </li>
                <li
                  className="d-flex"
                  onClick={() => handleDiamondTypeClick(false)}
                >
                  {" "}
                  <img src={SolidHer} alt="img" />
                 Solid
                </li>
                <li
                  className="d-flex"
                  onClick={() => handleDiamondTypeClick(true)}
                >
                  <img src={PaveHer} alt="img" />
                 Pave
                </li>
                <li
                  className="d-flex"
                  onClick={() => handleDiamondTypeClick(false)}
                >
                  {" "}
                  <img src={CigarHer} alt="img" />
                 Eternity
                </li>
                <li
                  className="d-flex"
                  onClick={() => handleDiamondTypeClick(true)}
                >
                  <img src={ProngHer} alt="img" />
                 Prong
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12 bord">
            <b>For Him</b>
            <div className="ring_space">
              <ul>
                <li onClick={() => handleShapeClick("ROUND")}>
                  <img src={ClassicHim} alt="img" />
                  <span>Classic</span>
                </li>
                <li onClick={() => handleShapeClick("EMERALD")}>
                  {" "}
                  <img src={DiamondHim} alt="img" />
                  <span>Diamond</span>
                </li>
                <li onClick={() => handleShapeClick("HEART")}>
                  <img src={DesignerHim} alt="img" />

                  <span>Designer</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12 bord">
            <b>Shop By Metal</b>
            <div className="ring_space">
              <ul>
                <li style={{ display: "flex", alignItems: "center" }}>
                  <img src={gold1} alt="img" className="color_img" />
                  <p style={{ margin: "0", padding: "0px 4px" }}>
                    {" "}
                    Yellow Gold
                  </p>
                </li>
                <li style={{ display: "flex", alignItems: "center" }}>
                  <img src={gold2} alt="img" className="color_img" />

                  <p style={{ margin: "0", padding: "0px 4px" }}> Rose Gold</p>
                </li>

                <li style={{ display: "flex", alignItems: "center" }}>
                  <img src={gold3} alt="img" className="color_img" />

                  <p style={{ margin: "0", padding: "0px 4px" }}> White Gold</p>
                </li>
                <li style={{ display: "flex", alignItems: "center" }}>
                  <img src={gold4} alt="img" className="color_img" />
                  <p style={{ margin: "0", padding: "0px 4px" }}> Platinum</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12 ">
            <img
              src={backimg}
              alt="img"
              className="imgh"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>
      </div>
    </Root>
  );
}
const Root = styled.section`
  .col-lg-3 {
    margin: 20px 0px;
  }
  b {
    font-size: 13px;
    text-transform: uppercase;
    padding: 10px;
  }
  ul {
    padding: 0px 20px;
    list-style: none;
    li {
      font-weight: 550;
      font-size: 13px;
      margin: 10px 0px;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 10px;
      a {
        text-decoration: none;
        color: black;
        display: flex;
        flex-direction: row;
        &:hover {
          text-decoration: underline;
        }
      }
      &:hover {
        text-decoration: underline;
      }
    }
  }

  svg,
  img {
    width: 30px;
    height: 30px;
    mix-blend-mode: multiply;
  }

  .ring_space {
    display: flex;
    justify-content: space-between;
    padding: 0px;
  }

  .bord {
    border-left: 1px solid #ededed;
  }

  @media (max-width: 567px) {
    margin-left: 0;

    .col-lg-3 {
      margin: 0;
      padding: 0;
    }

    padding: 0px;
    .imgh {
      display: none;
    }
    .ring_space {
      padding: 0;
      gap: 10px;
    }

    ul li a {
      font-size: 12px;
    }

    .bord {
      border-top: 1px solid #ededed;
      border-left: unset;
      padding-top: 20px;
    }

    span {
      font-size: 12px;
    }

    ul li {
      font-size: 12px;
      gap: 6px;
      display: flex;
      align-items: center;
    }

    b {
      font-size: 13px;
    }
  }
`;

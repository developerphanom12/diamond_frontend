import React from "react";
import styled from "styled-components";
import backimg from "../../Images/Diamond-2.jpg";
import rinfWdiamond from "../../Images/ringwithdiamond.png";
import naturaldiamond from "../../Images/naturaldiamond-removebg-preview.png";
import labgrown from "../../Images/labgrowncopy-removebg-preview.png";
import round from "../../Images/round-removebg-preview.png";
import emerald from "../../Images/emerald-removebg-preview.png";
import heart from "../../Images/heart-removebg-preview.png";
import marquise from "../../Images/Marquise-removebg-preview.png";
import oval from "../../Images/oval-removebg-preview.png";
import pear from "../../Images/Pear-removebg-preview.png";
import princess from "../../Images/Princess-removebg-preview.png";
import Radiant from "../../Images/Radiant-removebg-preview.png";
import Cushion from "../../Images/cushionremovebg.png";

export default function DiamondList() {
  return (
    <Root>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-12">
            <b>Design your Diamond ring</b>
            <ul>
              <li>
                {" "}
                <img src={rinfWdiamond} alt="img" />
                <a href="naturaldiamond">Start with a setting</a>
              </li>
              <li>
                {" "}
                <img src={naturaldiamond} alt="img" />
                Start with a Natural Diamond
              </li>
              <li>
                <img src={labgrown} alt="img" />
                Start with a Lab-created Diamond
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 col-12 bord" >
            <b>Shop Natural Diamond By Shape</b>
            <div className="ring_space"

            >
              <ul>
                <li>
                  <img src={round} alt="img" />
                  Round{" "}
                </li>
                <li>
                  {" "}
                  <img src={emerald} alt="img" />
                  <span>Emerald</span>
                </li>
                <li>
                  <img src={heart} alt="img" />

                  <span>Heart</span>
                </li>
                <li>
                  <img src={marquise} alt="img" />

                  <span>Marquise</span>
                </li>
                <li>
                  <img src={oval} alt="img" />

                  <span>Oval</span>
                </li>
              </ul>
              <ul>
                <li>
                  <img src={pear} alt="img" />

                  <span>Pear</span>
                </li>
                <li>
                  <img src={princess} alt="img" />

                  <span>Princess</span>
                </li>
                <li>
                  <img src={Radiant} alt="img" />

                  <span>Radiant</span>
                </li>
                <li>
                  <img src={Cushion} alt="img" />
                  <span>Cushion</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12 bord" >
            <b>Shop Natural Diamond By Shape</b>
            <div className="ring_space"
             
            >
              <ul>
                <li>
                  <img src={round} alt="img" />
                  {" "}
                  <span>Round</span>

                </li>
                <li>
                  {" "}
                  <img src={emerald} alt="img" />
                  <span>Emerald</span>
                </li>
                <li>
                  <img src={heart} alt="img" />

                  <span>Heart</span>
                </li>
                <li>
                  <img src={marquise} alt="img" />

                  <span>Marquise</span>
                </li>
                <li>
                  <img src={oval} alt="img" />

                  <span>Oval</span>
                </li>
              </ul>
              <ul>
                <li>
                  <img src={pear} alt="img" />

                  <span>Pear</span>
                </li>
                <li>
                  <img src={princess} alt="img" />

                  <span>Princess</span>
                </li>
                <li>
                  <img src={Radiant} alt="img" />

                  <span>Radiant</span>
                </li>
                <li>
                  <img src={Cushion} alt="img" />
                  <span>Cushion</span>
                </li>
              </ul>
            </div>
          </div>
          <div
            className="col-lg-3 col-md-6 col-12 "
            
          >
            <img
              src={backimg}
              alt="img"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>
      </div>
    </Root>
  );
}
const Root = styled.section`
  margin-left: 10px;
  .col-lg-3 {
    margin: 30px 0px;
  }
  b {
    font-size: 15px;
    text-transform: uppercase;
    padding: 10px;
  }
  ul {
    padding: 20px;
    list-style: none;
    li {
      font-weight:400;
      font-size:15px;
      margin:10px 0px;
      cursor:pointer;
      a{
        text-decoration:none;
        color:black;
      }
    }
  }

  svg,
  img {
    width: 30px;
    height: 30px;
    mix-blend-mode:multiply;
  }


  .ring_space{
    display:flex;
    justify-Content:space-between;
    padding:0px 20px;
  }


  .bord{
    border-left: 1px solid #ededed;
  }


  @media (max-width: 567px) {
     margin-left:0;
   
 .col-lg-3 {
    margin:0;
    padding:0;
} 

    padding: 0px;

    .ring_space {
    padding: 0;
    gap: 10px;
    justify-content: unset;
}

 ul li a {
    font-size:12px
}

.bord{
    border-top:1px solid #ededed;
    border-left:unset;
    padding-top:20px;
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

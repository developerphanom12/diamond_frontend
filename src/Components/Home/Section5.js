import React from "react";
import styled from "styled-components";
import ss1 from "../Images/s1.png";
import ss2 from "../Images/s2.png";
import ss3 from "../Images/s3.png";
import ss4 from "../Images/s4.png";
import ss5 from "../Images/s5.png";
import ss6 from "../Images/s6.png";
import Gbgimg from "../Images/ban.jpg";
import { useNavigate } from "react-router-dom";

export default function Section5(){
  const navigate = useNavigate();
  return (
    <Root>
      <div className="container-fluid" style={{ padding: "40px 24px" }}>
        <div className="row">
          <h2 className="heading">Our Promise</h2>
        </div>
        <div className="row">
          <div className="col-lg-2 col-md-2 col-4">
            <img src={ss1} alt="img" />
          </div>
          <div className="col-lg-2  col-md-2 col-4">
            <img src={ss2} alt="img" />
          </div>
          <div className="col-lg-2  col-md-2 col-4">
            <img src={ss3} alt="img" />
          </div>
          <div className="col-lg-2  col-md-2 col-4">
            <img src={ss4} alt="img" />
          </div>
          <div className="col-lg-2  col-md-2 col-4">
            <img src={ss5} alt="img" />
          </div>
          <div className="col-lg-2  col-md-2 col-4">
            <img src={ss6} alt="img" />
          </div>
        </div>
      </div>
      <div className="container-fluid imgbanner ">
        <div className="row">
          <div className="col-lg-6 col-12">
            <h1>
              CONSULT <br /> OUR EXPERTS
            </h1>
            <p>
              Enjoy personalized advice and a free live consultation <br />
              with Keyzar experts for your dream ring
            </p>
            <button
              onClick={() => {
                navigate("/contactus");
              }}
            >
              Set an Appointment
            </button>
          </div>
          <div className="col-lg-6 col"></div>
        </div>
      </div>
    </Root>
  );
}
const Root = styled.section`
  color: #000;
  .col-lg-2 {
    text-align: center;
    img {
      width: 100%;
      height: 100%;
      object-fit: scale-down;
    }
  }
  .imgbanner {
    background-image: url(${Gbgimg});
    background-size: 100% 100%;
    object-fit: contain;
    height: 400px;
  }
  .col-lg-6 {
    padding: 60px;
    height: 100%;
    display: inline-block;
    @media (max-width: 999px) {
      padding: 13px;
      h1 {
        font-size: 24px;
      }
    }
    h1 {
      font-size: 40px;
      line-height: 1;
      text-transform: uppercase;
    }
    p {
      margin: 20px 0px;
      font-size: 17px;
      font-weight: 300;
      line-height: 1.5;
    }
    button {
      margin-top: 10px;
      background-color: #fff;
      color: #000;
      font-size: 18px;
      padding: 18px 34px;
      border: 1px solid #fff;
      border-radius: 50px;
      line-height: 1.25;
      &:hover {
        background-color: #000;
        color: #fff;
        border: 1px solid #000;
        transition-duration: 0.5s;
      }
    }

  


  }

  .heading {
    text-align:center;
    font-size:2.5rem;
    margin-bottom:50px;
    font-weight:400;
    text-transform:uppercase;
    text-align: center;
    display:none;
}


  @media (max-width: 567px) {
    .imgbanner {
      height: 300px;
    }

    .col-lg-2 img {
      margin-bottom: 10px;
    }

    .col-lg-6 p {
      width: 60%;
      margin-bottom:0;
    }

    .col-lg-6 button {
      padding: 18px 10px;
    }

    .heading {
    display:block;
    margin-bottom: 10px;
}


 .col-lg-6 h1 {
    font-size: 1.75rem;
    line-height: 1;
    text-transform: uppercase;
}
  }

  @media (min-width: 567px) and (max-width: 992px){
    .col-lg-6 h1 {
    font-size: 40px;
    font-weight:400;
}

  }
  
`;

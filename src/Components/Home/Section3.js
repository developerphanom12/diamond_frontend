import React from "react";
import styled from "styled-components";
import ringg1 from "../Images/ringgg1.webp";
import ringg3 from "../Images/ringgg3.webp";
import ringg2 from "../Images/ringgg2.webp";
import ringg4 from "../Images/ringgg4.webp";

export default function Section3() {
  return (
    <Root>
      <div className="container-fluid mb-8">
        <div className="row">
          <div className="col-lg-2"></div>
          <div className="col-lg-8">
            <h2>Our Selections</h2>
          </div>
          <div className="col-lg-2"></div>
        </div>
      </div>
      <div className="container-fluid ">
        <div className="row">
          <div className="col-lg-3 col1">
            <div>etrtt</div>
          </div>
          <div className="col-lg-3 col2">
            <div>ereerer</div>
          </div>
          <div className="col-lg-3 col3">
            <div>yuyuyu</div>
          </div>
          <div className="col-lg-3 col4">
            <div>dfjgklsdfg</div>
          </div>
        </div>
      </div>
    </Root>
  );
}
const Root = styled.section`
  padding: 40px 0px;
  color: #000;
  h2 {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 50px;
    text-transform: uppercase;
  }
  img {
    width: 280px;
    height: 360px;
    border-radius: 20px;
    
  }
  .col-lg-3.col4,
  .col-lg-3.col3,
  .col-lg-3.col2,
  .col-lg-3.col1 {
    height: 50vh;
    background-size: 100% 100%;
    object-fit: contain;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
     
  }
  .col-lg-3.col1 {
    background-image: url(${ringg1});
   
  }
  .col-lg-3.col2 {
    background-image: url(${ringg2});
    
  }
  .col-lg-3.col3 {
    background-image: url(${ringg3});
    
  }
  .col-lg-3.col4 {
    background-image: url(${ringg4});
    
  }
`;

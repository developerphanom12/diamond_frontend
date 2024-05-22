import React from "react";
import styled from "styled-components";
import background from "../../Images/fine-jewelry-menu-image.2e354f18.webp";

export default function FineJwelry() {
  return (
    <Root>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-2"></div>

          <div className="col-lg-3 text">
            <b>Rings</b>
            <ul>
              <li> Stackable</li>
              <li> Statement</li>
              <li>Eternity rings </li>
            </ul>
          </div>
          <div className="col-lg-2"></div>
          <div className="col-lg-3 img_bner"></div>
          <div className="col-lg-2"></div>

        </div>
      </div>
    </Root>
  );
}
const Root = styled.section`
  .img_bner {
    background-image: url(${background});
    background-size: 100% 100%;
    object-fit: cover;
  }
  .text {
    padding: 30px;
  }
  b {
    font-size: 15px;
    text-transform: uppercase;
  }
  ul {
    padding: 0;
    list-style: none;
    li {
      font-weight: 400;
      font-size: 15px;
      margin: 10px 0px;
    }
  }
  svg,
  img {
    width: 30px;
    height: 30px;
  }
`;

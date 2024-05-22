import React from "react";
import styled from "styled-components";

export default function Pendats() {
  return (
    <Root>
      <div className="container-fluid">
        <div className="row mt-4">
          <div className="col-lg-12">
            <div className="heading text-center">
              <h2>Pendants</h2>
              <p>
              Discover our collection of made to order pendants and customize it to your preference
              </p>
            </div>
          </div>
        </div>

    </div>

    </Root>

   
  );
}
const Root = styled.section`
padding:0 20px;
  .heading {
    h2 {
      color: rgba(0, 0, 0);
      font-size: 30px;
    }
    p {
      font-size: 20px;
    }
  }



`;



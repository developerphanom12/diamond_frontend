import React from "react";
import styled from "styled-components";
import pro from "../Components/Images/stock.webp";

export const NoProduct = () => {
  return (
    <Root>
      <div className="head_div">
        <img src={pro} alt="no_product" />
        <h3>None of the Products Were Found</h3>
        <p>Change the results of your output in the filter.</p>
      </div>
    </Root>
  );
};

const Root = styled.section`
  .head_div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 400px;
    gap: 15px;
    img {
      width: 100px;
      height: 100px;
    }
    h3 {
      font-size: 30px;
      font-weight: 500;
      color: #000000;
      margin-bottom: 0;
    }
    p {
      font-size: 18px;
      font-weight: 500;
      color: #666666;
    }
  }
  @media (max-width: 567px){
    .head_div {
    h3 {
        font-size: 20px;
        padding: 0 100px;
        text-align: center;
    }
    p {
      font-size: 15px;
    }
}

  }
`;

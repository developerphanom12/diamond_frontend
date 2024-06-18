import React from "react";
import Loader from "react-js-loader";
import { useLoading } from "./LoadingContext";
import styled from "styled-components";

const LoaderDot = () => {
  const { loading } = useLoading();
  return loading ? (
    <Root>
      <div className="loader-container">
        <Loader
          type="bubble-scale"
          bgColor={"#000000"}
          color={"#000000"}
          size={80}
        />
      </div>
    </Root>
  ) : null;
};

export default LoaderDot;
const Root = styled.section`
  .sl-bubble1 {
    width: 100vw;
    height: 100vh;
  }
  .loader-container {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1000;
  }
`;

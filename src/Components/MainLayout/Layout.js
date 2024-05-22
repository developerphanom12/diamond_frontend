import React from "react";
import AnnoucementBar from "./AnnoucementBar";
import NavBar from "./NavBar";
import styled from "styled-components";

export default function Layout({ children }) {
  return (
    <Root>
      <div className="top_bar">
        <AnnoucementBar />
        <NavBar />
      </div>
      <div className="main_body">{children}</div>
    </Root>
  );
}
const Root = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
`;

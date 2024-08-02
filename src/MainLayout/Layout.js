import React from "react";
import AnnoucementBar from "./AnnoucementBar";
import NavBar from "./NavBar";
import styled from "styled-components";
import Footer from "./Footer";
import Subscription from "./Subscription";
// import Subscription from "./Home/Subscription";

export default function Layout({ children }) {
  return (
    <Root>
      <div className="top_bar">
        <AnnoucementBar />
        <NavBar />
      </div>
      <div className="main_body">{children}</div>
     
        <Subscription />
        <Footer />
      
    </Root>
  );
}
const Root = styled.section`
  min-width: 100vw;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden !important;
   
`;

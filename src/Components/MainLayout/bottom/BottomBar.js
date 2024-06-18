import { useState } from "react";
import { Nav } from "react-bootstrap";
import ContainerFluid from "react-bootstrap/Container";
import styled from "styled-components";
import EngageList from "./EngageList";
import DiamondList from "./DiamondList";
import EducationList from "./EducationList";

function BottomBar() {
  const [isListOpen2, setIsListOpen2] = useState(false);
  const [isListOpen4, setIsListOpen4] = useState(false);
  const [isListOpen6, setIsListOpen6] = useState(false);

  const handleMouseEnter2 = () => {
    setIsListOpen2(true);
  };

  const handleMouseLeave2 = () => {
    setIsListOpen2(false);
  };

  const handleMouseEnter4 = () => {
    setIsListOpen4(true);
  };

  const handleMouseLeave4 = () => {
    setIsListOpen4(false);
  };

  const handleMouseEnter6 = () => {
    setIsListOpen6(true);
  };

  const handleMouseLeave6 = () => {
    setIsListOpen6(false);
  };

  return (
    <Root>
      <ContainerFluid
        fluid
        style={{
          backgroundColor: "#fff",
          padding: "0px",
          position: "relative",
        }}
      >
        <Nav
          style={{
            backgroundColor: "#fff",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            onMouseEnter={handleMouseEnter2}
            onMouseLeave={handleMouseLeave2}
            id="graphic"
          >
            <Nav.Link href="/engagementring">Engagement rings</Nav.Link>
            {isListOpen2 && (
              <div className="option_list_list">
                {/* <ProgrammingTech /> */}
                <EngageList />
              </div>
            )}
          </div>

          <div
            onMouseEnter={handleMouseEnter4}
            onMouseLeave={handleMouseLeave4}
            id="diamond"
          >
            <Nav.Link href="/naturaldiamond">diamonds</Nav.Link>
            {isListOpen4 && (
              <div className="option_list_list">
                <DiamondList />
              </div>
            )}
          </div>

          <div
            onMouseEnter={handleMouseEnter6}
            onMouseLeave={handleMouseLeave6}
            id="graphic"
          >
            <Nav.Link href="/education">education</Nav.Link>
            {isListOpen6 && <div className="option_list_list"><EducationList/></div>}
          </div>
        </Nav>
      </ContainerFluid>
    </Root>
  );
}

export default BottomBar;
const Root = styled.section`
  border-top: 0.5px solid #dadbddab;
  box-shadow: 1px 3px 6px 1px #d3d3d36b;
  background-color: #fff !important;
  z-index: 1;
  position: relative;
  display: flex !important;

  nav.navbar.navbar-expand.navbar-light.bg-light {
    border: 1px solid #e4e5e7;
  }
  a.nav-link {
    font-family: "ProximaNova", "sans-serif";
    color: #000;
    display: block;
    font-size: 14px;
    font-weight: 100 !important;
    text-transform: uppercase;
    word-spacing: 1px;
    line-height: 24px;
    padding: 9px 15px !important;
    text-decoration: none;
    border-bottom: 3px solid transparent;
    margin: 0px 4px;
    &:hover {
      border-bottom: 3px solid #000;
    }
  }
  .option_list_list {
    position: absolute;
    top: 47px;
    min-width: 100vw;
    width: 100%;
    background-color: #fff;
    z-index: 1;
    left: 0;
    /* right: -350px; */
    font-size: 14px;
  }
  nav.navbar.navbar-expand.navbar-light.bg-light {
    padding: 0px;
  }
  .navbar-nav {
  }

  @media (max-width: 567px) {
    .navbar > .container,
    .navbar > .container-fluid,
    .navbar > .container-lg,
    .navbar > .container-md,
    .navbar > .container-sm,
    .navbar > .container-xl,
    .navbar > .container-xxl {
      /* justify-content: end; */
      padding-bottom: 8px;
    }
  }

  @media (min-width: 567px) and (max-width: 992px) {
    .navbar > .container,
    .navbar > .container-fluid,
    .navbar > .container-lg,
    .navbar > .container-md,
    .navbar > .container-sm,
    .navbar > .container-xl,
    .navbar > .container-xxl {
      /* justify-content: end; */
      padding-bottom: 8px;
    }
  }
  .navbar > .container,
  .navbar > .container-fluid,
  .navbar > .container-lg,
  .navbar > .container-md,
  .navbar > .container-sm,
  .navbar > .container-xl,
  .navbar > .container-xxl {
    justify-content: space-around;
  }
`;

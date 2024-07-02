import * as React from "react";
import styled from "styled-components";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import diam from "../Images/diamondwithoutring.png";
import truck from "../Images/truckk.png";
import returnn from "../Images/returnsign.png"

export default function Section3() {
  return (
    <Root>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <div className="heading">
          <img src={diam} alt="img" style={{ width: "25px" }} />

            <h5>Ring Details</h5>
          </div>
        </AccordionSummary>
        
        <AccordionDetails>
          <div className="heading">
            <h5>Center Stone Details</h5>
          </div>
          <table>
            <tr>
              <td>Size</td>
              <td>0.51ct</td>
            </tr>
            <tr>
              <td>Type</td>
              <td>Loose Diamond</td>
            </tr>
            <tr>
              <td>Color</td>
              <td>J</td>
            </tr>

            <tr>
              <td>Clarity</td>
              <td>SI1</td>
            </tr>

            <tr>
              <td>Shape</td>
              <td>Round</td>
            </tr>

            <tr>
              <td>Cut</td>
              <td>Excellent</td>
            </tr>
          </table>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <div className="heading">
          <img src={truck} alt="img" style={{ width: "30px" }} />

            <h5>Shipping</h5>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <p className="description">
            This item is made to order and takes 2-3 weeks to craft. We ship
            FedEx Priority Overnight, signature required and fully insured.
          </p>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <div className="heading">
          <img src={returnn} alt="img" style={{ width: "20px",height:"20px" }} />

            <h5>Return Policy</h5>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <p className="description">
            Received an item you don't like? We are proud to offer free returns
            within 30 days from receiving your item. Contact our support team to
            issue a return.
          </p>
        </AccordionDetails>
      </Accordion>

      {/*       
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          Accordion Actions
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
        <AccordionActions>
          <Button>Cancel</Button>
          <Button>Agree</Button>
        </AccordionActions>
      </Accordion> */}
    </Root>
  );
}
const Root = styled.section`
  margin-top: 20px;

  .heading {
    display: flex;
    gap: 10px;

    svg {
      width: 21px;
      height: 21px;
    }

    h5 {
      font-size: 14px;
      color: rgba(0, 0, 0);
      font-weight: 500;
      margin-top: 3px;
    }
  }
  
  tr td {
    font-size: 13px;
    color: #777777;
    padding-right: 40px;
}

  .description {
    font-size: 13px;
    color: #777777;
  }
  .css-1086bdv-MuiPaper-root-MuiAccordion-root {
    box-shadow: unset;
    position: unset;
    border-bottom: 1px solid #d3d3d366;
  }
`;

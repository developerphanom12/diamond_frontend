import React from "react";
import styled from "styled-components";

export default function AllOrders() {
  return (
    <Root>
      <div style={{ overflowX: "auto" }}>
        <table>
          <tr>
            <th>Ring ID</th>
            <th>Diamond ID</th>
            <th>Customer Name</th>
            <th>Serail No</th>
            <th>Ring ID</th>
            <th>Diamond ID</th>
            <th>Customer Name</th>
            <th>Status</th>
            <th>Date</th>
          </tr>
          <tr>
            <td>Jill</td>
            <td>Smith</td>
            <td>50</td>
            <td>50</td>
            <td>50</td>
            <td>50</td>
            <td>50</td>
            <td>50</td>
            <td>50</td>
          </tr>
        </table>
      </div>
    </Root>
  );
}
const Root = styled.section`
  padding: 10px 40px;
  table {
    border-collapse: collapse;
    border-spacing: 0;
    width: 100%;
    border: 1px solid #ddd;
  }

  th,
  td {
    text-align: left;
    padding: 8px;
  }

  tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  a {
    border: 1px solid black;
    padding: 3px 10px;
    border-radius: 30px;
    color: black;
    text-decoration: none;
    cursor: pointer;
  }

  @media (min-width: 567px) and (max-width: 992px) {
    th {
      font-size: 10px;
    }
  }
`;

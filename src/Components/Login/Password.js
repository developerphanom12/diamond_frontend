import React from "react";
import styled from "styled-components";
import { LuUser2 } from "react-icons/lu";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Password() {

  return (
    <Root>
      <div className="main_div">
        <div className="sub_div">
          <h1 className="main_heading">FORGOT PASSWORD</h1>
          <h2 className="welcome_heading">Reset Your Password</h2>
          <p className="desc">
          We will send you an email to reset your password.
          </p>
          <form>
            <div className="form_div">

            
              

                <TextField
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />

              </div>
             
            <div className="btn">
              <a href="/">Reset Password</a>
            </div>


          </form>
        </div>
      </div>
    </Root>
  );
}

const Root = styled.section`
  .main_div {
    display: flex;
    justify-content: center;
    align-items: center;
    .sub_div {
      width: 35%;
      display: flex;
      flex-direction: column;
      padding: 30px 0;
      .main_heading {
        font-size: 21px;
        font-weight: 600;
        text-transform: uppercase;
        text-align: center;
        border-bottom: 1px solid rgba(224, 224, 224);
        padding-bottom: 25px;
        color: #060606;
      }
      .welcome_heading {
        font-size: 20px;
        font-weight: 600;
        color: #060606;
        margin-top: 10px;
      }
      .desc {
        color: #808080;
        font-size: 13px;
      }
      .form_div {
        border-radius:10px;
        margin-top:20px;

        .css-1d3z3hw-MuiOutlinedInput-notchedOutline {
          border: 1px solid rgb(224 224 224);
        }
        .css-1jy569b-MuiFormLabel-root-MuiInputLabel-root.Mui-focused {
          color: #9e9e9e;
        }



      }
      .btn {
        width: 100%;
        margin-top: 30px;
        a {
          display: block;
          width: 100%;
          padding: 17px 20px;
          font-size: 18px;
          text-align: center;
          text-decoration: none;
          color: white;
          background-color: #000;
          border: 2px solid transparent;
          border-radius: 40px;
          transition: background-color 0.3s;
          &:hover {
            background-color: #ededed;
            color: black;
          }
        }
      }


    }
  }
`;

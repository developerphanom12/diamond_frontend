import React from "react";
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { userCheckAction, userDataAction } from "../../redux/users/action";
import { toast } from "react-toastify";
import { EXCHANGE_URLS } from "../URLS";

const schema = yup.object().shape({
  email: yup.string().required("Email is required."),
  password: yup
    .string()
    .required("Password is required.")
    .min(5, "Password should be at least 5 characters."),
});
export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onSubmit = async (data) => {
    try {
      const res = await axios.post(`${EXCHANGE_URLS}/userlogin`, data);
      console.log("resres", res?.data?.customer);
      if (res?.status === 200) {
        navigate("/productpage");
        localStorage.setItem("token", res?.data?.customer?.token);
        dispatch(userDataAction(res?.data?.customer));
        dispatch(userCheckAction(true));
        toast.success("Login Successfully");
      }
    } catch (err) {
      console.log("err", err);
      toast.error("An error occurred during login");
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors } = {},
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <Root>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="main_div">
          <div className="sub_div">
            <h1 className="main_heading">LOGIN</h1>

            <div className="form_div">
              <TextField
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                type="email"
                {...register("email")}
              />
              {errors.email && (
                <p
                  style={{
                    color: "red",
                    fontSize: "10px",
                    margin: "0",
                  }}
                >
                  {errors.email.message}
                </p>
              )}

              <TextField
                fullWidth
                name="password"
                label="Password"
                id="password"
                autoComplete="new-password"
                type="password"
                {...register("password")}
              />
              {errors.password && (
                <p
                  style={{
                    color: "red",
                    fontSize: "10px",
                    margin: "0",
                  }}
                >
                  {errors.password.message}
                </p>
              )}
              <div className="forget_psw">
                <a href="/password">Forgot your password?</a>
              </div>
            </div>
            <div className="btn">
              <button type="submit">Login</button>
            </div>

            <div className="already_acc">
              <p>Not a member? become a member today </p>
              <a href="/register">Create account</a>
            </div>
          </div>
        </div>
      </form>
    </Root>
  );
}

const Root = styled.section`
  .main_div {
    display: flex;
    justify-content: center;
    align-items: center;

    .sub_div {
      width: 40vw;
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

      .form_div {
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        gap: 20px;
        margin-top: 40px;

        .css-md26zr-MuiInputBase-root-MuiOutlinedInput-root {
          height: 50px;
        }
        .css-14s5rfu-MuiFormLabel-root-MuiInputLabel-root {
          font-size: 15px;
        }
        .css-1d3z3hw-MuiOutlinedInput-notchedOutline {
          border: 1px solid rgb(224 224 224);
        }
        .css-1jy569b-MuiFormLabel-root-MuiInputLabel-root.Mui-focused {
          color: #9e9e9e;
        }
        .forget_psw {
          display: flex;
          justify-content: end;
          margin-top: -15px;
          a {
            font-size: 12px;
            color: #808080;
          }
        }
      }
      .btn {
        width: 100%;
        margin-top: 30px;
        button {
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

      .already_acc {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 40px;
        p {
          font-size: 14px;
          color: #666666;
          margin-bottom: 0;
        }
        a {
          font-size: 14px;
          color: #000000;
          text-decoration: underline;
          font-weight: 600;
        }
      }
    }
  }
  @media (max-width: 1030px) {
    .main_div {
      .sub_div {
        width: 60vw;
      }
    }
  }
  @media (max-width: 830px) {
    .main_div {
      .sub_div {
        width: 60vw;
      }
    }
  }
`;

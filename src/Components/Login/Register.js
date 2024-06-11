import React from "react";
import styled from "styled-components";
import { LuUser2 } from "react-icons/lu";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { EXCHANGE_URLS } from "../URLS";

const schema = yup.object().shape({
  first_name: yup.string().required("first name is required."),
  last_name: yup.string().required("last name  is required."),
  email: yup.string().required("email is required."),
  addresses: yup.string().required("address is required."),
  phone: yup
    .string()
    .matches(/^[0-9]{10}$/, "Phone number is not valid")
    .required("Phone is required."),
  password: yup
    .string()
    .required("Password is required.")
    .min(5, "Password should be at least 5 characters."),
    password_confirmationdd: yup
    .string()
    .oneOf([yup.ref('password'), null], "Passwords must match")
    .required("Password confirmation is required."),
});

export default function Register() {
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    try {
      const res = await axios.post(
        `${EXCHANGE_URLS}/useregister`,
        data
      );
      console.log("resres", res?.data);
      if (res?.status === 201) {
        navigate("/login");
        toast.success("Register Successfully");
      }
    } catch (err) {
      console.error("err", err);
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
            <h1 className="main_heading">SIGN UP</h1>
            <h2 className="welcome_heading">Welcome</h2>
            <p className="desc">
              Welcome to our enchanting world of jewelry! Sign in to embark on a
              journey of timeless love and exquisite craftsmanship.
            </p>

            <div className="form_div">
              <div className="icon_content">
                <LuUser2 />
                <h4>Profile</h4>
              </div>
              <div className="fields">
                <TextField
                  autoComplete="given-name"
                  name="first_name"
                  type="name"
                  {...register("first_name")}
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
                {errors.first_name && (
                  <p
                    style={{
                      padding: "0px 20px",
                      color: "red",
                      fontSize: "10px",
                      margin: "0",
                    }}
                  >
                    {errors.first_name.message}
                  </p>
                )}

                <TextField
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="last_name"
                  type="name"
                  {...register("last_name")}
                  autoComplete="family-name"
                />
                {errors.last_name && (
                  <p
                    style={{
                      padding: "0px 20px",
                      color: "red",
                      fontSize: "10px",
                      margin: "0",
                    }}
                  >
                    {errors.last_name.message}
                  </p>
                )}
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
                      padding: "0px 20px",
                      color: "red",
                      fontSize: "10px",
                      margin: "0",
                    }}
                  >
                    {errors.email.message}
                  </p>
                )}

                <TextField
                  autoComplete="given-name"
                  name="addresses"
                  type="addresses"
                  {...register("addresses")}
                  fullWidth
                  id="Address"
                  label="Address"
                  autoFocus
                />
                {errors.addresses && (
                  <p
                    style={{
                      padding: "0px 20px",
                      color: "red",
                      fontSize: "10px",
                      margin: "0",
                    }}
                  >
                    {errors.addresses.message}
                  </p>
                )}

                <TextField
                  fullWidth
                  id="phone"
                  label="Phone Number"
                  type="number"
                  name="phone"
                  {...register("phone")}
                  autoComplete="family-name"
                />
                {errors.phone && (
                  <p
                    style={{
                      padding: "0px 20px",
                      color: "red",
                      fontSize: "10px",
                      margin: "0",
                    }}
                  >
                    {errors.phone.message}
                  </p>
                )}

                <TextField
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  {...register("password")}
                  id="password"
                  autoComplete="new-password"
                />
                {errors.password && (
                  <p
                    style={{
                      padding: "0px 20px",
                      color: "red",
                      fontSize: "10px",
                      margin: "0",
                    }}
                  >
                    {errors.password.message}
                  </p>
                )}
                 <TextField
                  fullWidth
                  name="password_confirmationdd"
                  label="Confirm Password"
                  type="password"
                  {...register("password_confirmationdd")}
                  id="password_confirmationdd"
                  autoComplete="new-password"
                />
                {errors.password_confirmationdd && (
                  <p
                    style={{
                      padding: "0px 20px",
                      color: "red",
                      fontSize: "10px",
                      margin: "0",
                    }}
                  >
                    {errors.password_confirmationdd.message}
                  </p>
                )}
              </div>
              <div className="checkbox_content">
                <input
                  type="checkbox"
                  id="offers"
                  name="offers"
                  value="offers"
                />
                <label for="vehicle1"> Send me news and offers</label>
              </div>
            </div>
            <div className="btn">
              <button type="submit">Sign Up</button>
            </div>

            <div className="already_acc">
              <p>Already have an account? </p>
              <a href="/login">Log In</a>
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
        border: 1px solid rgba(224, 224, 224);
        border-radius: 10px;
        padding: 20px;
        .icon_content {
          display: flex;
          align-items: center;
          gap: 7px;
          svg {
            width: 20px;
            height: 20px;
          }
          h4 {
            font-size: 16px;
            font-weight: 600;
            margin-bottom: 0;
          }
        }

        .fields {
          display: flex;
          flex-direction: column;
          gap: 20px;
          margin-top: 20px;
        }

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

        .css-1agwao2-MuiFormControl-root {
          margin: 0;
        }

        .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input {
          padding: 13.5px 14px;
        }

        .checkbox_content {
          display: flex;
          gap: 5px;
          font-size: 12px;
          color: #9e9e9e;
          margin-top: 10px;
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
`;

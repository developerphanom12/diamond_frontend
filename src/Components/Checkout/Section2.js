import React, { useEffect, useState } from "react";
import styled from "styled-components";
import shoppay from "../Images/shoppay.png";
import paypal from "../Images/paypal.png";
import gpay from "../Images/gpay.png";
import { CiDeliveryTruck } from "react-icons/ci";
import { TbTruckReturn } from "react-icons/tb";
import { IoIosArrowForward } from "react-icons/io";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { EXCHANGE_URLS } from "../URLS";
import { useLoading } from "../LoadingContext";

export default function Section2() {
  const { setLoading } = useLoading();
  const location = useLocation();
  const { selectedVariantId, productId, diamondId, totalPrice } =
    location.state || {};
  const [postValue, setPostValue] = useState({
    variant_id: selectedVariantId,
    price: totalPrice,
    customerId: "7352326586586",
    diamondid: diamondId,
    address: {
      first_name: "",
      last_name: "",
      address1: "",
      phone: "",
      province: "",
      city: "",
      state: "",
      zip: "",
      country: "",
    },
  });
  console.log(
    "Checkout state:",
    selectedVariantId,
    productId,
    diamondId,
    totalPrice
  );
  const [countries, setCountries] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchCountries = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`https://restcountries.com/v3.1/all`);
        const countryList = response.data.map((country) => ({
          name: country.name.common,
          code: country.cca2,
        }));

        // Sort countries alphabetically by name
        countryList.sort((a, b) => a.name.localeCompare(b.name));

        setCountries(countryList);
      } catch (error) {
        console.error("Error fetching countries:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
  }, [setLoading]);
  const appApi = async () => {
    try {
      const res = await axios.post(`${EXCHANGE_URLS}/ordercreate`, postValue);
      if (res?.status === 201) {
        navigate("/home");
        toast.success("Order successfully Done");
      }
    } catch (err) {
      toast.error("Fill all details");
    }
  };
  const handleClick = () => {
    appApi();
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;

    // Check if the entered phone number is exactly 10 digits
    if (name === "phone" && value.length > 10 && value.length < 10) {
      toast.error("Phone number must be exactly 10 digits.");
    } else {
      setPostValue({
        ...postValue,
        address: {
          ...postValue.address,
          [name]: value,
        },
      });
    }
  };
  return (
    <Check>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: "1",
          alignItems: "center",
        }}
      >
        <header>The Precious Earth</header>
        <input type="range" style={{ width: "52%" }} />
        <p>
          <span>information</span>
          <span>confirmation</span>
          <span>payment</span>
        </p>
      </div>

      <div
        style={{
          padding:"20px",
          border:"1px solid #f5f5f5",
          margin:"0px 40px",
          display:"flex",
          flexWrap:"wrap",
          justifyContent:"center",
          flexDirection:"column",
        }}
      >

        <h6>Express check out</h6>
        <ul>
          <li style={{ background: " #5a31f4 ", borderColor: "#5a31f4 " }}>
            <div role="button">
              <img src={shoppay} alt="img of payment button" />
            </div>
          </li>
          <li style={{ background: " #ffc439 ", borderColor: "#ffc439 " }}>
            <div role="button">
              <img src={paypal} alt="img of payment button" />
            </div>
          </li>
          <li style={{ background: " #000 ", borderColor: "#000 " }}>
            <div role="button">
              <img src={gpay} alt="img of payment button" />
            </div>
          </li>
        </ul>
        <label>
          Look to finance? we work with{" "}
          <b style={{ color: "#5a31f4" }}>ShopPay</b>..{" "}
        </label>
      </div>
      <form>
        <div>
          <div className="shipping_address">
            <h6>Contact</h6>
            <input type="email" placeholder="Email" className="input1" />
            <span style={{ display: "flex", gap: "5px", padding: "10px 0px" }}>

              <input
                type="checkbox"
                style={{
                  border: " 1px solid #d9d9d9",
                  width: "18px",
                  height: "18px",
                }}
              />

              <label>Email me with newsand offers.</label>

            </span>
          </div>
          <div className="shipping_address">
            <h6>Shipping address</h6>
            <p>
              <label style={{ fontSize: "10px", color: "#666666" }}>
                <CiDeliveryTruck /> Free Expedited Insured Shipping
              </label>
              <label style={{ fontSize: "10px", color: "#666666" }}>
                <TbTruckReturn /> 30 days Free Returns & Exchange
              </label>
            </p>
          </div>
        </div>
        <div className="shipping_address">
          <div className="select_div">
            <label>Country/region</label>
            <select
              name="country"
              onChange={handleAddressChange}
              value={postValue.address.country}
            >
              <option value="">Select a country</option>
              {countries.map((country) => (
                <option key={country.code} value={country.name}>
                  {country.name}
                </option>
              ))}
            </select>
          </div>
          <div style={{ display: "flex", padding: "10px 0px" }}>
            <input
              type="text"
              placeholder="Province"
              className="input1"
              name="province"
              onChange={handleAddressChange}
              value={postValue.address.province}
            />
          </div>
          <div style={{ display: "flex", padding: "10px 0px", gap: "10px" }}>
            <input
              type="name"
              placeholder="First name"
              className="input1"
              name="first_name"
              onChange={handleAddressChange}
              value={postValue.address.first_name}
            />
            <input
              type="name"
              placeholder="Last name"
              className="input1"
              name="last_name"
              onChange={handleAddressChange}
              value={postValue.address.last_name}
            />
          </div>
          <div style={{ display: "flex", padding: "10px 0px" }}>
            <input
              type="text"
              placeholder="Address"
              className="input1"
              name="address1"
              onChange={handleAddressChange}
              value={postValue.address.address1}
            />
          </div>
          <div style={{ display: "flex", padding: "10px 0px" }}>
            <input
              type="name"
              placeholder="State "
              className="input1"
              name="state"
              onChange={handleAddressChange}
              value={postValue.address.state}
            />
          </div>
          <div style={{ display: "flex", padding: "10px 0px", gap: "10px" }}>

            <input
              type="text"
              placeholder="City"
              className="input1"
              name="city"
              onChange={handleAddressChange}
              value={postValue.address.city}
            />

          </div>

          <div style={{ display: "flex", padding: "10px 0px", gap: "10px" }}>

            <input
              type="number"
              placeholder="Postal code (optional)"
              className="input1"
              name="zip"
              onChange={handleAddressChange}
              value={postValue.address.zip}
            />

          </div>


          <div style={{ display: "flex", padding: "10px 0px" }}>
            <input
              type="number"
              placeholder="Phone"
              className="input1"
              name="phone"
              onChange={handleAddressChange}
              value={postValue.address.phone}
            />
          </div>
          <span style={{ display: "flex", gap: "5px" }}>
            <input
              type="checkbox"
              style={{
                border: " 1px solid #d9d9d9",
                width: "18px",
                height: "18px",
              }}
            />
            <label style={{ color: "#545454" }}>
              {" "}
              Text me with news and offers
            </label>
          </span>
        </div>
      </form>
      <div className="button_div">
        <button onClick={handleClick}>
          Review Your Details <IoIosArrowForward />
        </button>
      </div>
    </Check>
  );
}
const Check = styled.section`
  display: flex;
  flex-direction: column;
  /* width: 100vw; */

  header {
    padding: 20px 20px 40px;
    font-size: 25px;
    font-family: "Playfair Display", "Proxima Nova", "ui-sans-serif" !important;
  }

  p {
    padding: 20px 40px;
    display: flex;
    width: 100%;
    flex: 1;
    justify-content: space-evenly;
    span {
      font-size: 13px;
      font-weight: 400;
    }
  }
  h6 {
    width: 80%;
    text-align: start;
    font-size: 16px;
    font-weight: 600;
    text-transform: none;
    padding: 10px 0px;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    list-style: none;
    padding: 0px;
    margin: 0px;
    li {
      margin: 5px;
      padding: 6px 34px;
      border-radius: 4px;
      cursor: pointer;
    }
  }
  label {
    line-height: 1.2;
    text-transform: capitalize;
    color: #262626;
    font-size: 13px;
    font-weight: 400;
    svg {
      font-size: 14px;
    }
  }
  .heading {
    padding: 10px 20px;
    text-align: start;
    margin: 10px 40px;
  }
  .shipping_address {
    padding: 0px 20px;
    text-align: start;
    margin: 0px 20px;
    p {
      display: flex;
      padding: 0;
      flex-direction: column;
    }
  }

  .select_div {
    display: flex;
    flex-direction: column;
    label {
      font-size: 11px;
    }
    select {
      border: none;
      background: none;
      font-size: 13px;
      outline: none;
    }
  }

  .input1,
  .select_div {
    width: 100%;
    border-radius: 7px;
    padding: 10px;
    border: 1px solid #d9d9d9;
  }
  input::placeholder {
    font-size: 14px;
  }
  .button_div {
    width: 90%;
    margin: 10px 0px 10px 40px;
    display: flex;
    justify-content: end;
    button {
      padding: 16px 32px;
      color: #fff;
      background-color: #000;
      font-weight: 700;
      border-radius: 30px;
      border: 1px solid #000;
      font-size: 16px;
      svg {
        font-weight: 700;
      }
    }
  }

  @media (max-width: 567px) {

.button_div {
width: 80%;
margin-top:40px;
justify-content: center;
}

 .shipping_address {
    padding: 0;
    margin:0 20;
}

}


`;

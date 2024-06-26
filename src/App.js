import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import NaturalDiamond from "./Components/NaturalDiamond/Naturaldiamond";
import ProductPage from "./Components/ProductPage/ProductPage";
import Checkout from "./Components/Checkout/Checkout";
import EngagementRing from "./Components/EngagementRing/EngagementRing";
import Layout from "./Components/MainLayout/Layout";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Register from "./Components/Login/Register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ForgetPassword from "./Components/Login/ForgetPassword";
import Education from "./Components/Edu/Education";
import RingDetails from "./Components/RingDetails/RingDetails";
import DiamondDetails from "./Components/DiamondDetails/DiamondDetails";
import { LoadingProvider } from "./Components/LoadingContext";
import LoaderDot from "./Components/LoaderDot";
import ContactUs from "./Components/AllOrders/ContactUs";
import { useEffect } from "react";
import Cookies from "js-cookie";
import UniqueRing from "./Components/UniqueRing/UniqueRing";

function App() {
  // useEffect(() => {
  //   const allCookies = Cookies.get();
  //   Object.keys(allCookies).forEach((cookieName) => {
  //     Cookies.remove(cookieName);
  //   });
  // }, []);

  return (
    <div>
      <LoadingProvider>
        <LoaderDot />
        <Layout>
          <Routes>
            <>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/password" element={<ForgetPassword />} />
              <Route path="/education" element={<Education />} />
              <Route path="/engagementring" element={<EngagementRing />} />
              <Route path="/uniquering" element={<UniqueRing/>}/>
              <Route path="/naturaldiamond" element={<NaturalDiamond />} />
              <Route path="/productpage" element={<ProductPage />} />
              <Route path="/ringdetails" element={<RingDetails />} />
              <Route path="/diamonddetails" element={<DiamondDetails />} />
              <Route path="/contactus" element={<ContactUs />} />

              <Route path="/checkout" element={<Checkout />} />

              <Route path="/login" element={<Login />} />
            </>
          </Routes>
        </Layout>
        <ToastContainer />
      </LoadingProvider>
    </div>
  );
}

export default App;

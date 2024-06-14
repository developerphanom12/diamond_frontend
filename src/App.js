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
import { useSelector } from "react-redux";
import RingDetails from "./Components/RingDetails/RingDetails";
import DiamondDetails from "./Components/DiamondDetails/DiamondDetails";

function App() {
  const userCheck = useSelector((state) => state?.users?.userCheck);
  const token = localStorage.getItem("token");
  console.log("userCheck",userCheck)
  return (
    <div>
      <Layout>
        <Routes>
          <>
            <Route path="/" element={<Home />}/>
            <Route path="/home" element={<Home />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/register" element={<Register />}/>
            <Route path="/password" element={<ForgetPassword />}/>
            <Route path="/education" element={<Education />}/>
            <Route path="/engagementring" element={<EngagementRing />}/>
            <Route path="/naturaldiamond" element={<NaturalDiamond />}/>
            <Route path="/productpage" element={<ProductPage />}/>
            <Route path="/ringdetails" element={<RingDetails/>}/>
            <Route path="/diamonddetails" element={<DiamondDetails/>}/>


            {userCheck && token ? (
              <Route path="/checkout" element={<Checkout />} />
            ) : (
              <Route path="/login" element={<Login />} />
            )}
          </>
        </Routes>
      </Layout>
      <ToastContainer />
    </div>
  );
}

export default App;

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { Route, Routes } from "react-router-dom";
import NaturalDiamond from "./Components/NaturalDiamond/Naturaldiamond";
import ProductPage from "./Components/ProductPage/ProductPage";
import Checkout from "./Components/Checkout/Checkout";
import EngagementRing from "./Components/EngagementRing/EngagementRing";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Register from "./Components/Login/Register";
import { ToastContainer } from "react-toastify";
import ForgetPassword from "./Components/Login/ForgetPassword";
import Education from "./Components/Edu/Education";
import RingDetails from "./Components/RingDetails/RingDetails";
import DiamondDetails from "./Components/DiamondDetails/DiamondDetails";
import { LoadingProvider } from "./Components/LoadingContext";
import LoaderDot from "./Components/LoaderDot";
import ContactUs from "./Components/AllOrders/ContactUs";
import Section2 from "./Components/uniqueProducts/UniqueRing/Section2";
import EngageList from "./MainLayout/bottom/EngageList";
import UniqueRing from "./Components/uniqueProducts/UniqueRing/UniqueRing";
import UniqueRingDetails from "./Components/uniqueProducts/UniqueRingDetails/UniqueRingDetails";
import Gemstone from "./Components/Gemstone/Gemstone";
import GemDetails from "./Components/Gemstone/GemDetails/GemDetails";
import CheckoutGem from "./Components/Gemstone/CheckoutGem/CheckoutGem";
import AllOrders from "./Components/AllOrders/AllOrders";
import Layout from "./MainLayout/Layout";
import WeddingBands from "./Components/WeddingBands/WeddingBands";
import MoreForHimBand from "./Components/WeddingBands/MoreForHimBand";
import MoreForHerBand from "./Components/WeddingBands/MoreForHerBand";
// import HomePage from "./Components/threeSixty/HomePage";
// import Test from "./Components/Test/Test"

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
              <Route path="/allorder" element={<AllOrders />} />
              <Route path="/home" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/password" element={<ForgetPassword />} />
              <Route path="/education" element={<Education />} />
              <Route path="/engagementring" element={<EngagementRing />} />
              <Route path="/uniquering" element={<UniqueRing />} />
              <Route
                path="/uniqueringdetails"
                element={<UniqueRingDetails />}
              />
              <Route path="/moreforher" element={<MoreForHerBand />} />
              <Route path="/moreforhim" element={<MoreForHimBand />} />
              <Route path="/weddingbands" element={<WeddingBands />} />
              <Route path="/naturaldiamond" element={<NaturalDiamond />} />
              <Route path="/productpage" element={<ProductPage />} />
              <Route path="/ringdetails" element={<RingDetails />} />
              <Route path="/diamonddetails" element={<DiamondDetails />} />
              <Route path="/contactus" element={<ContactUs />} />
              <Route path="/engagelist" element={<EngageList />} />
              <Route path="/section2" element={<Section2 />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/checkoutgem" element={<CheckoutGem />} />
              <Route path="/login" element={<Login />} />
              <Route path="/gemstone" element={<Gemstone />} />
              <Route path="/gemdetails" element={<GemDetails />} />
            </>
          </Routes>
        </Layout>
        <ToastContainer />
      </LoadingProvider>
    </div>
  );
}

export default App;

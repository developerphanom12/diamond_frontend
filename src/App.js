import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
// import Pageone from "./Components/Pageone";
import Poduct from "./Components/EngagementRing/Section4";
import Pendats from "./Components/Pendat/Pendats";
import NaturalDiamond from "./Components/NaturalDiamond/Naturaldiamond";
// import Ring from "./Components/EngagementRing/EngagementRing";
import ProductPage from "./Components/ProductPage/ProductPage";
import Checkout from "./Components/Checkout/Checkout";
import Test from "./Components/Test";
import EngagementRing from "./Components/EngagementRing/EngagementRing";
import Gemstone from "./Components/Gemstone/Gemstone";
import Layout from "./Components/MainLayout/Layout";
import Home from "./Components/Home/Home";

function App() {
  return (
    <div>
      <Layout>
      <Routes>
        <>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/engagementring" element={<EngagementRing />} />
          <Route path="/poduct" element={<Poduct />} />
          <Route path="/pendats" element={<Pendats />} />
          <Route path="/naturaldiamond" element={<NaturalDiamond />} />
          <Route path="/productpage" element={<ProductPage />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/test" element={<Test />} />
          <Route path="/gemstone" element={<Gemstone />} />
        </>
      </Routes>
      </Layout>
    </div>
  );
}

export default App;

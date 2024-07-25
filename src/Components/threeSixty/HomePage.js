import React from "react";
import ThreeSixtyViewer from "./ThreeSixtyViewer";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import SliderComponent from "./ThreeSixtyViewer";
 

function HomePage() {
  return (
    <div className="App">
      <h1>360 Degree Viewer</h1>
      <SliderComponent />
    </div>
  );
}

export default HomePage;

import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
 

const images = [
  "https://cdn.shopify.com/s/files/1/0697/1896/6490/files/download__1_-removebg-preview.png?v=1718887470",
  "https://cdn.shopify.com/s/files/1/0697/1896/6490/files/download_2.png?v=1719397898",
  "https://cdn.shopify.com/s/files/1/0697/1896/6490/files/WHITE_34854c64-23bb-48df-b7dc-2532af6c1d67.jpg?v=1720968463",
  "https://cdn.shopify.com/s/files/1/0697/1896/6490/files/RED_4ce895c5-e89b-4546-bd0d-75322a61ea82.jpg?v=1720968463",
  "https://cdn.shopify.com/s/files/1/0697/1896/6490/files/ThePaveNelly.png?v=1711458589",
  "https://cdn.shopify.com/s/files/1/0697/1896/6490/files/WHTE.jpg?v=1721052667",
];

const ThreeSixtyViewer = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);

  const handleMouseMove = (e) => {
    const { clientWidth } = e.currentTarget;
    const relativeX = e.clientX - e.currentTarget.getBoundingClientRect().left;
    const newIndex = Math.floor((relativeX / clientWidth) * images.length);
    if (newIndex !== currentIndex) {
      setFade(true);
      setTimeout(() => {
        setCurrentIndex(newIndex);
        setFade(false);
      }, 200); // match this duration with the CSS transition duration
    }
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      style={{
        width: "500px",
        height: "500px",
        backgroundImage: `url(${images[currentIndex]})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        cursor: "grab",
        transition: "opacity 0.2s ease-in-out",
        opacity: fade ? 0.5 : 1, // apply the fade effect
        border: "1px solid black", // Added border to visualize the component
      }}
    ></div>
  );
};

const VideoSlide = () => (
  <video width="500" height="500" controls>
    <source
      src="https://checkout.keyzarjewelry.com/cdn/shop/videos/c/vp/3c3845a58eb241c88fcb925391b981ee/3c3845a58eb241c88fcb925391b981ee.SD-480p-1.5Mbps-25240075.mp4"
      type="video/mp4"
    />
    Your browser does not support the video tag.
  </video>
);

const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <div>
        <ThreeSixtyViewer />
      </div>
      <div>
        <VideoSlide />
      </div>
    </Slider>
  );
};

export default SliderComponent;

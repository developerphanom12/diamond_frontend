// import React, { useRef } from "react";
// import Slider from "react-slick";
// import ring from "../Images/ring.png";
// import styled from "styled-components";

// function Prev() {
//   let sliderRef = useRef(null);
//   const next = () => {
//     sliderRef.slickNext();
//   };
//   const previous = () => {
//     sliderRef.slickPrev();
//   };
//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };
  
//   return (
//     <Root>
//       <div className="slider-container">
//         <Slider
//           ref={(slider) => {
//             sliderRef = slider;
//           }}
//           {...settings}
//         >
//           <div key={1}>
//             <img src={ring} alt="text" />
//           </div>
//           <div key={2}>
//             <img src={ring} alt="text"/>
//           </div>
//         </Slider>
//         <div
//           style={{
//             textAlign: "center",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
            
//           }}
//         >
//           <button className="button" onClick={previous}>
//             <svg
//               viewBox="0 0 36 36"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <circle
//                 cx="18.516"
//                 cy="21.8034"
//                 r="11.1894"
//                 stroke="currentColor"
//               ></circle>
//               <circle
//                 cx="18.516"
//                 cy="21.8036"
//                 r="8.99765"
//                 stroke="currentColor"
//               ></circle>
//               <circle
//                 cx="18.5159"
//                 cy="21.8036"
//                 r="6.0753"
//                 stroke="currentColor"
//               ></circle>
//               <path
//                 d="M18.5158 15.2283V13.4019M18.5158 30.2054V27.6483M12.3058 21.8036H9.74878M24.7258 21.8036H27.2829M25.4564 27.6483L22.8994 25.4566M14.1323 17.4201L12.3058 15.9589M12.3058 27.6483L13.767 26.1872M22.8994 17.7854L25.0911 15.9589"
//                 stroke="currentColor"
//               ></path>
//               <path
//                 d="M5 5.36529L11.21 13.0365M24.4466 13.0365L30.9359 5"
//                 stroke="currentColor"
//               ></path>
//             </svg>
//             <span>Previous</span>
//           </button>
//           <button className="button" onClick={next}>
//             <svg
//               viewBox="0 0 40 40"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 d="M28.9085 8H11.0919L2 17.0923L19.9924 33.0628L37.9707 17.1189L38 17.0923L28.9085 8ZM11.916 9.99069H21.8844L27.7042 17.0359L19.6717 30.1165L4.90143 17.0067L11.916 9.99069ZM24.0319 26.8208L30.1461 16.8659L24.4671 9.99069H28.084L35.0986 17.0055L24.0319 26.8208ZM19.6447 26.4863L9.19873 17.2133L14.4772 11.9346L13.4674 16.419L19.6447 26.4863Z"
//                 fill="currentColor"
//               ></path>
//             </svg>
//             <span>Next</span>
//           </button>
//         </div>
//       </div>
//     </Root>
//   );
// }

// export default Prev;
// const Root = styled.section`
//   .slick-slide img {
//     display: block;
//     width: 100%;
//     border-radius: 20px;
//   }
//   button.button {
//     width: 50%;
//     padding: 13px 0px;
//     background-color: white;
//     border: none;
//     border-top: 1px solid #d3d3d3;
//     border-radius: 0 0 20px 20px;
    
//     svg {
//       width: 18px;
//       margin-right:10px;
//     }
//     span {
//       font-size: 13px;
//     }
//   }
//   .slick-list,
//   .slick-slider,
//   .slick-track {
//     height: 560px;
//   }
// `;

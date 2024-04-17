// // import styled from "styled-components";
// // import React, { useState } from "react";

// // export default function Section2(){

// //   const [selectedButton, setSelectedButton] = useState(1);// Initialize with 1
// //   const handleButtonClick = (buttonIndex) => {
// //     setSelectedButton(buttonIndex);
// //   };

// //   return (
// //     <Root>
// //       <div className="main_div">
// //         <div className="des_div">
// //           <div className="complete_info_container">
// //             <button
// //               className={selectedButton === 1 ? "selected" : ""}
// //               onClick={() => handleButtonClick(1)}
// //             ></button>

// //             <button
// //               className={selectedButton === 2 ? "selected" : ""}
// //               onClick={() => handleButtonClick(2)}
// //             ></button>
// //           </div>
// //         </div>
// //       </div>
// //     </Root>
// //   );
// // }

// // const Root = styled.section`
// //   padding: 30px 30px;

// //   .main_div {
// //     display: flex;
// //     flex-wrap: wrap;

// //     .complete_info_container {
// //       display: flex;
// //       align-items: center;
// //       gap: 10px;
// //       margin-top: 30px;

// //       button {
// //         border: 1px solid #d3d3d3;
// //         width: 50%;
// //         height: 200px;
// //         border-radius: 15px;
// //         background-color: #f7f7f7;
// //         justify-content: center;
// //         display: flex;
// //         flex-direction: column;
// //         align-items: center;
// //         &.selected {
// //           border-color: blue; /* Change border color for selected button */
// //         }

// //         img,
// //         svg {
// //           width: 30px;
// //           height: 25px;
// //         }

// //         .prod_name {
// //           margin-top: 10px;

// //           h2 {
// //             font-size: 19px;
// //             font-weight: 600;
// //             text-align: center;
// //             margin-bottom: 0px;
// //           }

// //           p {
// //             color: rgba(112, 112, 112);
// //             text-align: center;
// //             font-size: 14px;
// //           }
// //         }

// //         .prod_price {
// //           margin-top: 10px;

// //           h2 {
// //             font-size: 19px;
// //             font-weight: 600;
// //             text-align: center;
// //             margin-bottom: 0px;
// //           }

// //           p {
// //             color: rgba(112, 112, 112);
// //             text-align: center;
// //             text-decoration: underline;
// //             font-size: 12px;
// //             border: 1px solid transparent;
// //           }
// //         }
// //       }
// //     }
// //   }
// // `;


// import styled from "styled-components";
// import React, { useState } from "react"; 

// export default function Test() {
//   const [selectedButton, setSelectedButton] = useState(1);

//   const handleButtonClick = (index) => {
//     setSelectedButton(index);
//   };

//   return (
//     <Root>

//        <div className="certificate_div">
//           <h5>Certificate</h5>
//           <div className="btn">
//             <button 
//               className={selectedButton === 1 ? "selected" : ""}
//               onClick={() => handleButtonClick(1)}
//             ></button>
//             <button 
//               className={selectedButton === 2 ? "selected" : ""}
//               onClick={() => handleButtonClick(2)}
//             ></button>
//           </div>
//        </div>

//     </Root>
//   )
// }

// const Root = styled.section`

//     .certificate_div {
//       border: 1px solid black;
//       width: 20%;
     
//       h5 {
//         font-size: 17px;
//       }
//       .btn {
//         display:flex;
//         gap:20px;
//         padding:0;
//         button {
//           border:2px solid transparent;
//           flex:1;
//           padding:15px 0;
//           font-size:14px;
//           border-radius:5px;

//           &.selected {
//             border-color: blue; // Change the color or add any styling for selected button
//           }
//         }
//       }
//     }

// `;


// import styled from "styled-components";
// import React, { useState } from "react"; 

// export default function Test() {
//   const [selectedButton, setSelectedButton] = useState({
//     1: false,
//     2: false
//   });

//   const handleButtonClick = (index) => {
//     setSelectedButton(prevState => ({
//       ...prevState,
//       [index]: !prevState[index]
//     }));
//   };

//   return (
//     <Root>
//       <div className="certificate_div">
//         <h5>Certificate</h5>
//         <div className="btn">
//           <button 
//             className={selectedButton[1] ? "selected" : ""}
//             onClick={() => handleButtonClick(1)}
//           ></button>
//           <button 
//             className={selectedButton[2] ? "selected" : ""}
//             onClick={() => handleButtonClick(2)}
//           ></button>
//         </div>
//       </div>
//     </Root>
//   )
// }

// const Root = styled.section`

//   .certificate_div {
//     border: 1px solid black;
//     width: 20%;
   
//     h5 {
//       font-size: 17px;
//     }
//     .btn {
//       display:flex;
//       gap:20px;
//       padding:0;
//       button {
//         border:2px solid transparent;
//         flex:1;
//         padding:15px 0;
//         font-size:14px;
//         border-radius:5px;

//         &.selected {
//           border-color: blue; // Change the color or add any styling for selected button
//         }
//       }
//     }
//   }

// `;



// import React, { useState } from 'react';
// import styled from "styled-components";
// import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

// export default function Test() {
//   const [count, setCount] = useState(2086918);

//   const formatNumber = (number) => {
//     // Use toLocaleString to format the number with commas
//     return number.toLocaleString();
//   };

//   const increment = () => {
//     setCount(count + 2100);
//   };

//   const decrement = () => {
//     setCount(count - 2100);
//   };

//   return (
//     <Root>
//       <div className="budget_div">
//         <h5>Budget</h5>
//         <div className="budget_value_div">
//           <div className="min_max_div">
//             <div className="value_div">
//               <h6>Minimum</h6>
//               <p>$ {formatNumber(count)}</p>
//             </div>
//             <div className="btn_div">
//               <button onClick={increment}>
//                 <IoIosArrowUp />
//               </button>
//               <button onClick={decrement}>
//                 <IoIosArrowDown />
//               </button>
//             </div>
//           </div>
//           <hr />
//         </div>
//       </div>
//     </Root>
//   );
// }

// const Root = styled.section`
//   .budget_div {
//     border: 1px solid black;
//     width: 40%;
//     h5 {
//       font-size: 17px;
//     }
//     .budget_value_div {
//       display: flex;
//       justify-content: center;
//       align-items: center;
//       .min_max_div {
//         border: 1px solid #ededed;
//         height: 60px;
//         width: 45%;
//         border-radius: 5px;
//         display: flex;
//         .value_div {
//           width: 80%;
//           padding: 6px;
//           h6 {
//             color: rgba(102, 102, 102);
//             margin-bottom: 0;
//             font-size: 12px;
//           }
//           p {
//             color: #000000;
//             font-size: 16px;
//             margin-top: 9px;
//           }
//         }
//         .btn_div {
//           width: 20%;
//           display: flex;
//           flex-direction: column;
//           button {
//             border: 1px solid #ededed;
//             background-color: transparent;
//             svg {
//               color: #7e7676;
//             }
//           }
//         }
//       }
//       hr {
//         width: 57px;
//         color: #bbb5b5;
//       }
//     }
//   }
// `;

// //Range slider
// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Slider from '@mui/material/Slider';

// function valuetext(value) {
//   return `${value}°C`;
// }

// const minDistance = 10;

// export default function MinimumDistanceSlider() { 
//   const [value1, setValue1] = React.useState([0.5, 11]);

//   const handleChange1 = (event, newValue, activeThumb) => {
//     if (!Array.isArray(newValue)) {
//       return;
//     }
//     if (activeThumb === 0) {
//       setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
//     } else {
//       setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
//     }
//   };

//   const increaseMinimum = () => {
//     const newValue = [value1[0] + 1, value1[1]];
//     setValue1(newValue);
//   };

//   const decreaseMinimum = () => {
//     const newValue = [value1[0] - 1, value1[1]];
//     setValue1(newValue);
//   };

//   const increaseMaximum = () => {
//     const newValue = [value1[0], value1[1] + 1];
//     setValue1(newValue);
//   };

//   const decreaseMaximum = () => {
//     const newValue = [value1[0], value1[1] - 1];
//     setValue1(newValue);
//   };

//   return (
//     <Box sx={{ width: 300 }}>
//       <h1>{value1[0]}</h1> {/* Displaying minimum value in heading element */}
//       <Slider
//         getAriaLabel={() => 'Minimum distance'}
//         value={value1}
//         onChange={handleChange1}
//         valueLabelDisplay="auto"
//         getAriaValueText={valuetext}
//         disableSwap
//       />
//       <p>{value1[1]}</p> {/* Displaying maximum value in paragraph element */}

//       <button onClick={increaseMinimum}>Increase Minimum</button>
//       <button onClick={decreaseMinimum}>Decrease Minimum</button>
//       <button onClick={increaseMaximum}>Increase Maximum</button>
//       <button onClick={decreaseMaximum}>Decrease Maximum</button>
//     </Box>
//   );
// }



// import React from "react";
import styled from "styled-components";
// import Prev from "./Prev";
import React, { useRef, useState } from "react";
import Slider from "react-slick";
import ring from "./Images/ring.png";
import { useNavigate } from "react-router-dom";

export default function Section2() {
  const [selectedButton, setSelectedButton] = useState(1); // Initialize with 1

  const handleButtonClick = (buttonIndex) => {
    setSelectedButton(buttonIndex);
    // Move the slider to the selected image index
    sliderRef.slickGoTo(buttonIndex - 1);
  };

  const navigate = useNavigate();
  let sliderRef = useRef(null);

  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Root>
      <div className="main_div">
        <div className="image_div">
          <div className="slider-container">
            <Slider
              ref={(slider) => {
                sliderRef = slider;
              }}
              {...settings}
            >
              <div key={1}>
                <img src={ring} alt="text" />
              </div>
              <div key={2}>
                <img src={ring} alt="text" />
              </div>
            </Slider>
            <div
              style={{
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <button
                className="button"
                onClick={() => handleButtonClick(1)}
                style={{
                  borderColor: selectedButton === 1 ? "blue" : "transparent",
                }}
              >
                <span>Setting</span>
              </button>

              <button
                className="button"
                onClick={() => handleButtonClick(2)}
                style={{
                  borderColor: selectedButton === 2 ? "blue" : "transparent",
                }}
              >
                <span>Stone</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Root>
  );
}

const Root = styled.section`
  padding: 30px 30px;

  .main_div {
    display: flex;
    flex-wrap: wrap;

    .image_div {
      border: 1px solid #d3d3d3;
      width: 50%;
      height: 613px;
      border-radius: 20px;

      .slick-slide img {
        display: block;
        width: 100%;
        border-radius: 20px;
      }
      button.button {
        width: 50%;
        padding: 13px 0px;
        background-color: white;
        border: none;
        border-top: 1px solid #d3d3d3;
        border-radius: 0 0 20px 20px;

        svg {
          width: 18px;
          margin-right: 5px;
        }
        span {
          font-size: 13px;
        }
      }
      .slick-list,
      .slick-slider,
      .slick-track {
        height: 560px;
      }
    }


  }
`;



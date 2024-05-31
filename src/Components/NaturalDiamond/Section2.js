import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Section3 from "./Section3";
import Section4 from "./Section4";
import test from "../Images/test_img.jpg";
import { useDispatch } from "react-redux";
import { setDiamondIds } from "../../redux/users/action";

 const shapesList = ['ROUND','EMERALD','HEART','MARQUISE','OVAL','PEAR','PRINCESS','RADIANT','CUSHION','E.CUSHION']
export default function Section2() {
   

  const [selectedButton, setSelectedButton] = useState(1);
  const [selectedShapes, setSelectedShapes] = useState([]);
  const [value, setValue] = useState([]);
 
  const dispatch = useDispatch();
  let sliderRef = useRef(null);

  const handleButtonClick = (buttonIndex) => {
    setSelectedButton(buttonIndex);
    sliderRef.slickGoTo(buttonIndex - 1);
  };

  useEffect(() => {
    const diamondApi = async () => {
      try {
        const shapesParam = selectedShapes.join(',');
        const resp = await axios.get( `http://localhost:3200/api/rings/nivodafilter?shapes=${shapesParam}`);
        if (resp?.status === 200) {
          setValue(resp?.data?.items);
          console.log("resp", resp?.data?.items);

          const diamondIds = resp.data.items.map(item => (item));
          dispatch(setDiamondIds(diamondIds));
          console.log("sdfsdfsdf", diamondIds);
        }
      } catch (err) {
        console.error("err", err);
      }
    };
    diamondApi();
  }, [selectedShapes,dispatch]);

  const handleShapeClick = (shape) => {
    setSelectedShapes((prevShapes) =>
      prevShapes.includes(shape)
        ? prevShapes.filter((s) => s !== shape)
        : [...prevShapes, shape]
    );
  };

  return (
    <Root>
      <div className="ring_types mt-4">
      {shapesList.map((shape) => (
          <button
            key={shape}
            className={selectedShapes.includes(shape) ? 'selected' : ''}
            onClick={() => handleShapeClick(shape)}
          >
            {shape}
            <img src={test} alt="img"/>
          </button>
        ))}
        <button
          className={selectedButton === 1 ? "selected" : ""}
          onClick={() => handleButtonClick(1)}
        >
          <svg
            class="block mx-auto w-13.5 h-13.5 md:w-12 md:h-12"
            viewBox="0 0 48 48"
          >
            <svg
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.6106 16.6207L24.9478 19.8792L22.9533 17.3525L20.1205 15.1672L23.6106 16.6207ZM15.08 19.2144L16.434 23.5455L20.447 25.1138L17.2612 22.3985L15.08 19.2144V19.2144ZM31.458 19.9999C31.458 26.3182 26.3184 31.4584 20 31.4584C13.6816 31.4584 8.54199 26.3182 8.54199 19.9999C8.54199 13.6815 13.6816 8.54138 20 8.54138C26.3184 8.54138 31.458 13.6815 31.458 19.9999ZM26.8402 22.4269L29.8658 23.6801C30.2957 22.5323 30.542 21.2958 30.542 19.9999C30.542 18.704 30.2957 17.4674 29.8658 16.3196L26.8444 17.5711L26.8402 22.4269V22.4269ZM24.3744 10.4208L23.1221 13.4433L26.5526 16.8796L29.5796 15.6259C28.5256 13.3275 26.6729 11.4747 24.3744 10.4208ZM26.0898 22.5292L26.0947 17.4818L22.5293 13.9105L17.4824 13.9052L13.9101 17.4711L13.9053 22.518L17.4707 26.0897L22.5176 26.0946L26.0898 22.5292V22.5292ZM20 9.45838C18.704 9.45838 17.4673 9.70478 16.3193 10.1346L17.5711 13.1555L22.4271 13.1602L23.6807 10.1345C22.5327 9.70473 21.296 9.45839 20 9.45839L20 9.45838ZM10.4204 15.6259L13.4426 16.8777L16.8794 13.447L15.6256 10.4208C13.3272 11.4747 11.4744 13.3276 10.4204 15.6259H10.4204ZM9.45801 19.9999C9.45801 21.2958 9.70435 22.5324 10.1342 23.6801L13.1556 22.4287L13.1598 17.5728L10.1342 16.3197C9.70435 17.4674 9.45801 18.704 9.45801 19.9999V19.9999ZM15.6257 29.579L16.8779 26.5569L13.4473 23.1201L10.4204 24.3738C11.4744 26.6722 13.3272 28.525 15.6257 29.579ZM20 30.5414C21.2959 30.5414 22.5327 30.295 23.6807 29.8652L22.4288 26.8442L17.5729 26.8401L16.3193 29.8652C17.4673 30.295 18.704 30.5414 20 30.5414H20ZM29.5796 24.3738L26.5577 23.1223L23.1204 26.5529L24.3743 29.579C26.6729 28.525 28.5256 26.6722 29.5796 24.3738V24.3738Z"
                fill="black"
              ></path>
            </svg>
          </svg>
          <span>Round</span>
        </button>

        <button
          className={selectedButton === 2 ? "selected" : ""}
          onClick={() => handleButtonClick(2)}
        >
          <svg
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.2839 12.8829L22.4395 20.9538L21.1033 13.8025L19.244 12.8061L22.284 12.8829L22.2839 12.8829ZM17.8221 23.2711L17.9055 27.1555L20.9456 27.2257L18.6943 26.41L17.8221 23.2711ZM28.5 10.5785V29.5512L24.6582 33.5648H15.3418L11.5 29.5512V10.5785L15.3418 6.56482H24.6582L28.5 10.5785ZM27.1737 10.639L24.5409 7.88904L23.4343 10.9039L24.1057 11.5753L27.1737 10.639ZM23.625 27.8446V12.1551L22.8447 11.3749H17.1553L16.375 12.1551V27.8446L17.1553 28.6249H22.8447L23.625 27.8446V27.8446ZM23.8618 7.56482H16.1382L17.2615 10.6249H22.7385L23.8618 7.56482ZM15.4591 7.88904L12.8263 10.639L15.8943 11.5753L16.5657 10.9039L15.4591 7.88904ZM12.5 11.324V28.7856L15.625 27.7305V12.2777L12.5 11.324ZM12.8096 29.4731L15.4528 32.2339L16.5673 29.0974L15.8997 28.4298L12.8096 29.4731V29.4731ZM16.1314 32.5648H23.8687L22.7351 29.3749H17.2649L16.1314 32.5648H16.1314ZM24.5473 32.2339L27.1904 29.4731L24.1003 28.4298L23.4328 29.0974L24.5473 32.234V32.2339ZM27.5 28.7856V11.324L24.375 12.2777V27.7305L27.5 28.7856Z"
              fill="black"
            ></path>
          </svg>
          <span>Emeraid</span>
        </button>

        <button
          className={selectedButton === 3 ? "selected" : ""}
          onClick={() => handleButtonClick(3)}
        >
          <svg
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M32.7012 14.3524C31.7451 10.9628 28.6162 8.38563 25.0986 8.08632C23.3916 7.91737 21.5107 8.46962 20 9.56386C18.4883 8.46962 16.6103 7.91835 14.9062 8.08583C11.3838 8.38563 8.25488 10.9628 7.29883 14.3519C5.32324 21.3495 14.2227 29.5658 19.7041 33.8402L20 34.0712L20.2959 33.8402C25.7773 29.5658 34.6768 21.3495 32.7012 14.3524ZM26.9289 19.9437H31.2471C30.4678 21.8637 29.1671 23.7833 27.6687 25.5704L24.157 23.0857L26.9289 19.9437ZM19.9932 26.6708L13.6455 19.4608L14.3867 15.8363L17.667 14.2694L19.7666 15.9442C19.9033 16.0536 20.0967 16.0536 20.2334 15.9442L22.333 14.2694L25.6133 15.8363L26.3545 19.4608L19.9931 26.6708H19.9932ZM13.0708 19.9437L15.8396 23.0883L12.3313 25.5706C10.833 23.7835 9.53246 21.8638 8.75293 19.9437H13.0708ZM17.1682 13.6762L14.1352 15.1251L10.0918 11.4266C11.199 10.281 12.646 9.47632 14.2275 9.17072L17.1682 13.6762L17.1682 13.6762ZM25.8647 15.1251L22.8318 13.6762L25.7722 9.17048C27.353 9.47535 28.8008 10.28 29.9082 11.4264L25.8647 15.1251ZM24.9597 9.04182L22.0004 13.5764L20.375 14.8727V10.489C21.6994 9.46174 23.4389 8.91022 24.9597 9.04182ZM19.625 10.4931V14.8727L17.9996 13.5764L15.0395 9.04115C15.1897 9.02784 15.3408 9.01942 15.4941 9.01942C16.8979 9.01942 18.4305 9.56495 19.625 10.4931ZM8.2246 14.6132C8.49694 13.6476 8.98437 12.7692 9.6018 11.9948L13.6496 15.6974L12.9343 19.1937H8.47448C7.95531 17.6311 7.81042 16.0801 8.2246 14.6132ZM12.8212 26.1431L16.3381 23.6545L19.4614 27.2018L16.4337 29.8154C15.2339 28.7137 13.9827 27.4713 12.8212 26.1431ZM20 32.85C19.1427 32.1732 18.1006 31.3137 16.9934 30.3229L19.9932 27.7338L23 30.329C21.8953 31.3172 20.8556 32.1746 20 32.85H20ZM23.5597 29.8215L20.5251 27.2021L23.6577 23.6516L27.1789 26.143C26.0151 27.4738 24.7615 28.7182 23.5597 29.8215ZM31.5256 19.1937H27.0657L26.3503 15.6974L30.3982 11.9947C31.0156 12.7692 31.5029 13.6478 31.7754 14.6137C32.1896 16.0804 32.0447 17.6312 31.5256 19.1937ZM15.7427 16.8975L18.122 22.3053L15.3611 19.1353L15.7426 16.8975L15.7427 16.8975ZM24.4115 16.6524L25.1477 19.4633L21.9154 15.8503L24.4115 16.6523V16.6524Z"
              fill="black"
            ></path>
          </svg>
          <span>Heart</span>
        </button>

        <button
          className={selectedButton === 4 ? "selected" : ""}
          onClick={() => handleButtonClick(4)}
        >
          <svg
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.2041 5.54333L20 5.45251L19.7959 5.54333C19.4981 5.67614 12.5 8.92565 12.5 19.9999C12.5 31.0741 19.4981 34.3236 19.7959 34.4564L20 34.5472L20.2041 34.4564C20.5019 34.3236 27.5 31.0746 27.5 19.9999C27.5 8.92517 20.5019 5.67614 20.2041 5.54333ZM26.5 19.9999C26.5 21.4564 26.3625 22.7519 26.1448 23.9313L23.9307 19.9999L26.1447 16.0686C26.3626 17.248 26.5 18.5434 26.5 19.9999H26.5ZM20 27.4833L17.8721 25.4691L16.8809 19.9999L17.8721 14.5311L20 12.5165L22.1279 14.5311L23.1191 19.9999L22.1279 25.4691L20 27.4833ZM13.5 19.9999C13.5 18.5434 13.6374 17.248 13.8553 16.0686L16.0693 19.9999L13.861 23.9219C13.6397 22.7438 13.5 21.4509 13.5 19.9999H13.5ZM16.3169 18.9095L14.0913 14.9576C14.5601 13.0826 15.2598 11.5854 16.0261 10.402L17.141 14.3632L16.3169 18.9095H16.3169ZM16.3169 21.0903L17.141 25.637L16.0366 29.561C15.2707 28.3774 14.5708 26.8858 14.0998 25.028L16.3169 21.0903ZM23.6831 18.9095L22.859 14.3632L23.9739 10.402C24.7402 11.5854 25.4399 13.0826 25.9087 14.9576L23.6831 18.9095H23.6831ZM23.6832 21.0902L25.9087 25.0422C25.4399 26.9175 24.7402 28.4149 23.9739 29.5984L22.859 25.637L23.6832 21.0902V21.0902ZM23.418 9.60613L22.2815 13.644L20.375 11.8384V6.77557C21.0645 7.19659 22.2585 8.07733 23.418 9.60614L23.418 9.60613ZM19.625 6.77556V11.8384L17.7185 13.644L16.582 9.60613C17.7414 8.07732 18.9355 7.19658 19.625 6.77556H19.625ZM16.5921 30.3581L17.7185 26.3561L19.625 28.1614V33.215C18.9409 32.7862 17.7505 31.8917 16.5921 30.3582L16.5921 30.3581ZM20.375 33.2245V28.1614L22.2815 26.3561L23.4179 30.3941C22.2588 31.9228 21.0646 32.8035 20.375 33.2245L20.375 33.2245ZM18.853 15.673L20 14.367L19.426 22.886L18.853 15.673Z"
              fill="black"
            ></path>
          </svg>
          <span>Marquise</span>
        </button>

        <button
          className={selectedButton === 5 ? "selected" : ""}
          onClick={() => handleButtonClick(5)}
        >
          <svg
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.5923 15.1672L23.9519 20.5252L20 14.0347L22.5923 15.1672H22.5923ZM30.5 20C30.5 27.732 25.799 34 20 34C14.201 34 9.5 27.732 9.5 20C9.5 12.268 14.201 6 20 6C25.799 6 30.5 12.268 30.5 20ZM23.9814 25.7606L25.6885 19.9999L23.9814 14.2396L20 11.9335L16.0186 14.2396L14.3115 19.9999L16.0186 25.7606L20 28.0668L23.9814 25.7606ZM15.2859 14.0709L13.0123 11.2233C11.5161 13.4522 10.5818 16.389 10.5139 19.6249H13.6414L15.2859 14.0709V14.0709ZM10.5139 20.3749C10.5818 23.6108 11.5161 26.5476 13.0122 28.7766L15.2859 25.9293L13.6414 20.3749H10.5139ZM24.7141 25.9293L26.9878 28.7766C28.4839 26.5476 29.4182 23.6108 29.4861 20.3749H26.3587L24.7141 25.9293ZM29.4861 19.6249C29.4182 16.3892 28.484 13.4526 26.988 11.2238L24.7141 14.0709L26.3586 19.6249H29.4861L29.4861 19.6249ZM24.0477 8.25654L20.6271 11.4296L24.2075 13.5038L26.5353 10.5891C25.8059 9.64027 24.9673 8.85267 24.0477 8.25654ZM20 7.00001C18.8118 7.00001 17.6783 7.3133 16.6289 7.86103L20 10.9882L23.3713 7.86122C22.3219 7.31337 21.1885 7.00001 20 7.00001ZM13.4651 10.5887L15.7926 13.5038L19.3731 11.4296L15.9526 8.25635C15.033 8.85236 14.1943 9.63996 13.4651 10.5887H13.4651ZM15.8887 31.7015L19.3665 28.5665L15.7926 26.4964L13.465 29.4111C14.1772 30.3378 14.9941 31.1104 15.8887 31.7015V31.7015ZM20 33C21.1884 33 22.3218 32.6867 23.3713 32.1389L19.9961 29.0082L16.5608 32.1047C17.6289 32.6751 18.7861 33 20 33H20ZM26.535 29.4111L24.2074 26.4964L20.6271 28.5702L24.0476 31.7435C24.9672 31.1475 25.8057 30.3599 26.535 29.4111Z"
              fill="black"
            ></path>
          </svg>
          <span>Oval</span>
        </button>

        <button
          className={selectedButton === 6 ? "selected" : ""}
          onClick={() => handleButtonClick(6)}
        >
          <svg
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.0261 21.7217L18.6439 15.8039L18.3498 21.597L18.3468 25.2554L17.0261 21.7217ZM29.3973 26.6255C29.291 26.9279 29.1647 27.2269 29.0218 27.5193C28.4271 28.742 27.6163 29.6391 27.1779 30.0777C27.0582 30.1973 26.9652 30.2837 26.912 30.3303C26.1312 31.0479 25.3071 31.5762 24.4998 31.965C22.6923 32.8322 20.9711 32.9983 19.9976 32.9983C19.0273 32.9983 17.3029 32.8322 15.4987 31.9617C14.6913 31.5762 13.8673 31.0446 13.0864 30.3303C13.0333 30.2804 12.9403 30.1973 12.8207 30.0777C12.3788 29.6358 11.568 28.7387 10.9766 27.5193C10.8336 27.2269 10.7074 26.9279 10.6011 26.6255C10.0463 25.1136 9.88 23.4856 10.0229 21.7777C10.1426 20.4155 10.4615 19.0232 10.9401 17.641C11.485 16.0661 12.2358 14.5011 13.1495 12.9627C14.0832 11.3911 15.1764 9.89258 16.3492 8.52698C17.1168 7.62989 17.9209 6.79254 18.7383 6.03168C19.2832 5.52661 19.765 5.17444 20.0008 5.00165C20.2335 5.17774 20.7186 5.52997 21.2601 6.03168C22.0775 6.79254 22.8817 7.62989 23.6459 8.52698C24.822 9.89258 25.9119 11.3911 26.8688 12.9993C27.7626 14.5011 28.5135 16.0661 29.055 17.641C29.537 19.0232 29.8558 20.4155 29.9789 21.8143C30.1183 23.4856 29.9523 25.1136 29.3973 26.6255ZM26.0094 13.5107C25.6033 12.8282 25.1582 12.163 24.6953 11.5087L23.2429 14.9786L25.2095 21.3947L28.4761 19.1594C28.3682 18.7649 28.2497 18.3687 28.1108 17.9703C27.6085 16.5095 26.902 15.0104 26.0094 13.5107V13.5107ZM24.6035 21.9803L22.5098 15.1454L19.999 12.2821L17.4902 15.1454L15.3965 21.9803L16.9268 26.0468L19.999 27.308L23.0732 26.0468L24.6035 21.9803ZM20.5787 6.76361C20.5063 6.69653 20.4441 6.64819 20.374 6.58673V11.578L22.7188 14.2889L24.1746 10.8108C23.7592 10.2573 23.3408 9.70502 22.8882 9.17956C22.1603 8.32501 21.3844 7.51361 20.5787 6.76361ZM15.8182 10.7929L17.269 14.2599L19.624 11.5724V6.58667C19.5535 6.64868 19.4917 6.69678 19.4181 6.76508C18.6191 7.50873 17.8418 8.32074 17.1091 9.17713C16.6559 9.70478 16.2296 10.2459 15.8182 10.7929H15.8182ZM11.8851 17.968C11.7466 18.3683 11.6284 18.7642 11.521 19.1575L14.7928 21.3962L16.7761 15.0234L15.3005 11.4973C14.8401 12.1472 14.4057 12.8061 14.0093 13.4735C13.1047 14.9965 12.39 16.5087 11.8851 17.968L11.8851 17.968ZM11.5398 26.281C11.6361 26.5544 11.7473 26.8189 11.875 27.0801C11.8857 27.1024 11.8988 27.121 11.9098 27.143L16.1354 26.0717L14.6903 22.2352L11.3243 19.9321C11.1768 20.5912 11.0742 21.2373 11.0192 21.8652C10.8837 23.483 11.0588 24.9701 11.5398 26.281V26.281ZM15.9294 31.0592C15.9927 31.0897 16.0544 31.1128 16.1173 31.1414L19.3419 27.8488L16.6055 26.7256L12.2876 27.8203C12.7065 28.4869 13.1711 29.014 13.5278 29.3706C13.6077 29.4504 13.6739 29.5115 13.7213 29.5552L13.771 29.6013C14.4164 30.1916 15.1459 30.6851 15.9294 31.0592ZM19.9976 31.9984C20.6406 31.9984 21.8071 31.9114 23.1294 31.446L19.999 28.2494L16.8691 31.4446C18.1896 31.9114 19.3547 31.9983 19.9976 31.9983L19.9976 31.9984ZM27.7108 27.8199L23.3945 26.7256L20.6563 27.8489L23.8821 31.1439C23.9441 31.1158 24.0049 31.0933 24.0671 31.0633C24.8604 30.6814 25.5902 30.1869 26.2352 29.594C26.297 29.5395 26.3728 29.4685 26.4707 29.3706C26.8267 29.0146 27.291 28.4876 27.7108 27.8199V27.8199ZM28.9823 21.8974C28.9258 21.2559 28.8218 20.5995 28.6728 19.9339L25.3097 22.2352L23.8646 26.0717L28.0889 27.1426C28.0995 27.1213 28.112 27.1035 28.1225 27.0819C28.2513 26.8182 28.3625 26.5536 28.454 26.2938C28.9394 24.9708 29.1157 23.496 28.9823 21.8974H28.9823Z"
              fill="black"
            ></path>
          </svg>
          <span>Pear</span>
        </button>

        <button
          className={selectedButton === 7 ? "selected" : ""}
          onClick={() => handleButtonClick(7)}
        >
          <svg
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.5 8.49988V31.4999H31.5V8.49988H8.5ZM9.5 11.4733L12.6006 20.0033L9.5 28.5276V11.4733ZM19.9971 26.6205L15.1074 25.8524L13.3906 20.0033L15.1074 14.1473L19.9971 13.3793L24.8926 14.1473L26.6094 20.0033L24.8926 25.8524L19.9971 26.6205ZM14.5215 13.4803L12.9619 18.8007L9.62695 9.62683L18.5022 12.8552L14.5215 13.4803V13.4803ZM12.962 21.2051L14.5215 26.5194L18.5022 27.1445L9.62695 30.3729L12.962 21.2051V21.2051ZM25.4785 26.5194L27.038 21.2051L30.373 30.3729L21.4929 27.1447L25.4785 26.5194V26.5194ZM27.0381 18.8007L25.4785 13.4803L21.4929 12.8551L30.373 9.62684L27.0381 18.8007V18.8007ZM19.9971 12.6009L11.4717 9.49988H28.5271L19.9971 12.6009H19.9971ZM19.9971 27.3988L28.5271 30.4999H11.4717L19.9971 27.3988H19.9971ZM27.3994 20.0033L30.5 11.4733V28.5276L27.3994 20.0033V20.0033ZM23.7585 15.6286L24.6816 20.0881L22.8572 16.6978L18.7937 14.9263L23.7585 15.6286Z"
              fill="black"
            ></path>
          </svg>
          <span>Princess</span>
        </button>

        <button
          className={selectedButton === 8 ? "selected" : ""}
          onClick={() => handleButtonClick(8)}
        >
          <svg
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.7585 13.6284L22.6816 20.0881L20.8572 14.6976L18.7937 12.9261L21.7585 13.6284ZM29.5 10.7928V29.2074L25.207 33.5004H14.793L10.5 29.2074V10.7928L14.793 6.49988H25.207L29.5 10.7928ZM28.4983 11.2052L24.874 7.58093L20.8196 10.8227L23.5019 11.5077L25.1196 18.8104L28.4983 11.2052ZM22.8691 27.8802L24.6162 20.0033L22.8691 12.12L19.9971 11.3871L17.1309 12.12L15.3838 20.0033L17.1309 27.8802L19.9971 28.6132L22.8691 27.8802ZM23.7738 7.49988H16.225L19.9971 10.5194L23.7738 7.49988H23.7738ZM15.1257 7.58112L11.5017 11.2052L14.8804 18.8104L16.4981 11.5077L19.1755 10.8228L15.1257 7.58111L15.1257 7.58112ZM11.5 13.049V26.9526L14.5898 20.0033L11.5 13.049ZM11.5017 28.7951L15.1257 32.4191L19.1755 29.1774L16.498 28.4925L14.8805 21.1954L11.5017 28.7951V28.7951ZM16.225 32.5004H23.7738L19.9971 29.4808L16.225 32.5004H16.225ZM24.874 32.4193L28.4983 28.7951L25.1195 21.1954L23.502 28.4926L20.8196 29.1776L24.874 32.4193H24.874ZM28.5 26.9526V13.049L25.4102 20.0033L28.5 26.9526V26.9526Z"
              fill="black"
            ></path>
          </svg>
          <span>Radiant</span>
        </button>

        <button
          className={selectedButton === 9 ? "selected" : ""}
          onClick={() => handleButtonClick(9)}
        >
          <svg
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.7007 16.9802L24.288 21.6034L22.7993 18.0494L20 15.6762L23.7007 16.9802H23.7007ZM31.5 20C31.5 30.1338 25.6865 31.5 20 31.5C14.3135 31.5 8.5 30.1338 8.5 20C8.5 9.86621 14.3135 8.5 20 8.5C25.6865 8.5 31.5 9.86621 31.5 20ZM29.243 13.6468L26.4111 19.9037L29.264 26.3083C30.0417 24.7933 30.5 22.758 30.5 20C30.5 17.2159 30.0344 15.1661 29.243 13.6468ZM27.1367 11.1855L27.1514 11.2186L21.0254 13.931L25.6143 15.3841L26.1555 18.6489L28.7725 12.8668C28.3027 12.1811 27.7537 11.6258 27.1367 11.1855V11.1855ZM24.9502 24.0399L25.6201 20.0018L24.9502 15.9603L20 14.3934L15.0498 15.9603L14.3799 20.0018L15.0518 24.0414L20 25.6063L24.9502 24.0399V24.0399ZM20 9.5C17.6659 9.5 15.4097 9.73914 13.5884 10.7294L19.9453 13.5892L26.4087 10.7279C24.5879 9.73901 22.3329 9.49999 20 9.49999V9.5ZM11.2275 12.8671L13.8331 18.717L14.3857 15.3841L18.9175 13.9491L12.8457 11.2176L12.8589 11.1883C12.2436 11.6282 11.6962 12.1828 11.2275 12.8671L11.2275 12.8671ZM9.5 20C9.5 22.76 9.95874 24.7963 10.7375 26.3118L13.5889 20.0121L10.7551 13.6506C9.96509 15.1695 9.5 17.2181 9.5 20V20ZM12.863 28.8144L12.8486 28.7816L18.9744 26.0689L14.3877 24.6175L13.8342 21.2897L11.2178 27.0707L11.1752 27.0514C11.6562 27.7743 12.2224 28.3572 12.863 28.8144ZM20 30.5C22.334 30.5 24.5901 30.2609 26.4114 29.2707L20.0547 26.4105L13.5916 29.2722C15.4124 30.261 17.6672 30.5 20 30.5L20 30.5ZM28.8267 27.0485L28.7812 27.0687L26.1772 21.2226L25.6143 24.6161L21.0825 26.0507L27.1543 28.7826L27.1412 28.8116C27.781 28.3542 28.3462 27.7711 28.8267 27.0485V27.0485Z"
              fill="black"
            ></path>
          </svg>
          <span>Cushion</span>
        </button>

        <button
          className={selectedButton === 10 ? "selected" : ""}
          onClick={() => handleButtonClick(10)}
        >
          <svg
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24.2031 15.4876L24.6028 20.0578L23.3016 16.5568L19.6853 14.1835L24.2031 15.4876ZM30.4228 20C30.4228 31.5508 27.207 33.5 20 33.5C12.793 33.5 9.57715 31.5508 9.57715 20C9.57715 8.44922 12.793 6.5 20 6.5C27.207 6.5 30.4228 8.44922 30.4228 20ZM29.1453 15.0675L26.9111 20.0033L29.136 24.9972C29.324 23.6037 29.4228 21.9574 29.4228 20C29.4228 18.0734 29.3274 16.4471 29.1453 15.0675ZM27.0216 9.42004L20.9907 11.97L26.3135 13.9603L26.7417 18.5582L28.9274 13.7289C28.5237 11.7089 27.8788 10.3448 27.0216 9.42005V9.42004ZM25.6103 25.5013L26.1269 19.9677L25.6103 14.4984L20 12.4003L14.3896 14.4984L13.873 20.037L14.3906 25.5033L20 27.5995L25.6104 25.5013H25.6103ZM20 7.5C17.3566 7.5 15.1782 7.62762 13.5829 8.86523L19.958 11.5922L26.4138 8.86267C24.8188 7.62744 22.6416 7.5 20 7.5ZM11.0864 13.662L13.2639 18.55L13.6865 13.9603L18.969 11.985L12.9769 9.4217C12.1301 10.336 11.4906 11.6801 11.0864 13.662V13.662ZM10.8552 24.9352L13.0889 20.0009L10.8635 15.0062C10.6758 16.399 10.5771 18.0442 10.5771 20C10.5771 21.9279 10.6726 23.555 10.8552 24.9352ZM12.9785 30.5801L19.009 28.03L13.6875 26.0414L13.2585 21.4457L11.073 26.2736C11.4768 28.2924 12.1217 29.6557 12.9785 30.5801ZM20 32.5C22.6433 32.5 24.8217 32.3724 26.417 31.1349L20.042 28.4076L13.5863 31.1375C15.1813 32.3726 17.3584 32.5 20 32.5V32.5ZM28.9128 26.3411L26.7361 21.4544L26.3135 26.0394L21.031 28.0148L27.0229 30.5785C27.8694 29.6646 28.5087 28.3213 28.9128 26.3411L28.9128 26.3411Z"
              fill="black"
            ></path>
          </svg>
          <span>E.Cushion</span>
        </button>
      </div>
      <Section3 />
      <Section4 value={value} />
    </Root>
  );
}
const Root = styled.section`
  .ring_types {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    button {
      width: 8%;
      border: 2px solid transparent;
      background: #fff;
      display: flex;
      flex-direction: column;
      justify-content: center;
      border-radius: 10px;
      align-items: center;
      padding: 12px 0;

      &.selected {
        border: 2px solid black;
        border-radius: 10px;
      }

      &:hover {
        background-color: rgba(247, 247, 247);
      }

      img,
      svg {
        height: 50px;
        width: 62px;
      }
    }
  }
`;

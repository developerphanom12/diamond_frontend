import React from "react";
import styled from "styled-components";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import edubanner from "../../Images/EducationBanner.jpg";
import eduDia from "../../Images/Diamondweqw.jpg";
import diamond from "../../Images/Diamond-2.jpg";

export default function Education() {
  return (
    <Edu>
      <div className="banner_section">
        <img src={edubanner} alt="banner_img" />
      </div>
      <div className="diamond_ring">
        <div className="sec1">
          <img src={diamond} alt="img" />

          <h2>DIAMONDS</h2>
          <p>
            Discover the enchanting world of diamonds, where timeless elegance
            and enduring brilliance await. Uncover the secrets of their origin,
            marvel at their natural beauty, and understand the 4 Cs—that
            determine their quality. Welcome to a realm of unmatched sparkle and
            sophistication.
          </p>
          <span>
            4 C’s | Clarity | Carat | weight | Color | Cut | Shapes | Round |
            Princess | Cushion | Oval | Radiant | Asscher | Marquise | Pear |
            Emerald | Elongated Cushion | Diamond Types | Lab-Grown Diamond |
            Natural Diamond | Anatomy | Sparkle | Symmetry |
          </span>
          <div className="lnk">
            <a href="education">Learn More</a>
            <HiOutlineArrowNarrowRight />
          </div>
        </div>
        <div className="sec1">
          <img src={eduDia} alt="img" />
          <h2>ENGAGEMENT RINGS</h2>
          <p>
            Step into the mesmerizing world of moissanite. Discover the
            brilliance and eco-friendly allure of these extraordinary gems.
            Explore their origins and unique qualities on this captivating
            journey.
          </p>
          <span>
            Ring | Styles | Solitaire | Vintage | Pave | Side stones | Three |
            stone | Hidden halo | Halo | Setting Types | Bezel | Prongs | Metals
            | White Gold | Yellow Gold | Rose Gold | Platinum |
          </span>
          <div className="lnk">
            <a href="education">Learn More</a>
            <HiOutlineArrowNarrowRight />
          </div>
        </div>
      </div>
    </Edu>
  );
}
const Edu = styled.section`
  margin: 20px 0px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  .banner_section {
    img {
      width: 100%;
    }
  }
  .diamond_ring {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 30px;
    /* margin: 0px 55px; */

    .sec1 {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 10px;
      justify-content: space-between;
      border-radius: 20px;
      box-shadow: 1px 3px 6px 1px lightgray;
      margin: 20px;
      img {
        border-top-left-radius: 20px;
        width: 100%;
        height:50%;
        border-top-right-radius: 20px;
      }
      h2 {
        font-size: 24px;
        font-weight: 500;
        line-height: 1;
        color: #000;
        padding: 0px 30px;
      }
      p {
        font-weight: 300;
        font-size: 16px;
        line-height: 1.25;
      }
      span {
        font-size: 13px;
        line-height: 1.5;

        color: #999999;
        word-spacing: 5px;
      }
      .lnk {
        display: flex;
        justify-content: space-between;
        padding: 0px 30px;
        margin-bottom: 20px;

        svg {
          width: 50px;
          height: 25px;
        }
      }
      p,
      span {
        padding: 0px 30px;
      }
    }
  }
  @media (max-width: 1024px) {
    .diamond_ring {
      padding: 5px;
    }
  }
`;

import styled from "styled-components";
import { container_color, h2_font_size, h3_font_size, mb_0_75, mb_1, mb_1_5 } from "../../Styles/Variables";

export const DiscountSection = styled.section`
  padding: 4rem 0 0 0;

  @media screen and (min-width: 767px) {
    padding: 6rem 0 2rem;
  }
`;

export const DiscountContainer = styled.div`
  max-width: 968px;
  margin-left: ${mb_1_5};
  margin-right: ${mb_1_5};
  display: grid;
  position: relative;
  background-color: ${container_color};
  padding: 2rem 1.5rem;
  border-radius: .75rem;

  @media screen and (min-width: 767px) {
    grid-template-columns: 250px max-content;
    justify-content: center;
    column-gap: 5rem;
    padding: 3rem 0;
  }

  @media screen and (min-width: 1024px) {
    margin-left: auto;
    margin-right: auto;
  }
`;

export const DiscountAnimate = styled.div`

`;

export const DiscountTitle = styled.h2`
  font-size: ${h3_font_size};
  margin-bottom: ${mb_0_75};

  @media screen and (min-width: 767px) {
    font-size: ${h2_font_size};
    margin-bottom: ${mb_1};
  }
`;

export const DiscountDescription = styled.p`
  margin-bottom: ${mb_1};
`;

export const DiscountImg = styled.img`
  width: 300px;
  position: absolute;
  top: 4rem;
  right: -11rem;

  @media screen and (min-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
    align-items: center;
  }

  @media screen and (min-width: 1024px) {
    width: 350px;
  }
`;
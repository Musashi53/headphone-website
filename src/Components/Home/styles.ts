import styled from "styled-components";
import {
  biggest_font_size,
  big_font_size,
  font_medium,
  font_semi_bold,
  h3_font_size,
  mb_0_75,
  mb_1,
  mb_1_5,
  mb_2_5,
  text_gradient,
  text_line_height
} from "../../Styles/Variables";

export const HomeSection = styled.section`
  padding: 4rem 0 2rem;
`;

export const HomeContainer = styled.div`
  max-width: 968px;
  margin-left: ${mb_1_5};
  margin-right: ${mb_1_5};
  display: grid;
`;

export const HomeImg = styled.img`
  width: 250px;
  position: absolute;
  top: -16rem;
  right: 1.5rem;
`;

export const HomeData = styled.div` padding-top: 5rem; `;

export const HomeHeader = styled.div` position: relative; `;

export const HomeTitle = styled.h1`
  position: absolute;
  top: -4rem;
  left: 1rem;
  line-height: 6rem;
  font-size: ${biggest_font_size};
  background: ${text_gradient};
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
`;

export const HomeSubtitle = styled.h2`
  font-size: ${big_font_size};
  margin-bottom: ${mb_2_5};
`;

export const HomeFooter = styled.div``;

export const HomeTitleDescription= styled.h3`
  font-size: ${h3_font_size};
  font-weight: ${font_medium};
  margin-bottom: ${mb_1};
`;

export const HomeDescription = styled.p`
  margin-bottom: ${mb_2_5};
  line-height: ${text_line_height};
`;

export const HomePrice = styled.span`
  font-size: ${h3_font_size}
  font-weight: ${font_semi_bold};
  margin-left: ${mb_0_75};
  
`;

//export const;

//export const;

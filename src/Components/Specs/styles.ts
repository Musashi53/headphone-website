import styled from "styled-components";
import { font_medium, mb_1_5, normal_font_size, smaller_font_size, white_color } from "../../Styles/Variables";

export const SpecsSection = styled.section`
  padding: 4rem 0 2rem;
  display: grid;

  @media screen and (min-width: 767px) {
    padding: 6rem 0 2rem;
  }
`;

export const SpecsContainer = styled.div`
  position: relative;
  max-width: 968px;
  display: grid;
  margin-left: ${mb_1_5};
  margin-right: ${mb_1_5};

  @media screen and (min-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
    align-items: center;
  }

  @media screen and (min-width: 1024px) {
    margin-left: auto;
    margin-right: auto;
  }
`;

export const SpecsContent = styled.div`
  display: grid;
  row-gap: 1.5rem;
`;

export const SpecsData = styled.div`
  display: grid;
  row-gap: .25rem;

  &:nth-child(1), &:nth-child(4) {
    margin-left: 1.5rem;
  }
  
  i {
    font-size:1.2rem;
    color: ${white_color};
  }

  h3 {
    font-size: ${normal_font_size};
    font-weight: ${font_medium};
  }

  span {
    font-size: ${smaller_font_size};
  }
`;

export const SpecsImg = styled.img`
  width: 250px;
  position: absolute;
  top: 2rem;
  right: -4rem;

  @media screen and (max-width: 340px) {
    width: 200px;
  }

  @media screen and (min-width: 576px) {
    position: initial; 
  }

  @media screen and (min-width: 767px) {
    width: 300px;
  }
`;
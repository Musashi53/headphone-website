import styled from "styled-components";
import { container_color, mb_1_5, small_font_size } from "../../Styles/Variables";

export const ProductsSection = styled.section`
  padding: 4rem 0 0 0;
`;

export const ProductsContainer = styled.div`
  max-width: 968px;
  margin-left: ${mb_1_5};
  margin-right: ${mb_1_5};
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 5rem 1.5rem;
  padding-top: 3rem;
`;

export const ProductsCard = styled.article`
  position: relative;
  height: 132px;
  background-color: ${container_color};
  padding: .75rem;
  border-radius: .5rem;
  display: grid;
`;

export const ProductsContent = styled.div`
  align-self: flex-end;
`;

export const ProductsImg = styled.img`
  width: 80px;
  position: absolute;
  inset: 0;
  margin-right: auto;
  margin-left: auto;
  top: -3rem;
`;

export const ProductsTitle = styled.h3`
  font-size: ${small_font_size};
`;

export const ProductsPrice = styled.span`
  font-size: ${small_font_size};
`;

export const ProductsButton = styled.button``;
import styled from "styled-components";
import {
  black_color,
  black_color_alt,
  font_semi_bold,
  h3_font_size,
  mb_0_75,
  white_color
} from '../../../Styles/Variables'

export const HomeButton = styled.a`
  display: inline-block;
  display: inline-flex;
  background-color: ${black_color};
  color: ${white_color};
  padding: 1rem 1.25rem;
  border-radius: .5rem;
  transition: .3s;
  align-items: center;
  column-gap: .75rem;
  cursor: pointer;

  &:hover {
    background-color: ${black_color_alt};
  }

  i {
    font-size: 1.2rem;
  }

  span {
    font-size: ${h3_font_size};
    font-weight: ${font_semi_bold};
    margin-left: ${mb_0_75};
  }
`;

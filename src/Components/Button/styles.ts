import styled from "styled-components";
import { black_color, black_color_alt, white_color } from "../../Styles/Variables";

export const Button = styled.a`
  display: inline-block;
  background-color: ${black_color};
  color: ${white_color};
  padding: 1rem 1.25rem;
  border-radius: .5rem;
  transition: .3s;
  display: inline-flex;
  align-items: center;
  column-gap: .75rem;

  &:hover {
    background-color: ${black_color_alt};
    cursor: pointer;
  }

  i {
    font-size: 1.2rem;
  }

  &.products_button {
    position: absolute;
    right: .5rem;
    bottom: .5rem;
    padding: .5rem;
    border-radius: .35rem;
  }

`;
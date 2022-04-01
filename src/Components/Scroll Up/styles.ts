import styled from "styled-components";
import { black_color, container_color, white_color, z_tooltip } from "../../Styles/Variables";

export const Scroll = styled.a`
  position: fixed;
  right: 1rem;
  bottom: 5rem;
  display: flex;
  background-color: ${container_color};
  border-radius: .25rem;
  padding: .45rem;
  opacity: 9;
  z-index: ${z_tooltip};
  transition: .4s;
  cursor: pointer;

  &:hover {
    background-color:${black_color};
    opacity: 1;
  }

  i {
    color: ${white_color};
    font-size: 1.35rem;
  }
`;
import styled from "styled-components";
import { text_gradient, bigger_font_size, mb_2_5 } from "../../Styles/Variables";

export const Title = styled.h2`
  background: ${text_gradient};
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  font-size: ${bigger_font_size};
  text-align: center;
  margin-bottom: ${mb_2_5};
`;
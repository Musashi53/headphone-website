import styled from 'styled-components';
import { text_gradient } from '../../Styles/Variables';

export const TitleGradient = styled.h2`
  background: ${text_gradient};
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
`;
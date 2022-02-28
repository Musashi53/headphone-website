import styled from "styled-components";
import { mb_1_5, text_line_height } from "../../Styles/Variables";

export const CaseSection = styled.section`
  padding: 4rem 0 0 0;
  display: grid;
`;

export const CaseContainer = styled.div`
  display: grid;
  max-width: 968px;
  margin-left: ${mb_1_5};
  margin-right: ${mb_1_5};
  position: relative;
  grid-template-columns: repeat(2, 1fr);
`;

export const CaseImg = styled.img`
  position: absolute;
  left: -7rem;
  width: 250px;
`;

export const CaseData = styled.div`
  padding: 5rem 0 3rem;
`;

export const CaseDescription = styled.p`
  margin-bottom: ${mb_1_5};
  line-height: ${text_line_height};
`;

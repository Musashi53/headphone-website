import styled from "styled-components";
import { mb_1_5 } from "../../Styles/Variables";

export const SponsorSection = styled.section`
  padding: 4rem 0 2rem;
  display: flex;
  justify-content: center;
`;

export const SponsorContainer = styled.div`
  max-width: 968px;
  display: flex;
  margin-left: ${mb_1_5};
  margin-right: ${mb_1_5};
  align-items: center;
  justify-content: space-between;
  border: 1px solid red;
  flex-wrap: wrap;
`;

export const SponsorImg = styled.img`
  width: 90px;

  @media screen and (min-width: 1024px) {
    width: 100px;
  }
`;

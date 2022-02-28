import styled from "styled-components";
import { mb_1_5 } from "../../Styles/Variables";

export const SponsorSection = styled.section`
  padding: 4rem 0 2rem;
`;

export const SponsorContainer = styled.div`
  max-width: 968px;
  display: flex;
  margin-left: ${mb_1_5};
  margin-right: ${mb_1_5};
  align-items: center;
  justify-content: center;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
  row-gap: 5rem;
`;

export const SponsorImg = styled.img`
  width: 90px;

  @media screen and (min-width: 1024px) {
    width: 100px;
  }
`;

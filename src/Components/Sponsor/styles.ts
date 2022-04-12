import styled from "styled-components";
import { mb_1_5 } from "../../Styles/Variables";

export const SponsorSection = styled.section`
  padding: 4rem 0 2rem;
  display: flex;
  justify-content: center;

  @media screen and (min-width: 767px) {
    padding: 6rem 0 2rem;
  }
`;

export const SponsorContainer = styled.div`
  max-width: 968px;
  width: 90%;
  margin-left: ${mb_1_5};
  margin-right: ${mb_1_5};
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: 1024px) {
    margin-left: auto;
    margin-right: auto;
  }
  
`;

export const SponsorImg = styled.img`
  width: 90px;
  margin: .5rem;

  @media screen and (min-width: 1024px) {
    width: 100px;
  }
`;

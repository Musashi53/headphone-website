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
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 400px) {
    flex-wrap: wrap;
    
    &:nth-child(4) {
      margin: 1rem;
    }
  }

  @media screen and (min-width: 1024px) {
    margin-left: auto;
    margin-right: auto;
  }
  
`;

export const SponsorImg = styled.img`
  width: 90px;

  @media screen and (min-width: 1024px) {
    width: 100px;
  }
`;

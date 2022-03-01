import styled from "styled-components";
import { black_color, body_font, container_color, font_medium, h3_font_size, mb_1, mb_1_5, mb_2, normal_font_size, smaller_font_size, text_color, text_color_light, white_color } from "../../Styles/Variables";

export const FooterSection = styled.footer`
  margin: 4rem 0 0 0;
`;

export const FooterContainer = styled.div`
  margin-left: ${mb_1_5};
  margin-right: ${mb_1_5};
  max-width: 968px;
  display: grid;
  grid-template-columns: repeat(auto-fix, minmax(220px, 1fr));
  row-gap: 2rem;

  @media screen and (min-width: 767px) {
    grid-template-columns: .4fr .7fr .7fr 1fr;
  }

  @media screen and (min-width: 1024px) {
    margin-left: auto;
    margin-right: auto;
  }
`;

export const FooterLogo = styled.a`
  width: 2rem;
`;

export const FooterContent = styled.div``;

export const FooterTitle = styled.h3`
  font-size: ${h3_font_size};
  font-weight: ${font_medium};
  margin-bottom: ${mb_1};
`;

export const FooterLinks = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: .5rem;
`;

export const FooterLink = styled.a`
  color: ${text_color};

  &:hover {
    color: ${white_color};
  }
`;

export const FooterForm = styled.form`
  display: flex;
  column-gap: .5rem;
  background-color: ${container_color};
  padding: .5rem .75rem;
  border-radius: .5rem;
  margin-bottom: ${mb_2};
`;

export const FooterInput = styled.input`
  background-color: ${container_color};
  width: 90%;
  color: ${white_color};

  &::placeholder {
    color: ${text_color};
    font-size: ${normal_font_size};
    font-family: ${body_font};
  }
`;

export const FooterSocial = styled.div`
  display: flex;
  column-gap: 1.25rem;
`;

export const FooterSocialLink = styled.a`
  display: inline-flex;
  color: ${white_color};
  background-color: ${container_color};
  padding: .5rem;
  border-radius: .25rem;
  font-size: 1rem;

  &:hover {
    background-color: ${black_color};
  }
`;

export const FooterCopy = styled.p`
  margin-top: 5rem;
  margin-bottom: 1rem;
  text-align: center;
`;

export const FooterCopyLink = styled.a`
  font-size: ${smaller_font_size};
  color: ${text_color_light};
`;
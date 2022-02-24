import styled from "styled-components";
import { body_color, font_semi_bold, h2_font_size, header_height, mb_1, mb_1_5, normal_font_size, text_gradient, white_color } from "../../Styles/Variables";

type PropsOpen = {
  open: boolean;
}

export const NavContainer = styled.nav`
  max-width: 968px;
  margin-left: ${mb_1_5};
  margin-right: ${mb_1_5};
  display: flex;
  justify-content: space-between;
  height: ${header_height};
  align-items: center;

  @media screen and (max-width: 340px) {
    margin-left: ${mb_1};
    margin-right: ${mb_1};
  }

  @media screen and (min-width: 767px) {
    height: calc(${header_height} + 1.5rem);
  }

  @media screen and (min-width: 1024px) {
    margin-left: auto;
    margin-right: auto;
  }
`;

export const NavLogo = styled.a`
  display: flex;
  width: 1.5rem;

  @media screen and (min-width: 767px) {
    width: 2rem;
  }
`;

export const NavMenu = styled.div`
  @media screen and (max-width: 767px) {
    position: fixed;
    background-color: ${body_color};
    top: ${(props: PropsOpen) => props.open ? 0 : `-100%`};
    left: 0;
    width: 100%;
    padding: 4rem 0 3rem;
    transition: .4s;
  }
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 1rem;

  @media screen and (min-width: 767px) {
    flex-direction: row;
    column-gap: 3.5rem;
  }
`;

export const NavItem = styled.li`
  
`;

export const NavLink = styled.a`
  color: ${white_color};
  font-size: ${h2_font_size};
  text-transform: uppercase;
  font-weight: ${font_semi_bold};
  background: ${text_gradient};
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  transition: .4s;

  &:hover {
    background: ${white_color};
    color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
  }

  @media screen and (min-width: 767px) {
    font-size: ${normal_font_size};
    text-transform: initial;
  }
`;

export const NavClose = styled.div`
  position: absolute;
  font-size: 1.5rem;
  top: 1rem;
  right: 1rem;
  color: ${white_color};
  cursor: pointer;

  @media screen and (min-width: 767px) {
    display: none;
  }
`;

export const NavToggle = styled.div`
  font-size: 1.2rem;
  color: ${white_color};
  cursor: pointer;
  
  @media screen and (min-width: 767px) {
    display: none;
  }
`;
import styled, {createGlobalStyle} from 'styled-components';
import {
	body_color,
	body_font,
	header_height,
	normal_font_size,
	text_color,
	title_color
} from './Variables';

export const GlobalStyle = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	html {
		scroll-behavior: smooth;
	}

	body {
		margin: ${header_height};
		font-family: ${body_font};
		font-size: ${normal_font_size};
		background-color: ${body_color};
		color: ${text_color};
	}

	h1, h2, h3 {
		color: ${title_color};
	}

	ul {
		list-style: none;
	}

	a {
		text-decoration: none;
	}
`;

export const Main = styled.main`
	overflow: hidden;
`;

export const Container = styled.div`
	max-width: 968px;
	display: flex;
	justify-content: center;
`;
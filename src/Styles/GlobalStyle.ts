import styled, {createGlobalStyle} from 'styled-components';
import {
	body_color,
	body_font,
	header_height,
	normal_font_size,
	scroll_thumb_color,
	scroll_thumb_color_alt,
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
		margin: ${header_height} 0 0 0;
		font-family: ${body_font};
		font-size: ${normal_font_size};
		background-color: ${body_color};
		color: ${text_color};

		@media screen and (min-width: 767px) {
			margin: 0;
		}
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

	button,
	input {
		border: none;
		outline: none;
	}

	button {
		cursor: pointer;
	}

	img {
		width: 100%;
		height: auto;
	}

	&::-webkit-scrollbar {
		width: .60rem;
		border-radius: .5rem;
	}

	&::-webkit-scrollbar-thumb {
		background-color: ${scroll_thumb_color};
		border-radius: .5rem;
	}

	&::-webkit-scrollbar-thumb:hover {
		background-color: ${scroll_thumb_color_alt};
	}
`;

export const Main = styled.main`
	overflow: hidden;
`;

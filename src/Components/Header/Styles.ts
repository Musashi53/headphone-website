import styled from 'styled-components';
import { body_color, z_fixed } from '../../Styles/Variables';


export const HeaderContainer = styled.header`
	width: 100%;
	position: fixed;
	top: 0;
	left: 0;
	z-index: ${z_fixed};
	background: ${body_color};
	
`;
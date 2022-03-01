import styled from 'styled-components';
import { body_color, z_fixed } from '../../Styles/Variables';

type ScrollProps = {
	scroll: boolean;
};

export const HeaderContainer = styled.header`
	width: 100%;
	position: fixed;
	top: 0;
	left: 0;
	z-index: ${z_fixed};
	background: ${(props: ScrollProps) => props.scroll ? body_color : `transparent`};
	
`;
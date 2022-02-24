import React from 'react';
import { HeaderContainer } from './Styles';

import Nav from '../Nav/index';

const Header: React.FC = () => {
	return (
		<HeaderContainer>
			<Nav/>
		</HeaderContainer>
	);
}

export default Header;
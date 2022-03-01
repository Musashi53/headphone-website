import React, {useState} from 'react';
import { HeaderContainer } from './Styles';

import Nav from '../Nav/index';

const Header: React.FC = () => {
	const [scrollY, setScrollY] = useState<boolean>(false);

	const scrollWindow = window.pageYOffset;
	
	return (
		<HeaderContainer scroll={scrollY}>
			<Nav/>
		</HeaderContainer>
	);
}

export default Header;
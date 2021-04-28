import React, { useState, useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import {
	Nav,
	NavLink,
	NavMenu,
	NavLogOff
} from './NavbarCSS';

const Navbar = ({ toggle }) => {

	const [scrollNav, setScrollNav] = useState(false);

	const changeNav = () => {
    
		if (window.scrollY >= 80) {
			setScrollNav(true);
		} else {
			setScrollNav(false);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', changeNav);
	}, []);

	const toggleHome = () => {
		scroll.scrollToTop();
	};

	return (
		<>
			<Nav scrollNav={scrollNav}>
				<NavMenu>
					<NavLink to='/home' activeStyle onClick={toggleHome}>
                    Home
					</NavLink>

					<NavLink to='/categories' activeStyle onClick={toggleHome}>
                    Categories
					</NavLink>

					<NavLink to='/pos' activeStyle onClick={toggleHome}>
                    POs
					</NavLink>

					<NavLogOff to='/logOff' activeStyle onClick={toggleHome}>
                    Log-Out
					</NavLogOff>
				</NavMenu>
			</Nav>
		</>
	);
};

export default Navbar;

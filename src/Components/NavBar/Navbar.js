import React, { useState, useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import {
    Nav,
    NavLink,
    NavMenu
} from './NavbarCSS';

const Navbar = ({ toggle }) => {

    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
    
        if (window.scrollY >= 80) {
        setScrollNav(true);
        } 
        
        else {
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

                <NavLink to='/cateogries' activeStyle onClick={toggleHome}>
                    Cateogries
                </NavLink>

                <NavLink to='/pos' activeStyle onClick={toggleHome}>
                    POs
                </NavLink>

                <NavLink to='/poForm' activeStyle onClick={toggleHome}>
                    POForm
                </NavLink>

                <NavLink to='/logOff' activeStyle onClick={toggleHome}>
                    LogOff
                </NavLink>
            </NavMenu>
        </Nav>
        </>
    );
};

export default Navbar;

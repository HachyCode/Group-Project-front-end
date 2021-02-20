import React from 'react';
import {
    Nav,
    NavLink,
    NavMenu
} from './NavbarCSS';

const Navbar = () => {
    return (
        <>
        <Nav>
            <NavMenu>
                <NavLink to='/home' activeStyle>
                    Home
                </NavLink>

                <NavLink to='/cateogries' activeStyle>
                    Cateogries
                </NavLink>

                <NavLink to='/pos' activeStyle>
                    POs
                </NavLink>

                <NavLink to='/poForm' activeStyle>
                    POForm
                </NavLink>

                <NavLink to='/logOff' activeStyle>
                    LogOff
                </NavLink>
            </NavMenu>
        </Nav>
        </>
    );
};

export default Navbar;

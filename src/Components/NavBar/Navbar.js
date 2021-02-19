import React from 'react';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink
} from './NavbarCSS';

const Navbar = () => {
    return (
        <>
        <Nav>
            {/*<NavLink to='/'>
            <img src={require('../../images/logo.svg')} alt='logo' />
            </NavLink>

            <Bars />*/}
            //edit

            <NavMenu>

                <NavLink to='/home' activeStyle>
                    Home
                </NavLink>

                <NavLink to='/cateogries' activeStyle>
                    Cateogries
                </NavLink>

                <NavLink to='/logIn' activeStyle>
                    LogIn
                </NavLink>

                <NavLink to='/pos' activeStyle>
                    POs
                </NavLink>

                <NavLink to='/poForm' activeStyle>
                    POForm
                </NavLink>
            </NavMenu>

            {/*<NavBtn>
            <NavBtnLink to='/signin'>Sign In</NavBtnLink>
            </NavBtn>*/}

        </Nav>
        </>
    );
};

export default Navbar;

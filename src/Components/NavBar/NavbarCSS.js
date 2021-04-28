//import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
    background: #9D4EDD;
    height: 5vh;

    display: flex;
    justify-content: center;
    padding: 0.5em;
    z-index: 999;
    position: sticky;
    top: 0;
`;

export const NavLink = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &:hover {
        color: #FF9E00;
        transition: 0.2s ease-in-out;
    }

    &.active {
        color: #ADB5BD;
    }
`;

export const NavLogOff = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

	background: #FF9E00;
	border-radius: 30px;

    &:hover {
		background: #ADB5BD;
        transition: 0.2s ease-in-out;
	}
`;

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
`;
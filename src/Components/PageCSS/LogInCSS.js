import styled from 'styled-components';
import InputBox from '../InputBox/InputBox';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export const Background = styled.img`
    height: 100vh;
    width: 100vw;

    position: absolute;
    z-index: 1;
`;

export const MainDiv = styled.div`
    display: flex;
    flex-direction: column;
    z-index: 10;
    position: absolute;
    width: 100vw;
    height: 100vh;

    background: transparent;
`;

export const Logo = styled.img`
    height: 5em;
    width: 13em;
    margin: 2em 0 0 2em;
`;

export const LoginBody = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 60vh;
`;
//actual components
export const LoginButton = styled.button`
    padding: 1em 5em;
    margin: 1em 0 2em 0;

    border-radius: 30px;
    border: none;
    background: #FF9E00;
    font-size: 1.1em;
`;

export const LoginBox = styled(InputBox)`
    padding: 1em 2em;
    margin: 0 0 1em 0;
    font-size: 1.1em;
    width: 50vw;

    border-radius: 30px;
    border: none;
    color: black;

    background: rgb(230, 230, 230, 0.7);
`;

export const WarningBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const WarningMesage = styled.div`
    padding: 1em;
    font-size: 1.1em;
    width: 50vw;
    border-radius: 40px;

    display: flex;
    justify-content: center;
    align-items: center;

    background: linear-gradient(to right, rgb(230, 230, 230), rgb(230, 230, 230, 0.2), rgb(230, 230, 230)) ;
`;

export const WarningIcon = styled(FontAwesomeIcon)`
    color: #FF9E00;
    font-size: 2em;
`;

export const WarningText = styled.div`
    width: 42vw;
    padding: 0 1em;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1em;
`;





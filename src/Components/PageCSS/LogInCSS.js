import styled from 'styled-components';
import InputBox from '../InputBox/InputBox';

//formatting elements
export const MainDiv = styled.div`
    display: flex;
    flex-direction: row;
    height: 93vh;
`;

export const ProfileSidebar = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 25%;
    border-right: 1px solid black;
`;

export const MainPageBody = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const LoginBody = styled.div`
    display: flex;
    flex-flow: row nowrap;
`;

export const LoginSidePadding = styled.div`
    padding-left: 25%;
`;

export const LoginMainArea = styled.div`
    display: flex;
    flex-direction: column;
    width:50%;
`;

//actual components
export const LoginButton = styled.button`
    margin-top: 1em;
    margin-left: 20%;
    margin-right: 20%;
    height: 4em;
`;

export const LoginBox = styled(InputBox)`
    margin-left: 2em;
    margin-right: 2em;
    margin-bottom: 2em;
    height: 3em;
`;

export const WarningBox = styled.div`
    border-style: solid;
    border-width: 1px;
    border-color: black;
    border-radius: 5px;
    padding-left: 27%;
    margin-left: 2em;
    margin-right: 2em;
    margin-top: 25vh;
    height: 15vh;
    display: flex;
    align-items: center;
`;

export const Logo = styled.img`
    height: 100px;
    width: 300px;
`;

export const ProfilePic = styled.img`
    margin-left: 20%;
    margin-bottom: 10%;
    width: 13vw;
    height: 13vw;
    border-style: solid;
    border-width: 1px;
    border-color: black;
    border-radius: 50%;
`;
export const BannerHider = styled.div`
    background-color: white;
    zIndex: 99;
    width: 100%;
    height: 7vh;
`;
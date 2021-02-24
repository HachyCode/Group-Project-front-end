import React from 'react'
import styled from 'styled-components';
import InputBox from '../Components/InputBox/InputBox'

//formatting elements
const MainDiv = styled.div`
    display: flex;
    flex-direction: row;
    height: 93vh;
`;

const ProfileSidebar = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 25%;
    border-right: 1px solid black;
`;

const MainPageBody = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const LoginBody = styled.div`
    display: flex;
    flex-flow: row nowrap;
`;

const LoginSidePadding = styled.div`
    padding-left: 25%;
`;

const LoginMainArea = styled.div`
    display: flex;
    flex-direction: column;
    width:50%;
`;

//actual components
const LoginButton = styled.button`
    margin-top: 1em;
    margin-left: 20%;
    margin-right: 20%;
    height: 4em;
`

const LoginBox = styled(InputBox)`
    margin-left: 2em;
    margin-right: 2em;
    margin-bottom: 2em;
    height: 3em;
`;

const WarningBox = styled.div`
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
`

const Logo = styled.img`
    height: 100px;
    width: 300px;
`;

const ProfilePic = styled.img`
    margin-left: 20%;
    margin-bottom: 10%;
    width: 13vw;
    height: 13vw;
    border-style: solid;
    border-width: 1px;
    border-color: black;
    border-radius: 50%;
`;

function LogIn() {
    const id = React.useRef(null);
    const password = React.useRef(null);
    function login() {
        const usr = id.current.value;
        const pwd = password.current.value;
        console.log("try login");
        if (usr !== id.current.default && pwd !== password.current.default) {
            console.log("login");
            //do the login stuff here later
        }
    }
    return (
        <div>
            <MainDiv>
                {/*Daniel*/}
                {/*<ProfileSidebar>
                    <ProfilePic alt="profile"/>
                </ProfileSidebar>*/}
                <MainPageBody>
                    <Logo alt="logo"/>
                    <LoginBody>
                        <LoginSidePadding>&nbsp;</LoginSidePadding>
                        <LoginMainArea>
                            <LoginBox ref={id} id="staffID" default="Staff ID"/>
                            <LoginBox ref={password} id="password" default="Password"/>
                            <LoginButton onClick={login}>Log In</LoginButton>
                        </LoginMainArea>
                        <LoginSidePadding>&nbsp;</LoginSidePadding>
                    </LoginBody>
                    <div>
                        <WarningBox>
                            <img alt="triangledanger"/>
                            You need to log in to use this program
                            <img alt="triangledanger"/>
                        </WarningBox>
                    </div>
                </MainPageBody>
            </MainDiv>
        </div>
    );
}

export default LogIn

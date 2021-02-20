import React from 'react'
import styled from 'styled-components';
import InputBox from '../Components/InputBox'

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
    width: 75%;
`;

const LoginBody = styled.div`
    display: flex;
    flex-flow: row nowrap;
    margin-bottom: 70vh;
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
    margin-left: 33%;
    margin-right: 33%;
`

const LoginBox = styled(InputBox)`
    margin-left: 4em;
    margin-right: 4em;
    margin-bottom: 6em;
`;

const WarningBox = styled.div`
    border-style: solid;
    border-width: 1px;
    border-color: black;
    border-radius: 5px;
    padding-right: 1.5em;
    padding-left: 1.5em;
    margin-left: 2em;
    margin-right: 2em;
    width: 60vw;
    display: flex;
    align-items: center;
`

const ProfilePic = styled.img`
    margin-left: 15%;
    margin-right: 15%;
    margin-bottom: 10%;
    width: calc(10% - 2*margin-left);
    height: 27%;
    border-style: solid;
    border-width: 1px;
    border-color: black;
    border-radius: 50%;
`;

function LogIn() {
    const id = React.useRef(null);
    const password = React.useRef(null);
    function login() {
        if (id.current.text !== id.default && password.current.text !== password.default) {
            console.log("login");
            //do the login stuff here later
        }
    }
    return (
        <div>
            <MainDiv>
                {/*Daniel*/}
                <ProfileSidebar>
                    <ProfilePic alt="profile"/>
                </ProfileSidebar>
                <MainPageBody>
                    <div>
                        <img alt="logo"></img>
                    </div>
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

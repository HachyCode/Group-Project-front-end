import React from 'react'
import NavBar from '../Components/NavBar/Navbar'
import styled from 'styled-components';
import LoginBox from '../Components/InputBox'

const LoginButton = styled.button`

`
const WarningBox = styled.div`
`

function LogIn() {
    const id = React.useRef(null);
    const password = React.useRef(null);
    function login() {
        if (id.current.value() !== id.default && password.current.value() !== password.default) {
            //do the login stuff here later
        }
    }
    return (
        <div>
            {/*Daniel*/}
            <div>
                <div>
                    <img alt="logo"></img>
                </div>
                <div>
                    <div></div>
                    <div>
                        <LoginBox ref={id} id="staffID" default="Staff ID"/>
                        <LoginBox ref={password} id="password" default="Password"/>
                        <LoginButton onClick={login}>Log In</LoginButton>
                    </div>
                    <div></div>
                </div>
                <div>
                    <WarningBox>
                        <img alt="triangledanger"/>
                        You need to log in to use this program
                        <img alt="triangledanger"/>
                    </WarningBox>
                </div>
            </div>
        </div>
    );
}

export default LogIn

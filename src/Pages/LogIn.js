import React from 'react';
import axios from 'axios';
import Config from '../Config';
import { withRouter } from 'react-router-dom';
import {
	MainDiv, 
	MainPageBody, 
	LoginBody, 
	LoginSidePadding, 
	LoginMainArea, 
	LoginButton, 
	LoginBox, 
	WarningBox, 
	Logo, 
	BannerHider
} from '../Components/PageCSS/LogInCSS';

function LogIn() {
	const id = React.useRef(null);
	const password = React.useRef(null);
	function login() {
		const usr = id.current.value;
		const pwd = password.current.value;
		console.log("try login");
		//TODO: default is coming back as undefined
		console.log(!!id.current.default + ", " + !!password.current.default);
		console.log(usr + ", " + pwd);
		if (usr !== id.current.default && pwd !== password.current.default) {
			console.log("login");
			const requestObj = {
				"username": usr,
				"password": pwd,
			};

			axios.post(Config.serverLocation + "/user/login", requestObj, {
				'Content-Type': 'application/json'
			}).then(
				(response) => {
					if (response["token"]) {
						//successful login
						//set SESSION variable to token response
						//send them to the home page
						this.props.history.push("/home");
					} else {
						//unsuccessful login
					}
				}
			);


		}
	}
	return (
		<div>
			<BannerHider/>
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

export default withRouter(LogIn);

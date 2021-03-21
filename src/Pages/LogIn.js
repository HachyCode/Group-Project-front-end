import React, {useState} from 'react';
import axios from 'axios';
import Config from '../Config';
import {withRouter} from 'react-router-dom';
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
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faExclamationTriangle} from '@fortawesome/free-solid-svg-icons';

function LogIn() {
	const id = React.useRef(null);
	const password = React.useRef(null);
	//I shouldn't have to use this but apparently I do
	//is it too late to make this a Vue site?
	const userDefault = "Staff ID";
	const pwdDefault = "Password";
	let warnMessage = "";
	const forceUpdateHook = forceUpdate();

	function login() {
		const usr = id.current.value;
		const pwd = password.current.value;
		console.log("try login");
		if (usr !== userDefault && pwd !== pwdDefault) {
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
						sessionStorage.setItem("user_token", response["token"]);
						//send them to the home page
						this.props.history.push("/home");
					} else {
						//unsuccessful login
						warnMessage = "Username or password is incorrect!";
						forceUpdateHook();
					}
				}
			).catch((error) => {
				console.log("error");
				warnMessage = "An error occured while trying to log in!";
				forceUpdateHook();
			});
		}
	}

	//yoinked from https://stackoverflow.com/a/53837442, accessed 03/03/2021
	function forceUpdate() {
		//block stupid BS error about it 'not being a hook' despite this being literally the only sane
		//way to update the page for a single variable even though it looks like you *have* to manually update
		//the entire thing multiple times to get a half functional site and no sane being alive will change 
		//their page from a function to a page on the basis of ONE basic feature that should be there already
		//the more I work with this framework the more I hate it
		// eslint-disable-next-line react-hooks/rules-of-hooks
		const [value, setValue] = useState(0);
		return () => setValue(value => value + 1);
	}

	function setWarnMessage() {
		
	}

	function getWarnMessage() {
		return warnMessage;
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
							<LoginBox ref={id} id="staffID" default={userDefault}/>
							<LoginBox ref={password} id="password" default={pwdDefault}/>
							<LoginButton onClick={login}>Log In</LoginButton>
						</LoginMainArea>
						<LoginSidePadding>&nbsp;</LoginSidePadding>
					</LoginBody>
					<div>
						<WarningBox>
							<FontAwesomeIcon icon={faExclamationTriangle}/>
							You need to log in to use this program
							<FontAwesomeIcon icon={faExclamationTriangle}/>
						</WarningBox>
					</div>
				</MainPageBody>
			</MainDiv>
		</div>
	);
}

export default withRouter(LogIn);

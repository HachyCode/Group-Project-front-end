import React, {useState} from 'react';
import axios from 'axios';
import Config from '../Config';
import {withRouter, useHistory} from 'react-router-dom';
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
import FixedWarningBox from '../Components/FixedWarningBox/FixedWarningBox';
import {eventBus, WarningBoxVisibilityUpdate} from '../EventBus';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faExclamationTriangle} from '@fortawesome/free-solid-svg-icons';

function LogIn() {
	const id = React.useRef(null);
	const password = React.useRef(null);
	//I shouldn't have to use this but apparently I do
	//is it too late to make this a Vue site?
	const userDefault = "Email";
	const pwdDefault = "Password";
	const history = useHistory();
	const forceUpdateHook = forceUpdate();

	function login() {
		const usr = id.current.value;
		const pwd = password.current.value;
		if (usr !== userDefault && pwd !== pwdDefault) {
			const requestObj = {
				"email": usr,
				"password": pwd
			};

			axios.post(Config.serverLocation + "/user/login", requestObj, {
				'Content-Type': 'application/json'
			}).then(
				(response) => {
					if (response["data"]["token"]) {
						//successful login
						//set SESSION variable to token response
						sessionStorage.setItem("user_token", response["token"]);
						//send them to the home page
						history.push("/home");
					} else {
						//unsuccessful login
						eventBus.emit(WarningBoxVisibilityUpdate, {visible: true});
						forceUpdateHook();
					}
				}
			).catch((error) => {
				forceUpdateHook();
			});
		}
	}

	//yoinked from https://stackoverflow.com/a/53837442, accessed 03/03/2021
	function forceUpdate() {
		//"not a react function component"
		//yeah ok buddy
		// eslint-disable-next-line react-hooks/rules-of-hooks
		const [value, setValue] = useState(0);
		return () => setValue(value => value + 1);
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
							<LoginBox 
								ref={password} 
								id="password" 
								default={pwdDefault}
								password={true}
							/>
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
				<FixedWarningBox
					content="Username or password is incorrect!"
					visible={false}
					color={"white"}
					backgroundColor={"red"}
					bottom={0}
					left={"33vw"}
				/>
			</MainDiv>
		</div>
	);
}

export default withRouter(LogIn);

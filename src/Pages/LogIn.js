import React, {useState} from 'react';
import axios from 'axios';
import Config from '../Config';
import {withRouter, useHistory} from 'react-router-dom';
import {
	MainDiv,
	Background,
	LoginBody,
	LoginButton,
	LoginBox,
	WarningBox,
	WarningMesage,
	Logo,
	WarningIcon,
	WarningText
} from '../Components/PageCSS/LogInCSS';
import FixedWarningBox from '../Components/FixedWarningBox/FixedWarningBox';
import {eventBus, WarningBoxVisibilityUpdate, RouterUpdate} from '../EventBus';
import {faInfoCircle} from '@fortawesome/free-solid-svg-icons';
import background from '../Images/Background/Orange_3.jpg';
import logo from '../Images/Logo/black_logo.png';

function LogIn() {
	eventBus.emit(WarningBoxVisibilityUpdate, {visible: true});
	const id = React.useRef(null);
	const password = React.useRef(null);
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
						sessionStorage.setItem(Config.userTokenSession, response["token"]);
						eventBus.emit(RouterUpdate);
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
			<Background alt="Background" src={background}/>
			<MainDiv>
				<Logo alt="logo" src={logo}/>
				<LoginBody>
					<FixedWarningBox
						content="Username or password is incorrect!"
						visible={false}
						color={"white"}
						backgroundColor={"red"}
					/>
					<LoginBox ref={id} id="staffID" default={userDefault}/>
					<LoginBox 
						ref={password}
						id="password"
						default={pwdDefault}
						password={true}
					/>
					<LoginButton onClick={login}>Log In</LoginButton>
				</LoginBody>
				<WarningBox>
					<WarningMesage>
						<WarningIcon icon={faInfoCircle}/>
						<WarningText>You need to log in to use this program</WarningText> 
						<WarningIcon icon={faInfoCircle}/>
					</WarningMesage>
				</WarningBox>
			</MainDiv>
		</div>
	);
}

export default withRouter(LogIn);

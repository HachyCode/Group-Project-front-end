import React from 'react';
import {useHistory} from 'react-router-dom';
import {LogOffMessageBox, MainBox} from '../Components/PageCSS/LogOffCSS';
import Config from '../Config';
import {eventBus, RouterUpdate} from '../EventBus';

function LogOff() {
	const history = useHistory();

	function onLogOff() {
		sessionStorage.removeItem(Config.userTokenSession);
		sessionStorage.removeItem(Config.currUserPermissions);
		eventBus.emit(RouterUpdate);
		history.push('/');	
	}

	setTimeout(onLogOff, 1500);

	return (
		<MainBox>
			<LogOffMessageBox>
				Logging you off...
			</LogOffMessageBox>
		</MainBox>
	);
}

export default LogOff;
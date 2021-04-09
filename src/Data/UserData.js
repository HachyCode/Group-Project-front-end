import axios from 'axios';
import Config from '../Config';

export function getDataOfCurrentUser() {
	const userToken = sessionStorage.getItem(Config.userTokenSession);
	console.log("get data current user: " + userToken);

	if (userToken) {
		return axios.get(Config.serverLocation + "/user/me", {
			"Authorization": userToken,
			"Content-Type": "application/json"
		}).then(
			(response) => {
				console.log("response: " + response);
				return {
					createdAt: response["data"]["Created at"],
					username: response["data"]["Username"],
					email: response["data"]["Email Address"],
					password: response["data"]["Password"],
				};
			}
		);
	} else {
		return false;
	}
}
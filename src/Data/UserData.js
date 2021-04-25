import axios from 'axios';
import Config from '../Config';

export function getDataOfCurrentUser() {
	return axios.get(Config.serverLocation + "/user/me", {
		headers: {
			"Content-Type": "application/json",
			"Authorization": sessionStorage.getItem(Config.userTokenSession)
		}
	}).then(
		(response) => {
			return {
				createdAt: response["data"]["Created at"],
				username: response["data"]["Username"],
				email: response["data"]["Email Address"],
				staffID: response["data"]["StaffID"],
			};
		}
	);
}
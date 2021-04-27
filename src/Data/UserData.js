import axios from 'axios';
import Config from '../Config';

export function getDataOfCurrentUser(token) {
	return axios.get(Config.serverLocation + "/user/me", {
		headers: {
			"Content-Type": "application/json",
			"Authorization": token ? token : sessionStorage.getItem(Config.userTokenSession)
		}
	});
}

export let currentUser = getDataOfCurrentUser();



// .then(
// 	(response) => {
// 		currentUser = {
// 			createdAt: response["data"]["Created at"],
// 			username: response["data"]["Username"],
// 			email: response["data"]["Email Address"],
// 			staffID: response["data"]["StaffID"],
// 		};
// 	}
// );
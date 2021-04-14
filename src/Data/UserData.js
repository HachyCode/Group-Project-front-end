import axios from 'axios';
import Config from '../Config';

export async function getDataOfCurrentUser() {
	return await axios.get(Config.serverLocation + "/user/me", {
		headers: {
			"Content-Type": "application/json",
			"Authorization": sessionStorage.getItem(Config.userTokenSession)
		}
	}).then(
		(response) => {
			console.log("response: " + JSON.stringify(response["data"]));
			return {
				createdAt: response["data"]["Created at"],
				username: response["data"]["Username"],
				email: response["data"]["Email Address"],
				staffID: response["data"]["StaffID"],
			};
		}
	);
}
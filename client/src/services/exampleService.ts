import {base_url} from "./baseUrl";
import axios from "axios";

export const get__example = async () => {
	let headersList = {
		Accept: "*/*",
	};

	let reqOptions = {
		url: BASE_API,
		method: "GET",
		headers: headersList,
	};

	let response = await axios.request(reqOptions);
	console.log(response.data);
};

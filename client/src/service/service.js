const axios = require("axios");
const api_base_url = "http://localhost:8080";

export const requestApi = async (sport) => {
	return await axios.get(api_base_url).then(function (req) {
		return req.data;
	});
};

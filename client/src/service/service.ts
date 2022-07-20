const axios = require("axios");
const api_base_url = "http://localhost:8080/api";

export const requestApi = async () => {
	return await axios.get(api_base_url).then(function (req: any) {
		return req.data;
	});
};

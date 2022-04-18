const api_base_url = "http://localhost:8080";

export async function reqData() {
	return fetch(api_base_url).then((response) => {
		return response
			.json()
			.then((data) => {
				return data;
			})
			.catch((err) => {
				console.log(err);
			});
	});
}

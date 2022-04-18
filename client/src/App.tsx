import {useState, useEffect} from "react";

import {requestApi} from "./service/service";

import "./App.css";

function App() {
	const [apiReq, setApiReq] = useState("");
	useEffect(() => {
		async function getData() {
			let data = await requestApi();
			setApiReq(data);
		}
		getData();
	}, []);

	return (
		<div className="App">
			<div className="App-card">{apiReq}</div>
		</div>
	);
}

export default App;

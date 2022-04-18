import {useEffect} from "react";

import {reqData} from "./service/service";

import "./App.css";

function App() {
	useEffect(() => {
		async function getData() {
			let data = await reqData();
			console.log(data);
		}
		getData();
	}, []);

	return <div className="App"></div>;
}

export default App;

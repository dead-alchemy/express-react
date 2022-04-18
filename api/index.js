const express = require("express");

require("dotenv").config({path: "../.env"});

const app = express();
const port = process.env["API_PORT"] || 8080;

app.get("/", (req, res) => {
	res.send("Hello from api-server");
});

app.listen(port, () => {
	console.log(`api-server listening at http://localhost:${port}`);
});

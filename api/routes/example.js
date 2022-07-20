const express = require("express");

const router = express.Router();

module.exports = router.get("/", (req, res) => {
	console.log("hello");
	res.send("Hello from api-server");
});

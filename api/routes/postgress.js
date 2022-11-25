const express = require("express");

const router = express.Router();

const {getTest} = require("../model/postgress");

module.exports = router.get("/", async (req, res) => {
	const data = await getTest();
	if (data.status === 200) {
		res.send(data);
	} else {
		res.status(500);
		res.send("There was an error");
	}
});

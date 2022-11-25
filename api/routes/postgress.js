const express = require("express");

const router = express.Router();

const {getTest} = require("../model/postgress");

module.exports = router.get("/", async (req, res) => {
	const data = await getTest();
	if (data.status === 200) {
		res.send(data);
	} else {
		// add some handling if we get an error back from our model.
		res.status(500);
		res.send("There was an error");
	}
});

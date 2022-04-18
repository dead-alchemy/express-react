const express = require("express");
var cors = require("cors");
require("dotenv").config({path: "../.env"});

const app = express();
app.use(cors());
const port = process.env["API_PORT"] || 8080;

var allowedOrigins = ["http://localhost:3000"];

app.use(
	cors({
		origin: function (origin, callback) {
			// allow requests with no origin
			// (like mobile apps or curl requests)
			if (!origin) return callback(null, true);
			if (allowedOrigins.indexOf(origin) === -1) {
				var msg =
					"The CORS policy for this site does not " +
					"allow access from the specified Origin.";
				return callback(new Error(msg), false);
			}
			return callback(null, true);
		},
	})
);

app.get("/", (req, res) => {
	res.send("Hello from api-server");
});

app.listen(port, () => {
	console.log(`api-server listening at http://localhost:${port}`);
});

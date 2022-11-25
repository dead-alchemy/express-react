const {pool} = require("../config/postgres");

const getTest = async () => {
	// pool.query("SELECT * FROM public.testing", (error, results) => {
	// 	if (error) {
	// 		return error;
	// 	}
	// 	return results.rows;
	// 	//response.status(200).json(results.rows);
	// });
	// pool.end();
	try {
		const res = await pool.query(`SELECT * FROM public.testing`);
		pool.end();
		return {
			data: res.rows,
			status: 200,
		};
	} catch (err) {
		return {
			data: err.stack,
			status: 500,
		};
	}
};

module.exports = {getTest};

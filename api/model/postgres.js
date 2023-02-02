const {pool} = require("../connectors/postgres");

const getTest = async () => {
	try {
		const res = await pool.query(`SELECT 'hello' as res `);
		pool.end();
		return {
			data: res.rows,
			status: 200,
		};
	} catch (err) {
		// send the error in case something happens.
		return {
			data: err.stack,
			status: 500,
		};
	}
};

module.exports = {getTest};

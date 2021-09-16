const express = require('express');

module.exports = (db, mg) => {
	const router = express.Router();

	// DB functions
	const searchGuests = mg.search(
		db,
		process.env.MONGO_DB,
		process.env.MONGO_COLLECTION
	);
	const findGuest = mg.findOne(
		db,
		process.env.MONGO_DB,
		process.env.MONGO_COLLECTION
	);

	// Autocomplete guests
	router.post('/guests/search', express.json(), async (req, res) => {
		try {
			// Get autocomplete result
			const result = await searchGuests(req.body.query);
			res.status(200).json(result);
		} catch (e) {
			console.log(e);
			res.status(500).json({ message: 'Internal Server Error!' });
		}
	});

	// Retrieve guest
	router.get('/guests/:guestId', async (req, res) => {
		try {
			const result = await findGuest(req.params.guestId);
			res.status(200).json(result);
		} catch (e) {
			console.log(e);
			res.status(500).json({ message: 'Internal Server Error!' });
		}
	});

	return router;
};

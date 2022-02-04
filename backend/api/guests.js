const express = require('express');
const twilio = require('twilio')(
	process.env.TWILIO_ACCOUNT_SID,
	process.env.TWILIO_AUTH_TOKEN
);

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
	const findTable = mg.find(
		db,
		process.env.MONGO_DB,
		process.env.MONGO_COLLECTION
	);

	// Autocomplete guests
	router.get('/guests/search', async (req, res) => {
		try {
			// Get autocomplete result
			const result = await searchGuests([req.query.q]);
			res.status(200).json(result);
		} catch (e) {
			console.log(e);
			res.status(500).json({ message: 'Internal Server Error!' });
		}
	});

	router.get('/guests/table', async (req, res) => {
		try {
			const result = await findTable(req.query.q);
			res.status(200).json(result);
		} catch (e) {
			console.log(e);
			res.status(500).json({ message: 'Internal Server Error!' });
		}
	});

	// Retrieve guest
	router.get('/guests/id/:guestId', async (req, res) => {
		try {
			const result = await findGuest(req.params.guestId);
			res.status(200).json(result);
		} catch (e) {
			console.log(e);
			res.status(500).json({ message: 'Internal Server Error!' });
		}
	});

	// router.get('/guests/alert', async (req, res) => {
	// 	try {
	// 		const result = await twilio.messages.create({
	// 			body: 'hello',
	// 			messagingServiceSid: process.env.TWILIO_MSG_SID,
	// 			to: '',
	// 		});
	// 		res.status(200).json(result);
	// 	} catch (e) {
	// 		console.log(e);
	// 		res.status(500).json({ message: 'Internal Server Error!' });
	// 	}
	// });

	return router;
};

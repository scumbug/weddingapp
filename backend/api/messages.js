const express = require('express');

module.exports = (db, mg) => {
	const router = express.Router();

	// TODO: Post message
	router.get('/messages', async (req, res) => {
		try {
			res.status(200).json({ message: 'Success' });
		} catch (e) {
			console.log(e);
			res.status(500).json({ message: 'Internal Server Error!' });
		}
	});

	// TODO: Get all messages
	router.get('/messages', async (req, res) => {
		try {
			res.status(200).json({ message: 'Success' });
		} catch (e) {
			console.log(e);
			res.status(500).json({ message: 'Internal Server Error!' });
		}
	});

	return router;
};

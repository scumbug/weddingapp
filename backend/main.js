const express = require('express');
const mg = require('./utils/mg');
const cors = require('cors');
require('dotenv').config();

// Setup config
const PORT = parseInt(process.argv[2]) || parseInt(process.env.PORT) || 3000;

// Init express instance
const app = express();

// Init DB
const db = mg.init(process.env.MONGO_URI);

// Declare routes
const guests = require('./api/guests')(db, mg);
const messages = require('./api/messages')(db, mg);

app.use(cors());

//
// Endpoints
//
app.use('/api', guests);
app.use('/api', messages);

// Mount static
app.use(express.static(`${__dirname}/frontend`));

// Start server
Promise.all([mg.check(db)]).then(() => {
	app.listen(PORT, () => {
		console.info(`Application started on port ${PORT} at ${new Date()}`);
	});
});

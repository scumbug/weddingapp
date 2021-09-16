//import libs
const { MongoClient, ObjectId } = require('mongodb');

//
// Helper Functions
//

/**
 * Init mongo client
 * @summary eg: mongodb://localhost:27017
 * @param {string} URI
 */
const init = (URI) => {
	return new MongoClient(URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	});
};

/**
 * check if Mongo is alive
 * @summary Promise.resolve() if successful, Promise.reject() when failed
 * @returns Promise
 */
const check = (mongo) => {
	return new Promise((resolve, reject) => {
		mongo
			.connect()
			.then((r) => {
				console.log('MongoDB is alive!');
				resolve();
			})
			.catch((e) => reject('Unable to connect to MongoDB'));
	});
};

/**
 * Insert document
 * @param {MongoClient} client
 * @param {string} db - MongoDB Database Name
 * @param {string} collection - MongoDB Collection Name
 */
const insertDoc = (client, db, collection) => {
	const closure = (doc) => {
		return client.db(db).collection(collection).insertOne(doc);
	};
	return closure;
};

/**
 * Search all fields
 * @param {MongoClient} client
 * @param {string} db - MongoDB Database Name
 * @param {string} collection - MongoDB Collection Name
 */
const search = (client, db, collection) => {
	const closure = async (query) => {
		const ptr = await client
			.db(db)
			.collection(collection)
			.aggregate(SEARCH_GUEST_PIPELINE(query))
			.toArray();
		return ptr;
	};
	return closure;
};

/**
 * Find document by id
 * @param {MongoClient} client
 * @param {string} db - MongoDB Database Name
 * @param {string} collection - MongoDB Collection Name
 */
const findOne = (client, db, collection) => {
	const closure = async (id) => {
		return await client
			.db(db)
			.collection(collection)
			.findOne({ _id: new ObjectId(id) });
	};
	return closure;
};

module.exports = {
	init,
	check,
	insertDoc,
	search,
	findOne,
};

const SEARCH_GUEST_PIPELINE = (query) => {
	return [
		{
			$search: {
				index: 'guestIndex',
				compound: {
					should: [
						{
							autocomplete: {
								query: query,
								path: 'nameEn',
							},
						},
						{
							autocomplete: {
								query: query,
								path: 'phone',
							},
						},
						{
							text: {
								query: query,
								path: 'nameZh',
							},
						},
					],
					minimumShouldMatch: 1,
				},
			},
		},
	];
};

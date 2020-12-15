const MongoClient = require('mongodb').MongoClient;
const url = process.env.MONGO_URL;


module.exports = async function() {
    let films = await getFilms();
    return films;
}

async function getFilms() {

	const client = new MongoClient(url, { useUnifiedTopology: true });
  	await client.connect();
  	const db = client.db('admin');
  	const films = db.collection('chatmessageslogs');

	const query = { "public": true };
	const filmArray = await films.find(query).toArray();
	await client.close();
	return filmArray;
}

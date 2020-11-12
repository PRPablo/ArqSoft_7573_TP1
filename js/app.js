const express = require('express');

const app = express();

const PORT = 3000;

const TIMEOUT = 5*1000;

const ID = Math.floor(Math.random() * 1000);

app.get('/', (req, res) => {

	res.status(200).send("NodeJS Ping... " + ID);
});


app.get('/sleep', (req, res) => {

	setTimeout(() => {
		res.status(200).send("NodeJS Sleep... " + ID);
	}, TIMEOUT);
});


app.get('/heavy', (req, res) => {

	let start = new Date();

	while (new Date() - start <= TIMEOUT) {

	}

	res.status(200).send("NodeJS Heavy... " + ID);
});


app.listen(PORT, () => {

	console.log("NodeJS escuchando en el puerto: " + PORT);
});

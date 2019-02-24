const express = require('express');
const scraper = require('./scraper');

// Create an app
const app = express();

app.get('/', (req, res) => {
	res.json({
		message: 'Scraping is Fun!'
	});
});

app.get('/search/:title', (req, res) => {
	scraper.searchMovies(req.params.title)
	.then(movies => {
		res.json(movies);
	});
}); 

// Listen on port
const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log(`Listening on ${port}`);
});

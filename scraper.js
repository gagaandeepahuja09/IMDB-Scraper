const fetch = require('node-fetch');
const cheerio = require('cheerio');

const url = 'https://www.imdb.com/find?ref_=nv_sr_fn&s=all&q=star+wars';

function search(searchTerm) {
	return fetch(`${url}${searchTerm}`)
	.then(response => response.text())
	.then(body => {
	// console.log(body);
	const movies = [];
	const $ = cheerio.load(body);
	$('.findResult').each(function(i, element) {
		const $element = $(element);
		const $image = $element.find('td a img');
		const $title = $element.find('td.result_text a');
		const movie = {
			image: $image.attr('src'),
			title: $title.text(),
		}
		movies.push(movie);
		// console.log($element.text());
		// console.log($image.attr('src'));
	});
	return movies;
	// console.log(movies);
});
}

module.exports = {
	searchMovies
};
const fetch = require('node-fetch');
const cheerio = require('cheerio');

const url = 'https://www.imdb.com/find?ref_=nv_sr_fn&s=all&q=star+wars';

function search(searchTerm) {
	return fetch(`${url}${searchTerm}`)
	.then(response => response.text())
}

search('star wars')
.then(body => {
	// console.log(body);
	const $ = cheerio.load(body);
	$('.findResult').each(function(i, element) {
		const $element = $(element);
		const $image = $element.find('td a img');
		// console.log($element.text());
		console.log($image.attr('src'));
	});
});
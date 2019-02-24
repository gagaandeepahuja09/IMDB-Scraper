const fetch = require('node-fetch');

const url = 'https://www.imdb.com/find?ref_=nv_sr_fn&s=all&q=star+wars';

function search(searchTerm) {
	return fetch(`${url}${searchTerm}`)
	.then(response => response.text())
}

search('star wars')
.then(body => {
	console.log(body);
});
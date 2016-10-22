var request = require("request"), cheerio = require("cheerio");

exports.scrape = function(url) {
	request(url, function (error, response, body) {
		if (!error) {
			var $ = cheerio.load(body);
			var content = $('div[class="rich_text_formatting"]').find('p').first().text();
			console.log(content);

		} else {
			console.log("We’ve encountered an error: " + error);
		}
	});
}


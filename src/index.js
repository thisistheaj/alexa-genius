/**
 * Created by me on 3/16/16.
 */
var geniusWrapi = require('genius-wrapi');
var client = new geniusWrapi("Bg0VtbkDCs6ryNbdEQyStts20hFUuTKHEaNhj0WRVJGnGrJJ4s4qoIFeyymoIt1S");
var request = require("request"), cheerio = require("cheerio");

//Example
// scrapper.scrape("http://genius.com/Desiigner-panda-lyrics");

exports.handler = function( event, context ) {

    client.search(
        {
            q:'King Kunta'
        },
        function(err, data) {
            if (!err) {
                var url = data.response.hits[0].result.url;
                console.log(url);
                request(url, function (error, response, body) {
                    if (!error) {
                        var $ = cheerio.load(body);
                        var content = $('div[class="rich_text_formatting"]').find('p').first().text();
                        console.log(content);
                        var response = {
                            outputSpeech: {
                                type: "PlainText",
                                text: content
                            },
                            shouldEndSession: true
                        };
                        context.succeed( { response: response } );
                    } else {
                        console.log("We’ve encountered an error: " + error);
                    }
                });
            }
        }
    );
};
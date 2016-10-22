/**
 * Created by me on 3/16/16.
 */
var geniusWrapi = require('genius-wrapi');
var client = new geniusWrapi("Bg0VtbkDCs6ryNbdEQyStts20hFUuTKHEaNhj0WRVJGnGrJJ4s4qoIFeyymoIt1S");
var scrapper = require("./scrape.js");

//Example
// scrapper.scrape("http://genius.com/Desiigner-panda-lyrics");

client.search(
    {
        q:'Kendrick Lamar'
    },
    function(err, data) {
        if (!err) {
            console.log(data.response.hits[0].result.url);
            scrapper.scrape(data.response.hits[0].result.url);

        }
    }
);

exports.handler = function( event, context ) {

    var response = {
        outputSpeech: {
            type: "PlainText",
            text: "Hello Cli!"
        },
        shouldEndSession: true
    };

    context.succeed( { response: response } );

};
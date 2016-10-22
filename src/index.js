/**
 * Created by me on 3/16/16.
 */

var scrapper = require("./scrape.js");

//Example
scrapper.scrape("http://genius.com/Kendrick-lamar-swimming-pools-drank-lyrics");

exports.handler = function( event, context ) {

    var response = {
        outputSpeech: {
            type: "PlainText",
            text: "Hello World!"
        },
        shouldEndSession: true
    };

    context.succeed( { response: response } );

};
/*************************************************************

You should implement your request handler function in this file.

requestHandler is already getting passed to http.createServer()
in basic-server.js, but it won't work as is.

You'll have to figure out a way to export this function from
this file and include it in basic-server.js so that it actually works.

*Hint* Check out the node module documentation at http://nodejs.org/api/modules.html.

**************************************************************/
var utils = require('./utils');


module.exports = function(request, response) {
  // Request and Response come from node's http module.
  //
  // They include information about both the incoming request, such as
  // headers and URL, and about the outgoing response, such as its status
  // and content.
  //
  // Documentation for both request and response can be found in the HTTP section at
  // http://nodejs.org/documentation/api/

  // Do some basic logging.
  //
  // Adding more logging to your server can be an easy way to get passive
  // debugging help, but you should always be careful about leaving stray
  // console.logs in your code.
  console.log("Serving request type " + request.method + " for url " + request.url);
  //console.log(request);
  //   request({
  //     url: '127.0.0.1:3000/classes/messages', //URL to hit
  //     qs: {from: 'blog example', time: +new Date()}, //Query string data
  //     method: 'GET', //Specify the method
  //     headers: { //We can define headers too
  //         'Content-Type': 'MyContentType',
  //         'Custom-Header': 'Custom Value'
  //     }
  // }, function(error, response, body){
  //     if(error) {
  //         console.log(error);
  //     } else {
  //         console.log(response.statusCode, body);
  //     }
  // });
  // var data = {
  //   results: []
  // };

  // The outgoing status.
  

  // See the note below about CORS headers.
  

  // Tell the client we are sending them plain text.
  //
  // You will need to change this if you are sending something
  // other than plain text, like JSON or HTML.
  
  // check back here to see if this has an effect later

  // .writeHead() writes to the request line and headers of the response,
  // which includes the status and all headers.

  // Make sure to always call response.end() - Node may not send
  // anything back to the client until you do. The string you pass to
  // response.end() will be the body of the response - i.e. what shows
  // up in the browser.
  //
  // Calling .end "flushes" the response's internal buffer, forcing
  // node to actually send all the data over to the client.
  
 
  if (request.method === 'POST') {
    //response.end(JSON.stringify(data));
    console.log(request.method);
    utils.handlePost(request, function(message) {
      utils.messages.push(message);
      message.objectId = ++utils.objectId;
      utils.sendResponse(response, {objectId: 1}, 201);
    });
  } else if (request.method === 'GET') {
      utils.sendResponse(response, {results: utils.messages});
  } else if (request.method === 'OPTIONS') {
      utils.sendResponse(response, null);
  } 
  //else {
  //  sendResponse(response, "Not found", 404);
  // }

};

// These headers will allow Cross-Origin Resource Sharing (CORS).
// This code allows this server to talk to websites that
// are on different domains, for instance, your chat client.
//
// Your chat client is running from a url like file://your/chat/client/index.html,
// which is considered a different domain.
//
// Another way to get around this restriction is to serve you chat
// client from this domain by setting up static file serving.




var headers = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10,
  "Content-Type": "application/json" // Seconds.
};

var sendResponse = function(response, data, statusCode) {
  statusCode = statusCode || 200;
  response.writeHead(statusCode, headers);
  response.end(JSON.stringify(data));
};


var objectId = 1;
var messages = [];

var handlePost = function(request, callback) {
    var requestBody = '';
    request.on('data', function(data) {
      requestBody += data;
    });
    request.on('end', function() {
      callback(JSON.parse(requestBody));
    });
    request.on('error', function(error) {
      console.log(error);
    });
  };
 
module.exports = {
  handlePost: handlePost,
  sendResponse: sendResponse,
  objectId: objectId,
  messages: messages,
  headers: headers
};

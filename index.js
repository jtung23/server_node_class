var http = require('http');

var serverA = http.createServer(function(request, response) {
	response.writeHead(200, 
		{
			"Content-Type": "text/html",
			"Hello": "World"
		});
	response.end("<h1>You are a good person</h1>");
});

var serverB= http.createServer(function(request, response) {
	response.writeHead(200,
	{
		"Content-Type": "text/html"
	});
	response.end('<h1>You are a bad person</h1>')
});

serverA.listen(7000, function(error) {
	if (error) throw error;
	console.log('listening to port 7000');
})

serverB.listen(7500, function(error) {
	if (error) throw error;
	console.log('listening to port 7500');
})
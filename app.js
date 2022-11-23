const http = require("http");
const fs = require("fs");
const url = require("url");

function requestHandler(request, response) {

    let objurl = url.parse(request.url, "false");
    const path = objurl.pathname;
    switch (path) {
        case '/':
            fs.readFile('index.html', function (error, data) {
                if (error) {
                    response.writeHead(404);
                }
                else {
                    response.writeHead(200, { "content-Type": "text/html" });
                    response.write(data, "utf8");
                }
                response.end();
            });
            break;

        case '/css':
            fs.readFile('css/style.css', function (error, data) {
                if (error) {
                    response.writeHead(404);
                }
                else {
                    response.writeHead(200, { "content-Type": "text/css" });
                    response.write(data, "utf8");
                }
                response.end();
            });
            break;  
    }
}

const server = http.createServer(requestHandler);
server.listen(3000);
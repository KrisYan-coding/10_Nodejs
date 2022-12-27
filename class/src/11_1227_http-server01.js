
const http = require('http');

const server = http.createServer((request, response) => {
    // 回應的檔頭--
    response.writeHead(200, {
        'Content-Type': 'text/html'
        // 'Content-Type': 'text/text'
    });

    // 回應的資料--
    response.end(`
        <h2>Hello111</h2>
        <p>${request.url}</p>`)
});

server.listen(3000);
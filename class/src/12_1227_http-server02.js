
const http = require('http');
const fs = require('fs/promises'); //使用 Promise API

const server = http.createServer(async (req, res) => {
    const result = await fs.writeFile(
        __dirname + '/header01.txt',
        JSON.stringify(req.headers, null, 4)
    );

    res.end(`<h2>result: ${result}</h2>`);
});

server.listen(3000);
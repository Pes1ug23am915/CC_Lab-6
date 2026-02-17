const http = require('http');

const server = http.createServer((req, res) => {
    res.end(`Served by backend: ${process.env.HOSTNAME}\n`);
});

server.listen(8080, () => {
    console.log("Server running on port 8080");
});

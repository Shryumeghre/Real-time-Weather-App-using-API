import http from 'http';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.end("Hello from home side");
    } else if (req.url === "/about") {
        res.end("Hello from about side");
    } else if (req.url === "/userapi") {
        fs.readFile(`${__dirname}/userapi.json`, "utf-8", (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end("Internal Server Error");
                console.error(err);
                return;
            }
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(data);
            console.log(data);
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end("404 Not Found");
    }
});

server.listen(3000, "127.0.0.1", () => {
    console.log("Listening to port number 3000");
});

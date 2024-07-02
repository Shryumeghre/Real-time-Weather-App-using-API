import fs from "fs";
import http from "http";
const server = http.createServer();
const rstream1 = fs.createReadStream("input.txt");

server.on("request", (req, res) =>{
    rstream1.on("data", (chunkdata) =>{
        res.write(chunkdata);
    });

    rstream1.on("end", () => {
        res.end();
    });

    rstream1.on("error", (err) => {
        console.log(err);
        res.end("file not found");
    });
});

server.listen(3000, "127.0.0.1");
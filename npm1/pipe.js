import fs from "fs";
import http from "http";

const server = http.createServer();
server.on("request", (req, res)=>{

    const rstream = fs.createReadStream("input.txt");
    rstream.pipe(res);
});
server.listen(3000, "127.0.0.1");
import express from "express";
import sendMail from "./sendMail.js"; // Use import instead of require

const app = express();
const PORT = 5000;

app.get("/", (req, res) => {
    res.send("I am server");
});

app.get("/sendemail", sendMail);

const start = async () => {
    try {
        app.listen(PORT, () => {
            console.log(`I am live on port no. ${PORT}`);
        });
    } catch (error) {
        console.error(error);
    }
};

start();

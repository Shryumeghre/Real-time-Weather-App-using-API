const express = require("express");
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    // res.send("<h1> Welcome to my home page</h1>");
    res.write("<h1>welcome to my home page</h1>");
    res.write("<h1>Again welcome to my home page</h1>");
    res.send();
});

app.get('/about', (req, res) => {
    res.sendStatus(200).send("Welcome to my about page");
});

app.get('/contact', (req, res) => {
    res.send("Welcome to contact page");
});

app.get('/temp', (req, res) => {
    // res.send("Welcome to temp page");
    // res.send({
    //     id: 1,
    //     name: "Shryu",
    // });

    //array of an object
    res.send([{
            id: 1,
            name: "Shryu",
        },]);
});

app.listen(port, () => {
    console.log(`listening to port no. ${port}`);
});
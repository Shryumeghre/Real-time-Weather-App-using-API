const express = require("express");
const path = require("path");
const app = express();
const port = 8000;
const hbs = require("hbs");


//built in middleware
// console.log(path.join(__dirname, "../public"));

const staticPath = path.join(__dirname, "../public");
const templatePath = path.join(__dirname, "../templates");
const partialPath = path.join(__dirname, "../templates/partials");
app.set('view engine', "hbs");
app.set('views', templatePath);
hbs.registerPartials(partialPath);

// app.use(express.static(staticPath));

// template engine route
app.get("/",(req, res) => {
    res.render('index', {
        Name : "shryu",
    });
});


app.get("/", (req, res) => {
    res.send('hlw from express server');
});

app.listen(port, () =>{
    console.log(`listening to port ${port}`);
});











// const express = require("express");
// const app = express();
// const port = 3000;
// //built in middleware
// console.log(path.join(__dirname, "../public"));
// app.use(express.static(path));


// app.get('/',(req, res) => {
//     res.send("Hlww from express server");
// });

// app.listen(port, () =>{
//     console.log(`listening to port ${port}`);
// });

// relative path ../
// absolute path directly deals with route folder i.e. __dirname







// const path = require('path');
// const express = require('express');
// const app = express();

// // console.log(__dirname);
// // console.log(path.join(__dirname, "../public"));

// const staticPath = path.join(__dirname, "../public");

// // built-in middleware
// app.use(express.static(staticPath));

// app.get("/", (req, res) => {
//     res.send("hlwwww")
// });

// app.listen(3000,() => {
//     console.log("Listening to port at 3000");
// });


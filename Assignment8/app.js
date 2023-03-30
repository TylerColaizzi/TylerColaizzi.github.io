'use strict';
const express = require('express');
const app = express();


// define all endpoints here

// Exercise 1
app.get("/math/circle/:r", function (req, res) {
    let radius = req.params.r;
    let area = (Math.PI * (radius * radius)).toFixed(2);
    let circumference = (Math.PI * 2 * radius).toFixed(2);

    let jInfo = { "area": area, "circumference": circumference}

    console.log(typeof (jInfo));
    console.log(jInfo);
    res.send(jInfo);
});

// Exercise 2
app.get("/hello/name", function (req, res) {
    if(req.query.first == undefined && req.query.last == undefined) {
        res.status(400).json({error: "Missing Required Get parameters: first, last"});
        return;
    }
    if(req.query.first == undefined) {
        res.status(400).json({error: "Missing Required GET parameter: first"});
        return;
    }
    if(req.query.first == undefined) {
        res.status(400).json({error: "Missing Required GET parameter: last"});
        return;
    }
    

    res.send('Hello ' + req.query.first + ' ' + req.query.last);
});

app.use(express.static('public'));
const PORT = process.env.PORT || 8000;
app.listen(PORT);

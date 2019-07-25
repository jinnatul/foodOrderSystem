const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongo = require('mongodb').MongoClient;

app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static('./'))

/* Port Connection */
app.get("/", (req, res)=> {
    res.send("Connected");
});

/* Port Connection */
app.listen(3005, ()=> {
    console.log("yesssss");
});

var url = "mongodb://localhost:27017/";

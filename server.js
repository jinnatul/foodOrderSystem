const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongo = require('mongodb').MongoClient;
const passwordHash = require('password-hash');

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

app.post('/', (req, res) =>{

    mongo.connect(url, function(err, db){
        if(err) throw err;

        var dbName = db.db("food_system");
        var hashedPass = passwordHash.generate(req.body.__password);

        var item = {
            name: req.body.__name,
            password: hashedPass,
            email: req.body.__email
        };

        dbName.collection("customers").insertOne(item, (err, res)=> {
            if(err) throw err;
            else console.log("Add One");
            db.close();
        });
    });
});
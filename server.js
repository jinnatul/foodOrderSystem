const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongo = require('mongodb').MongoClient;
const passwordHash = require('password-hash');

app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static('./'))
app.use(express.static('./front_end'))

/* Port Connection */
app.get("/", (req, res)=> {
    res.send("Connected");
});

/* Port Connection */
app.listen(3005, ()=> {
    console.log("yesssss");
});

//var loginController = require('./back_end/loginController');

/* Insert Registration Information */
var url = "mongodb://localhost:27017/";


app.post('/sign_up', (req, res) =>{

    mongo.connect(url, function(err, db){
        if(err) throw err;

        var dbName = db.db("food_system");
        var hashedPass = passwordHash.generate(req.body.__password);

        var item = {
            name: req.body.__name,
            email: req.body.__email,
            password: hashedPass,
            phone: req.body.__phone
        };

        dbName.collection("customers").insertOne(item, (err, res)=> {
            if (err) throw err; 
            console.log("Record inserted Successfully"); 
            db.close();       
        });
    });
    return res.redirect('login.html');
});


app.post('/', (req, res) =>{
   //var email = req.body.__email;
   //var pass = req.body.__password;
   
   mongo.connect(url, function(err, db){
    if(err) throw err;

    var dbName = db.db("food_system");
    //var hashedPass = passwordHash.generate(req.body.__password);
    
    dbName.collection('customers').findOne({ email: req.body.__email}, function(err, user) {
        console.log('User found ');
        // In case the user not found
        if(passwordHash.verify(req.body.__password, user.password)){
            //res.send("Yes");
            res.redirect('user.html')
        }  
        else{
            res.send("NO " + " " + req.body.__password + " " + user.password);
        }
    });

   });
});
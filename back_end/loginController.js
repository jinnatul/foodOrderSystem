var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended:false});
var MongoClient = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/food_system';

module.exports = (function(app){
 
// Login TO DB
   app.post('/demo',urlencodedParser,function(req,res){

   MongoClient.connect(url, function(err, db) {
   
    db.collection('customers').findOne({ email: req.body.__email}, function(err, user) {
            var hashedPass = passwordHash.generate(req.body.__password);
            if(user ===null){
               alert("fail");
            }
            else if (user.email === req.body.__email && user.pass === hashedPass){
                alert("Success");
            }
            else {
                alert("fail");
            res.end("Login invalid");
          }
   });
 });
 });
});
module.exports = function(app, bodyParser, path, __User) {

    app.get('/User_info_admin', function(req, res){
        __User.find({}, function(err,data){
          if(err){
            console.log(err);
          }else{
            res.render('User_info_admin',{data:data});
          }
        })
        
      });

}
# Food-order-system

## Back End Start

### Install nodejs packes
- npm init //Create package       
- npm i express  
- npm i body-parser //Input get from
- npm i nodemon  // Node server
- npm i mongodb  //MongoDb
- npm i password-hash  //Password Hash
- npm i passport //authentication
- npm i flash
- npm i path
- npm i cookie-Parser
- npm i morgan
- npm i connect-flash
- npm i express-session
- npm i multer


### Add CSS/JS later using EJS with nodejs/express
- server.js file add app.use(express.static(__dirname + '/file name'));
- Index.ejs file need to add <script src="/javascripts/jquery.js"></script>    

## Directory access
- app.use(express.static(__dirname + '/authentication/front_end')); //Access javascript file
- app.use(express.static(__dirname + '/admin_panel')); 
- app.use(express.static(__dirname + '/user_panel'));
- app.use(express.static(__dirname + '/home')); 
- app.use(express.static(__dirname + '/uploads')); 
- app.use(express.static(__dirname + '/authentication'))
- app.set('views', path.join(__dirname, 'views'));

### Collections
- var Detail = require('./authentication/app/models/foodDB'); //FoodInfo
- var __User = require('./authentication/app/models/userDB'); //CustomerInfo
- var __Admin = require('./authentication/app/models/adminDB'); //AdminInfo

// Our Database
var configDB = require('./authentication/config/database.js');

# Add Header
![11](https://user-images.githubusercontent.com/31995155/61857629-54cddf00-aee6-11e9-889f-511581b70b32.png)

# Add Section Features
![add choose](https://user-images.githubusercontent.com/31995155/59962095-9abc0f80-9502-11e9-8a0f-7fde8535bf43.png)

# Add Meals Items
![add meals](https://user-images.githubusercontent.com/31995155/59966243-2baedd00-953b-11e9-83b0-dd6ef9924c00.png)

# Add Working Steps
![add work steps](https://user-images.githubusercontent.com/31995155/59967765-ae8e6280-9550-11e9-8fb6-f06673f1d1cc.png)

# Add Cities
![add cities](https://user-images.githubusercontent.com/31995155/59976785-e9dd6f80-95ea-11e9-904a-37564f26952e.png)

# Add top customer revews
![add top customer reviews](https://user-images.githubusercontent.com/31995155/59979282-7a29ad80-9607-11e9-8bce-b7d3571bbd1d.png)

# Add signup package
![2](https://user-images.githubusercontent.com/31995155/61588605-68b0d280-abc0-11e9-8d30-992205368676.png)

# Add contract
![add commen](https://user-images.githubusercontent.com/31995155/59981740-d56c9780-9629-11e9-9d7b-adc8e210cfb7.png)

# Add footer
![add footer](https://user-images.githubusercontent.com/31995155/59981745-eddcb200-9629-11e9-8ee2-c6452d7952a9.png)

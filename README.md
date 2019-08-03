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

### Include packes
- var express = require('express');
- var app = express();
- var port = process.env.PORT || 2223;
- var mongoose = require('mongoose');
- var passport = require('passport');
- var flash = require('connect-flash');
- var path = require('path');
- var morgan = require('morgan');
- var cookieParser = require('cookie-parser');
- var bodyParser = require('body-parser');
- var session = require('express-session');
- var multer = require('multer');


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

## Add Header
![11](https://user-images.githubusercontent.com/31995155/61857629-54cddf00-aee6-11e9-889f-511581b70b32.png)

## Add Section Features
![add choose](https://user-images.githubusercontent.com/31995155/59962095-9abc0f80-9502-11e9-8a0f-7fde8535bf43.png)

## Add Meals Items
![add meals](https://user-images.githubusercontent.com/31995155/59966243-2baedd00-953b-11e9-83b0-dd6ef9924c00.png)

## Add Working Steps
![add work steps](https://user-images.githubusercontent.com/31995155/59967765-ae8e6280-9550-11e9-8fb6-f06673f1d1cc.png)

## Add Cities
![add cities](https://user-images.githubusercontent.com/31995155/59976785-e9dd6f80-95ea-11e9-904a-37564f26952e.png)

## Add top customer revews
![add top customer reviews](https://user-images.githubusercontent.com/31995155/59979282-7a29ad80-9607-11e9-8bce-b7d3571bbd1d.png)

## Add contract
![add commen](https://user-images.githubusercontent.com/31995155/59981740-d56c9780-9629-11e9-9d7b-adc8e210cfb7.png)

## Add footer
![add footer](https://user-images.githubusercontent.com/31995155/59981745-eddcb200-9629-11e9-8ee2-c6452d7952a9.png)


# Backend ( Admin & user panel )
### Authentication user
![1](https://user-images.githubusercontent.com/31995155/62408784-ccd78b80-b5ef-11e9-8f51-88dcb7be382d.png)

### Login Admin
![2](https://user-images.githubusercontent.com/31995155/62408785-ce08b880-b5ef-11e9-8977-a3f6a9ad2ba7.png)

### Registration Admin
![3](https://user-images.githubusercontent.com/31995155/62408786-cf39e580-b5ef-11e9-889e-ee1ae0d26b5d.png)

### Admin panel
![4](https://user-images.githubusercontent.com/31995155/62408787-d06b1280-b5ef-11e9-8b7c-b9b71fe44082.png)

### Add Foods
![5](https://user-images.githubusercontent.com/31995155/62408788-d19c3f80-b5ef-11e9-9f43-f16d00a6acc8.png)

### Show foods Admin
![6](https://user-images.githubusercontent.com/31995155/62408790-d2cd6c80-b5ef-11e9-8946-759d00d1c2a7.png)

### Register User information
![7](https://user-images.githubusercontent.com/31995155/62408791-db25a780-b5ef-11e9-888d-6108abe391bd.png)

### Login User / Customers
![8](https://user-images.githubusercontent.com/31995155/62408796-df51c500-b5ef-11e9-93b1-ee842da59b1f.png)

### User Panel
![9](https://user-images.githubusercontent.com/31995155/62408799-e24cb580-b5ef-11e9-8610-600189036ef5.png)

### User show foods & add cards
![10](https://user-images.githubusercontent.com/31995155/62408802-e4167900-b5ef-11e9-89c2-de993698cd6c.png)

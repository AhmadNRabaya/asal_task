
// require express class
const express = require('express');


// require body parser for parsing html form elements
const bodyParser = require('body-parser');



//instance object from express
const app = express();



const User = require('./classes/User.js');
const UserModel = require('./classes/UserModel.js');
const MongoStorage = require('./classes/MongoStorage.js');



var userModel = new UserModel();
var MStorage = new MongoStorage();
userModel.storage=MStorage;



//require mongodb for connect to it
const MongoClient = require('mongodb');

// database path in mongodb
const DATABASE_PATH = 'mongodb://root:root@ds151018.mlab.com:51018/fb_viewer';


var db;






//begin generating the HTML "rendering"
app.set('view engine','ejs');

app.use('/', express.static(__dirname + '/public'));

MongoClient.connect(DATABASE_PATH,function(err,database){
    if(err){
        console.log(err);
    }
    // instance object from database
    db = database;



    // parse elements from html from
    app.use(bodyParser.urlencoded({extends:true}));

    // listen to port 3000
    app.listen(process.env.PORT || 5000,function(){
        console.log('listening on 3000');
    });

    //event on / path
    app.get('/',function(req,res){



            db.collection('user').find().toArray(function(err,result) {
                if (err) {
                    console.log(err);
                }
                res.render('index.ejs',{user:result});
            });


        });

    //event add user
    app.post('/index',function(req,res){
        console.log(req.body);
        let user = new User();
        user.setProps(req.body);
        userModel.addUser(user);
        res.redirect('/index');

    });

    //event update user
    app.put('/index', function (req,res) {


    });






    app.get('/profile',function(req,res){

        res.render('profile.ejs');
    });

});



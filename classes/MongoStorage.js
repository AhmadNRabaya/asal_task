'use strict';

//require mongodb for connect to it
const MongoClient = require('mongodb');

// database path in mongodb
const DATABASE_PATH = 'mongodb://root:root@ds151018.mlab.com:51018/fb_viewer';


var db;

module.exports = class MongoStorage{

    constructor(){
        //connect to database
        MongoClient.connect(DATABASE_PATH,function(err,database){
            if(err){
                console.log(err);
            }
            // instance object from database
            db = database;
        });

    }

    insertEntry(collection, data){
        db.collection(collection).save(data , function(err,result){
            if(err){
                throw new Error(err);
            }
            console.log('saved to DataBase');

        });
    };


    selectAllEntries(collection){
        /*
        *some problem happened when return data I don't know why :P
        */

        let data = db.collection(collection).find().toArray(function(err,result) {
            if (err) {
                console.log(err);
            }
            return result;
        });
        return data;
    };

};




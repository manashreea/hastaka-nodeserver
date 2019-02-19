'use-strict'
const mongoClient = require('mongodb').MongoClient;
const mongoAPIUrl = 'mongodb://admin:admin@mancluster-shard-00-00-lhss4.mongodb.net:27017,mancluster-shard-00-01-lhss4.mongodb.net:27017,mancluster-shard-00-02-lhss4.mongodb.net:27017/demodb?ssl=true&replicaSet=ManCluster-shard-0&authSource=admin&retryWrites=true'; //'mongodb://localhost:27017/mydb';
var mdb = null;

class dbconnect{
    constructor (){
        this.self = this;
    }

    getConnect(){
        mongoClient.connect(mongoAPIUrl,{useNewUrlParser: true})
        .then(function(mongoDB,merr){
            if(merr){
                console.log('Error in to connect database >>>> ',merr);
                return;
            }
            console.log('Database connected!! ');
            mdb = mongoDB.db("hastakacoll");
        });
    }

    get getDB(){
        console.log('Database Details Collection !!', mdb);
        return mdb;
    }

    // IsConnected(){
    //     if(this.mongoDB != null){
    //         return true; 
    //     }
    //     if(this.mongoDB.IsConnected){
    //         return true;
    //     }
    //     return false;
    // }
}

module.exports = dbconnect;
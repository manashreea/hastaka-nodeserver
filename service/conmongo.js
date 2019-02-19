'use-strict'
const mongoclient = require('mongodb').MongoClient;
const assert = require('assert');
const mongoURL = 'mongodb://admin:admin@mancluster-shard-00-00-lhss4.mongodb.net:27017,mancluster-shard-00-01-lhss4.mongodb.net:27017,mancluster-shard-00-02-lhss4.mongodb.net:27017/demodb?ssl=true&replicaSet=ManCluster-shard-0&authSource=admin&retryWrites=true';

module.exports = {
    connect : async() => (
        client = await(() => (new Promise((resolve,reject)=>
        (
            mongoclient.connect(mongoURL,{useNewUrlParser: true},
                (err,client) => {
                    assert.equal(null,err);
                    resolve(client);
                })
        )
    )))()),
    
    close:async(client) => {
        client.close();
        return true;
    }     
};
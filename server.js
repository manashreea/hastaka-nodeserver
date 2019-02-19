// const jsonServer = require('json-server');
// const server = jsonServer.create();
// const router = jsonServer.router('db.json');
// const middleware = jsonServer.defaults();

const express = require('express');
const app = express(); 
const port = process.env.port || 5001;

app.disable('x-powered-by');

const bodyParser = require('body-parser');
const compression = require('compression');
const jsonParser =bodyParser.json({limit:'10mb'});
const urlEncoded = bodyParser.urlencoded({limit:'10mb',extended:true});
const cors = require('cors');

app.use(compression());
app.use(jsonParser  );
app.use(urlEncoded );
app.use(cors());

// server.use(middleware);
// server.use(router);
//var dbConnect = require('./service/dbconn');
var routerAPI = require('./router.js');
app.use('/API',routerAPI);

// app.use('/',function(req,res){
//     console.log('App Started DB!!!!');
//     //res.send('App Started DB!!!!');
// })

app.use('/*',function (req, res, next) {
    res.header("Access-Control-Allow-Origin", 'true');
    res.header("Access-Control-Allow-Headers", "Origin,Accept, Content-Type, X-Requested-With,Access-Control-*,Cache-Control, username,userpassword,Pragma, Authorization,X-PINGOTHER, query");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST,DELETE");
    next();
});

require('events').EventEmitter.defaultMaxListeners = Infinity;

var server = app.listen(port,function(req,res){
    // var newCon = new dbConnect();
    // newCon.getConnect();
    // console.log('newCon newCon',newCon.getDB);
    console.log("json Server listening on port >> " + port);
});

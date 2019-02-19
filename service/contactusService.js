const conmongo = require('./conmongo.js');
const prmContactUs = require('./promises/prmContactUs.js');

module.exports = ({
    getContactUsDetails : (async(req,res,next) => {
        try{
            //connect to mongo, return client
            const conn = await conmongo.connect();

            //await my promise to be resolved from prmContactUs.js
            const data = await prmContactUs.getContactUsDetails(conn);

            //then close client and resolve API request
            conmongo.close(conn);

            //console.log(data,'>>data>>data>>data>>data');

            (typeof(data) === undefined) 
            ? res.send({success : false, data : [], message:'Invalid data or no data' })
            : res.send({success : true, data : JSON.stringify(data), message:'Data retrieved!!!' })
            
        }
        catch(e){
            next(e);
        }
    }),

    saveContactUsDetails : ((req,res,next) => {
        let dataInput = req.body;
        let josninput = {};

        if(typeof(dataInput) != undefined ){
            console.log(typeof(dataInput),'tyoeifdataInout!!!!!!!',dataInput);
            josninput = dataInput;
        }
        
        // josninput = { 'firstname' : 'Vidhisha',
        // 'lastname': 'Kumar',
        // 'address': 'Indapur',
        // 'contact': '56895256',
        // 'country': 'Indiase',
        // 'postalcode': '456856',
        // 'email': 'vidhis@abc.com',
        // 'remarks': 'manualtest' }

        //connect to mongo, return client
        //using promise with then() command flow instead of await
        conmongo.connect()
        .then(client => {
            prmContactUs.saveContactUsDetails(client,josninput)
            .then(data => {
                (typeof(data) === undefined) 
                ? res.send({success : false, data : [], message:'Invalid data or no data' })
                : res.send({success : true, data : data, message:'Data saved done!!! ' })                                
            })
            conmongo.close(client);
        })
        .catch(err =>
        {
            console.log(err);
        });
    })
});

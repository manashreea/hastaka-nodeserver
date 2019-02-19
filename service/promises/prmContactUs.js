
module.exports = {
    getContactUsDetails : (client) => (
        new Promise((resolved,rejected) => {
            client
            .db('hastakacoll')
            .collection('users')
            .find()
            .project({
                firstname: 1,
                lastname:1,
                address:1,
                contact:1,
                country:1,
                postalcode:1,
                email:1,
                remarks:1
            })
            .toArray((err,data) => {
                (err) ? rejected({error: 'no data'}) : resolved(data)
            });
        })
    ),

    saveContactUsDetails : (client,contactdata) => (
        new Promise((resolved,rejected) => {
            //console.log( 'contactdata>>contactdata>>contactdata',contactdata);

            client
            .db('hastakacoll')
            .collection('users')
            //.remove({'firstname': null,'lastname': null});
            .insertOne({
                'firstname' : contactdata.firstname,
                'lastname': contactdata.lastname,
                'address': contactdata.address,
                'contact': contactdata.contact,
                'country': contactdata.country,
                'city': contactdata.city,
                'postalcode': contactdata.postalcode,
                'email': contactdata.email,
                'remarks': contactdata.remarks
            },
            (err,result) => {
                (err) ? rejected({error: 'error in save data'}) : resolved(result)
            });
        })
    ),
};
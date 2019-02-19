const contactusService = require('../service/contactusService.js');

class contactusController{
    constructor(){
        this.self = this;
    }

    getContactUsDetails(req,res){
        contactusService.getContactUsDetails(req,res);
    }

    saveContactUsDetails(req,res){
        //console.log(req.body,'req.body>>req.body>>req.body>>req.body',JSON.stringify(req.body));
        contactusService.saveContactUsDetails(req,res);
    }
}

module.exports = contactusController;
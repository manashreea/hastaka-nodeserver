const express = require('express');
const routerAPI = express.Router();

let contactusController = require('./controller/contactusController.js');
let objContactUs = new contactusController(this);

routerAPI.get('/getContactUsDetails',objContactUs.getContactUsDetails);

routerAPI.post('/saveContactUsDetails',objContactUs.saveContactUsDetails);

module.exports = routerAPI;

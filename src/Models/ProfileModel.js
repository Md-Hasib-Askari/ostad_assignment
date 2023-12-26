const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
    userID: mongoose.Types.ObjectId, 
    cus_add: String, 
    cus_city: String, 
    cus_country: String, 
    cus_fax: String, 
    cus_name: String, 
    cus_phone: String, 
    cus_postcode: String, 
    cus_state: String, 
    ship_add: String, 
    ship_city: String, 
    ship_country: String, 
    ship_name: String, 
    ship_phone: String, 
    ship_postcode: String, 
    ship_state: String    
}, {versionKey: false, timestamps: true});

const ProfileModel = mongoose.model('Profile', ProfileSchema);
module.exports = ProfileModel;
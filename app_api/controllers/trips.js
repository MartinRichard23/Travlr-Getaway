const mongoose = require('mongoose');
const Trip = require('../models/travlr');
const { query } = require('express');
const Model = mongoose.model('trips');

//GET: /trips - list all the trips
//Regardsless of outcome, response must include HTML status code
//and JSON message to the requesting client
const tripsList = async(req, res) => {
    const q = await Model
        .find({}) // Return single record
        .exec();

        //Uncomment the following line to show results of querey
        //on the console
        //console.log(q);

    if(!q)
    {
        return res
                .status(404)
                .json(err);
    } else {
        return res
            .status(200)
            .json(q);
    }

};

// GET: /trips/:tripCode - lists a single trip
// Regardless of outcome, response muist include HTML status code
// and JSON message to the requestion client
const tripsFindByCode = async(req, res) => {
    const q = await Model
        .find({'code' : req.params.tripCode }) // Return single record
        .exec();

        //Uncomment the following line to show results of querey
        //on the console
        //console.log(q);

    if(!q)
    {
        return res 
                .status(404)
                .json(err);
    } else {
        return res
            .status(200)
            .json(q);
    }

};


module.exports = {
    tripsList,
    tripsFindByCode
};
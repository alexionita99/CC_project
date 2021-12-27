const express = require('express');

const GetFlightsQueryHandler = require('../../Queries/Flights/Handlers/GetFlightsQueryHandler.js');

const Router = express.Router();

Router.get('/', async (req, res) => {
    
    try {
        var flights = await GetFlightsQueryHandler.QueryAsync();
        res.json(flights);
    } catch (err) {
        console.error(err);
        res.status(500).send("Something bad happened!");
    }
});

module.exports = Router;
const express = require('express');

const FlightsEndpoint = require('./Flights');

const Router = express.Router();

Router.use('/flights', FlightsEndpoint);

module.exports = Router;
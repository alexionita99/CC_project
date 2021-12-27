const express = require('express');

const AddFlightEndpoint = require('./AddFlight.js');
const GetFlightsEndpoint = require('./GetFlights.js');

const Router = express.Router();

Router.use('/', AddFlightEndpoint);
Router.use('/', GetFlightsEndpoint);

module.exports = Router;
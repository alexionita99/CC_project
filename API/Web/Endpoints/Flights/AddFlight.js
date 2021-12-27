const express = require('express');

const AddFlightCommandHandler = require('../../Commands/Flights/Handlers/AddFlightCommandHandler.js');
const {
    AddFlightCommand
} = require ('../../Commands/Flights/Models/AddFlightCommand.js');

const Router = express.Router();

Router.post('/', async (req, res) => {
    
    const flightCommand = new AddFlightCommand(req.body);
    try {
        AddFlightCommandHandler.HandleAsync(flightCommand);
        res.status(201).end();
    } catch (err) {
        console.error(err);
        res.status(500).send("Something bad happened!");
    }
});

module.exports = Router;
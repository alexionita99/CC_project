const {
    ExecuteQuery
} = require('../../../../Infrastructure/Database');

const {
    FlightView
} = require('../Models/FlightView.js');

const QueryAsync = async () => {
    
    const result = await ExecuteQuery('SELECT * FROM flights');

    return result.map(x => new FlightView(x));
}

module.exports = {
    QueryAsync
}
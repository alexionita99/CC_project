const MessageQueue = require('../../../../Infrastructure/RabbitMQ');

const QUEUE = 'flights';

/**
 * 
 * @param {AddflightCommand} flightCommand 
 */
const HandleAsync = async (flightCommand) => {

    await MessageQueue.PublishMessageAsync(QUEUE, flightCommand);
};

module.exports = {
    HandleAsync
}
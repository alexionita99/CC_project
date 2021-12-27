require('dotenv').config()

var amqp = require('amqplib/callback_api');

const {
    ExecuteQuery
} = require('./Database');

const QUEUE = 'flights';

amqp.connect(process.env.AMQPURL, (error0, connection) => {
    if (error0) {
        throw error0;
    }
    connection.createChannel((error1, channel) => {
        if (error1) {
            throw error1;
        }

        channel.assertQueue(QUEUE, {
            durable: false
        });

        console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", QUEUE);

        channel.consume(QUEUE, async (msg) => {
            console.log(" [x] Received %s", msg.content.toString());

            if (msg !== null) {
                const jsonPayload = JSON.parse(msg.content);
                try {
                    await ExecuteQuery("INSERT INTO flights (origin, destination, distance, airline, aircraft, registration, seat, flightday) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)", [jsonPayload.origin, jsonPayload.destination, jsonPayload.distance, jsonPayload.airline, jsonPayload.aircraft, jsonPayload.registration, jsonPayload.seat, jsonPayload.flightday]);
                } catch (err) {
                    console.error(err);
                }
            }

            channel.ack(msg);
        });
    });
});
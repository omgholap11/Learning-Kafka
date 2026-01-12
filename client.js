const {Kafka} = require('kafkajs')

exports.kafka = new Kafka({
    cliendId : 'topic-admin',
    brokers : ['localhost:9092']
});
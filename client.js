const {Kafka} = require('kafkajs')

exports.kafka = new Kafka({
    cliendId : 'topic-admin',  // name of the admin or id
    brokers : ['localhost:9092']   // here it will make the requests 
});
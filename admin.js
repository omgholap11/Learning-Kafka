const {kafka} = require('./client.js')


async function init(){
    const admin = kafka.admin();
    console.log("Admin Connecting....");
    admin.connect();
    console.log("Admin connected!!")

    console.log("Creating topic rider updates!!")

    await admin.createTopics(
        {
            topics : [{
                topic : 'rider-updates',
                numPartitions : 2,
                replicationFactor: 1
            }],
            waitForLeaders : true
        }
    )
    console.log("Topic rider-updates created!!")

    console.log("Disconnecting the Admin...");
    await admin.disconnect()

    console.log("Admin Disconnected!!")
}


init();

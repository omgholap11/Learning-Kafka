const {kafka} = require("./client.js")
const group = process.argv[2]
async function init(){

    const consumer = kafka.consumer({groupId : group})   // it is basically the partition id of the available partitino thwy are 0 and 1 here 
    console.log("Connecting consumer!!")
    await consumer.connect();
    console.log("Consumer Connected!!")

    await consumer.subscribe({topics : ['rider-updates'] , fromBeginning:true});

    await consumer.run({
        eachMessage : async({topic , partition , message , heartbeat , pause})=>{
            console.log(`GROUP[${group}] : TOPIC[${topic}] : PART:${partition} : ${message.value.toString()} `)
        }
    })

    
}

init()
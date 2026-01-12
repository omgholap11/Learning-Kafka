const {kafka} = require("./client.js")

async function init(){
    const producer = kafka.producer()

    console.log("Connecting the produecer..")
    await producer.connect()

    console.log("Prodcer Connected!!")

    await producer.send({
        topic : 'rider-updates',
        messages :[
            {
                key : "location-update",
                value : JSON.stringify({name : "Steve Rogers" , location : "Shirdi"})
            }
        ]
    })

    await producer.disconnect();
}

init()
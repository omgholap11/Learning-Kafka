const { kafka } = require("./client.js");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function init() {
  const producer = kafka.producer();
  console.log("Connecting the produecer..");
  await producer.connect();
  console.log("Prodcer Connected!!");


  rl.setPrompt("> ");
  rl.prompt();
  rl.on("line", async function (line) {
    const [ridername, loc] = line.split(" ");
    await producer.send({
      topic: "rider-updates",
      messages: [
        {
          partition: loc.toLowerCase() == "north" ? 0 : 1, // it is the partition right
          key: "location-update",
          value: JSON.stringify({ name: ridername, location: loc }),
        },
      ],
    });
  }).on("close", async () => {
    await producer.disconnect();
  });

}

init();

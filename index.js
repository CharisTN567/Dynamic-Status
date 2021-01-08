const Discord = require ('discord.js');
const client = new Discord.Client();

client.on("ready", () => {
    console.log(`Hi, ${client.user.username} is now online!`);
    setInterval(() => {
        const aA = [
        `! is my prefix`,
        `Command`,
        `Testing Server`,
          ]
    
          const status = aA[Math.floor(Math.random() * aA.length)]
          const ok = [
            "PLAYING",
            "WATCHING",
            "LISTENING",
          ]
    
          const ds = ok[Math.floor(Math.random() * aA.length)]
          client.user.setActivity(status, {
            type: ds})
          }, 5000)
    
        });

client.login("TOKEN")
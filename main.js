const Discord = require("discord.js")
const client = new Discord.Client()
const config = require("./config.json")

client.on("ready",() => {
    console.log("Je suis prêt !")
});

client.on("message", message => {
    if (message.content.startsWith('Salut')) 
    message.channel.send("Coucou !")
})

client.login(config.token)
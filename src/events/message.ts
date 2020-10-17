import { client } from "..";

client.on("message", async (message) => {
    console.log(message.content)
    //Filter Out Non-DMs
    if (message.channel.type !== "dm" || message.author!.id === client.user!.id) return;
    let history = message.channel.messages
    console.log(history)
})
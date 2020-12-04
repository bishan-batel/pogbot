import config from "./config/config";
import discord, { Client } from "discord.js";
import token from "./config/token";

const client = new Client();

client.on("ready", () => {
	console.log(`Logged in as ${client.user?.username}`);
});

client.on("message", (msg: discord.Message) => {
  const { content } = msg;

	// bot check
  if (msg.author.bot) return;
  
	// 8ball
  if (content.match(config.key)) {
    // Filters only bias options that match with message content
    const matches = config.bias.filter(({ key }) => content.match(key));
    
    // Uses matched biases to calculate total bias
    const totalBias = matches.reduce((prev, { bias }) => prev + bias, config.defaultBias);
    let phrases: string[] = ["failed to retrieve any phrase"];
    
    // Assigns phrases based on bias
    if (Math.random() < totalBias) phrases = config.phrases.pog;
    else phrases = config.phrases.notPog;
    
    // Replies with random phrase
    const randomIndex = Math.floor(Math.random() * (phrases.length));
    msg.reply(phrases[randomIndex]);
  } 
});
client.login(token);

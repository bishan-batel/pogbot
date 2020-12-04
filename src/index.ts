import config from "./config/config";
import discord, { Client } from "discord.js";
import token from "./config/token";

const client = new Client();

client.on("ready", () => {
	console.log(`Logged in as ${client.user?.username}`);
});

client.on("message", (msg: discord.Message) => {
	// bot check
  if (msg.author.bot) return;
  
	// 8ball
	if (msg.content.match(config.eightBall.trigger))
		msg.reply(
			config.eightBall.responses[
				Math.floor(Math.random() * config.eightBall.responses.length)
			]
		);
});
client.login(token);

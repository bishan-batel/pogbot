import config from "./config/config";
import discord, { Client } from "discord.js";
import token from "./config/token";
const client = new Client();

client.on("ready", () => {
	console.log(`Logged in as ${client.user?.username}`);
});

client.login(token);
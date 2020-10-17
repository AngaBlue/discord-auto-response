import Discord from "discord.js-selfbot";
import config from "./modules/config";

export const client = new Discord.Client({ partials: ["CHANNEL", "MESSAGE", "USER", "GUILD_MEMBER", "REACTION"] })

//Bind Events
import "./events";
import logger from "./modules/logger";

//Start
logger.info("Starting Discord Auto Response...")
client.login(config.token)

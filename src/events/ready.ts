import { client } from "..";
import logger from "../modules/logger";

client.on("ready", async () => {
    logger.info(`Logged in as ${client.user!.tag}`);
})
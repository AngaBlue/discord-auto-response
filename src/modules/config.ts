import logger from "./logger";
import path from "path";

export const defaultConfig = {
    token: "",
    cooldown: 60 * 24, //Minutes
    responses: ["Hey, how can I help you?"]
}

export type Config = typeof defaultConfig

let userConfig;
try {
    userConfig = require(path.join(__dirname, "../../config.json"))
} catch (error) {
    console.log(error)
    logger.error("Failed to read config from config.json.  This may be because the file does not exist or has been formatted incorrectly.")
    process.exit(0)
}

const config: Partial<Config> = Object.assign(defaultConfig, userConfig)
if (!config.token) {
    logger.error("No token specified, please ensure you specify a token in config.json.")
    process.exit(0)
}

export default config as Config;
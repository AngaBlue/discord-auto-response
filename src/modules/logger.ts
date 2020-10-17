import { createLogger, format, transports} from 'winston';
import * as fs from "fs";
import dayjs from "dayjs";

const {
    combine,
    timestamp,
    printf
} = format;
//Set-up Logging
if (!fs.existsSync('./logs')) {
    fs.mkdirSync('./logs');
}
const myFormat = printf(log => {
    return `${dayjs(log.timestamp).format(`MMM-DD-YY, H:mm:ss`)} [${log.level.toUpperCase()}]: ${log.message}`;
});

export default createLogger({
    format: combine(
        timestamp(),
        myFormat
    ),
    transports: [new transports.Console(), new transports.File({
        filename: `logs/${dayjs().format(`MMM-DD-YYYY, h.mm.ss a`)}.log`
    })]
});
    
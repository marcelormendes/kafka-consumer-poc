import express from "express";
import cors from "cors";
import helmet from "helmet";
import expressPino from "express-pino-logger";
import bodyParser from "body-parser";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const logger = require("pino")();

import routes from "./routes";
import config from "./config";
import { ConsumerMessage } from "./interfaces/consumerMessage";

export const messageList: Array<ConsumerMessage> = [];

const app: express.Application = express();
app.locals.name = config.app.name;
app.locals.version = config.app.version;

const ep = expressPino({
    logger,
} as any);
app.use(ep);
app.use(cors());
app.use(helmet());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", routes);

app.listen(config.app.port, () => {
    logger.info(`Server Running in http://${config.app.host}:${config.app.port}`);
});

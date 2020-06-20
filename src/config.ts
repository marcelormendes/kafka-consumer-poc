require("dotenv-safe").config();

const app = {
    name: "Template Express Api",
    version: "0",
    host: process.env.APP_HOST || "",
    port: +(process.env.APP_PORT || "0"),
    environment: "development",
};

const db = {
    client: process.env.DB_CONNECTION,
    connection: {
        charset: "utf8",
        timezone: "UTC",
        host: process.env.DB_HOST,
        port: +(process.env.DB_PORT || "5432"),
        database: process.env.NODE_ENV === "test" ? process.env.TEST_DB_NAME : process.env.DB_NAME,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
    },
};

const kafka = {
    defaultTopicName: process.env.TOPIC_NAME || "node.kafka.test.t",
    kafkaHost: process.env.KAFKA_HOST || "host1:9092,host2:9092,host3:9092",
};

export default {
    app,
    db,
    kafka,
};

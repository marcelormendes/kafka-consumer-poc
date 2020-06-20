import * as kafka from "kafka-node";
import { ConsumerMessage } from "src/interfaces/consumerMessage";
import { messageList } from "src/index";

export const consumerHandle = (consumer: kafka.Consumer): void => {
    consumer.on("message", function (message) {
        const messageValue = message.value as unknown;
        const cm = messageValue as ConsumerMessage;
        messageList.push(cm);
    });

    consumer.on("error", function (error) {
        console.log(error);
    });
};

/* eslint-disable @typescript-eslint/no-explicit-any */
import {PubSub} from "@google-cloud/pubsub";

const pubSubClient = new PubSub();

// add your topic name
const topicNameOrId = "topic name";

export const publisheMsg = (request: any, response: any ) => {
  const data = JSON.stringify({data: "You have a new message!"});
  publishMessage(topicNameOrId, data);
  response.send("Message sent to pubsub!");
};


export const publishMessage = async (topicNameOrId: string, data: string) => {
  const dataBuffer = Buffer.from(data);
  try {
    const messageId = await pubSubClient
      .topic(topicNameOrId)
      .publishMessage({data: dataBuffer});
    console.log(`Message ${messageId} published.`);
  } catch (error) {
    console.error(`Received error while publishing: ${error}`);

    process.exitCode = 1;
  }
};

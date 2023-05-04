import * as functions from "firebase-functions";
import {publisheMsg} from "./publish-msg";
import {notify} from "./notify";

export const notifyPubSub = functions.https.onRequest(publisheMsg);

// add topic name
const topicName = "topic name";

export const sendNotification = functions.pubsub.topic(topicName)
  .onPublish(notify);


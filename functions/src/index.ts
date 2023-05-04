import * as functions from "firebase-functions";
import {publisheMsg} from "./publish-msg";
import {sendNotification} from "./notify";

export const notifyPubSub = functions.https.onRequest(publisheMsg);

export const sendSth = functions.pubsub.topic("testO")
  .onPublish(sendNotification);


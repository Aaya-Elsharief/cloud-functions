/* eslint-disable @typescript-eslint/no-explicit-any */
import * as admin from "firebase-admin";


// add the firebaseConfig for your project
const firebaseConfig = {
  // configrations
};


// Initialize Firebase Admin SDK
admin.initializeApp(firebaseConfig);

export const sendNotification = (message: any, context: any)=>{
//   console.log(message.json, context);
  const {data} = message.json;
  // Define the notification message
  const msg = {
    notification: {
      title: "New Message",
      body: data,
    },
    topic: "messages",
  };

  // Send the message
  admin.messaging().send(msg)
    .then((response: any) => {
      console.log("Notification sent successfully:", response);
    })
    .catch((error: any) => {
      console.error("Error sending notification:", error);
    });
};

/* eslint-disable @typescript-eslint/no-explicit-any */
import * as admin from "firebase-admin";


// add the firebaseConfig for your project
const firebaseConfig = {
  // configrations
};


// Initialize Firebase Admin SDK
admin.initializeApp(firebaseConfig);

export const notify = async (message: any, context: any)=>{
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
  try {
    const response = await admin.messaging().send(msg);
    console.log("Notification sent successfully:", response);
  } catch (error: any) {
    console.error("Error sending notification:", error);
  }
};

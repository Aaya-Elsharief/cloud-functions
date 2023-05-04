# Cloud Functions
This repository contains cloud functions
 
**notifyPubSub**: triggered by HTTP request, so it will publish the message on the specific ***pub-sub topic***.

**sendNotification**: it is supposed to be triggered by Publish on the specific ***pub-sub topic***
so it will send a notification.

### Prerequisites
* Install a gcloud CLI [see docuomentatoin](https://cloud.google.com/sdk/docs/install)
* Create or select a Google Cloud project and topics in pub-sub [see docuomentatoin](https://cloud.google.com/pubsub/docs/publish-receive-messages-client-library) 

### Installation
* clone repository: `https://github.com/Aaya-Elsharief/cloud-functions`
* install packages: `npm install`
* From the firebase project get the configurations `firebaseConfig` and add them to the `notify.ts` file.
* Also, replace the topic name as shown in the files.
* Run gcloud emulators using`firebase init emulators`
* Then run this:`npm run serve`

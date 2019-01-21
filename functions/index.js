const functions = require("firebase-functions");
const admin = require("firebase-admin");
const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const serviceAccount = require("./youanal-firebase-adminsdk-dptj6-28d19a41db.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://youanal.firebaseio.com"
});

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.helloWorld = functions.https.onRequest((request, response) => {
  var db = admin.database();
  db.ref("data").push({
    author: "gracehop",
    title: "Announcing COBOL, a New Programming Language"
  });

  response.send("Hello from Firebase!");
});

exports.oauth2callback = functions.https.onRequest((request, response) => {
  var db = admin.database();
  db.ref("data").push({
    author: "gracehop",
    title: "Announcing COBOL, a New Programming Language"
  });

  response.send("Hello from Firebase!");
});

app.use(express.static(__dirname + "/static"));

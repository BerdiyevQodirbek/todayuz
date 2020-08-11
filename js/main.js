  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyB6eqJ8BpUuhOXGynt9Pv7irV3ubr9PTbA",
    authDomain: "todayuz-a95e4.firebaseapp.com",
    databaseURL: "https://todayuz-a95e4.firebaseio.com",
    projectId: "todayuz-a95e4",
    storageBucket: "todayuz-a95e4.appspot.com",
    messagingSenderId: "851454344680",
    appId: "1:851454344680:web:7799b0079586b22402385d",
    measurementId: "G-G3G357PNJ6"
  };
  // Initialize Firebase    
  
firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore();
var txt = document.getElementById("txt")

function fb() {
    console.log(txt.value);
    firestore.collection("cities").doc(txt.value).set({
        name: txt.value
    })
    .then(function() {
        console.log("Document successfully written!");
    })
    .catch(function(error) {
        console.error("Error writing document: ", error);
    });
}
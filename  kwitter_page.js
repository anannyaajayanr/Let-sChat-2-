

const firebaseConfig = {
    apiKey: "AIzaSyCgvFpvDKfOtfcpv2dhOGUBELRRbY-3xco",
    authDomain: "kwitter-59c39.firebaseapp.com",
    databaseURL: "https://kwitter-59c39-default-rtdb.firebaseio.com",
    projectId: "kwitter-59c39",
    storageBucket: "kwitter-59c39.appspot.com",
    messagingSenderId: "561929524377",
    appId: "1:561929524377:web:2edebd70eb8b9a4b055408"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
function send() {
    msg= document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
    });

    document.getElementById("msg").value="";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
    } });  }); }
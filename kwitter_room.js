var firebaseConfig = {
      apiKey: "AIzaSyAxxIq0BfjrLv5FCMUAim3RBk5GQOSfFZY",
      authDomain: "kwitter-86c37.firebaseapp.com",
      databaseURL: "https://kwitter-86c37-default-rtdb.firebaseio.com",
      projectId: "kwitter-86c37",
      storageBucket: "kwitter-86c37.appspot.com",
      messagingSenderId: "1065277165636",
      appId: "1:1065277165636:web:cf4c8f39c9c0f669cbec11"
    };
    
    // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

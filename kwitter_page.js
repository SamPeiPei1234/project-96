//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyCfA8AvVZpWjvlOwUxKkBEimexHdO2mcUg",
  authDomain: "kwitter-291ac.firebaseapp.com",
  databaseURL: "https://kwitter-291ac-default-rtdb.firebaseio.com",
  projectId: "kwitter-291ac",
  storageBucket: "kwitter-291ac.appspot.com",
  messagingSenderId: "776854604557",
  appId: "1:776854604557:web:599e0e4627d2f496df7e44"
};

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");

    room_name = localStorage.getItem("room_name");

    function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name , message : msg , like : 0
      });
      document.getElementById("msg").value = " ";
    }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();


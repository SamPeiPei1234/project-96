
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
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
document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";
function AddRoom(){
   room_name = document.getElementById("room_name").value ;
   firebase.database().ref("/").child(room_name).update({
      purpose: "Adding Room Name"
   });
   localStorage.setItem("room_name" , room_name);
   window.location =  " kwitter_page.html";

}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room name - " + Room_names);
row= "<div class= 'room_name'  id = " + room_names + " + onclick = 'Redirect_To_Room_Name()'>" + room_names + "</div> <hr>"
document.getElementById("output").innerHTML = row;
      //End code
      });});}
getData();

function Redirect_To_Room_Name(name){
      console.log(name);
      localStorage.setItem("room_name" , name);
      window.location = "kwitter_page.html";
      
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}

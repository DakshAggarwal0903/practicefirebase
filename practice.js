var firebaseConfig = {
    apiKey: "AIzaSyBkflPDy7ah5TWcpEUj3uaflV-7-7JR3EU",
    authDomain: "message-website-897da.firebaseapp.com",
    databaseURL:"https://message-website-897da-default-rtdb.firebaseio.com",
    projectId: "message-website-897da",
    storageBucket: "message-website-897da.appspot.com",
    messagingSenderId: "218002691133",
    appId: "1:218002691133:web:97046a235da99c3a884654",
    measurementId: "G-CBPVB0VSP6"
  };
  firebase.initializeApp(firebaseConfig);
function sendfirebase(){
    username1=document.getElementById("username").value;
    message=document.getElementById("msg").value;
    firebase.database().ref("parentfolder").child(username1).set({
        Name:"Username",
        Grade:123
    });
    firebase.database().ref("/").push(
        {
            Push:message
        }
    );
    firebase.database().ref("parentfolder").child(username1).on("value",function(snapshot){
        console.log(snapshot.val());
    });
}
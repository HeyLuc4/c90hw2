
//ADICIONE SEUS LINKS FIREBASE
const firebaseConfig = {
  apiKey: "AIzaSyDCSABCo6YVzzTCH44hwoJnPq3_58VUZsU",
  authDomain: "kwitter-d628d.firebaseapp.com",
  projectId: "kwitter-d628d",
  storageBucket: "kwitter-d628d.appspot.com",
  messagingSenderId: "557150808319",
  appId: "1:557150808319:web:a0be0d763770f183f984ca",
  measurementId: "G-DHPFYPZFEY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

userName = localStorage.getItem("userName");

document.getElementById("userName").innerHTML = "Bem-vindo(a) " + userName + "!";

function addRoom() {
  roomName = document.getElementById("roomName").value;

  firebase.database().ref("/").child(roomName).update({
    purpose: "adicionar nome de sala"
  });

  localStorage.setItem("roomName", roomName);

  window.location = "kwitterPage.html";
}

function getData() {
  firebase.database().ref("/").on('value', function (snapshot) {
    document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key;
      roomNames = childKey;
      console.log("Nome da Sala - " + roomNames);
      row = "<div class='roomName' id=" + roomNames + " onclick='redirectToRoomName(this.id)' >#" + roomNames + "</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("roomName", name);
  window.location = "kwitterPage.html";
}

function logout() {
  localStorage.removeItem("userName");
  localStorage.removeItem("roomName");
  window.location = "index.html";
}

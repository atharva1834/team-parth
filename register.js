const firebaseConfig = {
  apiKey: "AIzaSyDvjKGvBqKixbBxduTtk-nrdvnG7jMlUww",
  authDomain: "team-parth-fe53f.firebaseapp.com",
  databaseURL: "https://team-parth-fe53f-default-rtdb.firebaseio.com",
  projectId: "team-parth-fe53f",
  storageBucket: "team-parth-fe53f.appspot.com",
  messagingSenderId: "761597864606",
  appId: "1:761597864606:web:5af4003af020d0df83e98f",
  measurementId: "G-1Z8YF4226H"
};

firebase.initializeApp(firebaseConfig);
const nameref = firebase.database().ref('name');

//listen for register
document.getElementById('registration-form').addEventListener('submit', submitform);


//submit form
function submitform(e)
{
  e.preventDefault();

  //get values
  var name = getInputVal('name');
  var email = getInputVal('email');
  var password = getInputVal('password');
//save form
saveform(name, email, password);


}


// Function to get get form values
function getInputVal(id)
{
   return document.getElementById(id).value;
}

//save messeges to firebase
function saveform(name, email, password){
  console.log('Saving data to Firebase:', name, email, password);
  var newname = nameref.push();
  newname.set({
      name:name,
      email:email,
      password:password
  }) .then(() => {
    // Data successfully saved
    alert('Data successfully saved to Firebase!');
    window.location.href = "/index3.html";
    // You can add additional actions here if needed
  })
  .catch((error) => {
    // Handle errors
    console.error('Error saving data to Firebase:', error);
    alert('Error saving data to Firebase. Please try again.');
  });
}

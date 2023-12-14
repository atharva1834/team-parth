const firebaseConfig = {
  apiKey: "AIzaSyAYehy9ApuLnz4kW4ITPZ_jelPDViAfwiw",
  authDomain: "parthtest-228cb.firebaseapp.com",
  databaseURL: "https://parthtest-228cb-default-rtdb.firebaseio.com",
  projectId: "parthtest-228cb",
  storageBucket: "parthtest-228cb.appspot.com",
  messagingSenderId: "955201959682",
  appId: "1:955201959682:web:523b760df8d6bcca06741b",
  measurementId: "G-C4DGQT8ERT"
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

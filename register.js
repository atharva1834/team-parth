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
const database = firebase.database();
const nameref = database.ref('name');

// Listen for form submission
document.getElementById('registration-form').addEventListener('submit', submitForm);

// Submit form
function submitForm(e) {
  e.preventDefault();

  // Get form values
  const name = getInputVal('name');
  const email = getInputVal('email');
  const password = getInputVal('password');

  // Save form
  saveForm(name, email, password);
}

// Function to get form values
function getInputVal(id) {
  return document.getElementById(id).value;
}

// Save messages to Firebase
function saveForm(name, email, password) {
  console.log('Saving data to Firebase:', name, email, password);

  const newname = nameref.push();
  newname.set({
    name: name,
    email: email,
    password: password
  })
  .then(() => {
    // Data successfully saved
    alert('Data successfully saved to Firebase!');
    console.log('Redirecting to index3.html');
    window.location.href = "index5.html";
  })
  .catch((error) => {
    // Handle errors
    console.error('Error saving data to Firebase:', error);
    alert('Error saving data to Firebase. Please try again.');
  });
}

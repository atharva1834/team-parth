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

    // Listen for login form submission
    document.getElementById('login').addEventListener('submit', submitForm);

    // Submit form
    function submitForm(e) {
      e.preventDefault();

      // Get email and password values
      var email = getInputVal('email');
      var password = getInputVal('password');

      // Authenticate user with Firebase
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
          // Signed in
          var user = userCredential.user;
          alert('Login successful!');
          window.location.href = "/index5.html";
        })
        .catch((error) => {
          // Handle login errors
          var errorCode = error.code;
          var errorMessage = error.message;
          console.error('Login error:', errorMessage);
          alert('Login failed. Please check your email and password.');
        });
    }

    // Function to get form values
    function getInputVal(id) {
      return document.getElementById(id).value;
    }

// Initialize Firebase with your project configuration
const firebaseConfig = {
    apiKey: "AIzaSyDbPas2bcVppZI_nWgNustvBBSBzMIRAJ4",
    authDomain: "parth-grand-finale.firebaseapp.com",
    databaseURL: "https://parth-grand-finale-default-rtdb.firebaseio.com",
    projectId: "parth-grand-finale",
    storageBucket: "parth-grand-finale.appspot.com",
    messagingSenderId: "478526429762",
    appId: "1:478526429762:web:2d091dd431e0701c7a6bdb",
    measurementId: "G-NEDR2F8Y1V"
  };

firebase.initializeApp(firebaseConfig);

// Reference to your Firebase Realtime Database
const database = firebase.database();

//Function to fetch and display data when the button is clicked
        function fetchData() {
            const dataDisplayElement = document.getElementById('dataDisplay');

// Replace "your/path" with the actual path in your database
  const dataRef = database.ref('y_pred/y_pred');

  dataRef.once('value')
  .then(snapshot => {
      const data = snapshot.val();
      // Display the data in your HTML element
      dataDisplayElement.innerHTML = `<p>${JSON.stringify(data)}</p>`;
  })
  .catch(error => {
      console.error('Error fetching data:', error);
  });
}

// Add an event listener to the button
const btn = document.querySelector('.btn.btn-dark');
btn.addEventListener('click', fetchData);
// Initialize Firebase with your project configuration
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

// Reference to your Firebase Realtime Database here
const database = firebase.database();

//Function to fetch and display data when the button is clicked
        function fetchData() {
            const dataDisplayElement = document.getElementById('dataDisplay');

// Replace "your/path" with the actual path in your database
  const dataRef = database.ref('y_pred/result_path');

  dataRef.once('value')
  .then(snapshot => {
      const data = snapshot.val();
      // Display the data in your HTML element
      dataDisplayElement.innerHTML = `<p>Data: ${JSON.stringify(data)}</p>`;
  })
  .catch(error => {
      console.error('Error fetching data:', error);
  });
}

// Add an event listener to the button
const btn = document.querySelector('.btn.btn-outline-success');
btn.addEventListener('click', fetchData);

        // Replace with your Firebase project configuration
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
    
        // Initialize Firebase here
        firebase.initializeApp(firebaseConfig);
    
        // Get a reference to the database
        var database = firebase.database();
    
        var selectedOptions = {};
    
        // Add event listeners for all radio button groups
        document.querySelectorAll('input[type="radio"]').forEach((radio) => {
            radio.addEventListener('change', function () {
                const groupName = this.name;
                const selectedOption = this.value;
    
                // Update the selectedOptions object
                selectedOptions[groupName] = selectedOption;
            });
        });
    
        // Add event listener for the "Next" button
        document.querySelector('.btn-outline-dark').addEventListener('click', function () {
            // Update Firebase database
            database.ref('Medical Path').set(selectedOptions).then(function () {
                // Show alert
                alert('Radio button data has been stored in Firebase!');
                // Redirect to the next page
                window.location.href = 'index7.html';
            }).catch(function (error) {
                console.error('Error storing data in Firebase:', error);
            });
        });
    
    

        // Replace with your Firebase project configuration
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
            database.ref('Arts and Humanities').set(selectedOptions).then(function () {
                // Show alert
                alert('Radio button data has been stored in Firebase!');
                // Redirect to the next page
                window.location.href = 'index9.html';
            }).catch(function (error) {
                console.error('Error storing data in Firebase:', error);
            });
        });
    
    
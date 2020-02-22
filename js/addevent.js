  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCY6rMZq8tyKRPvZUk0jt1eBZLHpAmvLrA",
    authDomain: "project-hackathon-27ba6.firebaseapp.com",
    databaseURL: "https://project-hackathon-27ba6.firebaseio.com",
    projectId: "project-hackathon-27ba6",
    storageBucket: "project-hackathon-27ba6.appspot.com",
    messagingSenderId: "166870640909",
    appId: "1:166870640909:web:0dd9208fafbd07f6806844",
    measurementId: "G-VMTV9BVSZ1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var file_i=document.querySelector('#file');
  var selectedFile;
  file_i.addEventListener('change', (event) => {
   selectedFile=event.target.files[0];
  });

  function uploadFile(){
    var fileName=selectedFile.name;

      // Create a root reference
    var storageRef = firebase.storage().ref('/Event/'+fileName);
    // var fileRef=storage().child(fileName);
    var uploadTask=storageRef.put(selectedFile);
    // Register three observers:
// 1. 'state_changed' observer, called any time the state changes
// 2. Error observer, called on failure
// 3. Completion observer, called on successful completion
uploadTask.on('state_changed', function(snapshot){
   
  }, function(error) {
    // Handle unsuccessful uploads
    alert("unsuccessful uploads"); 
  }, function() {
    // Handle successful uploads on complete
    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
    // uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
    //   console.log('File available at', downloadURL);
    // });
    var downloadURL=uploadTask.snapshot.downloadURL;
    console.log(downloadURL);
  });

  }
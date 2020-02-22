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
//   firebase.analytics();

  const auth= firebase.auth();

  	
	function signIn(){
		
        var email=document.querySelector('.your-email').value;
        var password=document.querySelector('.your-pass').value;
		
		const promise = auth.signInWithEmailAndPassword(email, password).then(function(user) {
            // user signed in
            auth.onAuthStateChanged(function(user){
                // var user = firebase.auth().currentUser
                if(user){
                    var uid = user.email;
                   if(uid=="cs.ashwaq96@gmail.com"){
                   window.location = 'admin.html';
                 }
               else{
                  window.location = 'student.html';
                   //Take user to a different or home page
               }
           }
               });
         }).catch(function(error) {
             var errorCode = error.code;
             var errorMessage = error.message;
         
             if (errorCode === 'auth/wrong-password') {
                 alert('Wrong password.');
             } else {
                 alert(errorMessage);         
             }
             console.log(error);
         });
      	
        
    }

//     auth.onAuthStateChanged(function(user){
// 		// var user = firebase.auth().currentUser
// 		if(user){
//             var uid = user.email;
//            if(uid=="cs.ashwaq96@gmail.com"){
//            window.location = 'admin.html';
//          }
//        else{
//           window.location = 'student.html';
//            //Take user to a different or home page
//        }
//    }
//        });
var r = localStorage.getItem('email')

(() => {
    if (!r) {
        location.href
    }
})()


// <<<<<<<<<<<<<<<<<<<<<<<<<<<<  F I R E B A S E >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyB6eqJ8BpUuhOXGynt9Pv7irV3ubr9PTbA",
    authDomain: "todayuz-a95e4.firebaseapp.com",
    databaseURL: "https://todayuz-a95e4.firebaseio.com",
    projectId: "todayuz-a95e4",
    storageBucket: "todayuz-a95e4.appspot.com",
    messagingSenderId: "851454344680",
    appId: "1:851454344680:web:7799b0079586b22402385d",
    measurementId: "G-G3G357PNJ6"
  };
  // Initialize Firebase    
  
firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore();


//   O F F L I N E   A C C E S S 
 
firebase.firestore().enablePersistence()
  .catch(function(err) {
      if (err.code == 'failed-precondition') {
          // Multiple tabs open, persistence can only be enabled
          // in one tab at a a time.
          // ...
      } else if (err.code == 'unimplemented') {
          // The current browser does not support all of the
          // features required to enable persistence
          // ...
      }
  });
  
// Sign Up


function signUp(el) {
    var signName = document.getElementById("signName");
    var signComp = document.getElementById("signComp");
    var signEmail = document.getElementById("signEmail");
    var signPassword = document.getElementById("signPassword");
    var signTel = document.getElementById("signTel");
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (signName.value == "") {
        el.innerText = "Entir your Name"
        signName.focus()
    } else if(signComp.value == "") {
        el.innerText = "Entir your Comp"
        signComp.focus()
    } else if (reg.test(signEmail.value) == false) {
        el.innerText = "Invalid EMail";
        signEmail.focus()
        return false;
    } else if(signPassword.value == "") {
        el.innerText = "Entir your Pssword"
        signPassword.focus()
    } else if(signTel.value.length < 7) {
        el.innerText = "Entir your Tel"
        signTel.focus()
    } else {
        firestore.collection("users").doc(signEmail.value)
        .set({
            name: signName.value,
            compName: signComp.value,
            email: signEmail.value,
            password: signPassword.value,
            tel: signTel.value
        })
        .then(() => {
            el.innerText= "Sign Up"
            document.getElementById("signInLink").click()
        })
        .catch((error) => {
            console.log(error);
        })
    }
}

// Sign In


function login(el) {
    var signMail = document.getElementsByName("signMail")[0]
    var psw = document.getElementById("loginPassword")
    if (signMail.value == "") {
        el.innerText = "Entir your Mail"
        signMail.focus()
    } else if(psw.value == "") {
        el.innerText = "Entir your Password"
        psw.focus()
    } else {
        el.innerText= "Login"
        firestore.collection("users").get().then( users => {
            users.forEach( user => {
                if (user == null) {
                    console.log("no file");
                } else {
                var data = user.data()
                if(data.email == signMail.value) {
                    localStorage.setItem("email", signMail.value)
                    if (data.password == psw.value) {
                        signMail.value = ""
                        psw.value = ""
                        location.href ='/index.html'
                    } else {
                        el.innerText = "Wrong Password"
                    }
                } else {
                    document.getElementById("signUpLink").click()
                }
                }
                
            })
        })
        .catch((error) => {
            console.log(error);
        })
    }
}



//  function validateForm() {

//     var email1 = document.forms["myForm"]["email"].value;
//     if (email1 == "") {
//         alert("Name must be filled out");
//         return false;
//     }
//     var password1 = document.forms["myForm"]["password"].value;
//     if (password1 == "") {
//         alert("password must be filled out");
//         return false;
//     }
//     var enterEmail = email1
//     var enterPassword = password1
//     // console.log('enterEmail: ', enterEmail)
//     // console.log('enterPassword: ', enterPassword)

//     // nullpattren(enterEmail, enterPassword)
//     // login
//     var user = (JSON.parse(localStorage.getItem("user")));
//     console.log("data", user)


//     if (user == null) {
//         alert("No data in database")
//         window.location.replace("signup.html");
//         return false;
//     } else {
//         console.log("length", user.length);
//         for (var i = 0; i < user.length; i++) {
//             if (user[i].email == enterEmail && user[i].password1 == enterPassword) {
//                 var validEmail = user[i].email;
//                 var validPassword = user[i].password1;
//                 var loginUserName = user[i].userName;
//                 break;
//             }
//         }

//         // alert("validEmail: " + validEmail)
//         // alert("validPassword: " + validPassword)

//         if (validEmail == enterEmail && validPassword == enterPassword) {
//             alert("successfully logged in ")
//             localStorage.setItem("loginUserName", JSON.stringify(loginUserName));
//             // return true;
//         }
//         else if (validEmail != enterEmail) {
//             alert("You email or password is incorrect")
//             return false
//         }

//         else if (validPassword != enterPassword) {
//             alert("You email or password is incorrect")
//             return false;
//         }
//     }
// }

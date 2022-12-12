// const db = getDatabase();

const namev = document.getElementById("fname");
const emailv = document.getElementById("email");
const usernamev = document.getElementById("username");
const passwordv = document.getElementById("password");
const repasswordv = document.getElementById("repassword");
const submit = document.getElementById("register")

// console.log(namev.value)
// console.log(emailv.value)
// console.log(usernamev.value)
// console.log(passwordv.value)
// console.log(repasswordv.alaue)


// VALIDATION
function validation(){
let nameregex = /^[a-zA-Z\s]+$/;
let email = /^[a-zA-Z0-9]+@(gmail|yahoo|outlook)\.com$/;
let userregex = /^[a-zA-Z0-9]{5,15}$/;

if (namev.value==""){
    document.getElementById("fnameerror").innerHTML="*Kindly enter your name."
    return false
}

if (!nameregex.test(namev.value)){
    document.getElementById("fnameerror").innerHTML="*Name can only have alphabets."
    return false
}

if (namev.value.length < 3 || namev.value.length > 20  ){
    document.getElementById("fnameerror").innerHTML="*Name can only have 3-20 alphabets."
    return false
}

if(emailv==""){
    document.getElementById("emailerror").innerHTML="*Kindly enter email."
    return false
}
if(!email.test(emailv.value)){
    document.getElementById("emailerror").innerHTML="*Kindly enter valid email."
    return false
}

if(!userregex.test(usernamev.value)){
    document.getElementById("usernameerror").innerHTML="*username can only be alphanumeric\n-username must be atleast 5 characters\n-username cannot contain spaces."
    return false
}
return true
}
var userArray = [];
var notexistEmail;
function registerUser(){
   

    var user = {
        name: document.getElementById("fname").value,
        username: document.getElementById("username").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
        repassword: document.getElementById("repassword").value,
        
    };


    var data = (JSON.parse(localStorage.getItem("user")));
    if (data) {
        for (var i = 0; i<data.length; i++){
            if(data[i].email == user.email){
                notexistEmail = data[i].email
            }
        }
    }

    if (notexistEmail !== user.email || data == null){
        if (user.password == user.repassword){
            userArray =JSON.parse(localStorage.getItem("user"))|| [];
            userArray.push(user);
            localStorage.setItem("user", JSON.stringify(userArray));
            alert("sucessfully registered")
        } else {
            alert("password not match");
            return false;
        }
    }else{
        alert("user exist, already registered")
        return true;
    }

    
}

submit.addEventListener("click", registerUser)





function validateUser() {

    var email1 = document.getElementById("email").value;
    if (email1 == "") {
        alert("Name must be filled out");
        return false;
    }
    var password1 = document.getElementById("password").value;
    if (password1 == "") {
        alert("password must be filled out");
        return false;
    }
    var enterEmail = email1
    var enterPassword = password1
    console.log('enterEmail: ', enterEmail)
    console.log('enterPassword: ', enterPassword)

    // nullpattren(enterEmail, enterPassword)
    // login
    var user = (JSON.parse(localStorage.getItem("user")));
    console.log("data", user)


    if (user == null) {
        alert("No data in database")
        window.location.replace("signuptest.html");
        return false;
    } else {
        console.log("length", user.length);
        for (var i = 0; i < user.length; i++) {
            if (user[i].email == enterEmail && user[i].password == enterPassword) {
                var validEmail = user[i].email;
                var validPassword = user[i].password;
                var loginUserName = user[i].userName;
                break;
            }
        }

        // alert("validEmail: " + validEmail)
        // alert("validPassword: " + validPassword)

        if (validEmail == enterEmail && validPassword == enterPassword) {
            alert("successfully logged in ")
            localStorage.setItem("loginUserName", JSON.stringify(loginUserName));
            // return true;
        }
        else if (validEmail != enterEmail) {
            alert("You email or password is incorrect")
            return false
        }

        else if (validPassword != enterPassword) {
            alert("You email or password is incorrect")
            return false;
        }
    }
}
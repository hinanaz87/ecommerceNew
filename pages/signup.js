// const db = getDatabase();

const namev = document.getElementById("fname");
const emailv = document.getElementById("email");
const usernamev = document.getElementById("username");
const passwordv = document.getElementById("password");
const repasswordv = document.getElementById("repassword");

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
return
}

function registerUser(){
    if(!validation()){
        return;
    };

    const dbRef = ref(db);
    get(child(dbRef, "UsersList/" + usernamev.value)).then((snapshot)=>{
        if(snapshot.exists()){
            alert("Account already Exist!");
        }
        else{
            set(ref(db, "UsersList/" + usernamev.value),
            {
                fullname: namev.value,
                email:emailv.vlaue,
                username: usernamev.vlaue,
                password: passwordv.value
            })
            .then(()=>{
                alert("user added successfully");
            })
            .catch((error)=>{
                alert("error" + error);
            })
        }
    })

}

// ASSIGN EVENT

document.querySelector("#register").addEventListener("click", registerUser)
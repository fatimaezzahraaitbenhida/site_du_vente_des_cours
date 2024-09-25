var usernameEl = document.querySelector('#username');
var emailEl = document.querySelector('#email');
var passwordEl = document.querySelector('#password');
var confirmPasswordEl = document.querySelector('#confirm-password');
var small = document.querySelector('small');
var small2=document.getElementById("small2");
var small3=document.getElementById("small3");
var small4=document.getElementById("small4");

var form = document.querySelector('#signup');
var t=document.getElementById('form');
form.addEventListener('click',function(e){
   
    if(usernameEl.value==''){
        small.innerHTML="Username cannot be blank.";
        small.style.color="red";
        e.preventDefault();
    }
    else if(usernameEl.value.length<3 && usernameEl.value.length<23){
        small.innerHTML="Username must be between 3 and 23 characters.";
        small.style.color="red";
        e.preventDefault();
    }
    else{
        small.remove();
        usernameEl.style.borderColor="green";
        e.preventDefault();
    }
    if(emailEl.value==''){
        small2.innerHTML="Email cannot be blank.";
        small2.style.color="red";
        e.preventDefault();
    }
    else if(!isEmailValid (emailEl.value)){
        small2.innerHTML="Email is not valid.";
        small2.style.color="red";
        e.preventDefault();
    }
    else{
        small2.remove();
        emailEl.style.borderColor="green";
        e.preventDefault();
    }
    
    if(passwordEl.value===''){
        small3.innerHTML="Password cannot be blank.";
        small3.style.color="red";
        e.preventDefault();
    }
    else if (!isPasswordSecure(passwordEl.value)) {
        small3.innerHTML="Password must has at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number, and 1 special character in (!@#$%^&*)');";
        small3.style.color="red";
        e.preventDefault();
    }
    else{
        small3.remove();
        passwordEl.style.borderColor="green";
        e.preventDefault();
    }
    if(confirmPasswordEl.value===''){
        small4.innerHTML="Please enter the password again.";
        small4.style.color="red";
        e.preventDefault();
    }
    else if(confirmPasswordEl.value!==passwordEl.value){
        small4.innerHTML="The password does not match.";
        small4.style.color="red";
        e.preventDefault();
    }
    else{
        small4.remove();
        confirmPasswordEl.style.borderColor="green";
        e.preventDefault();
        window.location="file:///C:/bootstrap/alea.html";
         
    }
    
   })
    const isEmailValid = (email) => {
       return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);

    };
    const isPasswordSecure = (passwordEl) => {
        const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
        return re.test(passwordEl);
    };
    
    
        
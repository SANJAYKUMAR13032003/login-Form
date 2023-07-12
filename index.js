let form = document.getElementById("form1");
let username = document.getElementById("uname");
let email = document.getElementById("email");
let password = document.getElementById("password");
let password2 = document.getElementById("conformpassword");
form.addEventListener('submit',value=>{
    value.preventDefault();
    checking();
    allclear();
});
let bool = false;
function checking(){
   const usernamevalue = username.value.trim();
   let emailvalue = email.value.trim();
   const passwordvalue = password.value.trim();
   const password2value = password2.value.trim();
   if(usernamevalue === ''){
         errorOn(username,'Username is blank');
         bool = false;
   }
   else if(usernamevalue.length<5){
         errorOn(username,'username must contain 5 characters');
         bool = false;
   }
   else{
         successOn(username," ");
         bool = true;
   }
   if(emailvalue === ''){
          errorOn(email,'email is blank');
          bool = false;
   }
   else{
    successOn(email," ");
    bool = true;
   }
   if(passwordvalue === ''){
    errorOn(password,'Password is blank')
    bool = false;
   }
   else{
    successOn(password," ");
    bool = true;
   }
   if(password2value === ''){
       errorOn(password2,'confirm Password is blank');
       bool = false;
   }
   else if(passwordvalue !== password2value){
      errorOn(password2,'confirm Password is not same');
      bool = false;
   }
   else{
    successOn(password2," ");
    bool = true;
   }
function errorOn(input, message){
    const style = input.parentElement;
    const small = style.querySelector('small');
    style.className = 'style error';
    small.innerText = message;
}
function successOn(input,message){
const style = input.parentElement;
const small = style.querySelector('small');
style.className = 'style success';
small.innerText = message;
}
}
function allclear(){
     if(bool === true){
        setTimeout(()=>{
            alert('Click OK to Enter the google !...')
        window.location = "http://www.google.com"
        },100);
     }
     else{
        setTimeout(()=>{
            alert("check the error")
        },20)
     }
}
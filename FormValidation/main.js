

const form = document.querySelector('form'),
    Uname = document.querySelector('#Username'),
    email = document.querySelector('#email'),
    password = document.querySelector('#password'),
    lable = document.querySelectorAll("label");
  



const patterns = {
    username: /^[a-z\d]{5,12}$/i,
    email: /^[a-z\d-]+(@gmail.com)$/, 
    password: /^[a-z\d@-]{8,20}$/ 
};

onmouseup = () =>{
  lable.forEach((e)=>{
    e.style.opacity = "1";
  })
}






form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (patterns.username.test(Uname.value.trim())) {
        Uname.style.borderColor = "green";
       
    } else {
        Uname.style.borderColor = "red"; 
        
    }
    if (patterns.email.test(email.value.trim())) {
        email.style.borderColor = "green";
    } else {
        email.style.borderColor = "red";
    }
    if (patterns.password.test(password.value.trim())) {
        password.style.borderColor = "green";
    } else {
        password.style.borderColor = "red";
    }
    
});

function handleSubmit(event,data)
 {
  let userval = document.getElementById("username").value;
  let passwordval = document.getElementById("password").value;
  let numverval = document.getElementById("number").value;
  let emailval = document.getElementById("email").value;
  let adressval = document.getElementById("adress").value;
}
if (
    userval !=="" &&
    passwordval !=="" &&
    numverval !=="" &&
    emailval !=="" &&
    adressval !=="" &&
) {
    console.log (
        userval,
        passwordval,
        numverval, 
        emailval,
        adressval
    );
} else {
     if (userval =="") {
        handleError ("username");
     }
     if (passwordval=="") {
        handleError ("password");
     }
     if (numverval=="") {
        handleError ("number");
     }
     if (emailval=="") {
        handleError ("email");
     }
     if (adressval=="") {
        handleError ("adress");
     }
}
function handleError(data) {
    return (document.getElementsByTagName("label").NamedItem(data).innerText = 
    "Please enter" + data);
}
//  document.addEventListener('submit',e => {
//     e.preventDefault();

//      ValidateInputs();
//  });

//  const setError = (element,message) => {

//      const inputControl = element.parentElement;
//      const errorDisplay = inputControl.querySelector('.error');

//      errorDisplay.innerText = message;
//      inputControl.ClassList.add('error');
//      inputControl.ClassList.remove('success');
//  }

//  const setSuccess =(element,message)  => {

//      const inputControl = element.parentElement;
//      const errorDisplay = inputControl.querySelector('.error');

//      errorDisplay.innerText = 'message';
//      inputControl.ClassList.add('success');
//     inputControl.ClassList.remove('error');
//  }

//  const ValidateInputs = () => {
//      const usernameValue = username.value.trim();
//      const passwordValue = password.value.trim();
//     const emailValue = email.value.trim();
//      const numberValue = number.value.trim();
//      const adressValue = adress.value.trim();

//      if (usernameValue === '') {
//         setError(username,'Username is required');
//      } else  {
//          setSuccess(username);
//      }

//     }

// var userError = document.getElementById('error-user');
// document.addEventListener("click", validateName)
// function validateName() {
//     let user  = document.getElementById('usernamee').value;
//     if (user.value == 0) {
//         userError.innerHTML = 'Username is required';
//         return false;
//     }
//     }
//     userError.innerHTML = 'valid'
//     return true;

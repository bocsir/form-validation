//clear classlist of each field, add to valid/invalid list
function validateForm(event) {
    event.preventDefault();
    let username = document.getElementById("username");
    username.classList = [];
    let email = document.getElementById("email");
    email.classList = [];
    let password = document.getElementById("password");
    password.classList = [];
    let confirmPassword = document.getElementById("confirm-password");
    confirmPassword.classList = [];

    if(username.value.length >= 3) {
        username.classList.add('valid');
    } else {
        username.classList.add('invalid');
    }

    if(!validateEmail(email.value)) {
        email.classList.add('invalid')
    } else {
        email.classList.add('valid');
    }
 
    if(password.value.length >=6) {
        password.classList.add('valid');
    } else {
        password.classList.add('invalid');
    }

    if(confirmPassword.value === password.value && password.value !== '') {
        confirmPassword.classList.add('valid');
    } else {
        confirmPassword.classList.add('invalid');
    }
}

//check email format
function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

//password toggle
function togglePasswordVisibility(toggleEye) {
    let passwordInput = document.getElementById("password");

    if (toggleEye.previousElementSibling.type === 'password') {
        toggleEye.previousElementSibling.type = 'text';
        toggleEye.innerHTML = '<i class="fa-regular fa-eye"></i>';
    } else {
        toggleEye.previousElementSibling.type = 'password';
        toggleEye.innerHTML = '<i class="fa-regular fa-eye-slash"></i>';
    }
}
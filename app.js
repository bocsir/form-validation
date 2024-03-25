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
document.querySelectorAll('.toggle-eye').forEach((toggleEye) => {
    toggleEye.addEventListener('mousedown', () => {
        // Get the input element preceding the clicked element
        const inputElement = toggleEye.previousElementSibling;

        // Check if the input element exists and if its type is 'password'
        if (inputElement && inputElement.type === 'password') {
            inputElement.type = 'text';
            toggleEye.innerHTML = '<i class="fa-regular fa-eye"></i>';
        } else if (inputElement && inputElement.type === 'text') {
            inputElement.type = 'password';
            toggleEye.innerHTML = '<i class="fa-regular fa-eye-slash"></i>';
        }
    });
});
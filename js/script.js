

const form = document.getElementById("form1");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const phoneNumber = document.getElementById("phone-number");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPass = document.getElementById("confirm-password");

form.addEventListener('submit', e => {
    e.preventDefault();
    validateInputes();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');

} 

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}

const validateInputes = () => {
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const phoneNumberValue = phoneNumber.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const confirmPassValue = confirmPass.value.trim();

    if (firstNameValue === "") {
        setError(firstName, 'First name is required')
    }
    else setSuccess(firstName);

    if (lastNameValue === "") {
        setError(lastName, 'Last name is required')
    }
    else setSuccess(lastName);

    if (phoneNumberValue === "") {
        setError(phoneNumber, 'Phone number is required')
    }
    else if(phoneNumberValue.length != 10){
        setError(phoneNumber, 'Phone number must be 10 digits')
    }
    else setSuccess(phoneNumber)

    if (emailValue === "") {
        setError(email, 'Email is required')
    }
    else setSuccess(email);

    if (passwordValue === "" ){
        setError(password, 'Password is required')
    }
    else if(passwordValue.length < 8) {
        setError(password, 'Password must have at least 8 characters')
    }
    else setSuccess(password)

    if( confirmPassValue === ""){
        setError(confirmPass, 'Please confirm your password')
    }
    else if ( confirmPassValue != passwordValue ) {
        setError(confirmPass, 'Passwords do not match');
    }
    else setSuccess(confirmPass);
}



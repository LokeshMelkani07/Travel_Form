// Form Validation Project using regular expressions

// we will validate name , phone , email using regular expression
const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('mobileNumber');
let validEmail = false;
let validName = false;
let validPhone = false;

name.addEventListener('blur', () => {
    console.log('Name is blurred');
    // validate this Name
    let regx = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;
    let str = name.value;
    console.log(regx, str);
    // To validate a form using bootstrap we need to add is-invalid class in input tag to show its invalid and we have to add has-validation or is-valid in input tag to show its valid
    // so we will use is-invalid if it does not matches and is-valid if it matches
    if (regx.test(str)) {
        console.log('Your Name is Valid');
        name.classList.remove('is-invalid');
        name.classList.add('is-valid');
        validName = true;
    }
    else {
        console.log('Your Name is Invalid');
        name.classList.remove('is-valid');
        name.classList.add('is-invalid');
        validName = false;
    }

})
email.addEventListener('blur', () => {
    console.log('Email is blurred');
    // validate this Email
    let regx = /^([_\.\-0-9a-zA-Z]+)@([_\.\-0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    // let regx = /^[a-zA-Z]([a-zA-Z]){1,20}[0-9]{1,10}(@gmail.com)$/;
    let str = email.value;
    console.log(regx, str);
    if (regx.test(str)) {
        console.log('Your Email is Valid');
        email.classList.remove('is-invalid');
        email.classList.add('is-valid');
        validEmail = true;
    }
    else {
        console.log('Your Email is Invalid');
        email.classList.remove('is-valid');
        email.classList.add('is-invalid');
        validEmail = false;
    }
})
phone.addEventListener('blur', () => {
    console.log('Phone number is blurred');
    // validate this Number
    let regx = /^([0-9]){10}$/;
    let str = phone.value;
    console.log(regx, str);
    if (regx.test(str)) {
        console.log('Your phone is Valid');
        phone.classList.remove('is-invalid');
        phone.classList.add('is-valid');
        validPhone = true;
    }
    else {
        console.log('Your phone is Invalid');
        phone.classList.remove('is-valid');
        phone.classList.add('is-invalid');
        validPhone = false;
    }
})

let submit = document.getElementById('submit');
submit.addEventListener('click', (e) => {
    // Submit button has a default behaviour of reload so to prevent it we use preventDefault
    e.preventDefault();
    console.log('You Clicked on Submit');
    // Submit Your Form Here
    if (validEmail && validName && validPhone) {
        console.log('Form is Valid and ready to submit');
        let success = document.getElementById('success');
        success.classList.add('show');
        failure.classList.remove('show');
        let form = document.getElementById('form');
        form.reset()
    }
    else {
        console.log('Name,Email or phone number is not valid.Not ready to submit.Try Again');
        let failure = document.getElementById('failure');
        failure.classList.add('show');
        success.classList.remove('show');
    }



})
const validateForm = (function() {

    // Form field
    const form = document.querySelector('form')

    // Name field.
    const name = document.getElementById('name')
    const nameError = document.querySelector('.name-error')

    // Email field.
    const email = document.getElementById('mail')
    const emailError = document.querySelector('.mail-error')

    // ZIP code field.
    const zip = document.getElementById('zip')
    const zipError = document.querySelector('.zip-error')
    const validZipCode = '000000'
    let validZip = false

    // Password / Confirm password fields.
    const pwd = document.getElementById('password')
    const confPwd = document.getElementById('confirmPwd')
    const pwdError = document.querySelector('.password-error')
    const confPwdError = document.querySelector('.confirm-error')

    function handleNameInputs() {
        if(name.validity.valueMissing) {
            nameError.textContent = 'Please enter a name.'
        } else if(name.validity.patternMismatch) {
            nameError.textContent = 'Name can only contain alphabets.'
        } else {
            nameError.textContent = ''
        }
    }

    function handleMailInputs() {
        if(email.validity.valueMissing) {
            emailError.textContent = 'Please enter an email.'
        } else if(email.validity.typeMismatch) {
            emailError.textContent = 'Email is in the wrong format.'
        } else if(email.validity.tooShort) {
            emailError.textContent = 'Email should contain at least 8 chars.'
        } else {
            emailError.textContent = ''
        }
    }

    function handleZipInputs() {
        if(zip.value === validZipCode) {
            validZip = true
            zipError.textContent = ''
        } else {
            validZip = false
            zipError.textContent = 'Invalid or empty ZIP code.'
        }
    }

    function handlePasswordInputs() {
        if(pwd.validity.valueMissing) {
            pwdError.textContent = 'Password should not be left empty.'
        } else if(pwd.validity.patternMismatch) {
            pwdError.textContent = 'Min 8 chars, 1 uppercase letter, 1 lowercase letter, 1 number and 1 special character:'
        } else if(pwd.validity.tooShort) {
            pwdError.textContent = 'Should be at least 8 chars.'
        } else {
            pwdError.textContent = ''
        }

        // Check if passwords are equal when the user types in the confirm password field
        if (confPwd.value !== pwd.value) {
            confPwdError.textContent = 'Passwords do not match.';
        } else {
            confPwdError.textContent = '';
        }
    }

    function handleSubmit(e) {
        if(!name.validity.valid) {
            handleNameInputs()
            console.log('1')
            e.preventDefault()
        } else if(!email.validity.valid) {
            handleMailInputs()
            console.log('2')
            e.preventDefault()
        } else if(!validZip) {
            handleZipInputs()
            console.log('3')
            e.preventDefault()
        } else if (!pwd.validity.valid || confPwd.value !== pwd.value) {
            handlePasswordInputs();
            console.log('4')
            e.preventDefault();
        }
    }

    // Form event listener.
    form.addEventListener('submit', handleSubmit)

    // Input fields event listeners.
    name.addEventListener('input', handleNameInputs)
    email.addEventListener('input', handleMailInputs)
    zip.addEventListener('input', handleZipInputs)
    pwd.addEventListener('input', handlePasswordInputs)
    confPwd.addEventListener('input', handlePasswordInputs)

    return {
        handleNameInputs,
        handleMailInputs,
        handleZipInputs,
        handlePasswordInputs
    }

})()

export {validateForm}
function validateRegistration() {
    let username = document.getElementById('user').value;
    let email = document.getElementById('emails').value;
    let password = document.getElementById('pass').value;
    let confirmPassword = document.getElementById('cpass').value;
    let phoneNumber = document.getElementById('num').value;

    document.getElementById('usr').innerText = '';
    document.getElementById('eml').innerText = '';
    document.getElementById('pas').innerText = '';
    document.getElementById('cpas').innerText = '';
    document.getElementById('nm').innerText = '';

    let isValid = true;

    if (username === '') {
        document.getElementById('usr').innerText = 'Username is required.';
        isValid = false;
    }

    if (email === '') {
        document.getElementById('eml').innerText = 'Email is required.';
        isValid = false;
    }

    if (password === '') {
        document.getElementById('pas').innerText = 'Password is required.';
        isValid = false;
    } else if (password !== confirmPassword) {
        document.getElementById('cpas').innerText = 'Passwords do not match.';
        isValid = false;
    }

    if (phoneNumber === '') {
        document.getElementById('nm').innerText = 'Phone number is required.';
        isValid = false;
    }

    return isValid;
}

function validateLogin() {
    let username = document.getElementById('adminUser').value;
    let password = document.getElementById('adminPass').value;

    document.getElementById('adminUserError').innerText = '';
    document.getElementById('adminPassError').innerText = '';

    let isValid = true;

    if (username === '') {
        document.getElementById('adminUserError').innerText = 'Username is required.';
        isValid = false;
    }

    if (password === '') {
        document.getElementById('adminPassError').innerText = 'Password is required.';
        isValid = false;
    }

    return isValid;
}

function validateCustomerLogin() {
    let username = document.getElementById('customerUser').value;
    let password = document.getElementById('customerPass').value;

    document.getElementById('customerUserError').innerText = '';
    document.getElementById('customerPassError').innerText = '';

    let isValid = true;

    if (username === '') {
        document.getElementById('customerUserError').innerText = 'Username is required.';
        isValid = false;
    }

    if (password === '') {
        document.getElementById('customerPassError').innerText = 'Password is required.';
        isValid = false;
    }

    return isValid;
}

function validateContact() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    document.getElementById('nameError').innerText = '';
    document.getElementById('emailError').innerText = '';
    document.getElementById('messageError').innerText = '';

    let isValid = true;

    if (name === '') {
        document.getElementById('nameError').innerText = 'Name is required.';
        isValid = false;
    }

    if (email === '') {
        document.getElementById('emailError').innerText = 'Email is required.';
        isValid = false;
    }

    if (message === '') {
        document.getElementById('messageError').innerText = 'Message is required.';
        isValid = false;
    }

    return isValid;
}

function validateProductManagement() {
    let productName = document.getElementById('productName').value;
    let productPrice = document.getElementById('productPrice').value;

    document.getElementById('productNameError').innerText = '';
    document.getElementById('productPriceError').innerText = '';

    let isValid = true;

    if (productName === '') {
        document.getElementById('productNameError').innerText = 'Product name is required.';
        isValid = false;
    }

    if (productPrice === '') {
        document.getElementById('productPriceError').innerText = 'Product price is required.';
        isValid = false;
    }

    return isValid;
}

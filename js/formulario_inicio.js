window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0);
});

function toggleMenu() {
    const menuToggle = document.querySelector('.menuToggle');
    const navigation = document.querySelector('.navigation');

    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
}

const form = document.getElementById('form');
const username = document.getElementById('username');
const password = document.getElementById('password');

$('#form').on('submit', function(e) {
    e.preventDefault();

    checkInputs();
})

$('#username').on('input', function(e) {
    e.preventDefault();
    checkName();
});

$('#password').on('input', function(e) {
    e.preventDefault();
    checkPassword();
});


function checkName() {
    const usernameValue = username.value.trim();
    if (usernameValue === '') {
        setErrorFor(username, 'Debe ingresar un nombre de usuario');
    } else {
        setSuccessFor(username);
    }
}

function checkPassword() {
    const passwordValue = password.value.trim();
    if (passwordValue === '') {
        setErrorFor(password, 'Debe ingresar un comentario');
    } else {
        setSuccessFor(password);
    }
}


function checkInputs() {
    // trim to remove the whitespaces
    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();


    if (usernameValue === '') {
        setErrorFor(username, 'Debe ingresar un nombre de usuario');
    } else {
        setSuccessFor(username);
    }

    if (passwordValue === '') {
        setErrorFor(password, 'Debe ingresar una contraseña');
    } else {
        setSuccessFor(password);
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

// SOCIAL PANEL JS
const floating_btn = document.querySelector('.floating-btn');
const close_btn = document.querySelector('.close-btn');
const social_panel_container = document.querySelector('.social-panel-container');

floating_btn.addEventListener('click', () => {
    social_panel_container.classList.toggle('visible')
});

close_btn.addEventListener('click', () => {
    social_panel_container.classList.remove('visible')
});
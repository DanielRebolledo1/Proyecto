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


//Formulario de contacto
const form = document.getElementById('form');
const usuario = document.getElementById('username');
const email = document.getElementById('email');
const comentario = document.getElementById('comentario');

form.addEventListener('submit', e => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    // trim to remove the whitespaces
    const usuarioValue = usuario.value.trim();
    const emailValue = email.value.trim();
    const comentarioValue = comentario.value.trim();

    if (usuarioValue === '') {
        setErrorFor(usuario, 'Debe ingresar un nombre de usuario');
    } else {
        setSuccessFor(usuario);
    }

    if (emailValue === '') {
        setErrorFor(email, 'Debe ingresar un Email');
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'No ingreso un email válido');
    } else {
        setSuccessFor(email);
    }

    if (comentarioValue === '') {
        setErrorFor(comentario, 'Debe ingresar un comentario');
    } else {
        setSuccessFor(comentario);
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

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
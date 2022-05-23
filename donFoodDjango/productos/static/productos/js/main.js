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


/*
$.get("/static/productos/api/api.json",
    function(data) {
        //console.log(data);
        $.each(data.categories, function(i, item) {
            $("#categorias").append("<tr><td>" +
                item.strCategory + "</td> <td> <img src='" + item.strCategoryThumb + "' class= 'img-fluid'> </td> <td>" +
                item.strCategoryDescription + "</td></tr>");
        });
    });
*/


//Formulario de contacto
const form = document.getElementById('form');
const usuario = document.getElementById('username');
const email = document.getElementById('email');
const comentario = document.getElementById('comentario');


$('#form').on('submit', function(e) {
    e.preventDefault();

    checkInputs();
})

$('#username').on('input', function(e) {
    e.preventDefault();
    checkName();
})

$('#email').on('input', function(e) {
    e.preventDefault();
    checkEmail();
})

$('#comentario').on('input', function(e) {
    e.preventDefault();
    checkComentario();
})

function checkName() {
    const usuarioValue = usuario.value.trim();
    if (usuarioValue === '') {
        setErrorFor(usuario, 'Debe ingresar un nombre de usuario');
    } else {
        setSuccessFor(usuario);
    }
}

function checkEmail() {
    const emailValue = email.value.trim();
    if (emailValue === '') {
        setErrorFor(email, 'Debe ingresar un Email');
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'No ingreso un email válido');
    } else {
        setSuccessFor(email);
    }
}

function checkComentario() {
    const comentarioValue = comentario.value.trim();
    if (comentarioValue === '') {
        setErrorFor(comentario, 'Debe ingresar un comentario');
    } else {
        setSuccessFor(comentario);
    }
}


email.addEventListener('input', () => {
    checkEmail();
});

comentario.addEventListener('input', () => {
    checkComentario();
});

function checkName() {
    const usuarioValue = usuario.value.trim();
    if (usuarioValue === '') {
        setErrorFor(usuario, 'Debe ingresar un nombre de usuario');
    } else {
        setSuccessFor(usuario);
    }
}

function checkEmail() {
    const emailValue = email.value.trim();
    if (emailValue === '') {
        setErrorFor(email, 'Debe ingresar un Email');
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'No ingreso un email válido');
    } else {
        setSuccessFor(email);
    }
}

function checkComentario() {
    const comentarioValue = comentario.value.trim();
    if (comentarioValue === '') {
        setErrorFor(comentario, 'Debe ingresar un comentario');
    } else {
        setSuccessFor(comentario);
    }
}


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
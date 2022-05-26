body = document.body;

window.addEventListener('scroll', function () {
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

if (body.classList.contains('home')) {
    $(document).ready(function () {

        //Formulario de contacto
        const $form = $('#form');
        const $username = $('#username');
        const $email = $('#email');
        const $comentario = $('#comentario');

        $form.on('submit', function (e) {
            e.preventDefault();

            checkContactoInputs($username.get(0), $email.get(0), $comentario.get(0));
        })

        $username.on('input', function (e) {
            e.preventDefault();
            checkEmptyInput($username.get(0), 'Debe ingresar un nombre de usuario');
        })

        $email.on('input', function (e) {
            e.preventDefault();
            checkEmail($email.get(0));
        })

        $comentario.on('input', function (e) {
            e.preventDefault();
            checkEmptyInput($comentario.get(0), 'Debe ingresar un comentario');
        })
    });
}

if (body.classList.contains('login')) {
        //formulario Inicio sesion
        const $form = $('#form');
        const $username = $('#username');
        const $password = $('#password');

    $form.on('submit', function (e) {
        e.preventDefault();

        checkLoginInputs($username.get(0),$password.get(0));
    })

    $username.on('input', function (e) {
        e.preventDefault();
        checkEmptyInput($username.get(0),'Debe ingresar un nombre de usuario');
    });

    $password.on('input', function (e) {
        e.preventDefault();
        checkEmptyInput($password.get(0),'Debe ingresar una contraseña');
    });
}

function checkEmptyInput(input, errormsg) {
    const inputValue = input.value.trim();
    if (inputValue === '') {
        setErrorFor(input, errormsg);
    } else {
        setSuccessFor(input);
    }
}

function checkEmail(email) {
    const emailValue = email.value.trim();
    if (emailValue === '') {
        setErrorFor(email, 'Debe ingresar un Email');
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'No ingreso un email válido');
    } else {
        setSuccessFor(email);
    }
}


function checkContactoInputs(usuario, email, comentario) {
    checkEmptyInput(usuario, 'Debe ingresar un nombre de usuario');
    checkEmail(email);
    checkEmptyInput(comentario, 'Debe ingresar un comentario');
}

function checkLoginInputs(usuario, password) {
    checkEmptyInput(usuario, 'Debe ingresar un nombre de usuario');
    checkEmptyInput(password, 'Debe ingresar una contraseña');
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
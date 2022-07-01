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

const username = document.getElementById('id_username');
const email = document.getElementById('id_email');
const password = document.getElementById('id_password');
const password2 = document.getElementById('password2');

$('#form').on('submit', function (e) {
    e.preventDefault();
    if (checkInputs()) {
        $.ajax({
            url: '',
            type: 'POST',
            headers: {'X-CSRFToken': '{{ csrf_token }}'},
            data: $(this).serialize(),
            success: function (response) {
                console.log(response)
                if (JSON.stringify(response).includes('error')) {
                    let error = JSON.parse(JSON.stringify(response.error));
                    if (error === 'username') {
                        setErrorFor($('#id_username').get(0), 'Usuario ya registrado');
                    }
                }else{
                    window.location = JSON.parse(JSON.stringify(response.url));
                }
            },
        });
    }
})

$('#id_username').on('input', function (e) {
    if (!checkName()) {
        e.preventDefault();
    }
});

$('#id_password').on('input', function (e) {
    if (!checkPassword()) {
        e.preventDefault();
    }
});

$('#id_email').on('input', function (e) {
    if (!checkEmail()) {
        e.preventDefault();
    }
})

$('#password2').on('input', function (e) {
    if (!checkPassword1()) {
        e.preventDefault();
    }
})

function checkName() {
    const usernameValue = username.value.trim();
    if (usernameValue === '') {
        setErrorFor(username, 'Debe ingresar un nombre de usuario');
        return false
    } else {
        setSuccessFor(username);
        return true
    }
}

function checkEmail() {
    const emailValue = email.value.trim();
    if (emailValue === '') {
        setErrorFor(email, 'Debe ingresar un Email');
        return false
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'No ingreso un email válido');
        return false
    } else {
        setSuccessFor(email);
        return true
    }
}

function checkPassword() {
    const passwordValue = password.value.trim();
    if (passwordValue === '') {
        setErrorFor(password, 'Debe ingresar un comentario');
        return false
    } else {
        setSuccessFor(password);
        return true
    }
}

function checkPassword1() {
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    if (password2Value === '') {
        setErrorFor(password2, 'Debe ingresar contraseña');
        return false
    } else if (passwordValue !== password2Value) {
        setErrorFor(password2, 'Las contraseñas no coinciden');
        return false
    } else {
        setSuccessFor(password2);
        return true
    }
}


function checkInputs() {
    // trim to remove the whitespaces
    let successful = true;
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if (usernameValue === '') {
        setErrorFor(username, 'Debe ingresar un nombre de usuario');
        successful = false;
    } else {
        setSuccessFor(username);
    }

    if (emailValue === '') {
        setErrorFor(email, 'Debe ingresar un Email');
        successful = false;
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Email no valido');
        successful = false;
    } else {
        setSuccessFor(email);
    }

    if (passwordValue === '') {
        setErrorFor(password, 'Debe ingresar una contraseña');
        successful = false;
    } else {
        setSuccessFor(password);
    }

    if (password2Value === '') {
        setErrorFor(password2, 'Debe ingresar contraseña');
        successful = false;
    } else if (passwordValue !== password2Value) {
        setErrorFor(password2, 'Las contraseñas no coinciden');
        successful = false;
    } else {
        setSuccessFor(password2);
    }
    return successful
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
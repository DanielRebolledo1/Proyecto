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

if (body.classList.contains('carta')){

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
        socialPanel();
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
    const $username = $('#id_username');
    const $password = $('#id_password');
    socialPanel();
    $form.on('submit', function (e) {
        e.preventDefault();
        if (checkLoginInputs($username.get(0), $password.get(0))) {

            $.ajax({
                url: '',
                type: 'POST',
                headers: {'X-CSRFToken': '{{ csrf_token }}'},
                data: $form.serialize(),
                success: function (response) {
                    if (JSON.stringify(response).includes('error')) {
                        let error = JSON.parse(JSON.stringify(response.error));
                        if (error === 'username') {
                            setErrorFor($username.get(0), 'Usuario no registrado');
                        } else if (error === 'password') {
                            setErrorFor($password.get(0), 'Contraseña incorrecta');
                        }
                    } else {
                        window.location = JSON.parse(JSON.stringify(response.url));
                    }
                },
            });
        }
    })
    $username.on('input', function (e) {
        if (checkEmptyInput($username.get(0), 'Debe ingresar un nombre de usuario')) {
            e.preventDefault();
        }
    });

    $password.on('input', function (e) {
        if (checkEmptyInput($password.get(0), 'Debe ingresar una contraseña')) {
            e.preventDefault();
        }
    });
}

if (body.classList.contains('agregarCocinero')) {
    const csrftoken = getCookie('csrftoken');
    const sessiontoken = getCookie('sessiontoken');
    const $form = $('#formulario');
    $form.on('submit', function (e) {
        e.preventDefault();

        $.ajax({
            url: '/api/lista_cocineros',
            type: 'POST',
            headers: {'X-CSRFToken': csrftoken, 'Authorization': 'Token ' + sessiontoken},
            data: $form.serialize(),
            success: function (response) {
                window.location = '/api/listar_cocinero/';
            },
        });
    })
}

if (body.classList.contains('listadoCocineros')) {
    const csrftoken = getCookie('csrftoken');
    const sessiontoken = getCookie('sessiontoken');
    const $tabla = $('#tabla');
    $.ajax({
        url: '/api/lista_cocineros',
        type: 'GET',
        headers: {'X-CSRFToken': csrftoken, 'Authorization': 'Token ' + sessiontoken},
        success: function (response) {
            $.each(response, function () {
                eliminar = '<button class="btn btn-sm delete-btn" type="button" value="'+this.rut+'"><i class="fa-solid fa-trash"></i></button>'
                modificar = '<a href="/api/modificar_cocinero/'+this.rut+'"><button class="btn btn-sm edit-btn" type="button" value="'+this.rut+'"><i class="fa-solid fa-gear"></i></button></a>'
                div = '<tr><td>' + this.rut + '-' + this.dv + '</td>' +
                    '<td>' + this.nombre + ' ' + this.apellido + '</td>' +
                    '<td>' + this.correo + '</td><td>' + this.contacto + '</td><td>'+modificar+'</td><td>' + eliminar + '</td></tr>'
                $tabla.append(div)
            });
            $('.delete-btn').each(function () {
                $(this).on('click', function () {
                    $.ajax({
                        url: '/api/modificar_cocineros/'+ this.value,
                        type: 'DELETE',
                        headers: {'X-CSRFToken': csrftoken, 'Authorization': 'Token ' + sessiontoken},
                        success: function (response) {
                            window.location.reload();
                        },
                    });
                });
            });
        },
    });
}

if (body.classList.contains('modificar_cocineros')) {
    const csrftoken = getCookie('csrftoken');
    const sessiontoken = getCookie('sessiontoken');
    const $form = $('#formulario');
    const $rut = $('#id_rut');
    //$rut.attr('disabled', true);
    $form.on('submit', function (e) {
        e.preventDefault();

        $.ajax({
            url: '/api/modificar_cocineros/'+ $rut.val(),
            type: 'PUT',
            headers: {'X-CSRFToken': csrftoken, 'Authorization': 'Token ' + sessiontoken},
            data: $form.serialize(),
            success: function (response) {
                window.location = '/api/listar_cocinero/';
            },
        });
    })
}


function checkEmptyInput(input, errormsg) {
    const inputValue = input.value.trim();
    if (inputValue === '') {
        setErrorFor(input, errormsg);
        return true
    } else {
        setSuccessFor(input);
        return false
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
    return !checkEmptyInput(usuario, 'Debe ingresar un nombre de usuario') && !checkEmptyInput(password, 'Debe ingresar una contraseña');

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

function socialPanel() {// SOCIAL PANEL JS
    const floating_btn = document.querySelector('.floating-btn');
    const close_btn = document.querySelector('.close-btn');
    const social_panel_container = document.querySelector('.social-panel-container');

    floating_btn.addEventListener('click', () => {
        social_panel_container.classList.toggle('visible')
    });

    close_btn.addEventListener('click', () => {
        social_panel_container.classList.remove('visible')
    });
}

function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}
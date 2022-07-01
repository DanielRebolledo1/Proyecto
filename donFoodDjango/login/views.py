from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required, user_passes_test
from django.http import JsonResponse
from django.shortcuts import render, redirect
from django.contrib.auth.hashers import make_password
from rest_framework.authtoken.models import Token

from .forms import LoginForm, RegistroForm
from django.contrib.auth.models import User
#from social_django.models import UserSocialAuth
# Create your views here.

@user_passes_test(lambda u: u.is_authenticated is False, login_url='home')
def login_view(request):
    datos = {
        'loginForm': LoginForm(),
    }

    if request.method == 'POST':
            user = request.POST['username']
            try:
                User.objects.get(username=user)
            except User.DoesNotExist:
                return JsonResponse({'error': 'username'})
            password = request.POST['password']
            loginUser = authenticate(request, username=user, password=password)
            if loginUser is not None:
                token, created = Token.objects.get_or_create(user=loginUser)
                if not created:
                    token.delete()
                    token = Token.objects.create(user=loginUser)
                login(request, loginUser)
                response = JsonResponse({'url': '/'})
                response.set_cookie('sessiontoken', token)
                return response
            else:
                return JsonResponse({'error': 'password'})
    return render(request, "login/formInicioSesion.html", datos)

def register(request):
    datos = {
        'registroForm': RegistroForm(),
    }

    if request.method == 'POST':
        form = RegistroForm(request.POST)
        if form.is_valid():
            user = form.save(commit=False)
            user.password = make_password(user.password)
            user.save()
            return JsonResponse({'url': '/login/'})
        else:
            return JsonResponse({'success': False, 'error': 'username'})
    return render(request, "login/formRegistro.html", datos)

@login_required
def logout_view(request):
    try:
        token = Token.objects.get(user=request.user)
    except Token.DoesNotExist:
        token = None
    if token is not None:
        token.delete()
    logout(request)
    response = redirect('home')
    response.delete_cookie('sessiontoken')
    return response
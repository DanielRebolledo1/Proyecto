from django.shortcuts import render

# Create your views here.

def home(request):
    return render(request,'productos/index.html')

def formRegistro(request):
    return render(request,'productos/formRegistro.html')

def formInicio(request):
    return render(request,'productos/formInicioSesion.html')

def carta(request):
    return render(request,'productos/carta.html')
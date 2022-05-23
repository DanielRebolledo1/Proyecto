from django.shortcuts import render
from .models import Comida
from .forms import ComidaForm

# Create your views here.

def home(request):
    return render(request, 'productos/index.html')

def formRegistro(request):
    return render(request, 'productos/formRegistro.html')

def formInicio(request):
    return render(request, 'productos/formInicioSesion.html')

def carta(request):
    lista_comida = Comida.objects.all()
    datos={
        'comida': lista_comida
    }
    return render(request, 'productos/carta.html', datos)

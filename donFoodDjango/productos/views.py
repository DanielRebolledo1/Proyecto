from django.contrib import messages
from django.shortcuts import render, redirect
from .models import Comida
from .forms import ComidaForm


# Create your views here.

def home(request):
    return render(request, 'productos/index.html')


def administrar(request):
    lista_comida = Comida.objects.all()
    datos = {
        'comida': lista_comida
    }
    return render(request, 'productos/administrar.html', datos)


def carta(request):
    lista_comida = Comida.objects.all()
    datos = {
        'comida': lista_comida
    }
    return render(request, 'productos/carta.html', datos)


def form_agregar(request):
    datos = {
        'form': ComidaForm(),
    }
    if request.method == 'POST':
        form = ComidaForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            datos['mensaje'] = 'Guardado correctamente'
        else:
            datos['mensaje'] = form.errors
    return render(request, 'productos/formAgregar.html', datos)


def form_mod(request, id):
    comida = Comida.objects.get(id=id)

    datos = {
        'form': ComidaForm(instance=comida)
    }
    if request.method == 'POST':
        form = ComidaForm(request.POST, request.FILES, instance=comida)
        if form.is_valid():
            form.save()
            datos['mensaje'] = 'Guardado correctamente'
        else:
            datos['mensaje'] = form.errors
    return render(request, 'productos/formModificar.html', datos)


def form_del(request, id):
    comida = Comida.objects.get(id=id)
    comida.delete()
    return redirect(to='administrar')
from django.contrib import messages
from django.shortcuts import render, redirect


from carrito.carrito import Carrito
from productos.models import Comida


def agregar_producto(request, id):
    carrito = Carrito(request)
    producto = Comida.objects.get(id=id)
    carrito.agregar(producto)
    return redirect("carta")


def eliminar_producto(request, id):
    carrito = Carrito(request)
    producto = Comida.objects.get(id=id)
    carrito.eliminar(producto)
    return redirect("carta")


def restar_producto(request, id):
    carrito = Carrito(request)
    producto = Comida.objects.get(id=id)
    carrito.restar(producto)
    return redirect("carta")


def limpiar_carrito(request):
    carrito = Carrito(request)
    carrito.limpiar()
    return redirect("carta")

def procesar_compra(request):
    messages.success(request, 'Gracias por su Compra!!')
    carrito = Carrito(request)
    carrito.limpiar()
    return redirect("carta")



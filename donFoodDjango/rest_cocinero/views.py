from django.shortcuts import render, redirect
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.parsers import JSONParser
from django.views.decorators.csrf import csrf_exempt
from productos.models import Cocinero
from rest_cocinero.serializers import CocineroSerializer
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from .forms import CocineroForm

# Create your views here.
@csrf_exempt
@api_view(['GET','POST'])
@permission_classes((IsAuthenticated,))
def lista_cocineros(request):
    if request.method == 'GET':
        lista_cocineros = Cocinero.objects.all()
        serializer = CocineroSerializer(lista_cocineros, many= True)
        return Response(serializer.data)
    elif request.method == 'POST':
        #dataP = JSONParser().parse(request)
        serializer = CocineroSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status= status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status= status.HTTP_400_BAD_REQUEST)


@csrf_exempt
@api_view(['GET', 'PUT', 'DELETE'])
@permission_classes((IsAuthenticated,))
def modificar_cocineros(request, id):
    try:
        cocinero = Cocinero.objects.get(rut=id)
    except Cocinero.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = CocineroSerializer(cocinero)
        return Response(serializer.data)
    elif request.method == 'PUT':
        #dataParse = JSONParser().parse(request)
        serializer = CocineroSerializer(cocinero, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        cocinero.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

def ListadoCocinero(request):
    return render(request, 'rest_cocinero/cocineros.html')

def AgregarCocinero(request):
    datos = {
        'form': CocineroForm(),
    }
    return render(request, 'rest_cocinero/formAgregar.html', datos)

def ModificarCocinero(request, id):
    cocinero = Cocinero.objects.get(rut=id)

    datos = {
        'form': CocineroForm(instance=cocinero)
    }
    return render(request, 'rest_cocinero/formModificar.html', datos)

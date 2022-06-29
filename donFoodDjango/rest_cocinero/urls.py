from django.urls import path
from rest_cocinero.views import lista_cocineros, modificar_cocineros, AgregarCocinero, ModificarCocinero,ListadoCocinero
from rest_cocinero.viewsLogin import login

urlpatterns = [
    path('lista_cocineros',lista_cocineros, name= "lista_cocineros"),
    path('modificar_cocineros/<id>', modificar_cocineros, name='modificar_cocineros'),
    path('login',login,name='loginApi'),
    path('listar_cocinero/', ListadoCocinero, name='ListadoCocinero'),
    path('agregar_cocinero/', AgregarCocinero, name='agregar_cocinero'),
    path('modificar_cocinero/<id>', ModificarCocinero, name='modificar_cocinero'),
]
from django.urls import path
from rest_cocinero.views import lista_cocineros, modificar_cocineros
from rest_cocinero.viewsLogin import login

urlpatterns = [
    path('lista_cocineros',lista_cocineros, name= "lista_cocineros"),
    path('modificar_cocineros/<id>', modificar_cocineros, name='modificar_cocineros'),
    path('login',login,name='login'),
]
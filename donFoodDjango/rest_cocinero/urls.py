from django.urls import path
from rest_cocinero.views import lista_cocineros, modificar_cocineros

urlpatterns = [
    path('lista_cocineros',lista_cocineros, name= "lista_cocineros"),
    path('modificar_cocineros/<id>', modificar_cocineros, name='modificar_cocineros'),
]
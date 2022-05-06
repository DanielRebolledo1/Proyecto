from django.urls import path
from .views import home, formInicio, formRegistro, carta

urlpatterns = [
    path('',home,name='home'),
    path('formInicio/',formInicio,name='formInicio'),
    path('formRegistro/',formRegistro,name='formRegistro'),
    path('carta/',carta,name='carta'),
]

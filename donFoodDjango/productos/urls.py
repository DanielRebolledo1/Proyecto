from django.urls import path
from .views import home, formInicio, formRegistro, carta, form_agregar, form_mod, administrar,form_del

urlpatterns = [
    path('',home,name='home'),
    path('formInicio/',formInicio,name='formInicio'),
    path('formRegistro/',formRegistro,name='formRegistro'),
    path('carta/',carta,name='carta'),
    path('formAgregar/',form_agregar,name='formAgregar'),
    path('formModificar/<id>',form_mod,name='formModificar'),
    path('administrar/',administrar,name='administrar'),
    path('formEliminar/<id>',form_del,name='formEliminar'),
]

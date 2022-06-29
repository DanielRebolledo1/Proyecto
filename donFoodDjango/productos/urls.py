from django.urls import path
from .views import home, carta, form_agregar, form_mod, administrar,form_del
from login.views import login_view,logout_view,register

urlpatterns = [
    path('',home,name='home'),
    path('login/', login_view,name='login'),
    path('registro/',register,name='registro'),
    path('logout/', logout_view, name= 'logout'),
    path('carta/',carta,name='carta'),
    path('formAgregar/',form_agregar,name='formAgregar'),
    path('formModificar/<id>',form_mod,name='formModificar'),
    path('administrar/',administrar,name='administrar'),
    path('formEliminar/<id>',form_del,name='formEliminar'),
]

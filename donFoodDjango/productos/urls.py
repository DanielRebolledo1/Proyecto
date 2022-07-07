from django.urls import path
from .views import home, carta, form_agregar, form_mod, administrar,form_del
from login.views import login_view,logout_view,register
from carrito.views import limpiar_carrito, agregar_producto, restar_producto, eliminar_producto, procesar_compra

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

    path('agregar/<int:id>/', agregar_producto, name="Add"),
    path('eliminar/<int:id>/', eliminar_producto, name="Del"),
    path('restar/<int:id>/', restar_producto, name="Sub"),
    path('limpiar/', limpiar_carrito, name="CLS"),
    path('procesar_compra/',procesar_compra, name="procesar_compra"),
    ]

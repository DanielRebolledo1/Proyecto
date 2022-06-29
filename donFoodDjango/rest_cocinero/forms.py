from django import forms
from django.forms import ModelForm
from productos.models import Cocinero

class CocineroForm(ModelForm):
    class Meta:
        model = Cocinero
        fields = ['rut','dv','nombre','apellido','correo','contacto']
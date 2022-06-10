from rest_framework import serializers
from productos.models import Cocinero


class CocineroSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cocinero
        fields = ['rut', 'dv', 'nombre', 'apellido','correo','contacto']

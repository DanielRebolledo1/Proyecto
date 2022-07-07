from django.db import models
from django.contrib.auth.models import User

class Cocinero(models.Model):
    rut = models.IntegerField(primary_key=True, verbose_name='RUT')
    dv = models.IntegerField(verbose_name='DV')
    nombre = models.CharField(max_length=60, verbose_name='Nombre')
    apellido = models.CharField(max_length=60, verbose_name='Apellido')
    correo = models.CharField(max_length=100, verbose_name='Correo')
    contacto = models.IntegerField(verbose_name='Contacto')

    def __str__(self):
        return self.nombre


class Comida(models.Model):
    id = models.AutoField(primary_key=True, verbose_name='Id')
    nombre = models.CharField(max_length=250, verbose_name='Nombre')
    imagen = models.ImageField(upload_to='productos/media', verbose_name='Imagen')
    descripcion = models.CharField(max_length=500, verbose_name='Descripción')
    precio = models.FloatField(verbose_name='Precio')

    def __str__(self):
        return self.nombre


class Bebida(models.Model):
    id = models.AutoField(primary_key=True, verbose_name='Id')
    nombre = models.CharField(max_length=250, verbose_name='Nombre')
    imagen = models.ImageField(upload_to='productos/media', verbose_name='Imagen')
    descripcion = models.CharField(max_length=500, verbose_name='Descripción')
    stock = models.IntegerField(verbose_name='Stock')
    precio = models.FloatField(verbose_name='Precio')

    def __str__(self):
        return self.nombre

class Pedido(models.Model):
    usuario = models.ForeignKey(User, on_delete=models.CASCADE, related_name="pedido")
    comidas = models.ManyToManyField(Comida)
    bebidas = models.ManyToManyField(Bebida)
    total = models.IntegerField(verbose_name='Precio')

    def __str__(self) -> str:
        return f"Id: {self.pk} | Usuario_id: {self.usuario.id} | Usuario: {self.usuario.username} | Total: {self.total}"


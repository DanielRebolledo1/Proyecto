from django.db import models


class Usuario(models.Model):
    id = models.AutoField(primary_key=True, verbose_name='Id')
    email = models.CharField(max_length=100, unique=True, verbose_name='Email')
    usuario = models.CharField(max_length=100, unique=True, verbose_name='Usuario')
    contrasena = models.CharField(max_length=100, verbose_name='Contraseña')

    def __str__(self):
        return self.usuario


class Cocinero(models.Model):
    rut = models.IntegerField(primary_key=True, verbose_name='RUT')
    dv = models.IntegerField(verbose_name='DV')
    nombre = models.CharField(max_length=60, verbose_name='Nombre')
    apellido = models.CharField(max_length=60, verbose_name='Apellido')
    correo = models.CharField(max_length=100, verbose_name='Correo')
    contacto = models.IntegerField(verbose_name='Contacto')

    def __str__(self):
        return self.rut


class Comida(models.Model):
    id = models.AutoField(primary_key=True, verbose_name='Id')
    nombre = models.CharField(max_length=250, verbose_name='Nombre')
    imagen = models.ImageField(upload_to='productos/media', verbose_name='Imagen')
    descripcion = models.CharField(max_length=500, verbose_name='Descripción')
    precio = models.FloatField(verbose_name='Precio')

    def __str__(self):
        return self.nombre


class Orden(models.Model):
    id = models.AutoField(primary_key=True, verbose_name='Id')
    cocinero = models.ForeignKey(Cocinero, on_delete=models.CASCADE)
    comidas = models.ManyToManyField(Comida)
    total = models.IntegerField(verbose_name='Precio')

    def __str__(self):
        return self.id




from django.contrib import admin
from .models import Cocinero, Orden, Comida, Usuario
# Register your models here.
admin.site.register(Cocinero)
admin.site.register(Orden)
admin.site.register(Comida)
admin.site.register(Usuario)

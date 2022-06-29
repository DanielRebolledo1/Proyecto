from django import forms
from django.forms import ModelForm
from django.contrib.auth.models import User
from django.forms.widgets import PasswordInput

class LoginForm(ModelForm):
    class Meta:
        model = User
        fields = ['username', 'password']

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields['username'].label = 'Usuario'
        self.fields['password'].widget = PasswordInput()
        self.fields['password'].label = 'Contraseña'

class RegistroForm(ModelForm):
    class Meta:
        model = User
        fields = ['username','email','password']

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields['username'].label = 'Usuario'
        self.fields['email'].label = 'Email'
        self.fields['password'].widget = PasswordInput()
        self.fields['password'].label = 'Contraseña'
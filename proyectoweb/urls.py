# proyectoweb/urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),  # Ruta que llama a la vista 'home'
]

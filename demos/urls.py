from django.urls import path
from .import views

urlpatterns = [
path('leaflet/getting-started-with-leaflet', views.leaflet_getting_started, name='leaflet-getting-started')]
from django.urls import path
from .import views

urlpatterns = [
path('leaflet/getting-started-with-leaflet', views.leaflet_getting_started, name='leaflet-getting-started'),
path('geography-game', views.geography_game, name='geography-game')
path('leaflet/major-towns-population', views.population_view, name='population')]
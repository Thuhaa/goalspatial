from django.shortcuts import render

def leaflet_getting_started(request):
	return render(request, 'demos/leaflet_getting_started.html')
def geography_game(request):
	return render(request, 'demos/geo_game.html')
# Create your views here.

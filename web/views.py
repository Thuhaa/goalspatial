from django.shortcuts import render


def homepage_view(request):
	return render(request, 'web/homepage.html')
# Create your views here.

from django.shortcuts import render


def homepage_view(request):
	return render(request, 'web/index.html')

def projects_view(request):
	return render(request, 'web/Our-Projects.html')

def learn_view(request):
	return render(request, 'web/Learn.html')

def about_view(request):
	return render(request, 'web/About.html')

def contact_view(request):
	return render(request, 'web/Contact.html')
# Create your views here.

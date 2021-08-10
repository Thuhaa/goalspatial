from django.shortcuts import render
from .models import Project, Course

def homepage_view(request):
	return render(request, 'web/index.html')

def projects_view(request):
	projects = Project.objects.all()
	context = {'projects':projects}
	return render(request, 'web/Our-Projects.html', context)

def learn_view(request):
	courses = Course.objects.all()
	context = {'courses':courses}
	return render(request, 'web/Learn.html', context)

def about_view(request):
	return render(request, 'web/About.html')

def contact_view(request):
	return render(request, 'web/Contact.html')
# Create your views here.

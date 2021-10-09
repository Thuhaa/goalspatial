from django.shortcuts import render, redirect
from .models import Project, Course, Message, Demos
from django.contrib import messages

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

def demo_view(request):
	demos = Demos.objects.all()
	context = {"demos":demos}
	return render(request, 'web/demos.html', context)

def about_view(request):
	return render(request, 'web/About.html')

def contact_view(request):
	if request.method == "POST":
		email = request.POST.get('email')
		name = request.POST.get('name')
		text = request.POST.get('message')
		message = Message.objects.create(email = email, name = name, text = text)
		return redirect('homepage')
	return render(request, 'web/Contact.html')

def shop_view(request):
	return render(request, 'web/shop.html')

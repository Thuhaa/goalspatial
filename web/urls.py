from django.urls import path
from . import views

urlpatterns = [
path('', views.homepage_view, name='homepage'),
path('our-projects', views.projects_view, name='our-projects'),
path('learn', views.learn_view, name="learn"),
path('about-us', views.about_view, name="about-us"),
path('contact-us', views.contact_view, name="contact-us"),
path('shop/', views.shop_view, name="shop")
]
"""URL Configuration""" 
from django.contrib import admin 
from django.urls import path, include 
 
urlpatterns = [ 
    path('admin/', admin.site.urls), 
    path('api/users/', include('users.urls')), 
    path('api/coins/', include('coins.urls')), 
    path('api/surveys/', include('surveys.urls')), 
    path('api/lessons/', include('lessons.urls')), 
    path('api/referrals/', include('referrals.urls')), 
] 

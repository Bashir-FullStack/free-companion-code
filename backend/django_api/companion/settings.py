"""Django settings for Free-Companion-Code""" 
from pathlib import Path 
from datetime import timedelta 
import os 
 
BASE_DIR = Path(__file__).resolve().parent.parent 
 
SECRET_KEY = 'django-insecure-development-key-change-in-production' 
DEBUG = True 
ALLOWED_HOSTS = [] 
 
INSTALLED_APPS = [ 
    'django.contrib.admin', 
    'django.contrib.auth', 
    'django.contrib.contenttypes', 
    'django.contrib.sessions', 
    'django.contrib.messages', 
    'django.contrib.staticfiles', 
    'rest_framework', 
    'rest_framework_simplejwt', 
    'corsheaders', 
    'users', 
    'coins', 
    'surveys', 
    'lessons', 
    'referrals', 
    'admin_profiles', 
] 

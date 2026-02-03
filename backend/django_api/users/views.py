from django.shortcuts import render 
from rest_framework.decorators import api_view 
from rest_framework.response import Response 
from rest_framework import status 
from .models import User 
from .serializers import UserSerializer 
import random 
import string 
from datetime import datetime, timedelta 
 
@api_view(['POST']) 
def register(request): 
    # Registration logic here 
    return Response({'message': 'Registration endpoint'}) 

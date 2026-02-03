from rest_framework import serializers 
from .models import User 
 
class UserSerializer(serializers.ModelSerializer): 
    class Meta: 
        model = User 
        fields = ['id', 'email', 'username', 'coins', 'tier', 'invite_code', 'is_verified'] 
        read_only_fields = ['coins', 'tier', 'invite_code', 'is_verified'] 
